export type ImageType = {
  id: number;
  url: string;
  width: number;
  height: number;
  description: string;
  href: string;
  title: string;
  video_title: string;
};

export type VideoType = {
  description: string;
  director: string;
  genre_id: number;
  height: number;
  hero_image_url: string;
  id: number;
  producer: string;
  title: string;
  video_url: string;
  width: number;
  year: number;
};