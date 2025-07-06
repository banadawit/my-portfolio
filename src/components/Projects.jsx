import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/images/portfolio.png";
import filmSearcherImg from "../assets/images/film-searcher.png";
import djangoGuideImg from "../assets/images/django-portfolio-guide.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-4">
            My Creations
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From interactive games to practical tools, here's a collection of my
            favorite projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1: Django Portfolio Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[var(--color-card)] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={djangoGuideImg}
                  alt="Django Portfolio Guide"
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nav)] via-transparent to-transparent" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                Django Portfolio Guide
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                A curated roadmap to help learners plan and build a complete
                Django portfolio.
              </p>
              <ul className="mt-4 space-y-2 text-[var(--color-text-secondary)]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Categorized projects with timelines
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Skill + outcome-focused guide
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Built with React + Tailwind + Chart.js
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/banadawit/django-portfolio-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all"
                >
                  <span>GitHub</span>
                  <FaGithub className="ml-2" />
                </a>
                <a
                  href="https://django-lab.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Film Searcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[var(--color-card)] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={filmSearcherImg}
                  alt="Film Searcher"
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nav)] via-transparent to-transparent" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                Film Searcher
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                React-powered movie database explorer using OMDB API
              </p>
              <ul className="mt-4 space-y-2 text-[var(--color-text-secondary)]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Real-time movie search
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Advanced filtering
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Interactive details panel
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/banadawit/Simple-Film-searcher-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all"
                >
                  <span>GitHub</span>
                  <FaGithub className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-[var(--color-card)] rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={portfolioImg}
                  alt="Portfolio"
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nav)] via-transparent to-transparent" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                Developer Portfolio
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                Modern showcase built with React + Tailwind
              </p>
              <ul className="mt-4 space-y-2 text-[var(--color-text-secondary)]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Responsive design
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Interactive components
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[var(--color-accent)] mr-2 rounded-full mt-2"></span>
                  Performance optimized
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/banadawit/my-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all"
                >
                  <span>GitHub</span>
                  <FaGithub className="ml-2" />
                </a>
                <a
                  href="https://banadawit.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
