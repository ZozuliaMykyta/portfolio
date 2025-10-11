import React from "react";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.68, -0.55, 0.265, 1.55] as const,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      className="container !mt-[80px] sm:!mt-[110px] md:!mt-[126px] px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-8 sm:mb-11 flex flex-col justify-center"
        variants={itemVariants}
      >
        <motion.div
          className="flex items-center justify-between gap-2 sm:gap-4"
          variants={itemVariants}
        >
          <motion.div className="bar mt-1" variants={barVariants}></motion.div>
          <motion.h4
            className="text-custom-purple text-[14px] sm:text-[16px] md:text-[18px] font-death-star self-end text-center sm:text-right flex-shrink-0"
            variants={itemVariants}
          >
            a message from earth
          </motion.h4>
        </motion.div>

        <motion.h1
          className="text-[18px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-death-star pink-stroke text-transparent purple-shadow text-center sm:text-left"
          variants={titleVariants}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 20px rgba(147, 51, 234, 0.8)",
            transition: { duration: 0.3 },
          }}
        >
          hello fellow galaxy member
        </motion.h1>

        <motion.div
          className="flex items-center justify-between gap-2 sm:gap-4"
          variants={itemVariants}
        >
          <motion.h4
            className="text-custom-purple text-[14px] sm:text-[16px] md:text-[18px] font-death-star text-center sm:text-left flex-shrink-0"
            variants={itemVariants}
          >
            a message from earth
          </motion.h4>
          <motion.div className="bar mt-1" variants={barVariants}></motion.div>
        </motion.div>
      </motion.div>

      <motion.h2
        className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-death-star pink-stroke text-transparent purple-shadow text-center sm:text-left"
        variants={titleVariants}
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 20px rgba(147, 51, 234, 0.8)",
          transition: { duration: 0.3 },
        }}
      >
        i am mykyta
      </motion.h2>
    </motion.div>
  );
};

export default Hero;
