import { navLinks } from "../lib/site-data";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="text-xl flex flex-col gap-y-2 font-bold text-right">
      {navLinks.map((navLink) => {
        return (
          <Link
            key={navLink.name}
            href={navLink.href}
            className={`${navLink.name === "Contact" ? 'italic' : 'not-italic'}`}
          >
            {navLink.name}
          </Link>
        )
      })}
    </nav>
  )
}