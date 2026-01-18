'use client';

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { NavLinkType } from "../lib/definitions";
import LogoMobile from "./logo-mobile";
import HamburgerButton from "./hamburger-button";

export default function MobileMenuOverlay({
  open,
  onClose,
  navLinks
}: {
  open: boolean;
  onClose: () => void;
  navLinks: NavLinkType[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black flex flex-col"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >

          <div className="flex justify-between items-center bg-black z-50 p-4 sticky top-0">
            <LogoMobile onClose={onClose} />
            <HamburgerButton open={open} onToggle={onClose} />
          </div>
          <nav className="h-full flex flex-col items-center" aria-label="Primary navigation">
            <ul className="flex-1 flex flex-col gap-y-8 justify-center items-center">
              {navLinks.map((navLink, index) => {
                return (
                  <li
                    key={navLink.name + "-" + index}
                  >
                    <Link
                      href={navLink.href}
                      onClick={onClose}
                      className={`text-white text-center font-bold text-xl ${navLink.name === 'Contact' ? 'italic font-normal' : ''}`}
                    >
                      {navLink.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}