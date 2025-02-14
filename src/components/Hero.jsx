import React from 'react'

const Hero = () => {
    return (
      <section id="hero" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(path/to/your/image.jpg)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">Hi, I'm Bana Dawit</h1>
            <p className="mt-4 text-lg sm:text-xl">A passionate front-end developer</p>
            <a href="#projects" className="mt-8 inline-block px-6 py-2 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:bg-[#3d9c8c] transition duration-300">
              View My Projects
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
