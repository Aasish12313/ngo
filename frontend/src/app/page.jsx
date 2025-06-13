import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <h1 className="text-5xl font-bold mb-4">Empowering Communities for a Better Tomorrow</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join Vishoka Foundation in our mission to bring lasting change and hope.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">Become a Volunteer</button>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center gap-8">
        <img src="/mission.jpg" alt="Mission" className="w-full md:w-1/2 rounded-xl" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">We strive to create impactful, sustainable development initiatives that uplift underprivileged communities and promote education, health, and equality.</p>
        </div>
      </section>

      {/* Image Collection */}
      <section className="py-16 px-6 md:px-16 bg-[#f9f3ef] grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <img key={i} src={`/gallery${i}.jpg`} alt={`Gallery ${i}`} className="rounded-lg w-full" />
        ))}
      </section>

      {/* Our Programs */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Education", "Health", "Women Empowerment"].map((prog, idx) => (
            <div key={idx} className="bg-[#fffaf5] p-6 shadow rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{prog}</h3>
              <p>Making lives better through {prog.toLowerCase()} initiatives.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-16 bg-[#fef5ea] text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["--", "Lives Impacted"],
            ["--", "Volunteers"],
            ["--", "Projects Completed"],
          ].map(([stat, label], i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-4xl font-bold text-orange-500">{stat}</h3>
              <p className="text-lg">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What People Say</h2>
        <blockquote className="italic max-w-3xl mx-auto">
          "Working with Vishoka Foundation has been life-changing. Their dedication is truly inspiring."
        </blockquote>
        <p className="mt-4 font-semibold">– A Beneficiary</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 bg-[#fff3e0] text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">Join Us</button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2025 Vishoka Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
