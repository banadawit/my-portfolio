import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[var(--color-bg)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 md:space-y-10">
            {/* Main Intro Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-[var(--color-card)] rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg border border-[var(--color-card-border)]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)/20] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-mono text-[var(--color-accent)] mb-4">
                  Who I Am
                </h3>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  I'm a passionate{" "}
                  <span className="text-[var(--color-accent)] font-medium">
                    front-end developer
                  </span>{" "}
                  with a love for creating intuitive and user-friendly web
                  experiences. I specialize in{" "}
                  <span className="text-[var(--color-accent)] font-mono">
                    React
                  </span>
                  ,{" "}
                  <span className="text-[var(--color-accent)] font-mono">
                    JavaScript
                  </span>
                  , and{" "}
                  <span className="text-[var(--color-accent)] font-mono">
                    Tailwind CSS
                  </span>{" "}
                  to build responsive and visually appealing applications.
                </p>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 bg-[var(--color-card)] rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg border border-[var(--color-card-border)]"
            >
              <h3 className="text-2xl font-mono text-[var(--color-accent)] mb-4">
                Education Journey
              </h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Currently pursuing my Software Engineering degree at{" "}
                  <span className="text-[var(--color-accent)]">
                    Haramaya University
                  </span>
                  , where I've developed strong programming fundamentals and
                  discovered my passion for web development through various
                  academic projects and self-driven learning.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-8 md:space-y-10">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 bg-[var(--color-card)] rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg border border-[var(--color-card-border)]"
            >
              <h3 className="text-2xl font-mono text-[var(--color-accent)] mb-6">
                Current Focus
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-[var(--color-text-secondary)]">
                {[
                  "React Patterns",
                  "Tailwind CSS",
                  "Django",
                  "UI/UX Design",
                  "TypeScript",
                  "Performance",
                  "State Mgmt",
                  "Accessibility",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-start mb-2"
                  >
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-[var(--color-card)] rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg border border-[var(--color-card-border)]"
            >
              <h3 className="text-2xl font-mono text-[var(--color-accent)] mb-6">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { emoji: "🎮", label: "Gaming" },
                  { emoji: "🎧", label: "Music" },
                  { emoji: "🎬", label: "Movies" },
                  { emoji: "📚", label: "Reading" },
                  { emoji: "✈️", label: "Travel" },
                  { emoji: "☕", label: "Coffee" },
                  { emoji: "🍳", label: "Cooking" },
                  { emoji: "🏋️", label: "Fitness" },
                ].map((hobby, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--color-card-secondary)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-colors cursor-default"
                  >
                    <span className="text-lg">{hobby.emoji}</span>
                    <span className="text-sm">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-[var(--color-text-secondary)] text-sm italic">
                When I'm not coding, you'll find me exploring new technologies,
                enjoying entertainment, or seeking inspiration from the world
                around me.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-block p-8 bg-[var(--color-card)] rounded-xl shadow-sm transition-all duration-500 hover:shadow-lg border border-[var(--color-card-border)] max-w-3xl">
            <p className="text-lg text-[var(--color-text-secondary)] italic">
              "Always learning, always growing — continuously expanding my
              technical skills to become a more versatile and well-rounded
              developer."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
