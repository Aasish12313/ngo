'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  const galleryImages = [1, 2, 3, 4];

  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c] font-sans">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover z-0 brightness-[0.6]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Communities for a Better Tomorrow
          </motion.h1>
          <motion.p
            className="text-lg mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join Vishoka Foundation in our mission to bring lasting change and hope.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
          >
            Become a Volunteer
          </motion.button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center gap-8">
        <motion.img
          src="/images/mission.jpg"
          alt="Mission"
          className="w-full md:w-1/2 rounded-xl object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            We strive to create impactful, sustainable development initiatives that uplift
            underprivileged communities and promote education, health, and equality.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section (Slideshow with Framer Motion) */}
      <section className="py-16 px-6 md:px-16 bg-[#f9f3ef] text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery Highlights</h2>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {galleryImages.concat(galleryImages).map((i, index) => (
              <motion.img
                key={index}
                src={`/gallery${i}.jpg`}
                alt={`Gallery ${i}`}
                className="w-64 h-40 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Education', 'Health', 'Women Empowerment'].map((prog, idx) => (
            <motion.div
              key={idx}
              className="bg-[#fffaf5] p-6 shadow rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{prog}</h3>
              <p>Making lives better through {prog.toLowerCase()} initiatives.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-16 bg-[#fef5ea] text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['100', 'Lives Impacted'],
            ['100+', 'Volunteers'],
            ['50+', 'Projects Completed'],
          ].map(([stat, label], i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl font-bold text-orange-500">{stat}</h3>
              <p className="text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <motion.blockquote
          className="italic max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          "Working with Vishoka Foundation has been life-changing. Their dedication is truly inspiring."
        </motion.blockquote>
        <p className="mt-4 font-semibold">– A Beneficiary</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 bg-[#fff3e0] text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
        >
          Join Us
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2025 Vishoka Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
