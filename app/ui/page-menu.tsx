'use client';

import { ImageType } from "../lib/definitions";
import MenuItem from "./menu-item";
import { useRef } from "react";

export default function PageMenu({ menuImages }: { menuImages: ImageType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-dvh overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {menuImages?.map((menuImage) => (
        <MenuItem key={menuImage.id} menuImage={menuImage} containerRef={containerRef} />
      ))}
    </div>
  )
}