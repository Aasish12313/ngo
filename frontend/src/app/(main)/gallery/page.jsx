import GalleryClient from './GalleryClient';
import fs from 'fs';
import path from 'path';

export default function GalleryPage() {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const files = fs.readdirSync(galleryPath);
  
  // Filter only image files (optional)
  const images = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  return <GalleryClient images={images} />;
}
