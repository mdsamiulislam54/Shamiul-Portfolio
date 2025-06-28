import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiExpress, SiMongoose } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, icon: <FaHtml5 />, title: "HTML5" },
    { id: 2, icon: <FaCss3Alt />, title: "CSS3" },
    { id: 3, icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { id: 4, icon: <FaJs />, title: "JavaScript" },
    { id: 5, icon: <FaReact />, title: "React" },
    { id: 6, icon: <FaNodeJs />, title: "Node.js" },
    { id: 7, icon: <SiExpress />, title: "Express.js" },
    { id: 8, icon: <SiMongodb />, title: "MongoDB" },
    { id: 9, icon: <SiMongoose />, title: "Mongoose" },
    { id: 10, icon: <FaDatabase />, title: "Database Design" },
    { id: 11, icon: <FaFigma />, title: "Figma" },
    { id: 12, icon: <FaGithub />, title: "GitHub" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-accent/10">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col justify-center items-center gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl text-secondary">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-gray-700">{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
