import NavbarMenu from "./navbar-menu";
import LogoDesktop from "./logo-desktop";
import { navLinks } from "../lib/site-data";

export default function NavbarDesktop() {

  return (
    <div className="flex flex-col gap-y-8">
      <LogoDesktop />
      <NavbarMenu navLinks={navLinks} />
    </div>
  )
}