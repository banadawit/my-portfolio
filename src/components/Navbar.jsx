import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
//   FaTwitter,
  FaFileDownload,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const sections = document.querySelectorAll("section");
    const scrollHandler = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrolled]);

  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const navLinks = [
    { to: "about", text: "About" },
    { to: "projects", text: "Projects" },
    { to: "skills", text: "Skills" },
    { to: "contact", text: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/banadawit" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/bana-dawit-121810312" },
    // { icon: <FaTwitter />, url: "https://twitter.com/yourhandle" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full md:w-1/4 h-16 md:h-screen bg-[var(--color-nav)] text-[var(--color-text)] shadow-md z-50 md:flex md:flex-col md:justify-between p-4 transition-colors duration-300 ${
        scrolled ? "md:shadow-lg" : ""
      }`}
    >
      {/* Mobile Header - Only shows on mobile */}
      <div className="flex justify-between items-center md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <Link to="hero" smooth={true} duration={500} onClick={closeNav}>
            Bana Dawit
          </Link>
        </motion.div>
        <div className="flex items-center space-x-4">
          <ThemeToggleButton
            theme={theme}
            toggleTheme={toggleTheme}
            mobile={true}
          />
          <div
            onClick={handleNav}
            className="cursor-pointer"
            aria-label="Toggle menu"
          >
            {!nav ? (
              <AiOutlineMenu
                size={24}
                className="hover:text-[var(--color-accent)]"
              />
            ) : (
              <AiOutlineClose
                size={24}
                className="hover:text-[var(--color-accent)]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col justify-between h-full px-4">
        <div>
          <div className="flex justify-between items-center mb-8 mt-6">
            <h1 className="text-4xl font-bold cursor-pointer">
              <Link to="hero" smooth={true} duration={500}>
                Bana Dawit
              </Link>
            </h1>
            {/* Theme toggle for desktop */}
            <ThemeToggleButton
              theme={theme}
              toggleTheme={toggleTheme}
              mobile={false}
            />
          </div>

          <h2 className="text-xl text-[var(--color-text-secondary)] mt-2">
            Front End Developer
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 text-sm leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 mt-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="!text-[var(--color-accent)]"
                  className={`cursor-pointer relative transition-all duration-300 group ${
                    activeSection === link.to
                      ? "text-[var(--color-accent)]"
                      : ""
                  }`}
                >
                  <span className="group-hover:pl-8 transition-all duration-300">
                    {link.text}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 ${
                      activeSection === link.to ? "w-full" : "w-0"
                    } group-hover:w-full h-[2px] bg-[var(--color-accent)] transition-all duration-300`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          {/* Resume Button */}
          <motion.a
            href="/BanaDawit_Resume_Master.pdf"
            download="Bana_Dawit_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 mt-8 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
          >
            <FaFileDownload />
            <span>Download Resume</span>
          </motion.a>

          {/* Social Links (Desktop) */}
          <div className="flex justify-center space-x-6 py-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-xl transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-16 left-0 w-full bg-[var(--color-nav)] text-[var(--color-text)] py-6 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={closeNav}
                    className={`relative cursor-pointer text-lg ${
                      activeSection === link.to
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-secondary)]"
                    } hover:text-[var(--color-accent)] transition-colors duration-300 group`}
                  >
                    <span className="group-hover:pl-4 transition-all duration-300">
                      {link.text}
                    </span>
                    <span
                      className={`absolute left-0 bottom-0 ${
                        activeSection === link.to ? "w-full" : "w-0"
                      } group-hover:w-full h-[2px] bg-[var(--color-accent)] transition-all duration-300`}
                    ></span>
                  </Link>
                </motion.div>
              ))}

              {/* Resume Button (Mobile) */}
              <motion.a
                href="/BanaDawit_Resume_Master.pdf"
                download="Bana_Dawit_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 mt-4 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
                onClick={closeNav}
              >
                <FaFileDownload />
                <span>Resume</span>
              </motion.a>

              {/* Social Links (Mobile) */}
              <div className="flex justify-center space-x-8 pt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-2xl transition-colors duration-300"
                    onClick={closeNav}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
// Extracted Theme Toggle Button Component
const ThemeToggleButton = ({ theme, toggleTheme, mobile }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full hover:bg-[var(--color-primary)] transition-colors ${
        mobile ? "" : "ml-4"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaSun className="text-[var(--color-accent)]" size={mobile ? 20 : 24} />
      ) : (
        <FaMoon
          className="text-[var(--color-accent)]"
          size={mobile ? 20 : 24}
        />
      )}
    </button>
  );
};
export default Navbar;
