import PageMenu from "../ui/page-menu";
import { getImagesByGenre } from "../lib/actions";
import { ImageType } from "../lib/definitions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercials | Vasilios Cinematography",
  description: "The commercial work of cinematographer Vasilios Sfinarolakis.",
};

export default async function Commercials() {
  const commercialHeroImages: ImageType[] | undefined = await getImagesByGenre("commercials");

  return <PageMenu menuImages={commercialHeroImages!} />
};