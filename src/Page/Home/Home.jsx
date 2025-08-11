import React from "react";
import BannerImage from "../../assets/banner.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
import { motion } from "framer-motion";
import About from "../About/About";
import Service from "../Service/Service";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
const Home = () => {
  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full h-screen bg-cover bg-center relative"

    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center dark:text-white p-6 rounded-lg  lg:w-8/12">

          <h1 className="text-4xl md:text-6xl font-bold track mb-4">
            MD SHAMIUL ISLAM
          </h1>
          <div className="text-center mb-3 flex justify-center gap-4">
            <TypeAnimation
              sequence={[
                " Frontend Web Developer",
                2000,
                " Full Stack Web Developer",
                2000,
                "Web Developer",
                2000,

              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold mb-3"
            />
          </div>
          <p className="text-base md:text-sm tracking-wide mb-6">
            I’m Md. Shamiul Islam, and I enjoy making websites that work well and look nice. Every project I work on teaches me something new, and I use that in my next work.
          </p>

          <div className="flex flex-wrap gap-6 items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <FaHtml5 className="text-orange-600 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-600 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <SiJavascript className="text-yellow-400 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <FaReact className="text-sky-500 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <FaNodeJs className="text-green-600 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <SiExpress className="text-green-700 text-2xl" />

            </div>
            <div className="flex items-center gap-2">
              <SiMongodb className="text-green-700 text-2xl" />

            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1i68eoEhG9hVO51ngDR8QLT3wGUmf5I_J/view?usp=sharing"
            target="_blank"
            className="
    relative inline-block px-6 py-3 rounded-lg font-semibold text-white overflow-hidden
    bg-blue-800 hover:text-white shadow transition duration-500
    before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-900 before:transition-all before:duration-300 before:z-0
    after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-blue-900 after:transition-all after:duration-300 after:z-0
    hover:before:w-[51%] hover:after:w-[51%]
  "
          >
            <span className="relative z-10">Download Resume</span>
          </a>



        </div>
      </div>


    </motion.div>
  );
};

export default Home;
