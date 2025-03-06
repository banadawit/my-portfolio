import React from 'react'
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <>
    <section
    id="hero"
    className="h-screen bg-cover bg-center relative"
    style={{ backgroundImage: "url('/images/me128.jpg')" }}
    role="img"
    aria-label="Professional portfolio hero section"
  >
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a192fdd] to-[#0a192f66]" />

    {/* Content container */}
    <div className="flex items-center justify-center h-full text-center relative z-10 px-4">
      <div className="max-w-4xl space-y-8 opacity-0 animate-fade-in-up [animation-delay:100ms]">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-[#64ffda]">Bana Dawit</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 font-mono text-[#64ffda]">
          Front-End Developer
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#ccd6f6] max-w-2xl mx-auto leading-relaxed">
          Bringing designs to life with React. Passionate about crafting
          clean, responsive, and user-friendly web experiences.
        </p>

        {/* CTA Button */}
        <Link
          to="about" // This links to the section with id="about"
          smooth={true} // Enable smooth scrolling
          duration={500} // Scroll duration (500ms)
          className="inline-block mt-12 px-8 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] font-mono rounded-lg hover:bg-[#64ffda22] transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Discover My Process →
        </Link>
      </div>
    </div>

    {/* Animation styles */}
    <style jsx>{`
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
      }
    `}</style>
  </section>
  </>
  )
}

export default Hero
