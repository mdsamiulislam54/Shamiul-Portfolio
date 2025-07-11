import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.subject) newErrors.subject = "Subject is required!";
    if (!formData.message) newErrors.message = "Message is required!";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      toast.success("Message Sent Successfully ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Please fill all fields!");
    }
  };

  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="max-w-6xl mx-auto p-5  dark:text-gray-200"
    >
      {/* Title */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative mb-14">
        <p className="md:text-[90px] text-[60px] text-center text-gray-200 dark:text-gray-700 tracking-widest">
          CONTACT
        </p>
        <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-b-2 pb-2 border-red-800 text-3xl font-bold dark:text-white">
          Get In Touch
        </h2>
      </div>

      {/* Contact Info */}
      <div className="lg:flex  gap-10 mb-14 justify-center items-center">
        <div className="space-y-5 flex-1">
          <p className="flex items-center gap-3 text-lg">
            <FaWhatsapp className="text-green-500 text-xl" /> +880-1612086842
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaPhoneAlt className="text-blue-500 text-xl" /> +880-130511820
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-yellow-500 text-xl" />{" "}
            samiulm5332@gmail.com
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-red-600 text-xl" /> Gaibandha,
            Rangpur, Bangladesh
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex-0.5 max-md:mt-5"
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-red-800 dark:bg-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-red-800 dark:bg-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-red-800 dark:bg-gray-800"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}

          <textarea
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-red-800 dark:bg-gray-800"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="px-6 py-3 hover:bg-red-800 dark:text-white hover:text-white rounded-lg border border-red-800 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <div>
        {/* Map */}

        <iframe
          className="w-full h-56 rounded-xl border dark:border-gray-600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.01853399156!2d89.2208095185463!3d25.749873663483218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1751786111649!5m2!1sen!2sbd"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
