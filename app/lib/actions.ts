'use server';

import { supabase } from "./supabase";
import { ImageType, NavLinkType, VideoType } from "./definitions";

function convertGenreToId(genre: string): number {
  switch (genre) {
    case "commercials":
      return 1;
    case "documentary":
      return 2;
    case "features-&-tv":
      return 3;
    default:
      console.error("You did not enter a valid Genre ID. Please enter a value between 1 and 3.");
      return -1;
  }
}

export async function getImagesByGenre(genre: string): Promise<ImageType[] | undefined> {
  const genre_id = convertGenreToId(genre);

  const { data, error } = await supabase.from("images").select("*").eq("genre_id", genre_id);

  if (error) {
    console.error("Supabase Error getting images by genre: " + error);
    return [];
  }

  if (data?.length > 0) {
    return data.map((image: ImageType) => {
      const {
        id,
        url,
        width,
        height,
        description,
        href,
        title,
        video_title,
      }: ImageType = image;

      return {
        id,
        url,
        width,
        height,
        description,
        href,
        title,
        video_title
      };
    });
  }
}

export async function getVideosByGenre(genre: string): Promise<VideoType[] | undefined> {
  const genre_id = convertGenreToId(genre);

  const { data, error } = await supabase.from("videos").select("*").eq("genre_id", genre_id);

  if (error) {
    console.error("Supabase Error getting videos by genre: " + error.message);
    return [];
  }

  if (data?.length > 0) {
    return data.map((video: VideoType) => {
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
        year,
      }: VideoType = video;

      return {
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
      };
    });
  }
}

export async function getNavLinks(): Promise<NavLinkType[] | undefined> {
  const { data, error } = await supabase.from("genres").select("*, videos:videos(id, title)").order("order", { ascending: true });

  if (error) {
    console.error("Supabase Error getting nav links: " + error.message);
    return [];
  };

  if (data) return data;
}

export async function getVideoByTitle(videoTitle: string): Promise<VideoType | undefined> {
  const { data, error } = await supabase.from("videos").select("*").eq("title", "test-video-1");

  if (error) {
    console.error("Supabase Error retrieving your video with title " + videoTitle + ": " + error.message);
  }

  return data![0];
}
