import AutoCarousel from "./ui/auto-carousel";
import { placeholderHomepageImages } from "./lib/placeholder-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "The landing page for Vasilio Sfinarolakis Cinematography."
}

export default function Home() {
  return <AutoCarousel images={placeholderHomepageImages} fadeInterval={5000}/>;
}
