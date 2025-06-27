'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, UploadCloud, ImagePlus } from 'lucide-react';

export default function AdminGalleryPage() {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/gallery');
      setImages(res.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await axios.post('http://localhost:5000/gallery/upload', formData);
      setImages([res.data, ...images]);
      setSelectedFile(null);
      setPreviewURL('');
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/gallery/${id}`);
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] p-8">
      <div className="max-w-7xl mx-auto">

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ImagePlus className="text-blue-600" /> Upload New Image
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full sm:w-1/2"
            />
            <button
              onClick={handleUpload}
              disabled={isUploading || !selectedFile}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <UploadCloud size={20} />
              {isUploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {previewURL && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <img src={previewURL} alt="Preview" className="h-48 rounded border object-contain" />
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img._id} className="group relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={img.imageUrl}
                alt="Gallery"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => handleDelete(img._id)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition"
                title="Delete image"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No images uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
