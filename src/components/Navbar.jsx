import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGoodreads,
} from "react-icons/fa";

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
          <h1 className="text-4xl font-bold">Bana Dawit</h1>
          <h2 className="text-xl text-gray-400 mt-2">Front End Engineer</h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] cursor-pointer relative transition-all duration-300 group"
          >
            <span className="group-hover:pl-52 transition-all duration-300">
              About
            </span>
            <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] cursor-pointer relative transition-all duration-300 group"
          >
            <span className="group-hover:pl-48 transition-all duration-300">
              Projects
            </span>
            <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] cursor-pointer relative transition-all duration-300 group"
          >
            <span className="group-hover:pl-52 transition-all duration-300">
              Skills
            </span>
            <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] cursor-pointer relative transition-all duration-300 group"
          >
            <span className="group-hover:pl-48 transition-all duration-300">
              Contact
            </span>
            <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#64ffda] transition-all duration-300"></span>
          </Link>
        </div>

        {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition duration-300 text-center"
        >
          Resume
        </a> */}
        {/* Social Icons */}
        <div className="flex space-x-4 mt-8">
          <FaGithub className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
          <FaLinkedin className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
          <FaCodepen className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
          <FaInstagram className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
          <FaGoodreads className="text-gray-400 hover:text-white text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#0a192f] text-white py-4 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="hover:text-[#64ffda]"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="hover:text-[#64ffda]"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeNav}
            className="hover:text-[#64ffda]"
          >
            Contact
          </Link>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition duration-300"
          >
            Resume
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
