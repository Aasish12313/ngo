'use client';
import { ResponsivePie } from '@nivo/pie';

const data = [
  { id: 'Direct Programs', label: 'Direct Programs', value: 1598400, color: '#3B82F6' },
  { id: 'Administrative', label: 'Administrative', value: 491200, color: '#10B981' },
  { id: 'Fundraising', label: 'Fundraising', value: 245600, color: '#F59E0B' },
  { id: 'Emergency Fund', label: 'Emergency Fund', value: 122800, color: '#EF4444' },
];

const FundAllocationChart = () => (
  <div className="bg-white p-6 rounded-xl shadow-md h-[360px] mt-6 border border-gray-100">
    <h2 className="text-lg font-bold text-gray-800 mb-2">💸 Fund Allocation Breakdown</h2>
    <p className="text-sm text-gray-500 mb-4">
      How your donations are being utilized across different areas
    </p>
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 40, bottom: 50, left: 40 }}
      innerRadius={0.6}
      padAngle={1}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={{ datum: 'data.color' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333"
      arcLinkLabelsThickness={1}
      arcLinkLabelsDiagonalLength={12}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
      tooltip={({ datum }) => (
        <div className="text-sm font-medium text-gray-800">
          {datum.label}: ₹{datum.value.toLocaleString()}
        </div>
      )}
      theme={{
        tooltip: {
          container: {
            background: '#fff',
            color: '#333',
            fontSize: 13,
            borderRadius: 6,
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
          },
        },
      }}
    />
  </div>
);

export default FundAllocationChart;
