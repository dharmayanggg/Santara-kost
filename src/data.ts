export const heroBg = "https://raw.githubusercontent.com/dharmayanggg/storage-image/main/Kamar%20kost.jpg";
export const facadeBg = "https://raw.githubusercontent.com/dharmayanggg/storage-image/main/depan%20kost.jpg";
export const bathroomBg = "https://raw.githubusercontent.com/dharmayanggg/storage-image/main/WC%20kost.png";
export const kitchenBg = "https://raw.githubusercontent.com/dharmayanggg/storage-image/main/dapur%20kost.jpg";

export const images = [facadeBg, heroBg, kitchenBg, bathroomBg];

export const testimonials = [
  { 
    name: "Budi Santoso", 
    role: "Pegawai Swasta", 
    text: "Saya sudah mencoba beberapa Kos Harian Sumbawa, tapi Santara Kost yang paling nyaman. Kamarnya sangat luas ukurannya 4x4 meter, lega banget buat barang-barang. Lingkungannya juga tenang dan asri dengan adanya mini garden." 
  },
  { 
    name: "Rina Wijayanti", 
    role: "ASN", 
    text: "Mencari Kos Bulanan Sumbawa yang fasilitasnya lengkap ternyata mudah. Lokasinya beneran strategis. Dekat banget ke pusat kota dan perkantoran pemerintahan, sangat mendukung mobilitas saya sehari-hari." 
  },
  { 
    name: "Andi Pratama", 
    role: "Mahasiswa", 
    text: "Sebagai mahasiswa, cari Kos Murah Sumbawa sangat penting. Di sini saya dapat harga pas dengan fasilitas wow. Jarak ke kampus dan Rumah Sakit juga dekat, pusat perbelanjaan mudah diakses." 
  }
];

export const faqs = [
  { 
    q: "Apakah ada jam malam di Santara Kost?", 
    a: "Jam malam maksimal adalah pukul 01.00 WITA. Setelah jam tersebut, kami mengimbau penghuni untuk menjaga volume suara dan tidak melakukan aktivitas yang mengganggu kenyamanan penghuni lainnya." 
  },
  { 
    q: "Bagaimana sistem pembayaran listriknya?", 
    a: "Sistem kelistrikan kami menggunakan token sendiri (meteran masing-masing per kamar). Pengisian token menjadi tanggung jawab masing-masing penghuni sehingga pemakaian jauh lebih transparan dan adil." 
  },
  { 
    q: "Apakah bisa disewa untuk pasangan atau berdua?", 
    a: "Bisa! Penghuni bebas tinggal berdua dalam satu kamar tanpa biaya tambahan, selama jumlah penghuni maksimal 2 orang per kamar." 
  },
  { 
    q: "Apakah ada opsi sewa untuk jangka pendek?", 
    a: "Tentu! Kami menyediakan opsi Kos Harian Sumbawa (Rp100.000/hari) dan Mingguan (Rp450.000/minggu) yang sangat ideal bagi para pendatang atau urusan singkat dengan fasilitas kamar lengkap." 
  },
  { 
    q: "Apakah teman atau tamu boleh datang berkunjung?", 
    a: "Boleh menerima teman atau tamu dengan ketentuan maksimal 2 orang tamu dalam satu waktu, serta tetap menjaga ketenangan dan kenyamanan lingkungan kost." 
  },
  { 
    q: "Fasilitas area bersama apa saja yang didapat gratis?", 
    a: "Air dan iuran sampah sudah gratis tanpa biaya tambahan. Selain itu tersedia area Parkir Luas, Tempat Cuci & Jemur Pakaian, dan Mini Garden yang dapat diakses bersama." 
  },
  { 
    q: "Seberapa strategis lokasi Santara Kost ini?", 
    a: "Santara Kost adalah representasi sejati kos pusat kota sumbawa di Uma Sima. Hanya 1 menit ke Indomaret, serta hanya 4-5 menit ke perkantoran pemerintahan daerah, rumah sakit, dan pusat perbelanjaan." 
  },
  { 
    q: "Apakah disediakan layanan perawatan dan kebersihan kost?", 
    a: "Area kost dibersihkan oleh petugas kami 1× setiap bulan, termasuk perawatan berkala dan pemeliharaan properti untuk menjaga kenyamanan seluruh penghuni." 
  },
  { 
    q: "Bagaimana cara booking dan pembayaran sewa?", 
    a: "Pembayaran sewa dilakukan di muka untuk periode sewa berikutnya via transfer bank atau tunai. Hubungi kami via WhatsApp untuk mengecek ketersediaan kamar." 
  }
];

export const waNumber = "628133637913";
export const defaultWaMsg = "Halo Admin Santara Kost, saya tertarik untuk menyewa kamar.";
export const harianWaMsg = "Halo Admin Santara Kost, saya mau booking kamar Harian (tarif 100rb) untuk tanggal [Isi Tanggal].";
export const mingguanWaMsg = "Halo Admin Santara Kost, saya mau booking kamar Mingguan (tarif 450rb) untuk tanggal [Isi Tanggal].";
export const bulananWaMsg = "Halo Admin Santara Kost, mau tanya info slot kosong untuk Kost Bulanan tarif 850rb.";

export const getWaLink = (msg: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
export const mapLink = "https://maps.app.goo.gl/FPd58fT6Up6yLKbf8";
