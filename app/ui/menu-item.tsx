'use client'

import Link from "next/link";
import Image from "next/image";
import { ImageType } from "../lib/definitions";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function MenuItem({ menuImage, containerRef }: { menuImage: ImageType, containerRef: React.RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.7, 1.2, 1]);

  return (
    <Link
      href={menuImage.href}
    >
      <div className="relative pb-32">
        <motion.div
          ref={ref}
          style={{ scale }}
        >
          <Image
            src={menuImage.url}
            alt={menuImage.description}
            width={menuImage.width}
            height={menuImage.height}
            className="h-128"
          />
        </motion.div>
        <h3 className="text-3xl text-white text-center text-shadow-lg absolute z-10 bottom-36 w-full font-bold pointer-events-none">{menuImage.description}</h3>
      </div>
    </Link>
  );
}