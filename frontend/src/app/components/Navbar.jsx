'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Clickable Logo/Brand Name */}
        <Link href="/">
          <span className="text-2xl font-bold text-[#1c1c1c] cursor-pointer hover:text-orange-600 transition">
            Visoka Welfare Foundation
          </span>
        </Link>

        <ul className="flex gap-6 text-[#1c1c1c] font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Impact</a></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
