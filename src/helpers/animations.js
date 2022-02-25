export const pageTransition = {
  variants: {
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  },
  initial: "exit",
  animate: "animate",
  exit: "exit",
};
