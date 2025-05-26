import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Adjust if your path is different
import React, { useState, useEffect, useRef } from "react";

const languages = [
  { code: "rw", name: "Kinyarwanda", flag: "/src/assets/rda.png" },
  { code: "en", name: "English", flag: "/src/assets/uk.png" },
  { code: "fr", name: "French", flag: "/src/assets/france.jpg" },
];

function LanguageSelector() {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const currentLang = i18n.language || "rw";
  const selected = languages.find((lang) => lang.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center justify-between border border-gray-300 px-3 py-1 rounded bg-white/60 hover:bg-white shadow-sm w-48"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div className="flex items-center space-x-2">
          <img src={selected.flag} alt={selected.code} className="h-4 w-6 object-cover" />
          <span className="text-sm text-[#2A7B9B] font-medium">{selected.name}</span>
        </div>
        <svg
          className={`w-4 h-4 text-[#2A7B9B] transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 bg-white rounded shadow-lg w-full z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center px-3 py-2 hover:bg-yellow-100 cursor-pointer space-x-2"
              onClick={() => handleLanguageChange(lang)}
            >
              <img src={lang.flag} alt={lang.code} className="h-4 w-6 object-cover" />
              <span className="text-sm text-[#0d3547] font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
