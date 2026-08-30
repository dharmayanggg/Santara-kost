import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-green py-12 text-center border-t border-brand-green-light mt-auto">
      <div className="flex justify-center mb-8">
        <Link to="/" className="inline-block p-2">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/dharmayanggg/storage-image/main/logo%20santara%20transparant.png" 
              alt="Santara Kost Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="flex flex-col justify-center pt-1 text-left">
              <span className="font-bold text-[#FFD700] text-lg md:text-xl leading-none tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>SANTARA KOST</span>
              <span className="text-white text-lg md:text-xl leading-none -mt-1 ml-0.5" style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-2deg)' }}>Sumbawa</span>
            </div>
          </div>
        </Link>
      </div>
      
      {/* SEO Text Block */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-8 text-white/50 text-xs sm:text-sm leading-relaxed font-light">
        Santara Kost adalah pilihan tepat untuk <strong>Kost Sumbawa Besar</strong>. Kami menawarkan <strong>Kos Harian Sumbawa</strong> dan <strong>Kos Bulanan Sumbawa</strong> dengan fasilitas lengkap dan nyaman. Mencari <strong>Kos Murah Sumbawa</strong>? Kami memberikan solusi <strong>Kos di bawah satu juta sumbawa</strong> dengan kualitas premium. Temukan <strong>kos kota sumbawa</strong> terbaik yang berlokasi strategis sebagai pilihan <strong>kos pusat kota sumbawa</strong> yang aman dan bersih.
      </div>

      <p className="text-white/60 text-sm font-medium">
        &copy; {new Date().getFullYear()} Santara Kost Sumbawa. All Rights Reserved.
      </p>
    </footer>
  );
}
