'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

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
      toast.success('Deleted successfully');
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-black">All Testimonials</h2>

        {testimonials.length === 0 ? (
          <p className="text-gray-500">No testimonials available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg text-sm text-left text-gray-800">
              <thead className="bg-gray-100 text-gray-700 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Comment</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((t) => (
                  <tr
                    key={t._id}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 py-3 font-medium">{t.name}</td>
                    <td className="px-4 py-3">{t.email}</td>
                    <td className="px-4 py-3 max-w-md break-words italic">
                      “{t.comment}”
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(t._id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
