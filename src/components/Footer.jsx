import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--color-card)] text-[var(--color-text-secondary)] py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Bana Dawit. All rights reserved.
          </p>

          {/* Built with love */}
          <div className="flex items-center text-sm md:text-base">
            <span>Built with</span>
            <FaHeart className="mx-2 text-[var(--color-accent)]" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Back to top */}
          {/* <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm md:text-base text-[var(--color-accent)] hover:underline transition-colors"
          >
            Back to top ↑
          </motion.a> */}
        </div>

        {/* Optional attribution */}
        <div className="mt-6 text-xs text-[var(--color-text-secondary)] opacity-70">
          <p>Design inspired by modern developer portfolios</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
