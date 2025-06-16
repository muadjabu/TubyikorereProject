// src/pages/home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// Assets
import aboutImage from "../assets/car.jpg";

// Icons
import { FaTrafficLight, FaBriefcase, FaClipboardCheck } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { MdOutlineSafetyCheck } from "react-icons/md";

const features = [
  {
    icon: <FaTrafficLight className="text-2xl text-blue-600" />,
    title: "Traffic Laws",
    description: "home:trafficDescription",
  },
  {
    icon: <FaBriefcase className="text-2xl text-green-600" />,
    title: "Job Updates",
    description: "home:JobDescription",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-yellow-600" />,
    title: "Today's provisional tests",
    description: "home:testDescription",
  },
];

const FeatureCard = ({ icon, title, description, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
  >
    <div className="bg-gray-100 p-4 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t(title)}</h3>
    <p className="text-gray-500 text-sm">{t(description)}</p>
  </motion.div>
);

export default function Home() {
  const { t } = useTranslation(['translation', 'home']);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Navbar />
      <HeroSection/>
      {/* Features Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-32 bg-white">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              t={t}
            />
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-12 lg:px-32 bg-gray-50 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empower Your Journey With Self-Service Tools
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            {t("home:aboutLine1") ||
              "Our platform provides comprehensive resources for drivers in Rwanda, offering up-to-date traffic laws, practice tests, and job opportunities in the transportation sector."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-2xl shadow-md border text-left">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-yellow-600">
                <RiRoadMapLine className="mr-2" /> Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                To create safer roads in Rwanda by educating drivers and
                providing them with the tools they need to succeed.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center text-yellow-600">
                <RiRoadMapLine className="mr-2" /> Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                Empower every aspiring driver with reliable education, real-time
                test preparation, and career opportunities in transportation.
              </p>
            </div>

            <img
              src={aboutImage}
              alt="About us"
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm">
              <MdOutlineSafetyCheck className="text-blue-600 text-2xl mr-2" />
              <span className="font-medium text-gray-800">Safety First</span>
            </div>
            <div className="flex items-center bg-white px-4 py-3 rounded-xl shadow-sm">
              <FaTrafficLight className="text-green-600 text-2xl mr-2" />
              <span className="font-medium text-gray-800">Updated Laws</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Message Submission Section */}
      <section className="py-16 bg-white px-6 md:px-12 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side: Driving and Job content */}
          <div className="text-gray-900 px-4">
            <h2 className="text-3xl font-bold mb-6">
              Driving Resources & Job Opportunities
            </h2>
            <p className="mb-4 text-lg">
              Our platform provides up-to-date traffic laws, practice tests, and
              career updates to help you excel on the road and find
              opportunities in Rwanda's transport sector.
            </p>
            <p className="text-lg">
              Whether you want to master driving skills or stay informed about
              the latest job openings, we are here to empower your journey every
              step of the way.
            </p>
          </div>

          {/* Right side: Message form */}
          <form className="grid grid-cols-1 gap-6 bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Send Us a Message
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-xl focus:outline-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-xl focus:outline-yellow-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-xl focus:outline-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}