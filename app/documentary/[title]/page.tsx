import ProjectPage from "@/app/ui/project-page";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
  const resolvedParams = await params; // must await params bc it is a Promise
  const title = decodeURIComponent(resolvedParams.title);

  return {
    title: `${title} | Vasilios Cinematography`,
    description: `Documentary -> ${title}`,
  }
}

export default async function DocumentaryItem({ params }: { params: { title: string } }) {
  const { title } = await params;

  return <ProjectPage videoTitle={title} />;
}