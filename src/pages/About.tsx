import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { mapLink, getWaLink, defaultWaMsg } from '../data';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-20 px-4 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">Tentang Santara Kost</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Menghadirkan standar hunian modern, nyaman, dan strategis di pusat kota.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-stone-200/50 mb-16 border border-stone-100">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Profil Kami</h2>
          <div className="space-y-6 text-stone-700 leading-relaxed text-lg font-light">
            <p>
              Berdiri dengan visi memberikan kenyamanan maksimal bagi para perantau, pekerja, dan mahasiswa, <strong>Santara Kost</strong> telah menjadi pilihan utama bagi mereka yang mencari <strong>Kost Sumbawa Besar</strong> berkualitas.
            </p>
            <p>
              Kami mengerti bahwa tempat tinggal bukan sekadar tempat tidur. Oleh karena itu, kami menyediakan opsi <strong>Kos Harian Sumbawa</strong> bagi kamu yang sedang dalam perjalanan bisnis atau liburan singkat, serta <strong>Kos Bulanan Sumbawa</strong> untuk kamu yang membutuhkan hunian menetap yang tenang dan asri.
            </p>
            <p>
              Salah satu keunggulan utama kami adalah lokasi. Jika kamu mencari <strong>kos pusat kota sumbawa</strong>, Santara Kost berada tepat di jantung aktivitas. Hanya beberapa menit menuju pusat pemerintahan, rumah sakit, dan sentra ekonomi. Walaupun berada di pusat, kami tetap mempertahankan komitmen sebagai penyedia <strong>Kos Murah Sumbawa</strong>. kamu bisa menemukan <strong>Kos di bawah satu juta sumbawa</strong> dengan kualitas kamar yang lega (ukuran 4x4 meter), sirkulasi udara yang baik, dan fasilitas setara hunian premium, menjadikannya <strong>kos kota sumbawa</strong> yang paling diminati.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-emerald-950 mb-6 tracking-tight">Alamat & Kontak</h2>
            <div className="flex items-start justify-center gap-4 mb-6">
              <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <p className="text-lg leading-relaxed text-stone-700 text-left">
                Gg Manggis 3, Jalan Santara No. 11, Uma Sima,<br/>
                Kecamatan Sumbawa, Kabupaten Sumbawa Besar,<br/>
                Nusa Tenggara Barat.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-600 transition-colors bg-emerald-50 px-5 py-2.5 rounded-full">
                <ExternalLink className="w-4 h-4" /> Buka di Google Maps
              </a>
            </div>
            
            <div className="bg-emerald-900 p-8 rounded-3xl shadow-xl shadow-brand-green/20 text-left max-w-xl mx-auto">
              <h3 className="text-white font-bold mb-3 text-xl">Hubungi Kami</h3>
              <p className="mb-8 text-emerald-100/80">Admin kami siap membantu menjawab pertanyaan kamu atau menjadwalkan survei lokasi kos.</p>
              <a 
                href={getWaLink(defaultWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-amber-500 text-stone-900 font-bold px-6 py-4 rounded-full hover:bg-amber-400 hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                WhatsApp 0813-3637-913
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
