'use client';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ImpactAdmin = () => {
  const [formData, setFormData] = useState({
    number: '',
    label: '',
    title: '',
    summary: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Uploading image...');
    try {
      const imgData = new FormData();
      imgData.append('file', formData.image);
      imgData.append('upload_preset', 'anupreset47');
      imgData.append('cloud_name', 'du4tklzpq');

      const cloudRes = await axios.post('https://api.cloudinary.com/v1_1/du4tklzpq/image/upload', imgData);
      const imageUrl = cloudRes.data.secure_url;

      toast.dismiss();
      toast.loading('Saving impact data...');

      await axios.post('/api/impact', {
        number: formData.number,
        label: formData.label,
        title: formData.title,
        summary: formData.summary,
        image: imageUrl,
      });

      toast.dismiss();
      toast.success('Impact added successfully!');
      setFormData({ number: '', label: '', title: '', summary: '', image: null });
    } catch (error) {
      toast.dismiss();
      toast.error('Error adding impact.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Add New Impact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="number" type="text" value={formData.number} onChange={handleChange}
          placeholder="Number (e.g., 500+)" className="w-full p-3 border rounded" required />
        <input name="label" type="text" value={formData.label} onChange={handleChange}
          placeholder="Label (e.g., Lives Changed)" className="w-full p-3 border rounded" required />
        <input name="title" type="text" value={formData.title} onChange={handleChange}
          placeholder="Story Title" className="w-full p-3 border rounded" required />
        <textarea name="summary" value={formData.summary} onChange={handleChange}
          placeholder="Short Summary" className="w-full p-3 border rounded" required />
        <input type="file" accept="image/*" onChange={handleImage}
          className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded">
          Submit Impact
        </button>
      </form>
    </div>
  );
};

export default ImpactAdmin;
