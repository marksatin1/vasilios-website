export default function HamburgerButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="relative z-50 h-8 w-8 self-center md:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <span
        className={`absolute block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${open ? "rotate-45 top-3.5" : "top-2"
          }`}
      />
      <span
        className={`absolute block h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${open ? "opacity-0" : "top-3.5"
          }`}
      />
      <span
        className={`absolute block h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${open ? "-rotate-45 top-3.5" : "top-5"
          }`}
      />
    </button>
  );
}
