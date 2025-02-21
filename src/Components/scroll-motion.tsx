import { motion, useScroll } from "framer-motion";

const ScrollMotion = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="scroll-bar" style={{ scaleX: scrollYProgress }} />
  );
};

export default ScrollMotion;
