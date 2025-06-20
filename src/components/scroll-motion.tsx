import { motion, useScroll } from "motion/react";

const ScrollMotion = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed z-50 top-0 left-0 right-0 h-2.5 bg-pink origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollMotion;
