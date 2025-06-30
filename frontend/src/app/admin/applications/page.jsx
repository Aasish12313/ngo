'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2, Eye, Download } from 'lucide-react';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('All');
  const [loading, setLoading] = useState(true);

  const positions = [
    'All',
    'Community Outreach Volunteer',
    'Fundraising Intern',
    'Social Media Manager',
    'Event Coordinator',
    'Field Data Collector',
  ];

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/applications/getall`);
      setApplications(res.data);
      setFiltered(res.data);
    } catch (err) {
      toast.error('Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;

    try {
      toast.loading('Deleting...');
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/applications/delete/${id}`);
      toast.dismiss();
      toast.success('Application deleted successfully');
      const updated = applications.filter((app) => app._id !== id);
      setApplications(updated);
      filterByPosition(selectedPosition, updated);
    } catch (err) {
      toast.dismiss();
      toast.error('Failed to delete application');
    }
  };

  const filterByPosition = (position, data = applications) => {
    setSelectedPosition(position);
    if (position === 'All') {
      setFiltered(data);
    } else {
      setFiltered(data.filter((app) => app.position === position));
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-slate-100 p-6 sm:p-10">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Volunteer Applications
        </h1>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            value={selectedPosition}
            onChange={(e) => filterByPosition(e.target.value)}
            className="text-black border border-slate-300 rounded-md px-5 py-2 bg-white shadow-sm hover:border-slate-400 transition"
          >
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        {/* Loader / No Data */}
        {loading ? (
          <div className="text-center text-gray-500">Loading applications...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500">No applications found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
              <thead className="bg-slate-200 text-black text-sm">
                <tr>
                  <th className="px-5 py-3 text-left">Name</th>
                  <th className="px-5 py-3 text-left">Email</th>
                  <th className="px-5 py-3 text-left">Phone</th>
                  <th className="px-5 py-3 text-left">Position</th>
                  <th className="px-5 py-3 text-left">Message</th>
                  <th className="px-5 py-3 text-left">Resume</th>
                  <th className="px-5 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <tr key={app._id} className="border-b hover:bg-slate-100 transition">
                    <td className="px-5 py-3 text-black">{app.name}</td>
                    <td className="px-5 py-3 text-black">{app.email}</td>
                    <td className="px-5 py-3 text-black">{app.phone}</td>
                    <td className="px-5 py-3 text-black">{app.position}</td>
                    <td
                      className="px-5 py-3 max-w-xs truncate text-black"
                      title={app.message}
                    >
                      {app.message}
                    </td>
                    <td className="px-5 py-3 space-y-1 text-black">
                      {app.resumeUrl ? (
                        <div className="flex flex-col space-y-1">
                          <a
                            href={`https://docs.google.com/gview?embedded=true&url=${app.resumeUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:underline"
                          >
                            <Eye className="w-4 h-4" /> View
                          </a>
                          <a
                            href={`${app.resumeUrl}?response-content-disposition=attachment`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-green-600 hover:underline"
                          >
                            <Download className="w-4 h-4" /> Download
                          </a>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">Not uploaded</span>
                      )}
                    </td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => deleteApplication(app._id)}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-sm transition"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminApplications;
