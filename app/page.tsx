import AutoCarousel from "./ui/auto-carousel";
import { dissolveVariants } from "./lib/motion-variants";
import { placeholderImages } from "./lib/placeholder-data";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <AutoCarousel images={placeholderImages} fadeInterval={5000} variants={dissolveVariants} />
    </div >
  );
}
