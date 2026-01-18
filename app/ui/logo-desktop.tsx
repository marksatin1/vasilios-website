import Link from "next/link"

export default function LogoDesktop() {
  return (
    <Link
      href={'/'}
      className="text-5xl text-white font-bold z-50 flex flex-col gap-y-2 hover:text-gray-500"
      aria-label="Go to homepage"
    >
      <p>VASILIOS</p>
      <p>SFINAROLAKIS</p>
    </Link>
  )
}