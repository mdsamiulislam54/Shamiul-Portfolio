import { motion } from "framer-motion";
import React from "react";
import {
  FaCode,
  FaFigma,
  FaRocket,
  FaTools,
  FaLaptopCode,
  FaPaintBrush,
  FaBug,
  FaDatabase,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";

const Service = () => {
  const features = [
    {
      id: 1,
      icon: <FaCode className="text-4xl text-secondary" />,
      title: "Full Stack Web Development",
      desc: "Build modern, responsive websites using React, Node.js, Express, and MongoDB.",
    },
    {
      id: 2,
      icon: <FaFigma className="text-4xl text-secondary" />,
      title: "UI/UX Design",
      desc: "Create clean, user-friendly, interactive web UI designs using Figma.",
    },
    {
      id: 3,
      icon: <FaRocket className="text-4xl text-secondary" />,
      title: "Landing Page Development",
      desc: "Design and develop high-converting landing pages with animations and responsiveness.",
    },
    {
      id: 4,
      icon: <FaTools className="text-4xl text-secondary" />,
      title: "Website Speed Optimization",
      desc: "Improve website performance, loading speed, and SEO score effectively.",
    },
    {
      id: 5,
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
      title: "Figma to React/Tailwind Conversion",
      desc: "Convert Figma designs into pixel-perfect, mobile-friendly React and Tailwind projects.",
    },
    {
      id: 6,
      icon: <FaPaintBrush className="text-4xl text-secondary" />,
      title: "Website Redesign Service",
      desc: "Modernize old websites into clean, fast, and fully responsive designs.",
    },
    {
      id: 7,
      icon: <FaBug className="text-4xl text-secondary" />,
      title: "Bug Fixing & Debugging",
      desc: "Find and fix frontend/backend issues and improve application performance.",
    },
    {
      id: 8,
      icon: <FaDatabase className="text-4xl text-secondary" />,
      title: "MongoDB Database Integration",
      desc: "Setup, manage, and integrate MongoDB databases with your web application.",
    },
    {
      id: 9,
      icon: <FaCogs className="text-4xl text-secondary" />,
      title: "Custom REST API Development",
      desc: "Build secure and scalable custom REST APIs using Node.js and Express.",
    },
    {
      id: 10,
      icon: <FaChartLine className="text-4xl text-secondary" />,
      title: "Admin Dashboard Development",
      desc: "Create dynamic admin panels with analytics, user management and reporting features.",
    },
  ];

  return (
    <div className="py-16  transition-all duration-300">
      <motion.div
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-11/12 mx-auto text-center"
      >
        <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 relative">
          <p className="md:text-[100px] text-[70px] text-gray-200 tracking-widest dark:text-gray-700">
            SERVICES
          </p>
          <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-red-800">
            My Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl text-red-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
