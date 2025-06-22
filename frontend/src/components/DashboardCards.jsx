'use client';
import { motion } from 'framer-motion';
import { Users, FolderOpen, Heart, PieChart } from 'lucide-react';

const cardData = [
  {
    title: 'Total Donations',
    value: '₹0',
    change: '+12.5% from last month',
    icon: <PieChart className="text-blue-600" />,
    bg: 'bg-blue-50',
  },
  {
    title: 'Active Donors',
    value: '0',
    change: '+89 new this month',
    icon: <Heart className="text-green-600" />,
    bg: 'bg-green-50',
  },
  {
    title: 'Active Projects',
    value: '0',
    change: 'Across 8 states',
    icon: <FolderOpen className="text-purple-600" />,
    bg: 'bg-purple-50',
  },
  {
    title: 'Beneficiaries Served',
    value: '0',
    change: '+856 this month',
    icon: <Users className="text-orange-600" />,
    bg: 'bg-orange-50',
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className={`p-5 rounded-2xl shadow-sm border border-transparent hover:border-gray-200 transition hover:shadow-xl ${card.bg}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, type: 'spring' }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="bg-white p-2 rounded-full shadow-inner"
            >
              {card.icon}
            </motion.div>
            <div>
              <h4 className="text-sm text-gray-600">{card.title}</h4>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p className="text-xs text-gray-500">{card.change}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
