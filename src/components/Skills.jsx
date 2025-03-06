import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#64ffda] mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg text-[#ccd6f6] max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front-End Development */}
            <div className="group relative bg-[#112240] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-mono font-semibold text-[#64ffda] mb-6">
                <span className="border-b-2 border-[#64ffda]">Frontend</span>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "React", icon: "react" },
                  { name: "JavaScript", icon: "javascript" },
                  { name: "HTML5", icon: "html5" },
                  { name: "CSS3", icon: "css3" },
                  { name: "Tailwind CSS", icon: "tailwind" },
                ].map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center text-[#ccd6f6]"
                  >
                    <span className="w-6 h-6 mr-3 flex items-center justify-center">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    </span>
                    {skill.name}
                    <span className="ml-auto text-[#64ffda] text-sm">70%</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back-End Development */}
            <div className="group relative bg-[#112240] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-mono font-semibold text-[#64ffda] mb-6">
                <span className="border-b-2 border-[#64ffda]">Backend</span>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Django", icon: "django" },
                  { name: "MySQL", icon: "mysql" },
                  { name: "API Development", icon: "api" }, // Custom icon
                ].map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center text-[#ccd6f6]"
                  >
                    <span className="w-6 h-6 mr-3 flex items-center justify-center">
                      {skill.icon === "api" ? (
                        <svg
                          className="w-5 h-5 text-[#64ffda]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      ) : (
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                          alt={skill.name}
                          className="w-5 h-5"
                        />
                      )}
                    </span>
                    {skill.name}
                    <span className="ml-auto text-[#64ffda] text-sm">50%</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Version Control */}
            <div className="group relative bg-[#112240] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda20]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-mono font-semibold text-[#64ffda] mb-6">
                <span className="border-b-2 border-[#64ffda]">Dev Tools</span>
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Git & GitHub", icon: "github" },
                  { name: "VS Code", icon: "vscode" },
                  //   { name: "Postman", icon: "postman" },
                  //   { name: "Webpack", icon: "webpack" },
                  //   { name: "Figma", icon: "figma" },
                ].map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center text-[#ccd6f6]"
                  >
                    <span className="w-6 h-6 mr-3 flex items-center justify-center">
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}/${tool.icon}-original.svg`}
                        alt={tool.name}
                        className="w-5 h-5"
                      />
                    </span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills
