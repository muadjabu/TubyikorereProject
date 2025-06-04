// src/pages/Aboutus.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Icons
import { FaUsers, FaChartLine, FaHandshake, FaRoad, FaCar, FaUserTie, FaBriefcase } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { MdOutlineSafetyCheck, MdGroups } from "react-icons/md";

// Assets
import teamImage from "../assets/car.jpg";
import officeImage from "../assets/ff.jpg";
import hiringImage from "../assets/job-hiring.jpg"; // Make sure to add this image

export default function Aboutus() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Our Company
          </motion.h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering drivers in Rwanda through education, resources, and community support
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Founded in 2015, we began as a small initiative to help new drivers navigate Rwanda's 
                complex licensing process.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we serve thousands of drivers each month with up-to-date traffic laws, 
                practice tests, and career resources.
              </p>
            </div>
            <img 
              src={officeImage} 
              alt="Our office" 
              className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <img 
              src={hiringImage} 
              alt="Job opportunities"
              className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaBriefcase className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Driver Positions</h3>
                    <p className="text-gray-600">Find openings for personal, commercial, and heavy vehicle drivers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaUserTie className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Transport Jobs</h3>
                    <p className="text-gray-600">Opportunities in logistics, delivery, and public transportation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaChartLine className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Career Growth</h3>
                    <p className="text-gray-600">Resources to help you advance in the transportation industry</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/jobs"
                className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                View Job Openings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
              <p className="text-gray-600 mb-8 text-lg">
                These principles guide everything we do
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <MdOutlineSafetyCheck className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Safety First</h3>
                    <p className="text-gray-600">We prioritize road safety above all else</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaHandshake className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Integrity</h3>
                    <p className="text-gray-600">Honest and transparent in all our dealings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <FaUsers className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Community</h3>
                    <p className="text-gray-600">Building a supportive driver community</p>
                  </div>
                </div>
              </div>
            </div>
            <img 
              src={teamImage} 
              alt="Our team" 
              className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}