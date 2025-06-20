'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/vishoka_logo.png"
            alt="Vishoka Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-4 md:gap-6 items-center text-[#1c1c1c] font-medium text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/impact">Impact</Link></li>
          <li><Link href="/impact-map">Impact Map</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li>
            <Link href="/donate">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Donate Now
              </button>
            </Link>
          </li>
          <li>
            <Link href="/admin-login">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Admin Login
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-[#1c1c1c] font-medium text-base">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li><Link href="/impact" onClick={() => setMenuOpen(false)}>Impact</Link></li>
            <li><Link href="/impact-map" onClick={() => setMenuOpen(false)}>Impact Map</Link></li>
            <li><Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <Link href="/donate" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Donate Now
                </button>
              </Link>
            </li>
            <li>
              <Link href="/admin-login" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                  Admin Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
