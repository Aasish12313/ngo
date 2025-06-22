'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Info, AlertTriangle, Heart } from 'lucide-react';

const activities = [
  {
    icon: <Heart className="text-green-500" />,
    message: 'New donation of ₹25,000 received from Rajesh Kumar',
    time: '2 hours ago',
    amount: '₹25,000',
    color: 'bg-green-50',
  },
  {
    icon: <CheckCircle className="text-blue-500" />,
    message: 'Education project in Mumbai reached 80% completion',
    time: '4 hours ago',
    color: 'bg-blue-50',
  },
  {
    icon: <AlertTriangle className="text-yellow-500" />,
    message: 'Monthly report submission deadline approaching',
    time: '6 hours ago',
    color: 'bg-yellow-50',
  },
  {
    icon: <Heart className="text-green-500" />,
    message: 'Corporate sponsorship from TechCorp India',
    time: '1 day ago',
    amount: '₹1,50,000',
    color: 'bg-green-50',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg font-bold text-gray-800 mb-4">🕓 Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((activity, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`flex justify-between items-center p-3 rounded-md border border-gray-100 ${activity.color}`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-1">{activity.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-700">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
            {activity.amount && (
              <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {activity.amount}
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
