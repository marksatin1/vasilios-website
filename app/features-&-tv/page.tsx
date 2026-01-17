import { Metadata } from "next";
import PageMenu from "../ui/page-menu";
import { ImageType } from "../lib/definitions";
import { getImagesByGenre } from "../lib/actions";

export const metadata: Metadata = {
  title: "Features & TV | Vasilios Cinematography",
  description: "The feature and television work of cinematographer Vasilios Sfinarolakis.",
};

export default async function FeaturesAndTV() {
  const featuresAndTVHeroImages: ImageType[] | undefined = await getImagesByGenre("features-&-tv");

  return <PageMenu menuImages={featuresAndTVHeroImages!} />;
};