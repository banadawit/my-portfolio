// MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <main className="w-full md:ml-96 md:mr-0 md:ml-1/4   ">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(path/to/your/image.jpg)" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I'm Bana Dawit
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              A passionate front-end developer
            </p>
            <a
              href="#projects"
              className="mt-8 inline-block px-6 py-2 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:bg-[#3d9c8c] transition duration-300"
            >
              View My Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            About Me
          </h2>
          <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-gray-600">
            I'm a front-end developer passionate about building interactive and
            beautiful web applications. I specialize in React, JavaScript, and
            Tailwind CSS.
          </p>
        </div>
      </section>

      {/* <section id="projects" className="py-20 bg-[#f8f8f8]">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
      </section>
      <section id="skills" className="py-20 bg-[#ffffff]">
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
      </section>
      <section id="contact" className="py-20 bg-[#f8f8f8]">
        <h2 className="text-3xl font-semibold text-center">Contact</h2>
      </section> */}
    </main>
  );
};

export default MainContent;
