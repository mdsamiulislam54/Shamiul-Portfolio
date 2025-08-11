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

          

          <Link
            to="/contact"
            className="inline-block px-6 py-3 rounded-lg text-white  hover:text-white font-semibold shadow bg-blue-800 hover:to-red-600 transition duration-300"
          >
            Download Resume
          </Link>
        </div>
      </div>

    
    </motion.div>
  );
};

export default Home;
