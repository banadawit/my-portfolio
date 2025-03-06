import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#64ffda] mb-16">
          <span className="border-b-4 border-[#64ffda] pb-2">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Intro Card */}
            <div className="group relative p-6 bg-[#112240] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#64ffda20]">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#64ffda] to-[#0a192f] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <p className="text-lg text-[#ccd6f6] leading-relaxed">
                  I'm a passionate{" "}
                  <span className="text-[#64ffda]">front-end developer</span>{" "}
                  with a love for creating intuitive and user-friendly web
                  experiences. I focus on
                  <span className="text-[#64ffda] font-mono"> React</span>,
                  <span className="text-[#64ffda] font-mono"> JavaScript</span>,
                  and
                  <span className="text-[#64ffda] font-mono">
                    {" "}
                    Tailwind CSS
                  </span>{" "}
                  to build responsive and visually appealing websites.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 bg-[#112240] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#64ffda20]">
              <h3 className="text-2xl text-[#64ffda] font-mono mb-4">
                Education Journey
              </h3>
              <p className="text-[#ccd6f6] leading-relaxed">
                Currently pursuing my Software Engineering degree at
                <span className="text-[#64ffda]"> Haramaya University</span>,
                where I developed my core programming skills and discovered my
                passion for web development through various academic projects.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8">
            {/* Skills Card */}
            <div className="p-6 bg-[#112240] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#64ffda20]">
              <h3 className="text-2xl text-[#64ffda] font-mono mb-4">
                Current Focus
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-[#ccd6f6]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2"></span>
                  Advanced React Patterns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2"></span>
                  Tailwind Mastery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2"></span>
                  Django Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#64ffda] mr-2"></span>
                  UI/UX Principles
                </li>
              </ul>
            </div>

            {/* Hobbies Card - Beyond Coding */}
            <div className="p-6 bg-[#112240] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#64ffda20]">
              <h3 className="text-2xl text-[#64ffda] font-mono mb-4">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap gap-4 text-[#ccd6f6]">
                {/* Gaming */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#233554] rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition-all">
                  <span>🎮</span>
                  <span>Gaming</span>
                </div>

                {/* Music */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#233554] rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition-all">
                  <span>🎧</span>
                  <span>Music</span>
                </div>

                {/* Movies */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#233554] rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition-all">
                  <span>🎬</span>
                  <span>Movies</span>
                </div>

                {/* Fun Fact */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#233554] rounded-full hover:bg-[#64ffda] hover:text-[#0a192f] transition-all">
                  <span>😎</span>
                  <span>Chill Vibes</span>
                </div>
              </div>

              {/* Fun Description */}
              <p className="mt-4 text-[#ccd6f6] text-sm italic">
                When I'm not coding, you'll find me leveling up in games, vibing
                to music, or binge-watching movies. Life's all about balance,
                right? 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-[#112240] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#64ffda20]">
            <p className="text-lg text-[#ccd6f6] italic">
              "Always learning, always growing – currently exploring
              <span className="text-[#64ffda] font-mono"> Django</span> and
              <span className="text-[#64ffda] font-mono"> REST API</span> to
              level up my full-stack skills!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
