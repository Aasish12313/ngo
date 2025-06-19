'use client';
import React from 'react';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

const FloatingDonateButton = () => {
  return (
    <Link href="/donate">
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="group flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg w-16 h-16 hover:w-40 transition-all duration-300 overflow-hidden px-4"
          aria-label="Donate Now"
        >
          {/* Icon container aligned to center */}
          <div className="w-8 h-8 flex items-center justify-center">
            <FaHeart className="text-xl" />
          </div>

          {/* Donate Text */}
          <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Donate
          </span>
        </button>
      </div>
    </Link>
  );
};

export default FloatingDonateButton;
