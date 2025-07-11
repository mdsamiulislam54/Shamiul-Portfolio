import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma,
  FaJsSquare, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiVercel, SiNetlify,
  SiFirebase, SiDaisyui, SiSwiper, SiReactrouter
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
  { name: "Tailwind", level: 85, icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: "JavaScript", level: 80, icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
  { name: "React", level: 75, icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
  { name: "GitHub", level: 90, icon: <FaGithub className="text-white text-3xl" /> },
  { name: "Vercel", level: 85, icon: <SiVercel className="text-white text-3xl" /> },
  { name: "Netlify", level: 85, icon: <SiNetlify className="text-cyan-400 text-3xl" /> },
  { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
  { name: "DaisyUI", level: 85, icon: <SiDaisyui className="text-pink-400 text-3xl" /> },

  { name: "VS Code", level: 95, icon: <VscVscode className="text-blue-500 text-3xl" /> },
  { name: "React Router", level: 80, icon: <SiReactrouter className="text-red-500 text-3xl" /> },
  { name: "Figma", level: 85, icon: <FaFigma className="text-pink-500 text-3xl" /> },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-6xl mx-auto p-4 my-10 dark:text-gray-200"
    >
      {/* Title */}
     <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 relative">
          <p className="md:text-[100px] text-[70px] text-gray-200 tracking-widest dark:text-gray-700">
            MY SKILLS
          </p>
          <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-red-800">
            My Skills
          </h2>
        </div>   <div className="text-center mb-10">
        
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md dark:shadow-gray-600 bg-white dark:bg-gray-800"
          >
            {/* Circular Progress Bar */}
            <div className="w-20 h-20">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: "#4CAF50",
                  trailColor: "#ddd",
                  
                  textSize: "20px",
                })}
              />
            </div>
            {/* Skill Icon */}
            <div className="text-3xl">{skill.icon}</div>
            {/* Skill Name */}
            <h4 className="text-xs font-semibold dark:text-gray-100 text-center">{skill.name}</h4>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
