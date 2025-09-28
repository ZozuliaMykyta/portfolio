import React from "react";
import { motion } from "motion/react";

const EnterIndicator: React.FC = () => {
  return (
    <motion.div
      className="absolute left-11 bottom-12 z-50 flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h4
        className="uppercase text-[40px] leading-[102.5%] font-bebas text-custom-pink"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        press
      </motion.h4>
      <motion.img
        src="assets/img/icons/enter.svg"
        alt="enter"
        animate={{
          y: [0, -8, 0],
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

export default EnterIndicator;
