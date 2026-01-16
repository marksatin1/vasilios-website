import ProjectPage from "@/app/ui/project-page";

export default async function CommercialsPage({ params }: { params: { title: string } }) {
  const { title } = await params;

  return <ProjectPage videoTitle={title} />;
}