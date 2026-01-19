import { getVideoByTitle } from "../lib/actions"
import { VideoType } from "../lib/definitions"

export default async function ProjectPage({ videoTitle }: { videoTitle: string }) {
  const projectVideo: VideoType | undefined = await getVideoByTitle(videoTitle);

  const {
    description,
    director,
    genre_id,
    height,
    hero_image_url,
    id,
    producer,
    title,
    video_url,
    width,
    year
  } = projectVideo!;

  return (
    <div className="flex flex-col gap-12 h-full justify-center text-xl md:text-2xl text-white text-center">
      <video width={width} height={height} controls className="w-full">
        <source src={video_url} />
        Your browser does not support the HTML 5 video tag.
      </video>
      <div>
        <p className="text-3xl">{title}</p>
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <p>{year}</p>
      </div>
    </div>
  )
};