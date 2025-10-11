import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";

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

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: [0.68, -0.55, 0.265, 1.55] as const,
      },
    },
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.3 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1] as const,
      },
    },
  };

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
              className="relative z-10 block"
            >
              <motion.div
                className="text-2xl lg:text-4xl text-custom-pink cursor-pointer relative"
                whileHover={{
                  filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))",
                  textShadow: "0 0 10px rgba(236, 72, 153, 0.3)",
                }}
              >
                <Icon />
              </motion.div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex lg:hidden flex-row items-center justify-center gap-8 fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3"
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
              className="relative z-10 block"
            >
              <motion.div
                className="text-2xl text-custom-pink cursor-pointer relative"
                whileHover={{
                  filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))",
                  textShadow: "0 0 10px rgba(236, 72, 153, 0.3)",
                }}
              >
                <Icon />
              </motion.div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Social;
