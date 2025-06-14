'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hiring = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#fef9f3] text-center p-8">
        <h1 className="text-4xl text-black font-bold mb-4">Join Our Team</h1>
        <p className="max-w-xl mb-6 text-gray-700">
          Vishoka Foundation is always looking for passionate people to join our mission. Explore volunteering, internships, and full-time roles to make a real impact!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
          See Open Positions
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Hiring;