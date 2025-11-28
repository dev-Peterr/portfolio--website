// Shared animation configurations across the site
export const animations = {
  // Container animations for staggered children
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },

  // Individual item animations
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },

  // Fade in from top
  fadeInDown: {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },

  // Fade in from right
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },

  // Fade in with scale
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },

  // Section heading animation
  sectionHeading: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
};

// Transition presets for common durations
export const transitions = {
  fast: { duration: 0.3 },
  normal: { duration: 0.5 },
  slow: { duration: 0.8 },
};
