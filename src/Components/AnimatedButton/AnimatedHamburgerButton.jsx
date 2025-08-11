import React, { useState } from "react";
import { motion } from "framer-motion";



const AnimatedHamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variantTop = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const variantMiddle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const variantBottom = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col justify-center items-center  rounded-full transition-colors cursor-pointer"
      aria-label="Toggle menu"
    >
      <motion.span
        className="block bg-gray-800 dark:bg-white h-1.5 w-8 rounded"
        variants={variantTop}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <motion.span
        className="block bg-gray-800 dark:bg-white h-1.5 w-8 rounded my-1"
        variants={variantMiddle}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <motion.span
        className="block bg-gray-800 dark:bg-white h-1.5 w-8 rounded"
        variants={variantBottom}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
    </motion.button>
  );
};

export default AnimatedHamburgerButton