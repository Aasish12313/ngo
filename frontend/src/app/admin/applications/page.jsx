
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const confirmDelete = window.confirm('Are you sure you want to delete this application?');
    if (!confirmDelete) return;

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
      const filteredData = data.filter((app) => app.position === position);
      setFiltered(filteredData);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">All Job Applications</h1>

        {/* Filter Dropdown */}
        <div className="mb-6 flex justify-center">
          <select
            value={selectedPosition}
            onChange={(e) => filterByPosition(e.target.value)}
            className="px-4 py-2 border border-purple-300 rounded-md text-purple-800 shadow-sm"
          >
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500">No applications found.</div>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full table-auto">
              <thead className="bg-purple-200 text-purple-900">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Position</th>
                  <th className="py-3 px-4 text-left">Message</th>
                  <th className="py-3 px-4 text-left">Resume</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <tr key={app._id} className="border-b text-gray-700 hover:bg-purple-100">
                    <td className="py-2 px-4">{app.name}</td>
                    <td className="py-2 px-4">{app.email}</td>
                    <td className="py-2 px-4">{app.phone}</td>
                    <td className="py-2 px-4">{app.position}</td>
                    <td className="py-2 px-4 max-w-xs truncate" title={app.message}>
                      {app.message}
                    </td>
                    <td className="py-2 px-4 space-y-1">
                      {/* View Resume via Google Docs */}
                      {app.resumeUrl ? (
                        <div className="flex flex-col space-y-1">
                          <a
                            href={`https://docs.google.com/gview?embedded=true&url=${app.resumeUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View Resume
                          </a>
                          <a
                            href={`${app.resumeUrl}?response-content-disposition=attachment`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 underline"
                          >
                            Download
                          </a>
                        </div>
                      ) : (
                        <span className="text-gray-400">Not uploaded</span>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => deleteApplication(app._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
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

