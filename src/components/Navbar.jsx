import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full md:w-1/4 h-16 md:h-screen bg-[#0a192f] text-white shadow-md z-50 md:flex md:flex-col md:justify-between p-4">
      <div className="absolute top-4 left-4 text-2xl font-bold text-white md:hidden cursor-pointer">
        {/* <a href="#hero">Bana Dawit</a> */}
        <Link to="hero" smooth={true} duration={500}>
          Bana Dawit
        </Link>
      </div>
      <div className="flex justify-between items-center md:block">
        <div className="text-2xl font-bold"></div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col  justify-center h-full px-4  space-y-10">
        <div>
          <h1 className="text-4xl font-bold cursor-pointer">
            <Link to="hero" smooth={true} duration={500}>
              Bana Dawit
            </Link>
          </h1>
          <h2 className="text-xl text-gray-400 mt-2">Front End Developer</h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          {[
            { to: "about", text: "About" },
            { to: "projects", text: "Projects" },
            { to: "skills", text: "Skills" },
            { to: "contact", text: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="hover:text-[#64ffda] cursor-pointer relative transition-all duration-300 group"
            >
              <span className="group-hover:pl-8 transition-all duration-300">
                {link.text}
              </span>
              <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
            </Link>
          ))}
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#0a192f] text-white py-6 transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-lg`}
      >
        <div className="flex flex-col items-center space-y-6">
          {[
            { to: "about", text: "About" },
            { to: "projects", text: "Projects" },
            { to: "skills", text: "Skills" },
            { to: "contact", text: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeNav}
              className="relative cursor-pointer text-lg text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 group"
            >
              <span className="group-hover:pl-4 transition-all duration-300">
                {link.text}
              </span>
              <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
            </Link>
          ))}

          {/* Resume Button (Optional) */}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
          >
            Resume
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
