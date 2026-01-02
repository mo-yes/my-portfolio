"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#blog", label: "Blogs" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-[32px] font-semibold tracking-wide text-[#16f2b3]"
        >
          Mohamed Yasser
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                className="text-[18px] uppercase font-light tracking-wide md:text-sm lg:text-[22px] text-white transition-colors hover:text-pink-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle Menu"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute left-0 top-full w-full bg-[#0d1224] py-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="px-6 py-3">
              <Link
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="block uppercase text-lg font-medium text-white/90 hover:text-pink-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
