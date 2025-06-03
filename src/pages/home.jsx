// src/pages/home.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../assets/logo2.png";
import rda from "../assets/rda.png";
import uk from "../assets/uk.png";
import france from "../assets/france.jpg";
import ff from "../assets/ff.jpg";
import g2 from "../assets/g2.jpg";
import traffIcon from "../assets/icons/traffic.jpg";
import jobIcon from "../assets/icons/job.png";
import warningIcon from "../assets/icons/warning.png";
import aboutImage from "../assets/car.jpg";
const languages = [
  { code: 'rw', name: 'Kinyarwanda', flag: rda },
  { code: 'en', name: 'English', flag: uk },
  { code: 'fr', name: 'French', flag: france },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);
  const selected = languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center justify-between border border-gray-300 px-3 py-1 rounded bg-white/60 hover:bg-white shadow-sm w-48"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div className="flex items-center space-x-2">
          <img src={selected.flag} alt={selected.name} className="h-4 w-6 object-cover" />
          <span className="text-sm text-[#2A7B9B] font-medium">{selected.name}</span>
        </div>
        <svg
          className={`w-4 h-4 text-[#2A7B9B] transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
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
              <img src={lang.flag} alt={lang.name} className="h-4 w-6 object-cover" />
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

function Courses() {
  const { t } = useTranslation();
  return (
    <section id="courses" className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{t("exploreCourses")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
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
}

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="mx-2">
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between shadow-lg px-8 py-4 bg-white/100 backdrop-blur-sm h-20">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-27 max-w-[120px] object-contain" />
        </div>
        <div className="flex items-center space-x-6 text-[#0d3547] font-medium">
          <a href="#home" className="hover:text-yellow-500">{t("home")}</a>
          <a href="#about" className="hover:text-yellow-500">{t("About Us")}</a>
          <a href="#mission" className="hover:text-yellow-500">{t("pricing")}</a>
          <a href="#courses" className="hover:text-yellow-500">{t("courses")}</a>
          <LanguageSelector />
        </div>
        <div>
          <Link to="/login" className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow-md transition-colors duration-200">
            {t("login")}
          </Link>
        </div>
      </nav>

      <section
        id="home"
        className="home-section pt-90"
        style={{ backgroundImage: `url(${ff})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="grid grid-cols-1 m-10 md:grid-cols-3 gap-6 px-8 py-12">
    <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
            <h3 className="inline-flex items-center justify-center text-xl font-bold mb-2"> 
                <img 
            src={traffIcon}
             alt="traff icon" 
             className="h-12 w-16 mr-0"
      role="img"
              />{t("Traffic Laws")}
            </h3>
          
            <p className="text-gray-600">{t("trafficDescription")}</p>
          </div>

              <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
  <h3 className="inline-flex items-center justify-center text-xl font-bold mb-2">
    <img
      src={jobIcon}
      alt="job icon"
      className="h-7 w-9 mr-1"
      role="img"
    />
    {t("Job Updates")}
  </h3>
  <p className="text-gray-600">{t("JobDescription")}</p>
</div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center shadow-lg text-black">
            <h3 className="inline-flex items-center justify-center text-xl font-bold mb-2">
               <img
      src={warningIcon}
      alt="warning icon"
      className="h-7 w-9 mr-2"
      role="img"
    />
               {t("Today's provisional tests")}</h3>
            <p className="text-gray-600">{t("testDescription")}</p>
          </div>
        </div>
      </section>

 <section
  id="about"
  className="relative py-5 px-6 md:px-16 overflow-hidden"
>
  <div className="flex flex-col md:flex-row items-center gap-16 max-w-17xl mx-auto">
    
    {/* Left: Full Image */}
    <div className="w-full md:w-1/2">
    <img src={aboutImage} alt="" srcset="" />
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left hover:text-yellow-500">
        {t("About Us")}
      </h2>
      <div className="text-lg text-gray-800 leading-relaxed space-y-6 text-justify">
        <div className="flex items-center gap-4 mb-6">
  <div className="w-1 h-12 bg-yellow-500 rounded-full"></div>
  <h2 className="text-2xl  font-bold text-black text-left hover:text-yellow-500">
    Empower Your Journey With Self-Service Tools
  </h2>
</div>

        <p>{t("aboutLine1")}</p>
       <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left hover:text-yellow-500">
        👁️{t("Vision")}
      </h2>
       <p>{t("visionDescription")}</p>
      </div>
    </div>

  </div>
</section>


    

     {/*<Courses />*/}
<footer style={{ backgroundColor: "#0d3547" }} className="text-gray-300 py-8 mt-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    <div className="mb-4 md:mb-0">
      {/* Optional content here */}
    </div>

    {/* Social media icons */}
    <div className="flex space-x-4">
      {/* Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
        </svg>
      </a>

      {/* Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.1 1.5A4.48 4.48 0 0022.4 2a9 9 0 01-2.8 1.1 4.5 4.5 0 00-7.7 4.1A12.9 12.9 0 013 4.1a4.5 4.5 0 001.4 6A4.41 4.41 0 012 9.5v.1a4.5 4.5 0 003.6 4.4 4.52 4.52 0 01-2 .1 4.5 4.5 0 004.2 3.1 9 9 0 01-5.5 1.9c-.4 0-.8 0-1.1-.1a12.9 12.9 0 007 2" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4 7.75A3.75 3.75 0 017.75 4h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5zm8 2.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 1.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm4.5-3.25a1 1 0 100 2 1 1 0 000-2z" />
        </svg>
      </a>

      {/* YouTube */}
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M10 15l5.2-3-5.2-3v6zM23 7s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1-3-.2-7.5-.2-7.5-.2s-4.5 0-7.5.2c-.5 0-1.3 0-2.1 1C1.2 5.5 1 7 1 7s-.2 1.6-.2 3.2v1.6C.8 14.4 1 16 1 16s.2 1.5.8 2.2c.8.9 1.8.9 2.3 1 1.7.1 7.1.2 7.1.2s4.5 0 7.5-.2c.5 0 1.3 0 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.6.2-3.2V10c0-1.6-.2-3.2-.2-3.2z" />
        </svg>
      </a>

      {/* Pinterest */}
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.06 3.15 9.38 7.59 11.06-.1-.94-.2-2.37.04-3.4.22-.96 1.43-6.1 1.43-6.1s-.36-.72-.36-1.78c0-1.67.97-2.91 2.18-2.91 1.03 0 1.53.78 1.53 1.7 0 1.04-.66 2.6-1 4.05-.28 1.2.6 2.18 1.78 2.18 2.13 0 3.77-2.24 3.77-5.46 0-2.85-2.05-4.85-4.98-4.85-3.4 0-5.4 2.54-5.4 5.17 0 1.02.39 2.12.88 2.71.1.12.11.23.08.36-.09.4-.29 1.27-.33 1.44-.05.2-.17.25-.4.15-1.5-.62-2.44-2.56-2.44-4.13 0-3.35 2.43-6.42 7-6.42 3.67 0 6.52 2.62 6.52 6.12 0 3.64-2.3 6.57-5.5 6.57-1.07 0-2.08-.56-2.43-1.22l-.66 2.5c-.24.94-.9 2.12-1.33 2.84C9.7 23.93 10.84 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
        </svg>
      </a>

      {/* Gmail / Email */}
      <a href="mailto:youremail@example.com" className="hover:text-yellow-400">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
        </svg>
      </a>
    </div>
  </div>

  <div className="text-center text-sm mt-6 text-gray-200">
    &copy; {new Date().getFullYear()} TubyikorereOS. All rights reserved.
  </div>
</footer>


    </div>
  );
}
