import { 
  Users, 
  UserCheck, 
  WineOff, 
  Sparkles, 
  Zap, 
  Droplets, 
  Moon, 
  Dog, 
  Wrench, 
  MessageSquare, 
  AlertTriangle, 
  CreditCard, 
  CheckCircle2, 
  Phone,
  Home as HomeIcon,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { getWaLink, defaultWaMsg } from '../data';

export default function Rules() {
  const rulesList = [
    {
      num: 1,
      title: "BEBAS STAY BERDUA",
      desc: "Penghuni bebas tinggal berdua dalam satu kamar. Tidak ada biaya tambahan selama jumlah penghuni maksimal 2 orang.",
      icon: Users,
      badge: "Bebas Biaya Tambahan"
    },
    {
      num: 2,
      title: "MAKSIMAL 2 ORANG",
      desc: "Satu kamar hanya diperbolehkan dihuni oleh maksimal 2 orang.",
      icon: UserCheck,
      badge: "Kapasitas Kamar"
    },
    {
      num: 3,
      title: "TAMU MAKSIMAL 2 ORANG",
      desc: "Boleh menerima teman/tamu, tetapi maksimal 2 orang tamu dalam satu waktu. Mohon tetap menjaga ketenangan dan kenyamanan penghuni lain.",
      icon: Users,
      badge: "Kunjungan Tamu"
    },
    {
      num: 4,
      title: "DILARANG MEMBAWA MINUMAN KERAS",
      desc: "Segala jenis minuman beralkohol/minuman keras tidak diperbolehkan di lingkungan Santara Kost.",
      icon: WineOff,
      badge: "Larangan Ketat"
    },
    {
      num: 5,
      title: "JAGA KEBERSIHAN & DINDING",
      desc: "Dilarang dengan sengaja mencoret, merusak, atau mengotori tembok dan fasilitas kost.",
      icon: Sparkles,
      badge: "Kebersihan Fasilitas"
    },
    {
      num: 6,
      title: "LISTRIK TOKEN ISI SENDIRI",
      desc: "Listrik menggunakan sistem token/prabayar. Pengisian token menjadi tanggung jawab masing-masing penghuni.",
      icon: Zap,
      badge: "Listrik Prabayar"
    },
    {
      num: 7,
      title: "AIR & SAMPAH GRATIS",
      desc: "💧 Air gratis\n🗑️ Iuran sampah gratis\nPenghuni tidak dikenakan biaya tambahan untuk kedua fasilitas tersebut.",
      icon: Droplets,
      badge: "Fasilitas Gratis"
    },
    {
      num: 8,
      title: "JAM MALAM",
      desc: "Jam malam maksimal pukul 01.00 WITA. Setelah jam tersebut, mohon menjaga volume suara dan tidak membuat aktivitas yang mengganggu penghuni lainnya.",
      icon: Moon,
      badge: "Maks. 01.00 WITA"
    },
    {
      num: 9,
      title: "DILARANG MEMBAWA HEWAN PELIHARAAN",
      desc: "Untuk menjaga kebersihan dan kenyamanan bersama, hewan peliharaan tidak diperbolehkan di dalam area kost.",
      icon: Dog,
      badge: "Bebas Peliharaan"
    },
    {
      num: 10,
      title: "PERAWATAN KOST",
      desc: "Kost akan dibersihkan oleh petugas kami 1× setiap bulan, termasuk perawatan ringan seperti pengecatan bagian yang diperlukan dan penambahan/perbaikan properti tertentu sesuai kebutuhan.",
      icon: Wrench,
      badge: "1x Setiap Bulan"
    },
    {
      num: 11,
      title: "GRUP WHATSAPP PENGHUNI",
      desc: "Tersedia Grup WhatsApp khusus penghuni Santara Kost untuk informasi, komunikasi, pengumuman, maupun laporan terkait kost.",
      icon: MessageSquare,
      badge: "Komunikasi Resmi"
    },
    {
      num: 12,
      title: "KERUSAKAN PROPERTI",
      desc: "Jika terjadi kerusakan properti/fasilitas yang disebabkan oleh kesengajaan atau kelalaian penghuni, maka biaya perbaikan atau penggantian menjadi tanggung jawab penyewa.",
      icon: AlertTriangle,
      badge: "Tanggung Jawab Penyewa"
    },
    {
      num: 13,
      title: "PEMBAYARAN SEWA",
      desc: "Pembayaran sewa dilakukan di muka untuk periode sewa berikutnya.\n\nKeterlambatan pembayaran diberikan toleransi maksimal 7 hari dari tanggal jatuh tempo. Setelah melewati batas tersebut, pengelola berhak mengambil tindakan sesuai ketentuan sewa yang berlaku.",
      icon: CreditCard,
      badge: "Toleransi 7 Hari"
    },
    {
      num: 14,
      title: "KEAMANAN KETAT TERJAMIN",
      desc: "Santara Kost berlokasi strategis di dalam lingkungan perumahan aparat kepolisian. Segala bentuk tindak kriminal, kejahatan, maupun pelanggaran hukum lainnya akan langsung dilaporkan dan ditindak tegas oleh RT setempat serta diproses oleh pihak berwajib.",
      icon: ShieldCheck,
      badge: "Lingkungan Aman"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="py-16 md:py-20 px-4 max-w-5xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-800 font-bold text-xs md:text-sm tracking-wider uppercase rounded-full mb-6 border border-amber-500/20">
          <HomeIcon className="w-4 h-4 text-amber-600" />
          <span>Sumbawa Besar</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-950 mb-6 tracking-tight">
          🏡 Peraturan Santara Kost
        </h1>
        
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-200/80 max-w-3xl mx-auto text-stone-600 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-emerald-900 mb-2">Selamat datang di Santara Kost.</p>
          <p>
            Kami ingin semua penghuni merasa nyaman, aman, dan tetap punya privasi. 
            Jadi, mohon ikuti beberapa aturan sederhana berikut:
          </p>
        </div>
      </section>

      {/* 13 Rules List */}
      <section className="px-4 max-w-5xl mx-auto w-full pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {rulesList.map((rule) => {
            const Icon = rule.icon;
            return (
              <div 
                key={rule.num}
                className="bg-white rounded-3xl p-6 md:p-7 border border-stone-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-2xl bg-emerald-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {rule.num}
                      </span>
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {rule.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-stone-900 mb-2.5">
                    {rule.title}
                  </h2>

                  <div className="text-stone-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-normal">
                    {rule.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Harga Sewa Section */}
      <section className="px-4 max-w-5xl mx-auto w-full pb-16">
        <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-amber-400 font-bold uppercase tracking-wider text-sm">
              <Tag className="w-5 h-5" />
              <span>Daftar Tarif</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-white tracking-tight">
              💰 Harga Sewa Santara Kost
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Kamar Isi */}
              <div className="bg-emerald-900/70 border border-emerald-700/60 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 font-semibold text-sm mb-1">Paling Populer</div>
                  <h3 className="text-xl font-bold text-white mb-2">Kamar Isi</h3>
                  <p className="text-emerald-200/90 text-sm mb-6">Dilengkapi kasur & lemari pakaian</p>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-300">
                    Rp850.000 <span className="text-sm font-normal text-emerald-200">/ bulan</span>
                  </div>
                </div>
              </div>

              {/* Harga Mingguan */}
              <div className="bg-emerald-900/70 border border-emerald-700/60 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-emerald-300 font-semibold text-sm mb-1">Pilihan Fleksibel</div>
                  <h3 className="text-xl font-bold text-white mb-2">Harga Mingguan</h3>
                  <p className="text-emerald-200/90 text-sm mb-6">Untuk singgah sementara</p>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-amber-300">
                    Rp450.000 <span className="text-sm font-normal text-emerald-200">/ minggu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inclusions Note */}
            <div className="bg-emerald-900/40 border border-emerald-700/40 rounded-2xl p-4 md:p-5 text-sm md:text-base text-emerald-100/90 leading-relaxed mb-6">
              « Harga sudah termasuk <strong>air & iuran sampah</strong>. Listrik menggunakan <strong>token dan diisi sendiri</strong> oleh penghuni. »
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 max-w-4xl mx-auto w-full pb-20 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200 shadow-sm flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-8">
            Siap untuk Menetap di Santara Kost?
          </h2>
          <a 
            href={getWaLink(defaultWaMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-green-light text-stone-950 font-bold px-8 py-4 rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-brand-green-light/20"
          >
            <Phone className="w-5 h-5" />
            <span>Tanya / Reservasi via WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
