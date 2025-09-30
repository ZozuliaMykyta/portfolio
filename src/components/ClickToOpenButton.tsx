import React from "react";
import Arrow from "../assets/img/arrow.svg";
import { motion } from "motion/react";

const ClickToOpenButton: React.FC = () => {
  return (
    <motion.div
      className="absolute left-[50%] -translate-x-[50%] bottom-[180px] z-50 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute top-[-24px] left-[-32px] purple-shadow"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -8, 0],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            x: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        />
        <motion.h3
          className="text-center text-[39px] font-death-star white-stroke purple-shadow text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Click
          <br /> to Open
        </motion.h3>
        <motion.img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute bottom-[-36px] right-[-48px] purple-shadow rotate-180"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -8, 0],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            x: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ClickToOpenButton;
