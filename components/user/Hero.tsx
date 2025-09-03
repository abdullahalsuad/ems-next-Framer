"use client";
import { motion, Variants } from "framer-motion";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="px-4 pt-10 md:pt-16 ">
      {/* Logo */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex justify-center "
      >
        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">UH</span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-400 to-teal-400 mb-4"
      >
        User Management Dashboard
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center text-gray-300 max-w-2xl mx-auto text-sm md:text-base mb-8"
      >
        Discover and manage users with our modern, responsive interface. Search,
        filter, and view detailed profiles with smooth animations.
      </motion.p>
    </div>
  );
};

export default Hero;
