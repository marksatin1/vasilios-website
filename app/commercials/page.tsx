import PageMenu from "../ui/page-menu";
import { getImagesByGenre, getVideosByGenre } from "../lib/actions";
import { ImageType } from "../lib/definitions";

export default async function Commercials() {
  const commercialHeroImages: ImageType[] | undefined = await getImagesByGenre("commercials");

  return <PageMenu menuImages={commercialHeroImages!} />
};