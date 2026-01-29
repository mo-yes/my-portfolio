import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#blog", label: "Blogs" },
  { href: "#projects", label: "Projects" },
];

export default function NavbarView({
  open,
  scrolled,
  onToggle,
  onClose,
}) {
  return (
    <nav
      className={`fixed top-0 left-0 z-50  w-full transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.40)]"
            : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 items-center justify-between px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368">
        {/* Logo */}
        <Link href="/">
          <Image
  src="/android-chrome-512x512.png"
  alt="MY logo"
  width={32}
  height={32}
  className="rounded-sm"
/>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-white/80">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-[#16f2b3]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button
          onClick={onToggle}
          className="md:hidden space-y-1.5"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open && "opacity-0"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              open && "-rotate-45 -translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
          <ul className="flex flex-col py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-4 text-white/80 transition hover:text-[#16f2b3]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
