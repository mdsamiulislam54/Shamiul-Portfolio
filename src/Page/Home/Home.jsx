import React from "react";
import BannerImage from "../../assets/banner.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
import { motion } from "framer-motion";
import About from "../About/About";
import Service from "../Service/Service";


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
          <p className="mb-4 text-xl font-medium text-rose-500">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Md. Shamiul Islam
          </h1>
          <div className="text-center mb-3 flex justify-center gap-4">
            <TypeAnimation
              sequence={[
                "Junior Frontend Developer",
                2000,
                "Junior React Developer",
                2000,
                " Junior Full Stack Developer",
                2000,
                "JavaScript Lover",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold mb-3"
            />
          </div>
          <p className="text-base md:text-lg mb-6">
            I’m a Full Stack Developer, experienced in React, Node.js,
            Express.js, MongoDB, and Tailwind CSS. I love creating fast, modern,
            and responsive websites with dynamic features and clean UI/UX.{" "}
          </p>

          

          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-lg  border  border-red-800 dark:text-white hover:text-white font-semibold shadow hover:bg-red-800 hover:to-red-800 transition duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>

    
    </motion.div>
  );
};

export default Home;
