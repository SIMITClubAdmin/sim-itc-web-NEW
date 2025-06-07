"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          SIM IT Club
        </Link>

        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/about-us">About Us</Link>
          <Link href="/initiatives/hackathons">Initiatives</Link>
          <Link href="/media-gallery/highlights">Media</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/join-us">Join Us</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
