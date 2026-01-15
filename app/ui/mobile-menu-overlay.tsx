'use client';

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Logo from "./logo-mobile";
import NavbarMobile from "./navbar-mobile";

export default function MobileMenuOverlay({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed left-0 right-0 top-12 bottom-0 z-50 bg-black flex flex-col gap-y-8 justify-center text-white text-center font-bold text-lg"
        >
          <Link href="/commercials" onClick={onClose}>COMMERCIALS</Link>
          <Link href="/features-&-tv" onClick={onClose}>FEATURES & TV</Link>
          <Link href="/documentary" onClick={onClose}>DOCUMENTARY</Link>
          <Link href="/contact" onClick={onClose} className="italic font-normal">Contact</Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}