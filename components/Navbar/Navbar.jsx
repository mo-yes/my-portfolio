"use client";
import useNavbar from "./useNavbar";
import NavbarView from "./NavbarView";

export default function Navbar() {
  const { open, scrolled, toggleMenu, closeMenu } = useNavbar();

  return (
    <NavbarView
      open={open}
      scrolled={scrolled}
      onToggle={toggleMenu}
      onClose={closeMenu}
    />
  );
}
