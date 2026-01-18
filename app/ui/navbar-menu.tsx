'use client';

import { useState } from "react";
import Link from "next/link"
import { NavLinkType } from "../lib/definitions";
import { AnimatePresence, motion } from "motion/react";

export default function NavbarMenu({ navLinks }: { navLinks: NavLinkType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav aria-label="Primary navigation">
      <ul className="text-3xl flex flex-col gap-y-2">
        {navLinks.map((navLink, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={navLink.name + "-" + index} className="flex flex-col items-end">
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
                    <ul className="w-fit text-gray-400 text-left text-2xl">
                      {navLink.videos?.map((video, index) => (
                        <li key={video.title + "-" + index} className="hover:text-white">
                          <Link href={navLink.href + "/" + video.title.toLowerCase()} className="
                            relative inline-block
                            bg-[linear-gradient(currentColor,currentColor)]
                            bg-size-[0%_5px]
                            bg-position-[0_100%]
                            bg-no-repeat
                            transition-[background-size] duration-500 ease-out
                            hover:bg-size-[100%_2px]
                            ">
                            {video.title}
                          </Link>
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