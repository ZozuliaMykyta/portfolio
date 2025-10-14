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
    rotate: [0, -10, 10, 0],
    y: -5,
    filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))",
    transition: {
      duration: 0.4,
      ease: "easeInOut" as const,
      rotate: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
  },
};

export const glowVariants = {
  initial: { scale: 1, opacity: 0.2 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.6, 0.2],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};
