import { useState } from 'react';
import { X } from 'lucide-react';
import { images } from '../data';

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">Galeri Kost</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Jelajahi setiap sudut fasilitas kami. Kami merancang <strong>Kost Sumbawa Besar</strong> ini dengan mengutamakan kenyamanan, sirkulasi udara yang baik, dan lingkungan yang asri.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="h-64 relative overflow-hidden rounded-3xl group cursor-pointer shadow-md shadow-stone-200"
              onClick={() => setLightboxImg(img)}
            >
              <img src={img} alt={`Fasilitas Santara Kost ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 p-4 backdrop-blur-md transition-all" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors bg-stone-800/50 p-2 rounded-full">
            <X className="w-8 h-8" />
          </button>
          <img src={lightboxImg} alt="Enlarged gallery view" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
