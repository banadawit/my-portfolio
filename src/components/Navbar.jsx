import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
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
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full md:w-64 lg:w-72 xl:w-80 h-16 md:h-screen bg-[var(--color-nav)] text-[var(--color-text)] z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center h-16 px-6 md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          <Link to="hero" smooth={true} duration={500} onClick={closeNav}>
            <span className="text-[var(--color-accent)]">B</span>ana <span className="text-[var(--color-accent)]">D</span>awit
          </Link>
        </motion.div>
        <div className="flex items-center space-x-4">
          <ThemeToggleButton
            theme={theme}
            toggleTheme={toggleTheme}
            mobile={true}
          />
          <button
            onClick={handleNav}
            className="p-2 rounded-md hover:bg-[var(--color-primary)] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {!nav ? (
              <AiOutlineMenu
                size={20}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              />
            ) : (
              <AiOutlineClose
                size={20}
                className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
              />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col justify-between h-full p-6 pt-12">
        <div>
          <div className="flex justify-between items-center mb-6">
            <motion.h1 
              className="text-3xl lg:text-4xl font-bold cursor-pointer tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="hero" smooth={true} duration={500}>
                <span className="text-[var(--color-accent)]">B</span>ana <span className="text-[var(--color-accent)]">D</span>awit
              </Link>
            </motion.h1>
            <ThemeToggleButton
              theme={theme}
              toggleTheme={toggleTheme}
              mobile={false}
            />
          </div>

          <motion.h2 
            className="text-lg lg:text-xl text-[var(--color-text-secondary)] mt-2 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Front End Developer
          </motion.h2>
          <motion.p 
            className="text-[var(--color-text-secondary)] mt-4 text-sm lg:text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Crafting accessible, pixel-perfect digital experiences.
          </motion.p>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-3 mt-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="!text-[var(--color-accent)]"
                  className={`cursor-pointer relative text-lg transition-all duration-300 group ${
                    activeSection === link.to
                      ? "text-[var(--color-accent)] font-medium"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center space-x-2 mt-8 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 font-medium"
          >
            <FaFileDownload className="text-lg" />
            <span>Download Resume</span>
          </motion.a>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-5 py-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-xl transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[var(--color-nav)] text-[var(--color-text)] py-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col items-center h-full justify-between pb-12">
              <div className="flex flex-col items-center space-y-8 w-full px-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      onClick={closeNav}
                      className={`relative cursor-pointer text-xl py-2 inline-block ${
                        activeSection === link.to
                          ? "text-[var(--color-accent)] font-medium"
                          : "text-[var(--color-text-secondary)]"
                      } hover:text-[var(--color-accent)] transition-colors duration-300 group w-full`}
                    >
                      <span className="group-hover:pl-4 transition-all duration-300">
                        {link.text}
                      </span>
                      <span
                        className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                          activeSection === link.to ? "w-3/4" : "w-0"
                        } group-hover:w-3/4 h-[2px] bg-[var(--color-accent)] transition-all duration-300`}
                      ></span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col items-center space-y-8 w-full px-6">
                {/* Resume Button */}
                <motion.a
                  href="/BanaDawit_Resume_Master.pdf"
                  download="Bana_Dawit_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 w-full max-w-xs"
                  onClick={closeNav}
                >
                  <FaFileDownload />
                  <span className="font-medium">Download Resume</span>
                </motion.a>

                {/* Social Links */}
                <motion.div 
                  className="flex space-x-8 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-2xl transition-all duration-300"
                      onClick={closeNav}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ThemeToggleButton = ({ theme, toggleTheme, mobile }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full hover:bg-[var(--color-primary)] transition-all duration-200 ${
        mobile ? "" : "ml-4"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaSun className="text-[var(--color-accent)]" size={mobile ? 18 : 20} />
      ) : (
        <FaMoon className="text-[var(--color-accent)]" size={mobile ? 18 : 20} />
      )}
    </motion.button>
  );
};

export default Navbar;