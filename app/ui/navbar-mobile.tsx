'use client';

import { useState } from "react";
import LogoMobile from "./logo-mobile";
import HamburgerButton from "./hamburger-button";
import MobileMenuOverlay from "./mobile-menu-overlay";

export default function NavbarMobile() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex justify-between items-center bg-black mb-4">
        <LogoMobile onClose={() => setOpen(false)} />
        <HamburgerButton open={open} onToggle={() => setOpen(!open)} />
      </div>
      <MobileMenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}