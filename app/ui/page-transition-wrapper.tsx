'use client';

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { dissolveVariants } from "../lib/motion-variants";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          duration: 0.5
        }}
        variants={dissolveVariants}
        className="w-full h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  )
};