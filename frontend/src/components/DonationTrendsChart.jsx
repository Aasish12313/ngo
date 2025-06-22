'use client';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  { month: 'Jan', donations: 180000 },
  { month: 'Feb', donations: 250000 },
  { month: 'Mar', donations: 320000 },
  { month: 'Apr', donations: 360000 },
  { month: 'May', donations: 370000 },
  { month: 'Jun', donations: 450000 },
];

export default function DonationTrendsChart() {
  return (
    <div className="h-[360px] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-50">
      <h2 className="text-xl font-extrabold text-gray-800 mb-1">📈 Monthly Donation Trends</h2>
      <p className="text-gray-500 text-sm mb-4">
        Track donation patterns over the last 6 months
      </p>
      <ResponsiveBar
        data={data}
        keys={['donations']}
        indexBy="month"
        margin={{ top: 30, right: 30, bottom: 50, left: 70 }}
        padding={0.4}
        colors={{ scheme: 'set2' }}
        borderRadius={4}
        enableLabel={false}
        axisBottom={{
          tickSize: 6,
          tickPadding: 8,
          legend: 'Month',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 6,
          tickPadding: 6,
          legend: 'Donations (₹)',
          legendPosition: 'middle',
          legendOffset: -60,
          format: (value) => `₹${(value / 1000).toFixed(0)}k`,
        }}
        animate={true}
        motionConfig="gentle"
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#555',
              },
            },
            legend: {
              text: {
                fill: '#666',
                fontSize: 13,
                fontWeight: 600,
              },
            },
          },
          tooltip: {
            container: {
              background: '#ffffff',
              color: '#333',
              fontSize: 13,
              borderRadius: 6,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            },
          },
          labels: {
            text: {
              fill: '#111',
            },
          },
        }}
        tooltip={({ id, value, indexValue }) => (
          <strong className="text-sm">
            {indexValue}: ₹{value.toLocaleString()}
          </strong>
        )}
      />
    </div>
  );
}
