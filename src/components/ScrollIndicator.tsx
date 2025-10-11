import React from "react";
import { motion } from "motion/react";

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 lg:right-15 lg:bottom-12 z-50 flex flex-col items-center gap-2 sm:gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h4
        className="uppercase text-[28px] sm:text-[36px] lg:text-[44px] leading-[102.5%] font-bebas text-custom-pink"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        scroll
      </motion.h4>
      <motion.img
        className="w-7 h-7 sm:w-9 sm:h-9 lg:w-auto lg:h-auto"
        src="assets/img/icons/scroll.svg"
        alt="scroll"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
