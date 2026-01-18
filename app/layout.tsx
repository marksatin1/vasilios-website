import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import NavbarMobile from "./ui/navbar-mobile";
import NavbarDesktop from "./ui/navbar-desktop";
import { getNavLinks } from "./lib/actions";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Vasilios Cinematography",
    default: "Vasilios Sfinarolakis Cinematography",
  },
  description: "The official cinematography portfolio of Vasilios Sfinarolakis.",
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = await getNavLinks();

  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        <div className="flex flex-col md:flex-row bg-black w-dvw h-dvh overflow-auto p-4 md:p-0">
          <header className="md:hidden">
            <NavbarMobile navLinks={navLinks!} />
          </header>

          <main className="flex-1 overflow-y-scroll h-dvh p-4 md:p-12">
            {children}
          </main>

          <aside className="hidden md:flex w-md z-50 pr-8 text-white text-right text-shadow-lg items-center justify-end">
            <NavbarDesktop navLinks={navLinks!} />
          </aside>
        </div>
      </body>
    </html>
  );
}
