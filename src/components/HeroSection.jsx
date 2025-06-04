import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import banner from "../assets/site.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center">
      {/* Background Image */}
      <img
        src={banner}
        alt="Professional truck driver on the road"
        className="absolute inset-0 w-full h-full object-cover contrast-80"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d3547]/80 to-gray-900/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#0d3547]/80 to-gray-800/80 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl p-6 sm:p-10">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-extrabold text-white text-2xl sm:text-4xl lg:text-5xl leading-snug sm:leading-tight"
          >
            Launch Your <span className="text-amber-400">Driving Career</span> Today
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white mt-4 text-base sm:text-lg lg:text-xl max-w-3xl"
          >
            Get certified in commercial driving, road safety, and logistics management 
            with our industry-recognized training programs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
          >
            <button
              onClick={() => navigate("/courses")}
              className="px-6 py-3 sm:px-8 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/30 w-full sm:w-auto"
              aria-label="View Driving Courses"
            >
              View Courses →
            </button>
            <button
              onClick={() => navigate("/job-placement")}
              className="px-6 py-3 sm:px-8 sm:py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all w-full sm:w-auto"
              aria-label="Job Placement Assistance"
            >
              Job Placement
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-white">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center sm:text-left"
          >
            <h2 className="font-bold text-2xl mb-1">
              <CountUp start={0} end={1200} duration={3} />+
            </h2>
            <h3 className="font-semibold text-amber-300 text-sm sm:text-base">
              CDL Graduates
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-base">
              Successfully licensed commercial drivers
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center sm:text-left"
          >
            <h2 className="font-bold text-2xl mb-1">
              <CountUp start={0} end={87} duration={3} />%
            </h2>
            <h3 className="font-semibold text-amber-300 text-sm sm:text-base">
              Job Placement
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-base">
              Hired within 3 months of certification
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center sm:text-left"
          >
            <h2 className="font-bold text-2xl mb-1">
              <CountUp start={0} end={50} duration={3} />+
            </h2>
            <h3 className="font-semibold text-amber-300 text-sm sm:text-base">
              Fleet Partners
            </h3>
            <p className="text-white/90 mt-2 text-sm sm:text-base">
              Transportation companies hiring our graduates
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
