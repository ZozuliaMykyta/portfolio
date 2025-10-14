import React from "react";
import { motion } from "motion/react";
import { containerVariants, glowVariants } from "./SocialVariants";

type ISocialLinks = {
  Icon: React.ComponentType;
  href: string;
  label: string;
}[];

const SocialMobile: React.FC<{ socialLinks: ISocialLinks }> = ({
  socialLinks,
}) => {
  return (
    <motion.div
      className="flex lg:hidden flex-row items-center justify-center gap-8 fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map(({ Icon, href, label }, index) => (
        <motion.div key={label} className="relative">
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
  );
};

export default SocialMobile;
