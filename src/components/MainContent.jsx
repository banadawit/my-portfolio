import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const MainContent = () => {
  return (
    <main className="w-full md:ml-96 md:mr-0 md:ml-1/4   ">
      {/* Hero section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
      <BackToTop />
    </main>
  );
};

export default MainContent;
