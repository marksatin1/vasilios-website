import PageMenu from "../ui/page-menu";
import { ImageType } from "../lib/definitions";
import { getImagesByGenre } from "../lib/actions";

export default async function FeaturesAndTV() {
  const featuresAndTVHeroImages: ImageType[] | undefined = await getImagesByGenre("features-&-tv");

  return <PageMenu menuImages={featuresAndTVHeroImages!} />;
};