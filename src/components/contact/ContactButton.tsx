import React from "react";
import { motion } from "motion/react";

const ContactButton: React.FC = () => {
  return (
    <motion.a
      href="#!"
      className="absolute right-4 top-4 sm:right-8 sm:top-6 lg:right-15 lg:top-10 z-50 text-white font-bebas text-2xl sm:text-3xl lg:text-[41px] uppercase cursor-pointer select-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.3,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      contact me
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-white/60 pointer-events-none"
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: { delay: 0.8, duration: 0.4, ease: "easeOut" },
        }}
      />
    </motion.a>
  );
};

export default ContactButton;
