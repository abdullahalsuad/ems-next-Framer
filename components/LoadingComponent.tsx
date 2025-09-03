"use client";
import { motion } from "framer-motion";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default LoadingComponent;
