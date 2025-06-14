// frontend/src/app/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 mt-12">
      <p className="text-lg font-semibold">🌍 Visoka Welfare Foundation</p>
      <p className="text-sm mt-2 text-gray-400">
        Creating a world where every individual thrives with dignity.
      </p>
      <p className="text-xs mt-1 text-gray-500">
        © {new Date().getFullYear()} Visoka. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
