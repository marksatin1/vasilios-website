'use client';

import Image from "next/image";
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useState, useEffect } from "react";
import { ImageType } from "../lib/definitions";

export default function AutoCarousel({ images, fadeInterval, variants }: { images: ImageType[]; fadeInterval: number, variants: Variants }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % images.length);
    }, fadeInterval);

    return () => clearTimeout(timer);
  }, [currentPage, images.length, fadeInterval]);

  const currentImage = images[currentPage];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage.id}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          ease: "easeInOut",
          duration: fadeInterval / 1000
        }}
        variants={variants}
      >
        <Image
          src={currentImage.url}
          alt={currentImage.description}
          fill
          loading="eager"
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  )
}