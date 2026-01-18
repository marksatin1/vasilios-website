'use client';

import Image from "next/image";
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useState, useEffect } from "react";
import { ImageType } from "../lib/definitions";

export default function AutoCarousel({ images, fadeInterval }: { images: ImageType[]; fadeInterval: number }) {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: fadeInterval / 1000
        }}
        className="fixed left-0 top-0 w-full h-full"
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