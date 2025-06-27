'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserGalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get('http://localhost:5000/gallery');
      setImages(res.data);
    } catch (err) {
      console.error('Failed to fetch gallery images:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 p-6">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-black">
          Our Impact Gallery
        </h1>

        {images.length === 0 ? (
          <p className="text-center text-gray-500">No images yet. Please check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div
                key={img._id}
                className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden bg-white"
              >
                <img
                  src={img.imageUrl}
                  alt="NGO Activity"
                  className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
