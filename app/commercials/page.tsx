import { placeholderCommercialsImages } from "../lib/placeholder-data";
import Image from "next/image";
import Link from "next/link";


export default function Commercials() {
  return <div className="h-full overflow-scroll relative">
    {placeholderCommercialsImages.map((image) => (
      <Link
        key={image.id}
        href="#"
      >
        <Image
          src={image.url}
          alt={image.description}
          width={image.width}
          height={image.height}
          className="h-1/2"
        />
        <h3 className="">{image.description}</h3>
      </Link>
    ))}
  </div>;
};