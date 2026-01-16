import ProjectPage from "@/app/ui/project-page";

export default async function FeaturesAndTVPage({ params }: { params: { title: string } }) {
  const { title } = await params;
  console.log(title);

  return <ProjectPage videoTitle={title} />;
}