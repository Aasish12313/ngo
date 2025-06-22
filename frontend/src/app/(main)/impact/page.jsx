'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const metrics = [
  { number: '500+', label: 'Lives Changed' },
  { number: '200', label: 'Volunteers' },
  { number: '50', label: 'Projects Completed' },
  { number: '1M+', label: 'Meals Served' },
];

const stories = [
  {
    img: '/hiring/1.jpg',
    title: 'Community Uplift',
    summary: 'Empowering local schools to build better futures for children.',
  },
  {
    img: '/hiring/2.jpg',
    title: 'Health Camps',
    summary: 'Bringing medical aid and awareness to remote communities.',
  },
  {
    img: '/hiring/3.jpg',
    title: 'Women Empowerment',
    summary: 'Equipping women with skills, jobs, and confidence.',
  },
];

export default function ImpactPage() {
  const router = useRouter();

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
          <p className="text-lg md:text-2xl font-light drop-shadow">See how Vishoka Foundation is making a difference</p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-6 md:px-20 bg-[#fef5ea] text-center">
        <h2 className="text-3xl font-bold mb-10 text-orange-700">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-orange-300 border border-orange-100"
            >
              <h2 className="text-3xl font-bold text-orange-500 mb-2">{m.number}</h2>
              <p className="text-base font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories Section with Hover Effects */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-[#fffaf5] rounded-2xl shadow-md border border-orange-100 overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-5 text-left group-hover:bg-orange-50 transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-orange-700 group-hover:text-orange-900 transition">
                  {s.title}
                </h3>
                <p className="text-gray-700 text-sm">{s.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#fff3e0] text-center text-[#1c1c1c] relative overflow-hidden">
        {/* Background blur shapes */}
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
