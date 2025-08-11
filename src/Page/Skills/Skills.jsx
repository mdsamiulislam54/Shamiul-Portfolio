import React from 'react'
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma,
    FaJsSquare, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiVercel, SiNetlify,
    SiFirebase, SiDaisyui, SiSwiper, SiReactrouter,
    SiExpress
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-green-600 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },

];
const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-400 text-3xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-3xl" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400 text-3xl" /> },

    { name: "VS Code", level: 95, icon: <VscVscode className="text-blue-500 text-3xl" /> },
    { name: "React Router", level: 80, icon: <SiReactrouter className="text-red-500 text-3xl" /> },
    { name: "Figma", level: 85, icon: <FaFigma className="text-pink-500 text-3xl" /> },
]

const Skills = () => {
    return (
        <div className="py-20  transition-all duration-300 ">
            <motion.div
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-11/12 mx-auto text-center"
            >
                <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 relative cursor-pointer">
                    <p className="md:text-[100px] text-[70px] text-gray-200 tracking-widest dark:text-gray-700">
                        MY SKILLS
                    </p>
                    <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-blue-800">
                        My Skills
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700"
                        >
                            <div className="text-4xl text-red-500 mb-4 flex justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {item.name}
                            </h3>

                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Skills