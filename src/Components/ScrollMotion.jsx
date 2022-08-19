import { useScroll, motion } from "framer-motion";
import React from "react";

const ScrollMotion = () => {
  const { scrollYProgress } = useScroll();

  return <motion.div className="scroll-bar" style={{ scaleX: scrollYProgress }} />;
};

export default ScrollMotion;
