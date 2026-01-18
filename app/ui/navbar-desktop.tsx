import NavbarMenu from "./navbar-menu";
import LogoDesktop from "./logo-desktop";
import { NavLinkType } from "../lib/definitions";

export default async function NavbarDesktop({ navLinks }: { navLinks: NavLinkType[]}) {
  return (
    <div className="flex flex-col gap-y-8">
      <LogoDesktop />
      <NavbarMenu navLinks={navLinks} />
    </div>
  )
}