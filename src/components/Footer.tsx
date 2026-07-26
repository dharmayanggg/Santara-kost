export default function Footer() {
  return (
    <footer className="bg-brand-green py-12 text-center border-t border-brand-green-light mt-auto">
      <div className="flex justify-center mb-6">
        <span className="inline-block px-5 py-2 bg-brand-green-light text-stone-300 text-xs font-bold tracking-wider uppercase rounded-full shadow-inner">
          Santara <span className="text-amber-400">Kost</span> Sumbawa
        </span>
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
