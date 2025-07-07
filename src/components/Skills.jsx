import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode className="text-[var(--color-accent)] text-2xl" />,
      skills: [
        { name: "React", icon: "react", proficiency: 85 },
        { name: "JavaScript", icon: "javascript", proficiency: 80 },
        { name: "TypeScript", icon: "typescript", proficiency: 70 },
        { name: "HTML5", icon: "html5", proficiency: 90 },
        { name: "CSS3", icon: "css3", proficiency: 80 },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: 85 },
      ],
    },
    {
      id: 2,
      title: "Backend & Databases",
      icon: <FaServer className="text-[var(--color-accent)] text-2xl" />,
      skills: [
        {
          name: "Django",
          icon: "django",
          proficiency: 85,
        },
        { name: "Python", icon: "python", proficiency: 75 },
        { name: "Node.js", icon: "nodejs", proficiency: 65 },
        { name: "MySQL", icon: "mysql", proficiency: 65 },
        { name: "PostgreSQL", icon: "postgresql", proficiency: 80 },
        { name: "REST APIs", icon: "api", proficiency: 70 },
      ],
    },
    {
      id: 3,
      title: "Tools & Design",
      icon: <FaTools className="text-[var(--color-accent)] text-2xl" />,
      skills: [
        { name: "Git & GitHub", icon: "github", proficiency: 80 },
        { name: "VS Code", icon: "vscode", proficiency: 90 },
        // { name: "Figma", icon: "figma", proficiency: 70 },
        { name: "Postman", icon: "postman", proficiency: 75 },
        // { name: "Docker", icon: "docker", proficiency: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[var(--color-card)] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-card-border)]"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[var(--color-card-secondary)] rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-5">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-3 flex items-center justify-center bg-[var(--color-card-secondary)] rounded-lg">
                        {skill.icon === "api" ? (
                          <svg
                            className="w-5 h-5 text-[var(--color-accent)]"
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
                      </div>
                      <div className="flex-1">
                        <span className="text-[var(--color-text)] font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-mono">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[var(--color-card-secondary)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)]"
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-card-border)]">
            <p className="text-lg text-[var(--color-text-secondary)] italic">
              "Continuously expanding my skill set to stay at the forefront of
              web development technologies."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
