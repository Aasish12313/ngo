'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/vishoka_logo.png" // ✅ Make sure image is placed in public/images/
            alt="Visoka Logo"
            width={48}
            height={48}
            className="rounded-full" // ✅ No border, fully round
          />
          <span className="text-xl md:text-2xl font-bold text-[#1c1c1c] hover:text-orange-600 transition">
            Visoka Welfare Foundation
          </span>
        </Link>

        <ul className="flex gap-4 md:gap-6 text-[#1c1c1c] font-medium text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><a href="#">Impact</a></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li>
            <Link href="/donate">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Donate Now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
