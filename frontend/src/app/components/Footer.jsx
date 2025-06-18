'use client';
import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaHeart,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-10 pb-6 mt-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center space-y-6">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-1">Visoka Welfare Foundation</h2>
          <p className="text-sm italic text-gray-400">
            "Together, we rise by lifting others."
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-1 text-sm text-gray-300">
          <div className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>Indira Nagar, Lucknow, UP - 226016</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-orange-500" />
            <a href="mailto:visokawelfarefoundation@gmail.com" className="hover:underline">
              visokawelfarefoundation@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-orange-500" />
            <a href="tel:+918318484975" className="hover:underline">+91 83184 84975</a>
            <span className="mx-1">/</span>
            <a href="tel:+919415103204" className="hover:underline">+91 94151 03204</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Programs', '/programs'],
              ['Impact', '/impact'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
              ['Donate', '/donate'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-orange-400 transition duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/visokawelfarefoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <FaInstagram className="text-white text-sm" />
          </a>
          <a
            href="https://www.facebook.com/visokawelfarefoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <FaFacebookF className="text-white text-sm" />
          </a>
          <a
            href="https://twitter.com/visokafoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <FaTwitter className="text-white text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/company/visokawelfarefoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-4"></div>

        {/* Bottom Row */}
        <div className="text-xs text-gray-600 space-y-1">
          <p>© {new Date().getFullYear()} Visoka Welfare Foundation. All rights reserved.</p>
          <p>
            Made with <FaHeart className="inline text-orange-400 mx-1" /> by volunteers who care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
