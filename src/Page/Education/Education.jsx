import { motion } from "framer-motion";
import React from "react";

const Education = () => {
  const education = [
    {
      title: "Diploma in Computer Science",
      institute: "Shariatpur Polytechnic Institute",
      e_status: "Education",
      duration: "2020-2025",
      status: "Completed",
      result: "3.49 out of 4.00",
      location: "Shariatpur, Dhaka, BD",
      description:
        "Focused on web development, data structures, software engineering fundamentals, and academic projects. Completed an industrial attachment on professional web design.",
    },

  ];
  const course = [
    {
      title: "Frontend Development with React",
      institute: "Creative IT Institute",
      e_status: "Internship",
      duration: "3 Months",
      status: "Completed",
      location: "Dhaka, BD",
      description:
        "Specialized in modern frontend development with React.js, JavaScript, and Tailwind CSS. Completed multiple UI/UX projects with responsive, interactive design practices.",
    },
    {
      title: "Complete Web Development Course",
      institute: "Programming Hero",
      e_status: "Course",
      duration: "6 Months",
      status: "Running",
      location: " Dhaka, BD",
      description:
        "Learning modern full-stack web development including React, Node.js, Express, and MongoDB. Building real-world projects and participating in coding challenges.",
    },
  ]
  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-6xl mx-auto p-4 d dark:text-gray-200"
    >
      {/* Title Section */}
      <div className="relative mb-14">
        <p className="md:text-[100px] text-[70px] text-center text-gray-200 dark:text-gray-700 tracking-widest">
          EDUCATION
        </p>
        <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-red-800 text-3xl font-bold dark:text-white">
          My Education
        </h2>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 ">
        {education.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md dark:shadow-gray-600  bg-white hover:shadow-lg duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-2  ">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Institute:</strong> {item.institute}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Type:</strong> {item.e_status}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Duration:</strong> {item.duration}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${item.status === "Completed"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500 dark:text-red-800"
                  }`}
              >
                {item.status}
              </span>
            </p>
            {item.result && (
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <strong>Result:</strong> {item.result}
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              <strong>Location:</strong> {item.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
