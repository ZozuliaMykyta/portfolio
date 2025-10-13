export const containerVariants = {
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

export const iconVariants = {
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

export const glowVariants = {
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
