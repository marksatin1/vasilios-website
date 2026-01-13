import Link from "next/link"

export default function Logo() {
  return (
    <Link 
      href={'/'}
      className="text-5xl"
    >
      Vasilios Sfinarolakis
    </Link>
  )
}