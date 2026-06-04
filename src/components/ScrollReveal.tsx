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
    x: -60,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
      viewport={{
        once: true, // up/down scroll dono
        amount: 0.25, // stable trigger
        margin: "-120px 0px -120px 0px",
      }}
      transition={{
        duration: 0.85,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;