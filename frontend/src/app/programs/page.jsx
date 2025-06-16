'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Education for All',
    description:
      'We run free tuition centers and scholarship programs to help children in rural areas access quality education.',
    video: '/videos/education.mp4',
  },
  {
    title: 'Healthcare Camps',
    description:
      'Free health checkups, blood donation drives, and awareness programs for underprivileged families.',
    video: '/videos/health.mp4',
  },
  {
    title: 'Women Empowerment',
    description:
      'Skill development and entrepreneurship workshops for women to become self-reliant.',
    video: '/videos/women.mp4',
  },
  {
    title: 'Environment & Sustainability',
    description:
      'We organize tree plantation, cleanliness drives, and plastic-free campaigns to build a greener future.',
    video: '/videos/environment.mp4',
  },
  {
    title: 'Donation Support',
    description:
      'Your donations directly fund our grassroots initiatives, helping us reach more people with every rupee you contribute.',
    video: '/videos/donation.mp4', // Make sure this video exists in /public/videos
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover brightness-[0.5]"
        >
          <source src="/hero-bg2.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Programs
          </motion.h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Explore how Vishoka Foundation is driving change through sustainable programs across India.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Impactful Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <video
                src={program.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-500 mb-3">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fff3e0] py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Want to Contribute?
        </motion.h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Join hands with us to expand these programs to more regions and touch more lives.
        </p>
        <a
          href="/donate"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
        >
          Donate Now
        </a>
      </section>

      <Footer />
    </div>
  );
}
