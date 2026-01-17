import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentary",
  description: "The documentary work of cinematographer Vasilios Sfinarolakis.",
};

import { getImagesByGenre } from "../lib/actions";
import PageMenu from "../ui/page-menu";
import { ImageType } from "../lib/definitions";

export default async function Documentary() {
  const documentaryHeroImages: ImageType[] | undefined = await getImagesByGenre("documentary");

  return <PageMenu menuImages={documentaryHeroImages!} />;
};