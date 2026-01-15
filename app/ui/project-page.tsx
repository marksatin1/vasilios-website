export default function ProjectPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-16 h-full justify-center">
      <video width="1280" height="720" controls className="w-full"></video>
      <div className="text-white text-xl md:text-2xl text-center">
        <p>Title</p>
        <p>Director</p>
        <p>Producer</p>
      </div>
    </div>
  )
};