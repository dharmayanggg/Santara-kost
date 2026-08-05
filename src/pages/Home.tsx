import { Phone, ShieldAlert, CheckCircle2, Bed, Calendar, Clock, Star, ChevronDown, MapPin, Package, Shirt, Snowflake, Wifi, TreePine, Trash2, ShieldCheck, Building, ShoppingBag, Landmark, Banknote, X, Map } from 'lucide-react';
import { testimonials, faqs, getWaLink, defaultWaMsg, harianWaMsg, mingguanWaMsg, bulananWaMsg, images, mapLink } from '../data';
import heroBg from '../assets/images/kost_bedroom_1785052358041.jpg';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-xl shadow-stone-200/50 mx-2 md:mx-4 mt-4">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Santara Kost Bedroom" className="w-full h-full object-cover" />
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
            className="inline-flex items-center gap-2 bg-brand-green text-white font-bold px-8 py-4 rounded-full hover:bg-brand-green-light hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-green/30"
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
                <span className="text-4xl font-extrabold text-emerald-700">Rp125.000</span>
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
                    <span>Kasur & Bantal</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Meja & Kursi</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kipas Angin</span>
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
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-green hover:shadow-lg hover:shadow-brand-green/20 transition-all mt-auto"
              >
                Reservasi Kamar
              </a>
            </div>
          </div>

          {/* Paket Mingguan */}
          <div className="bg-white border border-stone-200 flex flex-col relative rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
              Lebih Hemat 28%
            </div>
            <div className="bg-stone-100 p-6 text-center border-b border-stone-200 pt-8 rounded-t-3xl">
              <h3 className="text-xl font-bold text-stone-800 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" /> Tipe Mingguan
              </h3>
              <p className="text-stone-500 text-sm mt-1">(Max. 2 Orang)</p>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-emerald-700">Rp630.000</span>
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
                    <span>Kasur & Bantal</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Meja & Kursi</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kipas Angin</span>
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
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-green-light hover:shadow-lg transition-all mt-auto"
              >
                Reservasi Kamar
              </a>
            </div>
          </div>

          {/* Paket Bulanan */}
          <div className="bg-white border-2 border-emerald-500 flex flex-col relative rounded-3xl shadow-xl shadow-stone-200/80 hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1.5 tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
              Lebih Hemat 77%
            </div>
            <div className="bg-emerald-50 p-6 text-center border-b border-emerald-100 pt-8 rounded-t-3xl">
              <h3 className="text-xl font-bold text-emerald-900 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" /> Tipe Bulanan
              </h3>
              <p className="text-emerald-700/70 text-sm mt-1">(Max. 2 Orang)</p>
            </div>
            <div className="p-8 flex flex-col grow">
              <div className="text-center mb-8">
                <span className="text-4xl font-extrabold text-emerald-700">Rp950.000</span>
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
                    <span>Kasur & Bantal</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lemari Pakaian</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Meja & Kursi</span>
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kipas Angin</span>
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
                className="w-full inline-flex items-center justify-center gap-2 border-2 border-brand-green bg-brand-green text-white font-bold px-6 py-3.5 rounded-full hover:bg-brand-green hover:border-brand-green-light transition-all mt-auto"
              >
                Info Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Fasilitas & Layanan Tambahan */}
      <section className="py-16 px-4 bg-stone-100 rounded-[3rem] mx-2 md:mx-4 my-10 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Fasilitas Gratis</h2>
            <p className="text-stone-500">Pilihan fasilitas yang dapat digunakan bersama tanpa biaya tambahan.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Parkir Luas</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-600 mt-1 md:mt-2 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-full inline-block">Gratis</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl shrink-0">
                <TreePine className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Mini Garden</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-600 mt-1 md:mt-2 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-full inline-block">Gratis</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl shrink-0">
                <Shirt className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Cuci & Jemur</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-600 mt-1 md:mt-2 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-full inline-block">Gratis</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl shrink-0">
                <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Iuran Sampah</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-600 mt-1 md:mt-2 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-full inline-block">Gratis</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 md:gap-4 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-2xl shrink-0">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Keamanan</h4>
                <p className="text-[10px] md:text-xs font-bold text-emerald-600 mt-1 md:mt-2 uppercase tracking-wider bg-emerald-50 px-2 py-1 rounded-full inline-block">Gratis</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-3 tracking-tight">Layanan Tambahan</h2>
            <p className="text-stone-500">Fasilitas ekstra opsional yang disewakan secara bulanan.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:border-amber-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-amber-400"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl shrink-0">
                <Snowflake className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">AC Portable</h4>
                <p className="text-[11px] md:text-sm text-stone-600 font-medium mt-1">Rp 200rb/bln</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:border-amber-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-amber-400"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl shrink-0">
                <Package className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Kulkas Pribadi</h4>
                <p className="text-[11px] md:text-sm text-stone-600 font-medium mt-1">Rp 100rb/bln</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:border-amber-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-amber-400"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl shrink-0">
                <Wifi className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Akses Wi-Fi</h4>
                <p className="text-[11px] md:text-sm text-stone-600 font-medium mt-1">Rp 100rb/bln</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:border-amber-400 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-amber-400"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-50 text-amber-600 flex items-center justify-center rounded-2xl shrink-0">
                <Shirt className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-stone-800 text-sm md:text-base leading-tight">Mesin Cuci</h4>
                <p className="text-[11px] md:text-sm text-stone-600 font-medium mt-1">Rp 60rb/bln</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi Strategis */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4 tracking-tight">Lokasi Sangat Strategis</h2>
          <p className="text-stone-500 mb-12">Berada di pusat kota, memudahkan semua aktivitas harian kamu.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: ShoppingBag, label: "Indomaret", time: "1 menit" },
              { icon: TreePine, label: "Taman Mangga", time: "4 menit" },
              { icon: Building, label: "Kantor Bupati", time: "5 menit" },
              { icon: Building, label: "Rumah Sakit", time: "5 menit" },
              { icon: ShieldAlert, label: "Kantor Polisi", time: "5 menit" },
              { icon: Banknote, label: "ATM Terdekat", time: "5 menit" },
              { icon: ShoppingBag, label: "Pertokoan", time: "5 menit" },
              { icon: Landmark, label: "Pasar", time: "7 menit" },
            ].map((loc, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 p-5 md:p-6 flex flex-col items-center justify-center text-center hover:border-emerald-300 hover:shadow-lg transition-all">
                <loc.icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600 mb-3 shrink-0" />
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

      {/* 5. Tata Tertib */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-emerald-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-green/30">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-emerald-800 p-5 rounded-3xl shrink-0 text-amber-400">
              <ShieldAlert className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 leading-snug tracking-tight">
                Demi Kenyamanan & Keamanan Bersama,<br className="hidden md:block"/> Santara Kost Menerapkan Aturan Ketat:
              </h2>
              
              <ul className="space-y-5 text-stone-200">
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Jam Malam:</strong> Gerbang dikunci tepat pukul <strong>24.00 WITA</strong> (Jam 12 malam).
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Batasan Tamu:</strong> Tidak boleh membawa teman berkunjung lebih dari 4 orang ke dalam kamar. Teman menginap diizinkan asal menjaga ketertiban.
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Lingkungan Sehat:</strong> Dilarang keras mengonsumsi Miras (Minuman Keras), membawa Sajam (Senjata Tajam), dan Narkoba.
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 bg-amber-500 mt-2 shrink-0 rounded-full"></div>
                  <div>
                    <strong className="text-white">Kebersihan:</strong> Wajib menjaga kebersihan kamar dan area bersama kost.
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-brand-green text-sm text-stone-300 font-medium leading-relaxed">
                Catatan: Lingkungan sekitar kost banyak dihuni oleh aparat Kepolisian. Segala bentuk keributan, tindakan kriminal, atau pelanggaran (terutama miras & narkoba) akan <strong>langsung dilaporkan ke pihak RT dan Kepolisian</strong>.
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
            Gg Manggis 3, Jalan Santara No. 11, Uma Sima,<br/>
            Kecamatan Sumbawa, Kabupaten Sumbawa Besar,<br/>
            Nusa Tenggara Barat.
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
              className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-green-light transition-colors w-full sm:w-auto justify-center"
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
