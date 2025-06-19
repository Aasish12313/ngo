'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

const metrics = [
  { number: '500+', label: 'Lives Changed' },
  { number: '200', label: 'Volunteers' },
  { number: '50', label: 'Projects Completed' },
  { number: '1M+', label: 'Meals Served' },
];

const stories = [
  { img: '/hiring/1.jpg', title: 'Community Uplift', summary: 'Empowering local schools...' },
  { img: '/hiring/2.jpg', title: 'Health Camps', summary: 'Free medical camps...' },
  { img: '/hiring/3.jpg', title: 'Women Empowerment', summary: 'Skill trainings...' },
];

export default function ImpactPage() {
    const router = useRouter();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-64 md:h-96">
        <img
          src="/gallery4.jpg"
          alt="Impact Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Our Impact</h1>
          <p className="text-lg md:text-2xl">See how Vishoka Foundation is making a difference</p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-4xl font-bold mb-2">{m.number}</h2>
              <p className="text-lg">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 text-black px-4 md:px-20">
        <h2 className="text-3xl font-extrabold text-center mb-8">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-700">{s.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Want to be the change?</h2>
        <p className="mb-6">Donate, volunteer or partner with us today</p>
        <motion.button
  whileHover={{ scale: 1.05 }}
  onClick={() => router.push('/get-involved')}
  className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow-lg"
>
  Get Involved
</motion.button>
      </section>

      <Footer />
    </div>
  );
}
