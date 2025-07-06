import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      icon: <FaCode className="text-[var(--color-accent)] text-xl" />,
      skills: [
        { name: "React", icon: "react", proficiency: 85 },
        { name: "JavaScript", icon: "javascript", proficiency: 80 },
        { name: "HTML5", icon: "html5", proficiency: 90 },
        { name: "CSS3", icon: "css3", proficiency: 80 },
        { name: "Tailwind CSS", icon: "tailwind", proficiency: 85 },
      ],
    },
    {
      id: 2,
      title: "Backend",
      icon: <FaServer className="text-[var(--color-accent)] text-xl" />,
      skills: [
        { name: "Django", icon: "django", proficiency: 70 },
        { name: "MySQL", icon: "mysql", proficiency: 65 },
        { name: "API Development", icon: "api", proficiency: 75 },
      ],
    },
    {
      id: 3,
      title: "Dev Tools",
      icon: <FaTools className="text-[var(--color-accent)] text-xl" />,
      skills: [
        { name: "Git & GitHub", icon: "github", proficiency: 80 },
        { name: "VS Code", icon: "vscode", proficiency: 90 },
        // { name: "Figma", icon: "figma", proficiency: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 lg:py-24 bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-3 md:mb-4">
            Technical Arsenal
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="group relative bg-[var(--color-card)] rounded-xl p-6 md:p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)/10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Category Header */}
              <div className="flex items-center mb-5 md:mb-6 space-x-3">
                {category.icon}
                <h3 className="text-xl md:text-2xl font-mono font-semibold text-[var(--color-accent)]">
                  <span className="border-b-2 border-[var(--color-accent)] pb-1">
                    {category.title}
                  </span>
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3 md:space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <div className="flex items-center mb-1">
                      <span className="w-5 h-5 mr-3 flex items-center justify-center">
                        {skill.icon === "api" ? (
                          <svg
                            className="w-4 h-4 text-[var(--color-accent)]"
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
                            className="w-4 h-4"
                          />
                        )}
                      </span>
                      <span className="text-sm md:text-base text-[var(--color-text)] flex-1">
                        {skill.name}
                      </span>
                      <span className="text-xs md:text-sm text-[var(--color-accent)] font-mono ml-2">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[var(--color-card-secondary)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-accent)] transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
