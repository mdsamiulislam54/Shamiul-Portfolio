import { motion } from "framer-motion";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-6xl mx-auto px-4 py-20 z-10 "
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-900 transition"
      >
        ← Back
      </button>

      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-4 dark:text-white">{data.name}</h1>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-lg dark:text-white">
        {data.description}
      </p>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {data.image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Project ${data.name}`}
            className="w-[200px] h-[200px] object-contain rounded-xl shadow"
          />
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-3 dark:text-white">
          {data.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 dark:text-white">
          Features
        </h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-white">
          {data.feature.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href={data.livesite}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
        >
          🔗 Live Site
        </a>
        <a
          href={data.clientRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-900 transition"
        >
          💻 Client Code
        </a>
        <a
          href={data.serverRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded hover:bg-gray-900 transition"
        >
          🖥️ Server Code
        </a>
      </div>
    </motion.div>
  );
};

export default Details;
