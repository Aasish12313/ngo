'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function UserImpactPage() {
  const [impacts, setImpacts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/impact');
        setImpacts(res.data);
      } catch (err) {
        console.error('Failed to fetch impacts:', err);
      }
    };

    fetchImpactData();
  }, []);

  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c] font-sans">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-96">
        <img
          src="/gallery4.jpg"
          alt="Impact Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 drop-shadow-lg">Our Impact</h1>
          <p className="text-lg md:text-2xl font-light drop-shadow">
            See how Vishoka Foundation is making a difference
          </p>
        </div>
      </section>

      {/* Impact Cards from backend */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">Stories from the Ground</h2>

        {impacts.length === 0 ? (
          <p className="text-center text-gray-500">No impact stories yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impacts.map((impact, i) => (
              <motion.div
                key={impact._id}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-[#fffaf5] rounded-2xl shadow-md border border-orange-100 overflow-hidden transform transition duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={impact.imageUrl}
                    alt={impact.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
                <div className="p-5 text-left group-hover:bg-orange-50 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-orange-700 group-hover:text-orange-900 transition">
                    {impact.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{impact.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#fff3e0] text-center text-[#1c1c1c] relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-yellow-100 rounded-full opacity-30 blur-2xl z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-700">Want to be the change?</h2>
          <p className="mb-6 text-gray-700 text-lg">Donate, volunteer or partner with us today.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/get-involved')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </div>
  );
}
