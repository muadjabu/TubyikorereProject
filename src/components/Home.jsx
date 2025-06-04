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
import hiringImage from "../assets/job-hiring.jpg"; // Add this import

// Icons
import { FaTrafficLight, FaBriefcase, FaClipboardCheck, FaUsers, FaChartLine, FaHandshake, FaSearchDollar, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { MdOutlineSafetyCheck } from "react-icons/md";

const features = [
  {
    icon: <FaTrafficLight className="text-2xl text-blue-600" />,
    title: "Traffic Laws",
    description: "trafficDescription",
    link: "/traffic-laws",
    buttonText: "View Laws"
  },
  {
    icon: <FaBriefcase className="text-2xl text-green-600" />,
    title: "Job Updates",
    description: "JobDescription",
    link: "/jobs",
    buttonText: "Browse Jobs"
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-yellow-600" />,
    title: "Today's provisional tests",
    description: "testDescription",
    link: "/tests",
    buttonText: "Take Tests"
  }
];

const benefits = [
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Join a growing community of drivers helping each other succeed"
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    description: "Access resources to advance your career in transportation"
  },
  {
    icon: FaHandshake,
    title: "Trusted Resources",
    description: "Get accurate, up-to-date information you can rely on"
  }
];

// Add job listings data
const jobListings = [
  {
    id: 1,
    title: "Bus Driver",
    company: "Kigali Bus Services",
    location: "Kigali",
    type: "Full-time",
    salary: "RWF 500,000 - 700,000",
    posted: "2 days ago",
    description: "Experienced bus driver needed for city routes. Must have valid PSV license."
  },
  {
    id: 2,
    title: "Taxi Driver",
    company: "City Taxi Co-op",
    location: "Rubavu",
    type: "Part-time",
    salary: "RWF 300,000 - 400,000",
    posted: "1 week ago",
    description: "Looking for reliable taxi drivers with clean driving record."
  },
  {
    id: 3,
    title: "Truck Driver",
    company: "Rwanda Logistics",
    location: "Countrywide",
    type: "Full-time",
    salary: "RWF 600,000 - 800,000",
    posted: "3 days ago",
    description: "Long-haul truck drivers needed for regional deliveries."
  }
];

const FeatureCard = ({ icon, title, description, t, link, buttonText }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
  >
    <div className="bg-gray-100 p-4 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t(title)}</h3>
    <p className="text-gray-500 text-sm mb-4">{t(description)}</p>
    <Link
      to={link}
      className="mt-auto w-full"
    >
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300">
        {buttonText}
      </button>
    </Link>
  </motion.div>
);

const JobCard = ({ job }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
      </div>
      <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
        {job.type}
      </span>
    </div>
    
    <p className="text-gray-700 mb-4">{job.description}</p>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center">
        <FaSearchDollar className="text-gray-500 mr-2" />
        <span>{job.salary}</span>
      </div>
    </div>
    
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500 flex items-center">
        <FaRegClock className="mr-1" /> {job.posted}
      </span>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
        Apply Now
      </button>
    </div>
  </motion.div>
);

export default function Home() {
  const { t } = useTranslation();

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
              link={feature.link}
              buttonText={feature.buttonText}
            />
          ))}
        </motion.div>
      </section>

      {/* Job Hiring Section */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Job Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the best driving and transportation jobs in Rwanda. Updated daily with new opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobListings.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/jobs">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center">
                View All Jobs <FaBriefcase className="ml-2" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-12 lg:px-32 bg-white text-center"
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
            {t("aboutLine1") ||
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

      {/* Why Join Us Section */}
      <section className="py-16 px-6 md:px-12 lg:px-32 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <benefit.icon className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
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