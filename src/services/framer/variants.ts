import { Variants } from 'framer-motion';

export const ScaleVariants: Variants = {
  init: {
    opacity: 0,
    scale: 0.8,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transformOrigin: 'top center',
  },

  exit: {
    opacity: 0,
    scale: 0.8,

    transition: {
      ease: 'easeOut',
    },
  },
};
