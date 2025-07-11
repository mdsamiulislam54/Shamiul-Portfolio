import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <p className="h-screen text-center flex justify-center items-center">
        Loading..
      </p>
    );
  }
  if (error) {
    return (
      <p className="h-screen text-center flex justify-center items-center">
        {error}
      </p>
    );
  }

  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="  px-2 md:px-6 py-10"
    >
      <div className=" relative">
        <p className="md:text-[100px] text-[70px] text-center text-gray-200 tracking-widest dark:text-gray-700">
          PROJECTS
        </p>
        <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-red-800 text-3xl font-bold dark:text-white">
          My Projects
        </h2>
      </div>

      <div className="my-10 space-y-20 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row-reverse  gap-8 p-4 shadow-md dark:shadow-gray-600"
          >
            {/* Image carousel */}
            <div className="carousel w-full md:w-[500px] h-full">
              {project.image?.map((img, index) => (
                <div
                  id={`slide${project.id}-${index}`}
                  key={index}
                  className="carousel-item relative w-full "
                >
                  <img
                    src={img}
                    alt={`Project ${project.name}`}
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-xl  shadow-md p-1"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                      href={`#slide${project.id}-${
                        (index - 1 + project.image.length) %
                        project.image.length
                      }`}
                      className="btn btn-circle btn-sm md:btn-md"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${project.id}-${
                        (index + 1) % project.image.length
                      }`}
                      className="btn btn-circle btn-sm md:btn-md"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Project details */}
            <div className="flex-1 dark:text-white  ">
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                {project.description}
              </p>

              <div className="my-4">
                <p>Key Feature :</p>
                {project.feature?.slice(0, 5).map((f) => {
                  return <li>{f}</li>;
                })}
              </div>

              <div className="mb-3">
                <h4 className="font-semibold mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  to={project.livesite}
                  target="_blank"
                  className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 duration-200"
                >
                  Live Site
                </Link>
                <Link
                  to={project.clientRepo}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-900 duration-200"
                >
                  Client Code
                </Link>
                <Link
                  to={project.serverRepo}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-200"
                >
                  Server Code
                </Link>
                <Link
                  to={`/details/${project.id}`}
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-200"
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
