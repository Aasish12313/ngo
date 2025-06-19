'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const allImages = [
  '/hiring/1.jpg',
  '/hiring/2.jpg',
  '/hiring/3.jpg',
  '/hiring/4.jpg',
  '/hiring/5.jpg',
  '/hiring/6.jpg',
  '/hiring/7.jpg',
  '/hiring/8.jpg',
]; // Add more if needed

const getRandomImages = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const JoinUsPage = () => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    setRandomImages(getRandomImages(allImages, 6));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative">
  
      <main className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full h-full absolute z-0">
          {randomImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Random ${index}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Center Floating Box */}
        <div className="relative z-10 bg-white bg-opacity-70 p-8 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-black">Join Our Amazing Team</h1>
          <p className="mb-6 text-black">
            Be part of impactful change — volunteer, intern, or work full-time with us.
          </p>
          <Link href="/careers">
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600">
          See Open Positions
        </button>
      </Link>
        </div>
      </main>

 
    </div>
  );
};

export default JoinUsPage;
