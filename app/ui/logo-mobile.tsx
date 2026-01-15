import Link from "next/link"

export default function LogoMobile({ onClose }: { onClose: () => void }) {
  return (
    <Link
      href={'/'}
      onClick={onClose}
      className="md:text-5xl text-white font-bold z-50 hover:text-gray-500"
    >
      <p>VASILIOS SFINAROLAKIS</p>
      {/* <p>Vasilios Sfinarolakis</p> */}
    </Link>
  )
}