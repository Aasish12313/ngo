// frontend/src/app/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import VolunteerFormModal from '../components/VolunteerFormModal';
import FloatingDonateButton from '../components/FloatingDonateButton';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Home() {
  const [isVolunteerOpen, setVolunteerOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [comments, setComments] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
    const [galleryImages] = useState([1,2,3,4]);


  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/testimonial');
      setComments(res.data.slice(0, 3)); // Recent 3 testimonials
    } catch (err) {
      console.error('Failed to fetch testimonials:', err);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) return;

    try {
      await axios.post('http://localhost:5000/testimonial', formData);
      setFormData({ name: '', email: '', comment: '' });
      setShowThankYou(true);
      fetchTestimonials();
      setTimeout(() => setShowThankYou(false), 3000);
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c] font-sans">

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover z-0 brightness-[0.6]">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Communities for a Better Tomorrow
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join Vishoka Foundation in our mission to bring lasting change and hope.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
              onClick={() => setVolunteerOpen(true)}
            >
              Become a Volunteer
            </motion.button>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 text-white">
        <motion.img
          src="/images/mission.jpg"
          alt="Mission"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 rounded-xl object-cover shadow-lg relative z-10"
        />
        <motion.div
          className="w-full md:w-[45%] p-6 rounded-lg shadow-xl bg-black bg-opacity-60 backdrop-blur-sm relative z-10"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent relative inline-block">
            Our Mission
            <span className="block h-[3px] w-16 bg-orange-400 absolute -bottom-2 left-0 animate-pulse rounded-full"></span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed tracking-wide text-white font-light">
            We strive to create <span className="text-orange-300 font-semibold">impactful</span>,
            <span className="text-orange-300 font-semibold"> sustainable development initiatives</span> that uplift
            <span className="text-orange-300 font-semibold"> underprivileged communities</span> and promote
            <span className="text-orange-300 font-semibold"> education</span>,
            <span className="text-orange-300 font-semibold"> health</span>, and
            <span className="text-orange-300 font-semibold"> equality</span>.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 md:px-16 bg-[#f9f3ef] text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery Highlights</h2>
        <div className="overflow-x-auto">
          <motion.div
            className="flex gap-6 w-max"
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

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center"><u>Our Key Programs</u></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Child Education & Holistic Development',
              videoSrc: '/videos/education.mp4',
              description: `Through our Dream Shala program, we support underserved children aged 6–14 in urban slums by strengthening their literacy, life skills, and confidence through creative pedagogy, impacting over 300 children annually.`,
            },
            {
              title: 'Gender Justice & SRHR Awareness',
              videoSrc: '/videos/women.mp4',
              description: `With our Red Relief Campaign, we create inclusive spaces for youth—especially girls—to engage in open dialogue around menstruation, consent, and reproductive health through street plays, workshops, and leadership forums.`,
            },
            {
              title: 'Youth Leadership & Civic Engagement',
              videoSrc: '/videos/youth.mp4',
              description: ` Our Youth Ki Awaaz Fellowship empowers rural and marginalized youth (18–29 years) to lead civic actions via theatre labs, democratic literacy, and community mobilization.`,
            },
            {
              title: 'Climate Action & Environmental Justice',
              videoSrc: '/videos/climate.mp4',
              description: `"Van Zinda To Hum Zinda” engages 1,500+ people in forest conservation, seed bombing, and sustainability education to protect ecosystems and promote environmental justice.`,
            },
          ].map((program, idx) => (
            <motion.div
              key={idx}
              className="bg-[#fffaf5] p-6 shadow-md rounded-2xl hover:shadow-orange-300 transition-shadow duration-300 text-center border border-orange-100"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-700">{program.title}</h3>
              <video
                src={program.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full h-52 sm:h-64 object-cover mb-4 shadow-sm"
              />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 md:px-16 bg-[#fef5ea] text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[['100', 'Lives Impacted'], ['100+', 'Volunteers'], ['50+', 'Projects Completed']].map(
            ([stat, label], i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">{stat}</h3>
                <p className="text-base sm:text-lg">{label}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
    <section className="py-16 px-4 sm:px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        {comments.map((item, index) => (
          <motion.blockquote
            key={index}
            className="italic max-w-3xl mx-auto mb-6 bg-gray-100 p-4 rounded-xl shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            "{item.comment}"
            <p className="mt-2 font-semibold text-right">– {item.name}</p>
          </motion.blockquote>
        ))}

        <div className="mt-10 max-w-xl mx-auto text-left">
          <h3 className="text-xl font-semibold mb-4">Add Your Comment</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            <textarea
              name="comment"
              placeholder="Your Comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border px-4 py-2 rounded-md"
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
              Submit
            </button>
            {showThankYou && <p className="text-green-600 mt-2">Thank you for your feedback!</p>}
          </form>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 md:px-16 bg-[#fff3e0] text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <Link href="/hiring">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
          >
            Join Us
          </motion.button>
        </Link>
      </section>

     <VolunteerFormModal isOpen={isVolunteerOpen} onClose={() => setVolunteerOpen(false)} />
      <FloatingDonateButton />
    </div>
  );
}
