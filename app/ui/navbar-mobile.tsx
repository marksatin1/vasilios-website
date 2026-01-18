'use client';

import { useState } from "react";
import LogoMobile from "./logo-mobile";
import HamburgerButton from "./hamburger-button";
import MobileMenuOverlay from "./mobile-menu-overlay";
import { NavLinkType } from "../lib/definitions";

export default function NavbarMobile({ navLinks }: { navLinks: NavLinkType[]}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex justify-between items-center bg-black mb-4">
        <LogoMobile onClose={() => setOpen(false)} />
        <HamburgerButton open={open} onToggle={() => setOpen(!open)} />
      </div>
      <MobileMenuOverlay open={open} onClose={() => setOpen(false)} navLinks={navLinks} />
    </>
  )
}