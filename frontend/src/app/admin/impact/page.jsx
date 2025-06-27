'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { UploadCloud, Trash2, Plus } from 'lucide-react';

export default function AdminImpactPage() {
  const [impacts, setImpacts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [previewURL, setPreviewURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchImpacts();
  }, []);

  const fetchImpacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/impact');
      setImpacts(res.data);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
      setPreviewURL(URL.createObjectURL(e.target.files[0]));
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleUpload = async () => {
    if (!form.title || !form.description || !form.image) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('image', form.image);

    try {
      const res = await axios.post('http://localhost:5000/impact/upload', formData);
      setImpacts([res.data, ...impacts]);
      setForm({ title: '', description: '', image: null });
      setPreviewURL('');
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/impact/${id}`);
      setImpacts(impacts.filter((impact) => impact._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-8">
      <div className="max-w-6xl mx-auto">

        {/* Upload Form */}
       <div className="bg-white rounded-xl shadow p-6 mb-10">
  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
    <Plus className="text-blue-600" /> Add New Impact
  </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="title"
              placeholder="Impact Title"
              value={form.title}
              onChange={handleChange}
              className="input input-bordered w-full text-black bg-white"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="file-input file-input-bordered w-full text-black bg-white"
            />
          </div>

          <textarea
            name="description"
            placeholder="Impact Description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full mt-4 text-black bg-white"
            rows="3"
          />

          {previewURL && (
            <img
              src={previewURL}
              alt="Preview"
              className="h-40 mt-4 rounded object-contain border"
            />
          )}

          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <UploadCloud size={18} />
            {isUploading ? 'Uploading...' : 'Upload Impact'}
          </button>
        </div>

        {/* Display Impact Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact) => (
            <div
              key={impact._id}
              className="bg-white rounded-xl shadow overflow-hidden group transition hover:shadow-lg relative"
            >
              <img
                src={impact.imageUrl}
                alt={impact.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-black">{impact.title}</h3>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </div>
              <button
                onClick={() => handleDelete(impact._id)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition"
                title="Delete impact"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {impacts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No impacts uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
