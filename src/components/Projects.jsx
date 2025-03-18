import React from "react";
// import pigGameImg from "../assets/images/pig-game.png";
import filmSearcherImg from "../assets/images/film-searcher.png";
import portfolioImg from "../assets/images/portfolio.png";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#64ffda] mb-4">
            My Creations
          </h2>
          <p className="text-lg text-[#ccd6f6] max-w-2xl mx-auto">
            From interactive games to practical tools, here's a collection of my
            favorite projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1: Film Searcher */}
          <div className="group relative bg-[#112240] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
            <div className="p-6">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={filmSearcherImg}
                  alt="Film Searcher"
                  className="w-full  object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <h3 className="mt-6 text-2xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                Film Searcher
              </h3>
              <p className="mt-2 text-[#8892b0]">
                React-powered movie database explorer using OMDB API
              </p>

              {/* Features List */}
              <ul className="mt-4 space-y-2 text-[#8892b0]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Real-time movie search
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Advanced filtering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Interactive details panel
                </li>
              </ul>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/banadawit/Simple-Film-searcher-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#233554] text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Pig Game */}
          <div className="group relative bg-[#112240] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                //   src={pigGameImg}
                  alt="Pig Game"
                  className="w-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                Pig Dice Game
              </h3>
              <p className="mt-2 text-[#8892b0]">
                Interactive dice game with risk/reward mechanics
              </p>
              <ul className="mt-4 space-y-2 text-[#8892b0]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Turn-based gameplay
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Dynamic score tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Win/lose conditions
                </li>
              </ul>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/banadawit/PigGame_SimpleVersion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#233554] text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Portfolio */}
          <div className="group relative bg-[#112240] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={portfolioImg}
                  alt="Portfolio"
                  className="w-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                Developer Portfolio
              </h3>
              <p className="mt-2 text-[#8892b0]">
                Modern showcase built with React + Tailwind
              </p>
              <ul className="mt-4 space-y-2 text-[#8892b0]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Responsive design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Interactive components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2 rounded-full"></span>
                  Performance optimized
                </li>
              </ul>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/banadawit/my-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[#233554] text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
