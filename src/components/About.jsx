import React from "react";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-[var(--color-bg)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--color-accent)] mb-12 md:mb-16"
        >
          <span className="border-b-4 border-[var(--color-accent)] pb-2">
            About Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Intro Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative p-6 bg-[var(--color-card)] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <div className="relative">
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-[var(--color-card)] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <h3 className="text-2xl text-[var(--color-accent)] font-mono mb-4">
                Education Journey
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Currently pursuing my Software Engineering degree at{" "}
                <span className="text-[var(--color-accent)]">
                  Haramaya University
                </span>
                , where I've developed strong programming fundamentals and
                discovered my passion for web development through various
                academic projects and self-driven learning.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-6 md:space-y-8">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-[var(--color-card)] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <h3 className="text-2xl text-[var(--color-accent)] font-mono mb-4">
                Current Focus
              </h3>
              <ul className="grid grid-cols-2 gap-3 md:gap-4 text-[var(--color-text-secondary)]">
                {[
                  "Advanced React Patterns",
                  "Tailwind Mastery",
                  "Django Fundamentals",
                  "UI/UX Principles",
                  "TypeScript",
                  "Performance Optimization",
                ].map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-[var(--color-card)] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <h3 className="text-2xl text-[var(--color-accent)] font-mono mb-4">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap gap-3 text-[var(--color-text-secondary)]">
                {[
                  { emoji: "🎮", label: "Gaming" },
                  { emoji: "🎧", label: "Music" },
                  { emoji: "🎬", label: "Movies" },
                  { emoji: "📚", label: "Reading" },
                  { emoji: "✈️", label: "Travel" },
                  { emoji: "☕", label: "Coffee" },
                ].map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-card-secondary)] rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all cursor-default"
                  >
                    <span>{hobby.emoji}</span>
                    <span>{hobby.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[var(--color-text-secondary)] text-sm italic">
                When I'm not coding, you'll find me exploring new technologies,
                enjoying entertainment, or seeking inspiration from the world
                around me.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-block p-6 bg-[var(--color-card)] rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
            <p className="text-lg text-[var(--color-text-secondary)] italic">
              "Always learning, always growing — currently expanding my skills
              in{" "}
              <span className="text-[var(--color-accent)] font-mono">
                Django
              </span>{" "}
              and{" "}
              <span className="text-[var(--color-accent)] font-mono">
                REST APIs
              </span>{" "}
              to become a more versatile developer."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
