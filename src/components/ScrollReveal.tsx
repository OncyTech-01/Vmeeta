"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ScrollReveal({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 140,
        scale: 0.98,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;