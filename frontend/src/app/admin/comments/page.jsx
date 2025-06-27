'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';

export default function AdminTestimonialPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get('http://localhost:5000/testimonial');
      setTestimonials(res.data);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/testimonial/${id}`);
      setTestimonials(testimonials.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">All Testimonials</h2>

        {testimonials.length === 0 ? (
          <p className="text-gray-500">No testimonials available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t._id}
                className="bg-white p-4 rounded-lg shadow relative border border-gray-200"
              >
                <p className="text-gray-700 mb-3 italic">"{t.comment}"</p>
                <p className="text-sm text-gray-500 font-semibold text-right">– {t.name}</p>

                <button
                  onClick={() => handleDelete(t._id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
