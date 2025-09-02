"use client";
import { motion, Variants } from "framer-motion";
import { Users, Search } from "lucide-react";

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
    <div className="min-h-screen px-4 py-10 md:py-16 ">
      {/* Logo */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex justify-center mb-6"
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

      {/* Search Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-md mx-auto mb-8 relative"
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="w-full px-10 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
