import { Link, NavLink } from "react-router"; // fix — it's 'react-router-dom', not 'react-router'
import { motion } from "framer-motion";
import {  FaSquareGithub } from "react-icons/fa6";
import {
  FaHome,
  FaUserAlt,
  FaPhone,
  FaServicestack,
  FaProjectDiagram,
  FaFileAlt,
  FaTools,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUserAlt /> },

    { to: "/service", label: "Services", icon: <FaServicestack /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/education", label: "Education/Course", icon: <FaFileAlt /> },
    { to: "/skills", label: "Skills", icon: <FaTools /> },
    { to: "/contact", label: "Contact", icon: <FaPhone /> },
  ];

  return (
    <>
      {/* Mobile Sidebar (animated) */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed z-100 w-52 bg-gray-800 text-white shadow h-full md:hidden"
      >
        <div className="mt-8 mb-5">
          <img
            src="https://i.postimg.cc/HLs1mNSB/md-shamiul-islam-cv-photo.png"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover mx-auto"
          />

          <div className="flex gap-2 mb-4 items-center text-2xl justify-center mt-4 *:hover:scale-125 *:transition-all *:duration-300">
            <Link
              to="https://www.linkedin.com/in/mdshamiulislam-dev/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/mdsamiulislam54" target="_blank">
              <FaSquareGithub />
            </Link>
          </div>
        </div>
        

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 bg-gray-700 p-2 rounded text-white"
                  : "flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white rounded"
              }
            >
              <span> {item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </motion.aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 dark:bg-gray-800 bg-white dark:text-white   p-4 border-r dark:border-gray-600 border-gray-200 fixed z-100 h-full">
        <div className="mt-4 mb-5">
          <img
            src="https://i.postimg.cc/j5PtVqJJ/photo-2025-06-28-12-32-12-removebg-preview.png"
            alt="profile"
            className="w-20 h-20 rounded-full object-cover mx-auto"
          />

          <div className="flex gap-2 mb-4 items-center text-2xl justify-center mt-4 *:hover:scale-125 *:transition-all *:duration-300">
            <Link
              to="https://www.linkedin.com/in/mdshamiulislam-dev/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/mdsamiulislam54" target="_blank">
              <FaSquareGithub />
            </Link>
            <Link to="https://github.com/mdsamiulislam54" target="_blank">
              <IoLogoDiscord/>
            </Link>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 bg-gray-100 dark:bg-gray-600 p-2 rounded  "
                  : "flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
              }
            >
              <span className="">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
