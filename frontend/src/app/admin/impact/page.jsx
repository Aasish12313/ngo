'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { ClipboardEdit, FileImage, Type, TextCursorInput } from 'lucide-react';

export default function AdminImpactPage() {
  const [formData, setFormData] = useState({
    type: 'metric',
    label: '',
    number: '',
    title: '',
    summary: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = '';

      if (formData.type === 'story' && formData.image) {
        const imgData = new FormData();
        imgData.append('file', formData.image);
        imgData.append('upload_preset', 'anupreset47');
        imgData.append('cloud_name', 'du4tklzpq');

        const res = await axios.post('https://api.cloudinary.com/v1_1/du4tklzpq/image/upload', imgData);
        imageUrl = res.data.secure_url;
      }

      const response = await axios.post('http://localhost:5000/impact/add', {
        type: formData.type,
        number: formData.number,
        label: formData.label,
        title: formData.title,
        summary: formData.summary,
        image: imageUrl,
      });

      console.log('Saved:', response.data);
      toast.success('Impact data saved!');
      setFormData({ type: 'metric', label: '', number: '', title: '', summary: '', image: null });
    } catch (err) {
      console.error('Save failed:', err.response?.data || err.message);
      toast.error('Failed to save data.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-[#1c1c1c] font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-orange-700 text-center mb-8"
      >
        Add New Impact Entry
      </motion.h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-orange-100">
        {/* Toggle */}
        <div className="flex justify-center gap-6">
          <label className={`cursor-pointer px-4 py-2 rounded-full ${formData.type === 'metric' ? 'bg-orange-500 text-white' : 'bg-gray-200'} transition`}>
            <input type="radio" name="type" value="metric" className="hidden" checked={formData.type === 'metric'} onChange={handleChange} />
            Metric
          </label>
          <label className={`cursor-pointer px-4 py-2 rounded-full ${formData.type === 'story' ? 'bg-orange-500 text-white' : 'bg-gray-200'} transition`}>
            <input type="radio" name="type" value="story" className="hidden" checked={formData.type === 'story'} onChange={handleChange} />
            Story
          </label>
        </div>

        {/* Metric Fields */}
        {formData.type === 'metric' && (
          <>
            <div className="relative">
              <TextCursorInput className="absolute top-3 left-3 text-gray-400" size={18} />
              <input type="text" name="number" placeholder="e.g., 1M+" value={formData.number}
                onChange={handleChange}
                className="w-full pl-10 border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-orange-300 outline-none transition"
                required />
            </div>
            <div className="relative">
              <ClipboardEdit className="absolute top-3 left-3 text-gray-400" size={18} />
              <input type="text" name="label" placeholder="e.g., Meals Served" value={formData.label}
                onChange={handleChange}
                className="w-full pl-10 border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-orange-300 outline-none transition"
                required />
            </div>
          </>
        )}

        {/* Story Fields */}
        {formData.type === 'story' && (
          <>
            <div className="relative">
              <Type className="absolute top-3 left-3 text-gray-400" size={18} />
              <input type="text" name="title" placeholder="Story Title" value={formData.title}
                onChange={handleChange}
                className="w-full pl-10 border border-gray-300 rounded-lg py-2 focus:ring-2 focus:ring-orange-300 outline-none transition"
                required />
            </div>

            <textarea name="summary" placeholder="Story Summary" value={formData.summary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 outline-none transition"
              required />

            <div className="relative">
              <FileImage className="absolute top-3 left-3 text-gray-400" size={18} />
              <input type="file" name="image" accept="image/*"
                onChange={handleChange}
                className="w-full pl-10 py-2 border border-gray-300 rounded-lg file:cursor-pointer file:mr-4 file:bg-orange-500 file:border-0 file:text-white file:rounded file:px-4"
                required />
            </div>
          </>
        )}

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow transition"
          >
            Save Impact
          </motion.button>
        </div>
      </form>
    </div>
  );
}
