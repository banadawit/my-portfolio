import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/images/me31.jpg')" }}
      role="img"
      aria-label="Professional portfolio hero section"
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-nav)] via-[var(--color-nav)/70] to-[var(--color-nav)/30]" />

      {/* Content container */}
      <div className="flex items-center justify-center h-full text-center relative z-10 px-4 pb-16"> {/* Added pb-16 */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Main heading with enhanced animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-[var(--color-accent)] relative inline-block">
              <span className="relative z-10">Bana Dawit</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-[var(--color-accent)] opacity-50"
              />
            </span>
          </motion.h1>

          {/* Subheading with improved animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut"
            }}
            className="text-lg sm:text-xl md:text-2xl font-mono text-[var(--color-accent)] tracking-wider"
          >
            Front-End Developer
          </motion.p>

          {/* Description with subtle animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: "easeOut"
            }}
            className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Bringing designs to life with React. Passionate about crafting
            clean, responsive, and user-friendly web experiences.
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className="pt-6"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block px-8 py-3 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-mono rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Discover My Work →</span>
              <span className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2" 
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <motion.span 
            className="text-sm text-[var(--color-text-secondary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300"
            whileHover={{ y: -2 }}
          >
            Scroll Down
          </motion.span>
          <div className="w-6 h-10 border-2 border-[var(--color-accent)] rounded-full flex justify-center group-hover:border-[var(--color-accent)] transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
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