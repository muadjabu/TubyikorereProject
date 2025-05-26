import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // adjust path if needed
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const languages = [
  { code: 'rw', name: 'Kinyarwanda', flag: '/src/assets/rda.png' },
  { code: 'en', name: 'English', flag: '/src/assets/uk.png' },
  { code: 'fr', name: 'French', flag: '/src/assets/france.jpg' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

  // Find the current language from i18n
  const selected = languages.find((lang) => lang.code === i18n.language) || languages[0];

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

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center justify-between border border-gray-300 px-3 py-1 rounded bg-white/60 hover:bg-white shadow-sm w-48"
        onClick={() => setShowDropdown(!showDropdown)}
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
          xmlns="http://www.w3.org/2000/svg"
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
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setShowDropdown(false);
              }}
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


const courses = [
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600", route: "/learn/javascript" },
  { name: "HTML", color: "from-pink-400 to-pink-600", route: "/learn/html" },
  { name: "CSS", color: "from-blue-400 to-blue-600", route: "/learn/css" },
  { name: "Node.js", color: "from-green-400 to-green-600", route: "/learn/nodejs" },
  { name: "MySQL", color: "from-indigo-400 to-indigo-600", route: "/learn/mysql" },
  { name: "React", color: "from-cyan-400 to-cyan-600", route: "/learn/react" },
];

const Courses = () => {
  const { t } = useTranslation();
  return (
    <section id="courses" className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("exploreCourses")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 text-white bg-gradient-to-br ${course.color} flex flex-col items-center justify-between`}
          >
            <h3 className="text-xl font-semibold mb-4">{course.name}</h3>
            <Link to={course.route}>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                {t("start")}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-2">
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between shadow-lg px-8 py-4 bg-white/100 backdrop-blur-sm h-20">
  <div className="flex-shrink-0">
    <img src="/src/assets/logo.png" alt="Logo" className="h-27 max-w-[120px] object-contain" />
  </div>
  <div className="flex items-center space-x-6 text-[#0d3547] font-medium">
    <a href="#home" className="hover:text-yellow-500">{t("Ahabanza")}</a>
    <a href="#about" className="hover:text-yellow-500">{t("Abo Turibo")}</a>
    <a href="#mission" className="hover:text-yellow-500">{t("Ibiciro")}</a>
    <a href="#courses" className="hover:text-yellow-500">{t("Amasomo")}</a>

    <LanguageSelector />
  </div>
  <div>
    <a
      href="/login"
      className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow-md transition-colors duration-200"
    >
      {t("login")}
    </a>
  </div>
</nav>


      <section
        id="home"
        className="home-section pt-24"
        style={{
          backgroundImage: "url('src/assets/ff.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 m-10 md:grid-cols-3 gap-6 px-8 py-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
            <h3 className="text-xl font-bold mb-2">🧠 {t("learnAndGrow")}</h3>
            <p className="text-gray-600">{t("learnDescription")}</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
            <h3 className="text-xl font-bold mb-2">⚡ {t("fastAndFun")}</h3>
            <p className="text-gray-600">{t("funDescription")}</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
            <h3 className="text-xl font-bold mb-2">📊 {t("trackProgress")}</h3>
            <p className="text-gray-600">{t("progressDescription")}</p>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-12 px-4 overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, rgba(240, 244, 245, 0.7), rgba(254, 255, 255, 0.99)), url('https://www.transparenttextures.com/patterns/stardust.png')`, backgroundRepeat: "repeat", backgroundSize: "cover", backdropFilter: "blur(2px)" }}>
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-md mx-4 md:mx-12 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-black text-center mb-6">{t("about")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t("aboutLine1")}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t("aboutLine2")}</p>
        </div>
      </section>

      <section id="mission" className="relative py-12 px-4 overflow-hidden mt-12" style={{ backgroundImage: "url('src/assets/g2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-md mx-4 md:mx-12 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-black text-center mb-6">🎯 {t("mission")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t("missionLine1")}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{t("missionLine2")}</p>
        </div>
      </section>

      <Courses />

     <footer style={{ backgroundColor:"#0d3547" }} className="text-gray-300 py-8 mt-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-6 md:mb-0">
    
    </div>
    <nav className="space-x-6 mb-6 md:mb-0">
      <Link to="/" className="hover:text-yellow-400 transition">{t("home")}</Link>
      <Link to="/about" className="hover:text-yellow-400 transition">{t("about")}</Link>
      <Link to="/courses" className="hover:text-yellow-400 transition">{t("courses")}</Link>
      <Link to="/quiz" className="hover:text-yellow-400 transition">Quiz</Link>
      <Link to="/login" className="hover:text-yellow-400 transition">{t("login")}</Link>
    </nav>
  </div>
  <div className="text-center text-sm mt-6 text-gray-200">
    &copy; {new Date().getFullYear()} ThinkFaster. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default Home;
