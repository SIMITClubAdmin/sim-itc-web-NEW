'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about-us' },
  {
    name: 'Initiatives',
    href: '/initiatives',
    dropdown: [
      { name: 'Hackathons', href: '/initiatives/hackathons' },
      { name: 'Workshops', href: '/initiatives/workshops' },
      { name: 'Events', href: '/initiatives/events' },
      { name: 'Projects', href: '/initiatives/projects' },
    ],
  },
  {
    name: 'Media Gallery',
    href: '/media-gallery',
    dropdown: [
      { name: 'Event Highlights', href: '/media-gallery/event-highlights' },
      { name: 'Merchandise', href: '/media-gallery/merchandise' },
    ],
  },
  { name: 'Our Partners', href: '/our-partners' },
  { name: 'Join us', href: '/join-us' },
  { name: 'Contact us', href: '/contact-us' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/itc-logo.jpg" alt="ITC Logo" width={50} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className="inline-flex items-center gap-1 hover:text-red-500 transition focus:outline-none"
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-red-500 transition"
              >
                {item.name}
              </Link>
            )
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm font-medium text-black">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="flex flex-col gap-1">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                    className="inline-flex items-center gap-1 hover:text-red-500"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setMobileOpen(false);
                          }}
                          className="hover:text-red-500"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-500"
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
