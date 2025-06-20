"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
// import Footer from '../../../components/Footer';
// import Navbar from '../../../components/Navbar'; // adjust the path as per your project

const GalleryClient = ({ images }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Assign random sizes to each image for variety
  const sizeClasses = [
    "row-span-1 col-span-1", // small
    "row-span-2 col-span-1", // tall
    "row-span-1 col-span-2", // wide
    "row-span-2 col-span-2"  // large
  ];

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Gallery</h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          A creative blend of moments in all sizes and styles!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-7xl mx-auto auto-rows-[150px]">
          {images.map((img, index) => {
            const randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
            const randomBorder = Math.random() > 0.5 ? 'border-4 border-white' : 'border-2 border-gray-300';
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${randomSize} ${randomBorder}`}
                onClick={() => openImage(img)}
              >
                <Image
                  src={`/gallery/${img}`}
                  alt={`Gallery Image ${index}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <Image
            src={`/gallery/${selectedImage}`}
            alt="Enlarged"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
};

export default GalleryClient;
