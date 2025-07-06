import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/me31.jpg')" }}
      role="img"
      aria-label="Professional portfolio hero section"
    >
      {/* Gradient overlay - now theme-aware */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nav)] to-[var(--color-nav)/60]" />

      {/* Content container */}
      <div className="flex items-center justify-center h-full text-center relative z-10 px-4">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Main heading with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-[var(--color-accent)]">Bana Dawit</span>
          </motion.h1>

          {/* Subheading with animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-mono text-[var(--color-accent)]"
          >
            Front-End Developer
          </motion.p>

          {/* Description with animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Bringing designs to life with React. Passionate about crafting
            clean, responsive, and user-friendly web experiences.
          </motion.p>

          {/* CTA Button with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block px-8 py-3 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-mono rounded-lg hover:bg-[var(--color-accent)/10] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Discover My Work →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - optional */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm text-[var(--color-text-secondary)] mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-[var(--color-accent)] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-[var(--color-accent)] rounded-full mt-1"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
