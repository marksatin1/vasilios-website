import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan } from "next/font/google";
import "./globals.css";
import NavbarMobile from "./ui/navbar-mobile";
import NavbarDesktop from "./ui/navbar-desktop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Vasilios Cinematography",
    default: "Vasilios Sfinarolakis Cinematography",
  },
  description: "The official cinematography portfolio of Vasilios Sfinarolakis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        <div className="flex flex-col md:flex-row bg-black w-dvw h-dvh overflow-auto p-4 md:p-0">
          <div className="md:hidden">
            <NavbarMobile />
          </div>

          <main className="flex-1 overflow-y-scroll h-dvh p-4 md:p-12">
            {children}
          </main>

          <div className="hidden md:flex w-md z-10 pr-8 text-white text-right text-shadow-lg items-center justify-end">
            <NavbarDesktop />
          </div>
        </div>
      </body>
    </html>
  );
}
