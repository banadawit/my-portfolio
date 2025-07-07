import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[var(--color-card)] text-[var(--color-text-secondary)] py-10 border-t border-[var(--color-card-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-sm md:text-base"
          >
            &copy; {currentYear} Bana Dawit. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {[
              {
                icon: <FaEnvelope />,
                url: "mailto:banadawithunde@gmail.com",
                label: "Email",
              },
              {
                icon: <FaGithub />,
                url: "https://github.com/banadawit",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                url: "https://linkedin.com/in/bana-dawit-121810312",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 text-lg"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Built with love */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-sm md:text-base"
          >
            <span>Built with</span>
            <FaHeart className="mx-2 text-[var(--color-accent)] animate-pulse" />
            <span>React & Tailwind</span>
          </motion.div>
        </div>

        {/* Optional attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-xs text-[var(--color-text-secondary)] opacity-70"
        >
          <p>Design inspired by modern developer portfolios</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;