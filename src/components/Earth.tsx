import React from "react";
import earth from "../assets/img/earth.png";
import { motion } from "motion/react";

const Earth: React.FC = () => {
  return (
    <motion.img
      className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[66%] z-[1] pointer-events-none w-[1100px] h-[1100px]"
      src={earth}
      alt="Earth"
      animate={{ rotate: 360 }}
      transition={{
        duration: 100,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Earth;
