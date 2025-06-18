'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/vishoka_logo.png" 
            alt="Visoka Logo"
            align="left"
            width={48}
            height={48}
            className="rounded-full"/>
        </Link>

        <ul className="flex gap-4 md:gap-6 text-[#1c1c1c] font-medium text-sm md:text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/impact">Impact</Link></li>
          <li>
            <Link href="/impact-map" className="hover:text-indigo-500">
            Impact Map
            </Link>
          </li>

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
