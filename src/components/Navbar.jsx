import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import { Icon } from '@iconify/react';

import logo from "../assets/logo2.png";
import rda from "../assets/rda.png";
import uk from "../assets/uk.png";
import france from "../assets/france.jpg";

const languages = [
  { code: 'rw', name: 'Kinyarwanda', flag: rda },
  { code: 'en', name: 'English', flag: uk },
  { code: 'fr', name: 'French', flag: france },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const selected = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div
      className="relative"
      tabIndex={0}
      onBlur={() => setShowDropdown(false)}
    >
      <button
        className="flex items-center justify-between border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-gray-50 shadow-sm w-48 transition-all duration-200 hover:shadow-md"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <div className="flex items-center space-x-2">
          <img src={selected.flag} alt={selected.name} className="h-4 w-6 object-cover rounded" />
          <span className="text-sm text-[#2A7B9B] font-medium">{selected.name}</span>
        </div>
        <FiChevronDown className={`w-4 h-4 text-[#2A7B9B] transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
      </button>

      {showDropdown && (
        <div className="absolute mt-2 bg-white rounded-lg shadow-xl w-full z-50 border border-gray-100 overflow-hidden transition-all duration-200">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer space-x-2 transition-colors"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setShowDropdown(false);
              }}
            >
              <img src={lang.flag} alt={lang.name} className="h-4 w-6 object-cover rounded" />
              <span className="text-sm text-[#0d3547] font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const phoneNumber = "+250790269730";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/#home", label: t("home") },
    { path: "/#about", label: t("About Us") },
    { path: "/#mission", label: t("pricing") },
    { path: "/#courses", label: t("courses") },
  ];

  const isActive = (linkPath) => {
    return linkPath === "/" ? pathname === "/" : hash === linkPath.replace("/#", "#");
  };

  const NavLinks = ({ onClick }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onClick}
          className="relative group text-[#0d3547] font-medium"
        >
          <span className="relative z-10">{link.label}</span>
          {isActive(link.path) && (
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-500 transition-all duration-300"></span>
          )}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
      ))}
    </>
  );

  return (
    <div className="w-full fixed z-50 top-0 left-0">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 animate-bounce flex justify-between right-4 bg-yellow-500 text-3xl hover:bg-[#0d3547] text-white py-2 px-4 p-6 rounded-full z-10"
      >
        <span className="hidden md:inline text-sm mr-2">Need help?</span>
        <Icon icon="akar-icons:whatsapp-fill" />
      </a>

      <nav className={`fixed top-0 w-full z-50 ${scrolled ? "shadow-md" : ""} bg-white/95 backdrop-blur-md h-20 border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-200">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-20 object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-30">
            <div className="flex space-x-10">
              <NavLinks />
            </div>

            <div className="flex items-center space-x-8 pl-8">
              <LanguageSelector />
              <Link
                to="/login"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow-md transition-colors duration-200"
              >
                {t("login")}
              </Link>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none hover:scale-110 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 p-6 md:hidden border-t border-gray-100 transition-all duration-300">
            <div className="flex flex-col space-y-6">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
              <div className="pt-4">
                <LanguageSelector />
              </div>
              <Link
                to="/login"
                className="block text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("login")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
