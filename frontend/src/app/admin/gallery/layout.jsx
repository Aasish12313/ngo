'use client';

export default function GalleryLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-black"> Admin Gallery</h1>
          <p className="text-gray-600 mt-1">
            Upload, manage, and remove images displayed in the public gallery.
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
