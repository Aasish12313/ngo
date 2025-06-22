'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Dream Shala',
    location: 'Lucknow',
    raised: 375000,
    target: 500000,
    beneficiaries: 850,
    progress: 75,
  },
  {
    name: ' Red Relief Campaign',
    location: 'Rajasthan',
    raised: 480000,
    target: 800000,
    beneficiaries: 1200,
    progress: 60,
  },
  {
    name: 'Youth Ki Awaaz Fellowship',
    location: 'Karnataka',
    raised: 135000,
    target: 300000,
    beneficiaries: 320,
    progress: 45,
  },
];

export default function ActiveProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-5">🚀 Active Projects</h2>

      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="mb-5 pb-4 border-b last:border-b-0 last:pb-0 group"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-md font-semibold text-blue-700">
              {project.name}
            </h3>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium group-hover:scale-105 transition">
              📍 {project.location}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2 mb-3 overflow-hidden">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 animate-pulse"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>

          <div className="text-sm text-gray-600 grid grid-cols-3 gap-2">
            <span>💰 <strong>₹{project.raised.toLocaleString()}</strong> Raised</span>
            <span>🎯 Target: ₹{project.target.toLocaleString()}</span>
            <span>👥 Beneficiaries: {project.beneficiaries}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
