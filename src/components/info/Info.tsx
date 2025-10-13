import React, { useState } from "react";
import Arrow from "../../assets/img/arrow.svg";
import { motion } from "motion/react";

const Info: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <motion.div
      className={`absolute left-[50%] -translate-x-[50%] ${
        opened
          ? "bottom-[120px] sm:bottom-[180px] lg:bottom-[240px] xl:bottom-[160px]"
          : "bottom-[160px] sm:bottom-[190px] lg:bottom-[240px] xl:bottom-[220px]"
      } z-50 cursor-pointer px-4 sm:px-0`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      onClick={() => setOpened(!opened)}
    >
      <motion.div
        className="relative"
        {...(opened
          ? {}
          : {
              animate: { scale: [1, 1.05, 1] },
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            })}
      >
        <motion.img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute top-[-12px] left-[-16px] sm:top-[-16px] sm:left-[-20px] md:top-[-24px] md:left-[-28px] purple-shadow w-4 h-4 sm:w-6 sm:h-6 md:w-9 md:h-9"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -2, 0, -3, 0, -4, 0],
            y: [0, -2, 0, -3, 0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        />
        {opened ? (
          <motion.div
            className="px-3 py-3 sm:px-5 sm:py-3 md:px-12 md:py-4 bg-[rgba(0,0,0,0.30)] border-[2px] sm:border-[3px] border-custom-pink max-w-[95vw] sm:max-w-[90vw] md:max-w-[750px] lg:max-w-[900px] w-[75vw] sm:w-[80vw] md:w-[600px] lg:w-[750px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I’ve been on my coding journey for 3 years now, always aiming to
              outdo myself and learn something new every day. For me,
              programming is about creativity and curiosity—I love exploring
              fresh ideas and trying out new solutions. My main passion is
              frontend, but I didn’t stop there: to bring my concepts to life, I
              dove into backend too. I’m excited by everything new in tech and
              always open to challenges!
            </motion.p>
          </motion.div>
        ) : (
          <motion.h3
            className="text-center text-[24px] sm:text-[32px] md:text-[39px] font-death-star white-stroke purple-shadow text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Click
            <br /> to Open
          </motion.h3>
        )}
        <motion.img
          src={Arrow}
          alt="Arrow Icon"
          className="absolute bottom-[-16px] right-[-20px] sm:bottom-[-20px] sm:right-[-24px] md:bottom-[-32px] md:right-[-34px] purple-shadow rotate-180 w-4 h-4 sm:w-6 sm:h-6 md:w-9 md:h-9"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -2, 0, -3, 0, -4, 0],
            y: [0, -2, 0, -3, 0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
            y: {
              duration: 5,
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

export default Info;
