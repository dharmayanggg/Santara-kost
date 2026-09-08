import { Phone, ShieldAlert, CheckCircle2, Bed, Calendar, Clock, Star, ChevronDown, MapPin, Shirt, TreePine, Trash2, ShieldCheck, Building, ShoppingBag, Landmark, Banknote, X, Map, ArrowRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials, faqs, getWaLink, defaultWaMsg, harianWaMsg, mingguanWaMsg, bulananWaMsg, images, mapLink, facadeBg } from '../data';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-xl shadow-stone-200/50 mx-2 md:mx-4 mt-4">
        <div className="absolute inset-0">
          <img src={facadeBg} alt="Santara Kost" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block px-5 py-2 bg-amber-500 text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-lg shadow-amber-500/30 mb-6">
            Santara Kost Sumbawa
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Hunian Nyaman & Aman<br />di Pusat Kota Sumbawa Besar
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl font-medium drop-shadow">
            Menyediakan sewa Harian dan Bulanan dengan fasilitas lengkap. Lingkungan tenang, tertib, dan strategis di Uma Sima.
          </p>
          <a 
            href={getWaLink(defaultWaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green-light text-stone-950 font-bold px-8 py-4 rounded-full hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-green-light/20"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">Info Lebih Lanjut</span>
          </a>
        </div>
      </header>

      {/* Galeri Home */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Gallery Kost Santara</h2>
            <p className="text-stone-500">Kenyamanan yang kami sediakan untuk kamu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.slice(0, 3).map((img, i) => (
              <div 
                key={i} 
                className="h-56 md:h-64 relative overflow-hidden rounded-3xl group shadow-md shadow-stone-200 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Fasilitas Santara Kost ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pilihan Paket & Tarif */}
      <section id="price" className="py-20 px-4 scroll-mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Pilihan Paket Sewa</h2>
          <p className="text-stone-500">Pilih paket sesuai kebutuhan kamu dengan fasilitas lengkap.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Paket Harian */}
          <div className="bg-white border border-stone-200 flex flex-col rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-300">
            <div className="bg-stone-100 p-6 text-center border-b border-stone-200">
              <h3 className="text-xl font-bold text-stone-800 flex items-center justify-center gap-2">
                <Bed className="w-5 h-5 text-amber-600" /> Tipe Harian
              </h3>
              <p className="text-stone-500 text-sm mt-1">(Max. 2 Orang)</p>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-emerald-700">Rp100.000</span>
                <span className="text-stone-500"> / Hari</span>
              </div>
              
              <div className="space-y-4 mb-8 grow">
                <h4 className="font-semibold text-stone-800 border-b border-stone-100 pb-2">Fasilitas Termasuk:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ukuran Kamar 4x4 meter</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kasur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kamar Mandi Dalam</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dapur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Bonus: Sabun, Shampo, Handuk, Air</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href={getWaLink(harianWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-light text-stone-950 font-bold px-6 py-3.5 rounded-full hover:bg-emerald-400 hover:shadow-lg hover:shadow-brand-green-light/20 transition-all mt-auto"
              >
                Reservasi Kamar
              </a>
            </div>
          </div>

          {/* Paket Mingguan */}
          <div className="bg-white border border-stone-200 flex flex-col relative rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
              Lebih Hemat 14%
            </div>
            <div className="bg-stone-100 p-6 text-center border-b border-stone-200 pt-8 rounded-t-3xl">
              <h3 className="text-xl font-bold text-stone-800 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" /> Tipe Mingguan
              </h3>
              <p className="text-stone-500 text-sm mt-1">(Max. 2 Orang)</p>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-emerald-700">Rp450.000</span>
                <span className="text-stone-500"> / Minggu</span>
              </div>
              
              <div className="space-y-4 mb-8 grow">
                <h4 className="font-semibold text-stone-800 border-b border-stone-100 pb-2">Fasilitas Termasuk:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ukuran Kamar 4x4 meter</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kasur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kamar Mandi Dalam</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dapur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Bonus: Sabun, Shampo, Handuk</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href={getWaLink(mingguanWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-light text-stone-950 font-bold px-6 py-3.5 rounded-full hover:bg-emerald-400 hover:shadow-lg transition-all mt-auto"
              >
                Reservasi Kamar
              </a>
            </div>
          </div>

          {/* Paket Bulanan */}
          <div className="bg-white border-2 border-emerald-500 flex flex-col relative rounded-3xl shadow-xl shadow-stone-200/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
              Lebih Hemat 62%
            </div>
            <div className="bg-emerald-50 p-6 text-center border-b border-emerald-100 pt-8 rounded-t-3xl">
              <h3 className="text-xl font-bold text-emerald-900 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" /> Tipe Bulanan
              </h3>
              <p className="text-emerald-700/70 text-sm mt-1">(Max. 2 Orang)</p>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-emerald-700">Rp850.000</span>
                <span className="text-stone-500"> / Bulan</span>
              </div>
              
              <div className="space-y-4 mb-8 grow">
                <h4 className="font-semibold text-stone-800 border-b border-stone-100 pb-2">Fasilitas Kamar Termasuk:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ukuran Kamar 4x4 meter</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kasur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kamar Mandi Dalam</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dapur</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Listrik Token Sendiri</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href={getWaLink(bulananWaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-light text-stone-950 font-bold px-6 py-3.5 rounded-full hover:bg-emerald-400 transition-all mt-auto"
              >
                Info Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fasilitas Gratis */}
      <section className="py-16 px-4 bg-stone-100 rounded-[3rem] mx-2 md:mx-4 my-10 shadow-inner">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Fasilitas Gratis</h2>
            <p className="text-stone-500">Pilihan fasilitas yang dapat digunakan bersama tanpa biaya tambahan.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: MapPin, label: "Parkir Luas" },
              { icon: TreePine, label: "Mini Garden" },
              { icon: Shirt, label: "Cuci & Jemur" },
              { icon: Trash2, label: "Iuran Sampah" },
              { icon: ShieldCheck, label: "Keamanan" },
              { icon: Droplets, label: "Air Mandi" },
            ].map((facility, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:shadow-lg transition-all">
                <facility.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 mb-4 shrink-0" />
                <h4 className="font-semibold text-stone-800 text-sm md:text-base mb-1.5 md:mb-2">{facility.label}</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full inline-block">Gratis</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi Strategis */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Lokasi Sangat Strategis</h2>
          <p className="text-stone-500 mb-12">Berada di pusat kota, memudahkan semua aktivitas harian kamu.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">
            {[
              { icon: ShoppingBag, label: "Indomaret", time: "1 menit" },
              { icon: TreePine, label: "Taman Mangga", time: "4 menit" },
              { icon: Building, label: "Kantor Bupati", time: "5 menit" },
              { icon: Building, label: "Rumah Sakit", time: "5 menit" },
              { icon: ShieldAlert, label: "Kantor Polisi", time: "5 menit" },
              { icon: Banknote, label: "ATM Terdekat", time: "5 menit" },
            ].map((loc, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:shadow-lg transition-all">
                <loc.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 mb-4 shrink-0" />
                <h4 className="font-semibold text-stone-800 text-sm md:text-base mb-1.5 md:mb-2">{loc.label}</h4>
                <p className="text-[10px] md:text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full inline-block">{loc.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimoni Grid */}
      <section className="py-20 px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Ulasan Penghuni</h2>
          <p className="text-stone-500">Mendengar langsung dari mereka yang telah merasakan kenyamanan Kos Harian Sumbawa dan Kos Bulanan Sumbawa bersama kami.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 hover:border-emerald-300 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-4 text-amber-400">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-stone-600 mb-6 text-sm leading-relaxed flex-grow italic">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-bold text-stone-800">{t.name}</div>
                <div className="text-xs font-medium text-emerald-600 uppercase tracking-wider">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Tata Tertib & Peraturan */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-emerald-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-green/30">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-emerald-800 p-5 rounded-3xl shrink-0 text-amber-400">
              <ShieldAlert className="w-12 h-12" />
            </div>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Tertib & Aman</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">
                    Ringkasan Peraturan Kost
                  </h2>
                </div>
                <Link 
                  to="/peraturan" 
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-2.5 rounded-full text-sm transition-colors self-start sm:self-auto shrink-0 shadow-md"
                >
                  <span>Lihat 13 Peraturan Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <ul className="space-y-4 text-stone-200">
                <li className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Bebas Stay Berdua:</strong> Penghuni bebas tinggal berdua dalam satu kamar tanpa biaya tambahan (maks. 2 orang).
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Tamu Maksimal 2 Orang:</strong> Boleh menerima tamu maksimal 2 orang dalam satu waktu dengan tetap menjaga ketenangan bersama.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Dilarang Minuman Keras:</strong> Segala jenis minuman beralkohol/keras dilarang keras di lingkungan Santara Kost.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Jam Malam 01.00 WITA:</strong> Jam malam maksimal pukul 01.00 WITA untuk menjaga ketenangan istirahat penghuni.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Fasilitas Gratis:</strong> Air dan iuran sampah 100% gratis tanpa biaya tambahan.
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-brand-green flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-sm text-stone-300 font-medium leading-relaxed">
                  SANTARA KOST — Nyaman, Bebas, Tetap Beraturan.
                </div>
                <Link 
                  to="/peraturan"
                  className="text-amber-400 hover:text-amber-300 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Baca ketentuan & harga lengkap sewa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Alamat & Kontak */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
            <Map className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-emerald-950 mb-6 tracking-tight">Alamat & Kontak Kami</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Jalan Baru, Gang Manggis 3, Uma Sima,<br/>
            Sumbawa Besar, NTB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-brown text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-brown-light transition-colors w-full sm:w-auto justify-center"
            >
              <MapPin className="w-5 h-5" />
              Buka di Google Maps
            </a>
            <a 
              href={getWaLink(defaultWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green-light text-stone-950 font-bold px-6 py-3.5 rounded-full hover:bg-emerald-400 transition-colors w-full sm:w-auto justify-center shadow-md shadow-brand-green-light/20"
            >
              <Phone className="w-5 h-5" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Pertanyaan Seputar Kost (FAQ)</h2>
            <p className="text-stone-500">Informasi umum yang sering ditanyakan oleh calon penghuni tentang Kost Sumbawa Besar.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-stone-200 [&_summary::-webkit-details-marker]:hidden hover:border-emerald-300 transition-colors shadow-sm">
                <summary className="flex items-center justify-between p-5 font-semibold text-stone-800 cursor-pointer list-none">
                  <span className="pr-6">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-stone-600 border-t border-stone-100 pt-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-brand-brown text-white rounded-full hover:bg-brand-brown-light transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
