import { navLinks } from "../lib/site-data";
import Link from "next/link";
import LogoDesktop from "./logo-desktop";

export default function NavbarDesktop() {

  return (
    <div className="flex flex-col gap-y-8">
      <LogoDesktop />
      <nav className="text-lg flex flex-col gap-y-2">
        {navLinks.map((navLink) => {
          return (
            <Link
              key={navLink.name}
              href={navLink.href}
              className={`hover:text-gray-500 ${navLink.name === "Contact" ? 'italic font-bold' : 'not-italic hover:scale-110 ease-in-out duration-300'}`}
            >
              {navLink.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}