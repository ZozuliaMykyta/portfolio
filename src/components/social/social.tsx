import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";
import {
  containerVariants,
  iconVariants,
  glowVariants,
} from "./SocialVariants";
import SocialMobile from "./SocialMobile";

const Social: React.FC = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: "https://github.com/ZozuliaMykyta",
      label: "GitHub",
    },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <>
      <motion.div
        className="hidden lg:flex flex-col items-center justify-center gap-4 lg:gap-7 absolute top-[50%] left-4 lg:left-15 -translate-y-1/2 z-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map(({ Icon, href, label }, index) => (
          <motion.div key={label} variants={iconVariants} className="relative">
            <motion.div
              className="absolute inset-0 bg-custom-pink rounded-full blur-lg opacity-15"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: `${index * 0.5}s` }}
            />

            <motion.a
              href={href}
              target="_blank"
              aria-label={label}
              variants={iconVariants}
              whileHover="hover"
              className="relative z-10 block text-2xl lg:text-4xl text-custom-pink cursor-pointer"
            >
              <Icon />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      <SocialMobile socialLinks={socialLinks} />
    </>
  );
};

export default Social;
