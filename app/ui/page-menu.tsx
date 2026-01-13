'use client';

import { ImageType } from "../lib/definitions";
import MenuItem from "./menu-item";
import { useEffect, useRef } from "react";

export default function PageMenu({ menuImages }: { menuImages: ImageType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return <div ref={containerRef} className="h-full overflow-y-auto relative">
    {menuImages.map((menuImage) => (
      <MenuItem key={menuImage.id} menuImage={menuImage} containerRef={containerRef} />
    ))}
  </div>;
}