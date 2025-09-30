import React, { useState } from "react";
import Arrow from "../assets/img/arrow.svg";
import { motion } from "motion/react";

const ClickToOpenButton: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <motion.div
      className={`absolute left-[50%] -translate-x-[50%] ${
        opened ? "bottom-[100px]" : "bottom-[180px]"
      } z-50 cursor-pointer`}
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
          className="absolute top-[-24px] left-[-28px] purple-shadow"
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
        {opened ? (
          <motion.div
            className="px-8 py-12 bg-[rgba(0,0,0,0.30)] border-[3px] border-custom-pink"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-[18px] text-white text-center"
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
            className="text-center text-[39px] font-death-star white-stroke purple-shadow text-transparent"
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
          className="absolute bottom-[-32px] right-[-34px] purple-shadow rotate-180"
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
