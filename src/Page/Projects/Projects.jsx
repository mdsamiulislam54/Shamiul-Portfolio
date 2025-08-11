import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiMongoose,

} from "react-icons/si";




const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/projects.json");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="h-screen flex justify-center items-center">Loading..</p>
    );
  }
  if (error) {
    return (
      <p className="h-screen flex justify-center items-center">{error}</p>
    );
  }

  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="px-3 sm:px-6 py-10"
    >
      {/* Section Title */}
      <div className="relative mb-16">
        <p className="text-[50px] sm:text-[70px] md:text-[100px] text-center text-gray-200 tracking-widest dark:text-gray-700">
          PROJECTS
        </p>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block border-b-2 pb-3 border-red-800 text-xl sm:text-2xl md:text-3xl font-bold dark:text-white">
          My Projects
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-4 shadow-md dark:shadow-gray-600 rounded-lg"
          >
              {/* Project Image with Scroll on Hover */}
            <div className="w-full md:w-72 h-56 sm:h-[350px] md:h-[300px] overflow-hidden relative group rounded-lg shadow-lg border border-gray-300">
              <img
                src={project.image}
                alt={project.name}
                className="w-full  object-cover transform transition-transform duration-[9000ms] ease-linear group-hover:-translate-y-[80%]"
              />
            </div>
            {/* Project Details */}
            <div className="flex-1 dark:text-white max-md:text-center">
              <h3 className="text-md sm:text-xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-2 text-sm ">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="font-medium">Key Features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {project.feature?.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-sm ">{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
              
                <div className="flex flex-wrap gap-4 text-3xl max-md:justify-center">
                  <FaHtml5 className="text-orange-600" />
                  <FaCss3Alt className="text-blue-600" />
                  <SiTailwindcss className="text-cyan-500" />
                  <FaReact className="text-blue-400" />
                  <FaNodeJs className="text-green-600" />
                  <SiExpress className="text-gray-700" />
                  <SiMongodb className="text-green-500" />
                </div>

              </div>

              {/* Links */}
              <div className="flex flex-wrap max-md:justify-center items-center gap-3 mt-4">
                <Link
                  to={project.livesite}
                  target="_blank"
                  className="px-3 sm:px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 duration-200 text-sm "
                >
                  Live Site
                </Link>
                <Link
                  to={project.clientRepo}
                  target="_blank"
                  className="px-3 sm:px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-900 duration-200 text-sm "
                >
                  Client Code
                </Link>
                {project.serverRepo && (
                  <Link
                    to={project.serverRepo}
                    target="_blank"
                    className="px-3 sm:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-200 text-sm "
                  >
                    Server Code
                  </Link>
                )}
                <Link
                  to={`/details/${project.id}`}
                  className="px-3 sm:px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-200 text-sm sm:text-base"
                >
                  Details
                </Link>
              </div>
            </div>

          
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
