'use client';

import { useState } from "react";
import Link from "next/link"
import { NavLinkType } from "../lib/definitions";
import { AnimatePresence, motion } from "motion/react";

export default function NavbarMenu({ navLinks }: { navLinks: NavLinkType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav>
      <ul className="text-lg flex flex-col gap-y-2">
        {navLinks.map((navLink, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={navLink.name}>
              <Link
                href={navLink.href}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className={`inline-block hover:text-gray-500 ${navLink.name === "Contact" ? 'italic font-bold' : 'not-italic hover:scale-110 ease-in-out duration-300'}`}
              >
                {navLink.name}
              </Link>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <ul className="pl-4 mt-2 text-sm text-gray-400">
                      {navLink.videos?.map((video, index) => (
                        <li key={video + "-" + index}>
                          <Link href={navLink.href+ "/" + video}>{video}</Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}