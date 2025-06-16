'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
const ApplyPage = () => {
  const searchParams = useSearchParams();
  const position = searchParams.get('position') || 'Unknown Position';

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-12 px-4 flex items-center justify-center text-gray-800">
        <div className="bg-white bg-opacity-90 backdrop-blur-md border border-purple-300 p-8 rounded-xl shadow-2xl w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
            Apply for: {position}
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              placeholder="Why are you suitable for this position?"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
            
            {/* Resume Upload Field */}
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Upload Resume (PDF/DOC)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-full shadow-lg hover:from-pink-500 hover:to-orange-400 transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyPage;