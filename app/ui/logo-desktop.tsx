import Link from "next/link"

export default function LogoDesktop() {
  return (
    <Link
      href={'/'}
      className="md:text-5xl text-white font-bold z-50 flex flex-col gap-y-2 hover:text-gray-500"
    >
      <p>VASILIOS</p>
      <p>SFINAROLAKIS</p>
      {/* <p>Vasilios Sfinarolakis</p> */}
    </Link>
  )
}