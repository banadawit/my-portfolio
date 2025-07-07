import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const ThankYou = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start({
        rotate: [0, 10, -10, 0],
        transition: { duration: 0.5 },
      });
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#0a192f] text-[#ccd6f6] text-center px-4 overflow-hidden">
      {/* Floating Confetti Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#64ffda] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [0, window.innerHeight],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="bg-[#112240] p-8 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-[#64ffda20] transition-all duration-300 relative z-10 max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Checkmark */}
        <motion.div
          className="mb-6 flex justify-center"
          animate={controls}
          variants={{
            visible: {
              scale: [1, 1.1, 1],
              transition: { duration: 0.8 },
            },
          }}
        >
          <RiSendPlaneFill className="text-[#64ffda] text-6xl" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#64ffda] mb-6"
          variants={itemVariants}
        >
          Message Sent! 🚀
        </motion.h1>

        <motion.p
          className="text-lg text-[#8892b0] max-w-2xl mb-8"
          variants={itemVariants}
        >
          Your message has been delivered successfully. I'll get back to you
          within 24 hours. While you wait, check out my latest projects!
        </motion.p>

        {/* Go Back Home Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:bg-[#3d9c8c] hover:scale-105 transition-all duration-300 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          className="text-[#8892b0] mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Let's stay connected
        </motion.p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/banadawit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 text-2xl"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/bana-dawit-121810312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 text-2xl"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Floating bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#64ffda] opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ThankYou;
