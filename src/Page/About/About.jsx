import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <motion.div className="py-20 px-10  transition-all duration-300 relative">
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
          <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] inline-block border-b-2 pb-3 border-red-800">
            Get to Know <span className="text-red-800">Me</span>
          </h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Hello! I’m a passionate{" "}
          <span className="font-semibold ">Full Stack Web Developer</span> from
          the CSE department of Shariatpur Polytechnic Institute. My journey
          began in 2022 when a teacher introduced us to HTML and CSS. The moment
          I saw my first web page live in a browser — that excitement pulled me
          towards web development.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Initially confused between web and software development, I chose the
          web. From 2022 to 2024, I studied through self-learning while managing
          my diploma. In my 7th semester, I moved to Dhaka for a{" "}
          <span className="font-semibold ">
            3-month React Developer training
          </span>{" "}
          at Creative IT Institute, and later joined the{" "}
          <span className="font-semibold ">
            Programming Hero Web Development course
          </span>{" "}
          in January 2025. I officially completed my Diploma in Computer Science
          in the same month.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Interestingly, I entered this field hoping for quick income — but over
          time, that desire transformed into genuine passion. I love{" "}
          <span className="font-semibold ">
            coding, debugging, and exploring new technologies
          </span>
          . Beyond coding, I enjoy playing cricket and staying tech-updated. I’m
          a little introverted, prefer meaningful conversations, and currently
          work as a <span className="font-semibold ">Junior Developer</span>{" "}
          managing both frontend and backend technologies.
        </p>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-gray-700 dark:text-gray-300">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-red-800 mb-3">
              Personal Details
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Name:</strong> Md. Samiul Islam
              </li>
              <li>
                <strong>From:</strong> Rangpur, Bangladesh
              </li>
              <li>
                <strong>Education:</strong> Diploma in Computer Science
                (2020-2024)
              </li>
              <li>
                <strong>Current Course:</strong> Programming Hero Web Dev (2025
                Running)
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-red-800 mb-3">
              Hobbies & Traits
            </h3>
            <ul className="space-y-2">
              <li>🏏 Playing Cricket</li>
              <li>💻 Learning New Technologies</li>
              <li>📝 Exploring new frameworks & APIs</li>
              <li>🤫 Quiet, Introvert, loves meaningful topics</li>
            </ul>
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center">
          <Link
            to="https://drive.google.com/file/d/1oZJBaygor9Thk6oGJLJ6NvuSUAjax-qQ/view?usp=drive_link"
            target="_blank"
            className="inline-block px-6 py-3 rounded-lg border border-red-800 font-semibold shadow hover:bg-red-800 dark:text-white hover:text-white transition duration-300"
          >
            Download Resume
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
