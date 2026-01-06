"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#blog", label: "Blogs" },
    { href: "#projects", label: "Projects" },
  ];

  // Scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Set scrolled state when user scrolls
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white"
          : "bg-linear-to-r from-teal-500 to-blue-500 text-white py-2"
      } z-50 fixed top-0 left-0 w-full transition-all duration-500`}
    >
     <div className="flex items-center justify-between py-4 px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368">
        {/* Logo */}
        <Link href="/" className="text-[32px] font-semibold tracking-wide text-[#16f2b3]">
          <Image
            width={50}
            height={50}
            src="/my-logo.png"
            alt="Logo"
            className="max-w-[100px] rounded-full sm:max-w-[150px] w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-lg uppercase font-light tracking-wide text-white transition-colors hover:text-pink-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-2 relative" aria-label="Toggle Menu">
          {/* First line */}
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "rotate-45 absolute" : ""
            }`}
          />
          {/* Middle line */}
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Third line */}
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-rotate-45 absolute" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute left-0 top-full w-full bg-[#0d1224] py-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="px-6 py-3">
              <Link
                href={link.href}
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
