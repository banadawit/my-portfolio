import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/images/portfolio.webp";
import filmSearcherImg from "../assets/images/film-searcher.webp";
import djangoGuideImg from "../assets/images/django-portfolio-guide.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Django Portfolio Guide",
      description:
        "A comprehensive roadmap for building Django portfolios with categorized projects and skill progression",
      image: djangoGuideImg,
      features: [
        "Categorized projects with timelines",
        "Skill + outcome-focused guide",
        "Built with React + Tailwind + Chart.js",
      ],
      links: [
        {
          url: "https://github.com/banadawit/django-portfolio-guide",
          text: "GitHub",
          icon: <FaGithub />,
        },
        {
          url: "https://django-lab.netlify.app/",
          text: "Live Demo",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
    {
      id: 2,
      title: "Film Searcher",
      description:
        "React-powered movie database explorer with real-time search using OMDB API",
      image: filmSearcherImg,
      features: [
        "Real-time movie search",
        "Advanced filtering options",
        "Interactive details panel",
      ],
      links: [
        {
          url: "https://github.com/banadawit/Simple-Film-searcher-website",
          text: "GitHub",
          icon: <FaGithub />,
        },
      ],
    },
    {
      id: 3,
      title: "Developer Portfolio",
      description: "Modern responsive portfolio showcasing my work and skills",
      image: portfolioImg,
      features: [
        "Fully responsive design",
        "Interactive components",
        "Performance optimized",
      ],
      links: [
        {
          url: "https://github.com/banadawit/my-portfolio",
          text: "GitHub",
          icon: <FaGithub />,
        },
        {
          url: "https://banadawit.netlify.app",
          text: "Live Demo",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--color-bg)]">
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
            My Projects
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A collection of my work showcasing problem-solving skills and
            technical abilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[var(--color-card)] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-card-border)]"
            >
              <div className="p-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg aspect-video mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-nav)/70] via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-[var(--color-card-secondary)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-all text-sm font-medium"
                      >
                        <span>{link.text}</span>
                        <span className="ml-2">{link.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--color-text-secondary)] italic mb-6">
            "Every project is a learning opportunity - currently working on new
            challenges to expand my skills."
          </p>
          <a
            href="https://github.com/banadawit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-card)] transition-colors font-medium"
          >
            View More on GitHub
            <FaGithub className="ml-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
