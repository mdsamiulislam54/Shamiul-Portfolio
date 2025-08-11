import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <motion.div className="py-10 px-10  transition-all duration-300 relative">
      <motion.div
        initial={{ x: -600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=""
      >
        <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 relative">
          <p className="md:text-[100px] text-[70px] text-gray-200 tracking-widest dark:text-gray-700">
            ABOUT US
          </p>
          <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-blue-800">
            Get to Know <span className="text-blue-600">Me</span>
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-4 max-lg:text-center text-capitalize">
          Hello! I’m Md. Shamiul Islam, a Full Stack Web Developer from the CSE department of Shariatpur Polytechnic Institute. My journey started back in 2022 when a teacher first showed me HTML and CSS. Seeing my very first webpage live on the browser was exciting — that moment made me realize I wanted to build more on the web.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-4 max-lg:text-center">
          At first, I was a bit confused about whether to focus on software or web development, but I chose the web and stuck with it. Between 2023 and 2024, I learned mostly by myself while finishing my diploma. During my 7th semester, I moved to Dhaka for a 3-month React Developer training at Creative IT Institute. I completed my Diploma in Computer Science in December 2024, and then in July 2025, I finished the Programming Hero Web Development course.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-8 max-lg:text-center">
          At first, I entered this field looking for opportunities to grow, and over time, my interest turned into a true passion for coding and problem-solving. I love writing code, solving problems, and exploring new tech. When I’m not coding, I like playing cricket and keeping myself updated with tech trends. I’m a bit introverted and prefer meaningful conversations. Currently, I work as a Web Developer, handling both frontend and backend tasks with dedication.
        </p>



        {/* Resume Button */}
        <div className="flex justify-center">
          <Link
            to="/contact"

           className="
    relative inline-block px-6 py-3 rounded-lg font-semibold text-white overflow-hidden
    bg-blue-800 hover:text-white shadow transition duration-500
    before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-900 before:transition-all before:duration-300 before:z-0
    after:absolute after:top-0 after:right-0 after:h-full after:w-0 after:bg-blue-900 after:transition-all after:duration-300 after:z-0
    hover:before:w-[51%] hover:after:w-[51%]
  "
          >
          <span className="relative z-10">  Contact Me</span>
          </Link>




        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
