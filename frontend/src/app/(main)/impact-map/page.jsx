'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
// import Footer from '../../../components/Footer';
// import Navbar from '../../../components/Navbar';

const MapWithNoSSR = dynamic(() => import('../../../components/MapView'), {
  ssr: false,
});

const programs = [
  {
    id: 1,
    name: 'Dream Shala',
    theme: 'Child Education & Holistic Development',
    location: 'Aminabad, Lucknow',
    beneficiaries: '300+',
    image: '/map/dream-shala.png',
    lat: 26.8487,
    lng: 80.9431,
    tagColor: 'bg-yellow-100 text-yellow-800',
    description:
      'Enhances literacy and life skills for underserved children through creative learning and theatre in urban slums.',
  },
  {
    id: 2,
    name: 'Red Relief Campaign | Youth Ki Awaaz',
    theme: 'Gender Justice & SRHR Awareness',
    location: 'Telibagh, Lucknow',
    beneficiaries: '1000+',
    image: '/map/red-relief.png',
    lat: 26.7964,
    lng: 80.9362,
    tagColor: 'bg-red-100 text-red-800',
    description:
      'Creates safe spaces for youth and women to engage in dialogue on reproductive rights and consent via plays and workshops.',
  },
  {
    id: 3,
    name: 'Youth Ki Awaaz Fellowship',
    theme: 'Youth Leadership & Civic Engagement',
    location: 'Gomti Nagar Extension, Lucknow',
    beneficiaries: '500+',
    image: '/map/fellowship.png',
    lat: 26.8285,
    lng: 81.0211,
    tagColor: 'bg-blue-100 text-blue-800',
    description:
      'Equips youth from marginalized backgrounds with leadership tools through theatre-based campaigns and fellowships.',
  },
  {
    id: 4,
    name: 'Van Zinda To Hum Zinda',
    theme: 'Climate Action & Environmental Justice',
    location: 'Dubagga (Mohan Road), Lucknow',
    beneficiaries: '1500+',
    image: '/map/van-zinda.png',
    lat: 26.8260,
    lng: 80.8612,
    tagColor: 'bg-green-100 text-green-800',
    description:
      'Drives ecological sustainability through forest restoration, urban farming, green art, and seed bomb initiatives.',
  }
];

export default function ImpactMapPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <section className="flex flex-col lg:flex-row flex-grow overflow-hidden">
        <div className="w-full lg:w-3/4 h-[85vh] relative">
          <MapWithNoSSR programs={programs} setSelectedProgram={setSelectedProgram} />
          {selectedProgram && (
            <div className="absolute top-5 left-5 z-[9999] bg-white shadow-2xl rounded-2xl p-4 w-96 max-h-[90vh] overflow-y-auto border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-indigo-700">{selectedProgram.name}</h2>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-400 hover:text-red-600 text-lg font-bold"
                >
                  ×
                </button>
              </div>
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.name}
                width={350}
                height={200}
                className="rounded-xl mb-3"
              />
              <p className="text-sm text-gray-600 mb-1"><strong>Theme:</strong> {selectedProgram.theme}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {selectedProgram.location}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Beneficiaries:</strong> {selectedProgram.beneficiaries}</p>
              <p className="text-sm text-gray-700 mt-2">{selectedProgram.description}</p>
            </div>
          )}
        </div>

        <aside className="w-full lg:w-1/4 bg-white border-l border-gray-200 p-6 overflow-y-auto max-h-[85vh]">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Programs</h3>
          <p className="text-sm text-gray-500 mb-4">Click on any pin or card to view more information.</p>
          <div className="space-y-4">
            {programs.map((program) => (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-indigo-800 mb-1">{program.name}</h4>
                <p className="text-sm text-gray-600 flex items-center mb-1">📍 {program.location}</p>
                <p className="text-sm text-gray-500 flex items-center mb-2">👥 {program.beneficiaries} beneficiaries</p>
                <div className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${program.tagColor}`}>
                  {program.theme}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
