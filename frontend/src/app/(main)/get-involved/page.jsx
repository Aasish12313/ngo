'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import Footer from '../../../components/Footer';
// import Navbar from '../../../components/Navbar';
import VolunteerModal from '../../../components/VolunteerFormModal'; // ✅ Importing correctly

const GetInvolvedPage = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <Navbar /> */}

      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-20 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Get Involved with Vishoka Foundation</h1>
        <p className="text-lg max-w-2xl text-gray-600">
          Choose how you want to contribute to the change.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 text-white px-8 py-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            Volunteer
          </button>
          
          <button
  onClick={() => router.push('/careers')}  // ✅ Must match Home page
  className="bg-blue-500 text-white px-8 py-3 rounded-full shadow hover:bg-blue-600 transition"
>
  Join Us (Careers)
</button>


          <button
            onClick={() => router.push('/donate')}
            className="bg-green-500 text-white px-8 py-3 rounded-full shadow hover:bg-green-600 transition"
          >
            Donate
          </button>
        </div>
      </div>

      {/* ✅ Use the imported component name */}
      <VolunteerModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* <Footer /> */}
    </div>
  );
};

export default GetInvolvedPage;
