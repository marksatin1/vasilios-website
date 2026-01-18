import Link from "next/link"

export default function LogoMobile({ onClose }: { onClose: () => void }) {
  return (
    <Link
      href={'/'}
      onClick={onClose}
      className="text-2xl text-white font-bold z-50 hover:text-gray-500"
      aria-label="Go to homepage"
    >
      <p>VASILIOS SFINAROLAKIS</p>
    </Link>
  )
}