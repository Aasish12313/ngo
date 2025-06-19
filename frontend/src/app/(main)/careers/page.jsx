'use client';
import { useRouter } from 'next/navigation';


const positions = [
  { title: 'Community Outreach Volunteer', type: 'Volunteer', location: 'Remote/Field' },
  { title: 'Fundraising Intern', type: 'Internship', location: 'Remote' },
  { title: 'Social Media Manager', type: 'Full-time', location: 'Lucknow' },
  { title: 'Event Coordinator', type: 'Part-time', location: 'Remote' },
  { title: 'Field Data Collector', type: 'Volunteer', location: 'Multiple Cities' },
];

const CareersPage = () => {
  const router = useRouter();

  const handleApplyClick = (position) => {
    router.push(`/careers/apply?position=${encodeURIComponent(position.title)}`);
  };

  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-12 px-4 sm:px-8 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-4">
          Open Positions at Vishoka Foundation
        </h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          Find the perfect role and make an impact with us!
        </p>
        <div className="space-y-6 max-w-3xl mx-auto">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-md border border-purple-300 p-6 rounded-xl shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-900">{position.title}</h2>
              <p className="text-gray-600 mt-2">Type: {position.type} | Location: {position.location}</p>
              <button
                onClick={() => handleApplyClick(position)}
                className="mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-orange-400 shadow-lg transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
   
    </>
  );
};

export default CareersPage;
