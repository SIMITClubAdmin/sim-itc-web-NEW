"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  {
    name: "Initiatives",
    dropdown: [
      { name: "Hackathons", href: "/initiatives/hackathons" },
      { name: "Workshops", href: "/initiatives/workshops" },
      { name: "Events", href: "/initiatives/events" },
      { name: "Projects", href: "/initiatives/projects" },
    ],
  },
  {
    name: "Media Gallery",
    dropdown: [
      { name: "Event Highlights", href: "/media-gallery/highlights" },
      { name: "Merchandise", href: "/media-gallery/merchandise" },
    ],
  },
  { name: "Our Partners", href: "/partners" },
  { name: "Join us", href: "/join-us" },
  { name: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/itc-logo.jpg" alt="ITC Logo" width={50} height={50} />
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm font-medium text-black">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="inline-flex items-center gap-1">
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            )
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="IG" width={18} height={18} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
