import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "./ui/logo";
import Sidebar from "./ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vasilios Sfinarolakis Cinematography",
  description: "The Cinematography Portfolio of Vasilios Sfinarolakis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex bg-black w-screen h-screen p-16 overflow-hidden">
          <div className="w-full">
            {children}
          </div>
          <div className="flex flex-col gap-24 z-10 text-white text-right fixed top-0 right-0 p-24 text-shadow-lg">
            <Logo />
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
