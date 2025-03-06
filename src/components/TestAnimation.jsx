import React from "react";
import { motion } from "framer-motion";

const TestAnimation = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-blue-500"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default TestAnimation;
