// src/data/dummyData.js

// Data Pasien
export const pasienData = [
  {
    id: 1,
    nama: "Andi Wijaya",
    email: "andi.wijaya@email.com",
    telepon: "081234567890",
    alamat: "Jl. Merpati No. 12, Surabaya",
    tanggalLahir: "1990-05-15",
    jenisKelamin: "Laki-laki",
    riwayatPerawatan: ["Scaling", "Cabut Gigi"],
    perawatanTerakhir: "Scaling",
    tanggalTerakhir: "2024-12-15",
    status: "Aktif",
    preferensiKontak: "WhatsApp",
    foto: null
  },
  {
    id: 2,
    nama: "Siti Nurhaliza",
    email: "siti.nur@email.com",
    telepon: "081298765432",
    alamat: "Jl. Melati No. 5, Surabaya",
    tanggalLahir: "1988-08-22",
    jenisKelamin: "Perempuan",
    riwayatPerawatan: ["Behel", "Kontrol Rutin"],
    perawatanTerakhir: "Kontrol Behel",
    tanggalTerakhir: "2024-12-20",
    status: "Aktif",
    preferensiKontak: "Email",
    foto: null
  },
  {
    id: 3,
    nama: "Budi Santoso",
    email: "budi.santoso@email.com",
    telepon: "081256789012",
    alamat: "Jl. Kenanga No. 8, Surabaya",
    tanggalLahir: "1995-12-10",
    jenisKelamin: "Laki-laki",
    riwayatPerawatan: ["Cabut Gigi", "Tambal Gigi", "Scaling"],
    perawatanTerakhir: "Scaling",
    tanggalTerakhir: "2024-12-10",
    status: "Aktif",
    preferensiKontak: "SMS",
    foto: null
  },
  {
    id: 4,
    nama: "Dewi Anggraeni",
    email: "dewi.ang@email.com",
    telepon: "081277788899",
    alamat: "Jl. Mawar No. 3, Surabaya",
    tanggalLahir: "1992-03-25",
    jenisKelamin: "Perempuan",
    riwayatPerawatan: ["Behel", "Scaling", "Kontrol Behel"],
    perawatanTerakhir: "Kontrol Behel",
    tanggalTerakhir: "2024-12-18",
    status: "Aktif",
    preferensiKontak: "WhatsApp",
    foto: null
  },
  {
    id: 5,
    nama: "Rizki Pratama",
    email: "rizki.p@email.com",
    telepon: "081233344455",
    alamat: "Jl. Anggrek No. 15, Surabaya",
    tanggalLahir: "1985-11-30",
    jenisKelamin: "Laki-laki",
    riwayatPerawatan: ["Scaling", "Tambal Gigi"],
    perawatanTerakhir: "Tambal Gigi",
    tanggalTerakhir: "2024-12-05",
    status: "Tidak Aktif",
    preferensiKontak: "Email",
    foto: null
  }
];

// Data Jadwal & Appointment
export const jadwalData = [
  {
    id: 1,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    layanan: "Scaling",
    tanggal: "2024-12-23",
    jam: "10:00",
    durasi: 60,
    status: "Confirmed",
    reminderSent: true,
    reminderMethod: "WhatsApp",
    catatan: "Pasien sudah 6 bulan terakhir scaling"
  },
  {
    id: 2,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    layanan: "Kontrol Behel",
    tanggal: "2024-12-23",
    jam: "11:30",
    durasi: 45,
    status: "Pending",
    reminderSent: false,
    reminderMethod: "Email",
    catatan: "Kontrol rutin bulanan"
  },
  {
    id: 3,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    layanan: "Cabut Gigi",
    tanggal: "2024-12-24",
    jam: "09:00",
    durasi: 90,
    status: "Confirmed",
    reminderSent: true,
    reminderMethod: "SMS",
    catatan: "Cabut gigi geraham"
  },
  {
    id: 4,
    pasienId: 4,
    pasienNama: "Dewi Anggraeni",
    layanan: "Kontrol Behel",
    tanggal: "2024-12-24",
    jam: "14:00",
    durasi: 45,
    status: "Confirmed",
    reminderSent: false,
    reminderMethod: "WhatsApp",
    catatan: "Penggantian karet behel"
  },
  {
    id: 5,
    pasienId: 5,
    pasienNama: "Rizki Pratama",
    layanan: "Scaling",
    tanggal: "2024-12-26",
    jam: "15:30",
    durasi: 60,
    status: "Pending",
    reminderSent: false,
    reminderMethod: "Email",
    catatan: "Scaling rutin 6 bulan"
  }
];

// Data Riwayat Perawatan Medis
export const riwayatPerawatanData = [
  {
    id: 1,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tanggal: "2024-12-15",
    tindakan: "Scaling",
    dokter: "Dr. Sarah",
    diagnosis: "Karang gigi menumpuk",
    resep: [],
    biaya: 350000,
    status: "Selesai",
    catatan: "Disarankan scaling ulang 6 bulan lagi",
    fotoDokumentasi: []
  },
  {
    id: 2,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tanggal: "2024-10-10",
    tindakan: "Cabut Gigi",
    dokter: "Dr. Ahmad",
    diagnosis: "Gigi geraham berlubang parah",
    resep: ["Amoxicillin", "Paracetamol"],
    biaya: 500000,
    status: "Selesai",
    catatan: "Istirahat cukup, jangan makan makanan keras",
    fotoDokumentasi: []
  },
  {
    id: 3,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    tanggal: "2024-12-20",
    tindakan: "Kontrol Behel",
    dokter: "Dr. Sarah",
    diagnosis: "Perkembangan behel baik",
    resep: [],
    biaya: 150000,
    status: "Selesai",
    catatan: "Kontrol berikutnya 1 bulan lagi",
    fotoDokumentasi: []
  },
  {
    id: 4,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    tanggal: "2024-01-15",
    tindakan: "Pasang Behel",
    dokter: "Dr. Sarah",
    diagnosis: "Gigi tidak rapi, overbite",
    resep: [],
    biaya: 5000000,
    status: "Selesai",
    catatan: "Perawatan behel estimasi 1.5 tahun",
    fotoDokumentasi: []
  },
  {
    id: 5,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tanggal: "2024-12-10",
    tindakan: "Scaling",
    dokter: "Dr. Ahmad",
    diagnosis: "Karang gigi ringan",
    resep: [],
    biaya: 350000,
    status: "Selesai",
    catatan: "Sikat gigi yang benar 2x sehari",
    fotoDokumentasi: []
  },
  {
    id: 6,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tanggal: "2024-11-05",
    tindakan: "Tambal Gigi",
    dokter: "Dr. Sarah",
    diagnosis: "Gigi berlubang ukuran sedang",
    resep: [],
    biaya: 400000,
    status: "Selesai",
    catatan: "Hindari makanan manis",
    fotoDokumentasi: []
  },
  {
    id: 7,
    pasienId: 4,
    pasienNama: "Dewi Anggraeni",
    tanggal: "2024-12-18",
    tindakan: "Kontrol Behel",
    dokter: "Dr. Sarah",
    diagnosis: "Perkembangan baik, perlu ganti karet",
    resep: [],
    biaya: 150000,
    status: "Selesai",
    catatan: "Kontrol 3 minggu lagi",
    fotoDokumentasi: []
  }
];

// Data Notifikasi Perawatan Lanjutan
export const notifikasiData = [
  {
    id: 1,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tipe: "Scaling",
    tanggalPerawatanTerakhir: "2024-12-15",
    tanggalNotifikasi: "2025-06-15",
    pesan: "Halo Andi, sudah 6 bulan sejak scaling terakhir Anda. Saatnya untuk scaling ulang untuk menjaga kesehatan gigi!",
    status: "Scheduled",
    reminderMethod: "WhatsApp",
    sudahDikirim: false
  },
  {
    id: 2,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    tipe: "Kontrol Behel",
    tanggalPerawatanTerakhir: "2024-12-20",
    tanggalNotifikasi: "2025-01-20",
    pesan: "Hi Siti, jadwal kontrol behel bulanan Anda sudah tiba. Silakan booking jadwal ya!",
    status: "Scheduled",
    reminderMethod: "Email",
    sudahDikirim: false
  },
  {
    id: 3,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tipe: "Scaling",
    tanggalPerawatanTerakhir: "2024-12-10",
    tanggalNotifikasi: "2025-06-10",
    pesan: "Halo Budi, sudah waktunya scaling rutin 6 bulanan. Jaga kesehatan gigi Anda!",
    status: "Scheduled",
    reminderMethod: "SMS",
    sudahDikirim: false
  },
  {
    id: 4,
    pasienId: 4,
    pasienNama: "Dewi Anggraeni",
    tipe: "Kontrol Behel",
    tanggalPerawatanTerakhir: "2024-12-18",
    tanggalNotifikasi: "2025-01-08",
    pesan: "Dewi, jadwal kontrol behel Anda sudah dekat. Jangan lupa datang ya!",
    status: "Scheduled",
    reminderMethod: "WhatsApp",
    sudahDikirim: false
  },
  {
    id: 5,
    pasienId: 5,
    pasienNama: "Rizki Pratama",
    tipe: "Tambal Gigi",
    tanggalPerawatanTerakhir: "2024-12-05",
    tanggalNotifikasi: "2025-03-05",
    pesan: "Rizki, sudah 3 bulan sejak tambal gigi. Silakan kontrol untuk pengecekan!",
    status: "Scheduled",
    reminderMethod: "Email",
    sudahDikirim: false
  }
];

// Data Transaksi / Pembayaran
export const transaksiData = [
  {
    id: 1,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tindakan: "Scaling",
    tanggal: "2024-12-15",
    biaya: 350000,
    statusPembayaran: "Lunas",
    metodePembayaran: "Transfer Bank",
    noKwitansi: "INV-20241215-001",
    poinDidapat: 35,
    dikirimKeWA: true
  },
  {
    id: 2,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    tindakan: "Kontrol Behel",
    tanggal: "2024-12-20",
    biaya: 150000,
    statusPembayaran: "Lunas",
    metodePembayaran: "Cash",
    noKwitansi: "INV-20241220-002",
    poinDidapat: 15,
    dikirimKeWA: true
  },
  {
    id: 3,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tindakan: "Scaling",
    tanggal: "2024-12-10",
    biaya: 350000,
    statusPembayaran: "Lunas",
    metodePembayaran: "QRIS",
    noKwitansi: "INV-20241210-003",
    poinDidapat: 35,
    dikirimKeWA: true
  },
  {
    id: 4,
    pasienId: 4,
    pasienNama: "Dewi Anggraeni",
    tindakan: "Pasang Behel",
    tanggal: "2024-12-18",
    biaya: 5000000,
    statusPembayaran: "Cicil",
    metodePembayaran: "Transfer Bank",
    noKwitansi: "INV-20241218-004",
    poinDidapat: 500,
    dikirimKeWA: true
  },
  {
    id: 5,
    pasienId: 5,
    pasienNama: "Rizki Pratama",
    tindakan: "Tambal Gigi",
    tanggal: "2024-12-05",
    biaya: 400000,
    statusPembayaran: "Lunas",
    metodePembayaran: "Cash",
    noKwitansi: "INV-20241205-005",
    poinDidapat: 40,
    dikirimKeWA: true
  }
];

// Data Poin Loyalitas
export const loyalitasData = [
  {
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    totalPoin: 125,
    poinDigunakan: 0,
    level: "Silver",
    nextLevel: "Gold",
    poinKeNextLevel: 175
  },
  {
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    totalPoin: 680,
    poinDigunakan: 50,
    level: "Gold",
    nextLevel: "Platinum",
    poinKeNextLevel: 320
  },
  {
    pasienId: 3,
    pasienNama: "Budi Santoso",
    totalPoin: 75,
    poinDigunakan: 0,
    level: "Bronze",
    nextLevel: "Silver",
    poinKeNextLevel: 25
  },
  {
    pasienId: 4,
    pasienNama: "Dewi Anggraeni",
    totalPoin: 450,
    poinDigunakan: 0,
    level: "Gold",
    nextLevel: "Platinum",
    poinKeNextLevel: 250
  },
  {
    pasienId: 5,
    pasienNama: "Rizki Pratama",
    totalPoin: 40,
    poinDigunakan: 0,
    level: "Bronze",
    nextLevel: "Silver",
    poinKeNextLevel: 60
  }
];

// Data Keluhan & Feedback
export const keluhanData = [
  {
    id: 1,
    pasienId: 2,
    pasienNama: "Siti Nurhaliza",
    tanggal: "2024-12-21",
    tipe: "Keluhan",
    kategori: "Pelayanan",
    pesan: "Dokter telat 30 menit dari jadwal",
    status: "Diproses",
    prioritas: "Medium",
    responAdmin: "Kami mohon maaf, akan kami koordinasikan dengan dokter"
  },
  {
    id: 2,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tanggal: "2024-12-22",
    tipe: "Feedback",
    kategori: "Kebersihan",
    pesan: "Klinik sangat bersih dan nyaman",
    status: "Selesai",
    prioritas: "Low",
    responAdmin: "Terima kasih atas feedback positifnya!"
  },
  {
    id: 3,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tanggal: "2024-12-23",
    tipe: "Keluhan",
    kategori: "Biaya",
    pesan: "Harga scaling terlalu mahal",
    status: "Menunggu",
    prioritas: "High",
    responAdmin: null
  }
];

// Data Survey Kepuasan
export const surveyData = [
  {
    id: 1,
    pasienId: 3,
    pasienNama: "Budi Santoso",
    tanggalKirim: "2024-12-11",
    rating: 5,
    komentar: "Pelayanan sangat memuaskan",
    sudahRespon: true
  },
  {
    id: 2,
    pasienId: 1,
    pasienNama: "Andi Wijaya",
    tanggalKirim: "2024-12-16",
    rating: 4,
    komentar: "Cukup baik",
    sudahRespon: false
  }
];

// Data Statistik Dashboard
export const statistikData = {
  totalPasien: 234,
  pasienBaruBulanIni: 45,
  jadwalHariIni: 8,
  jadwalMingguIni: 32,
  pendapatanBulanIni: 45000000,
  pendapatanBulanLalu: 42000000,
  persentaseKenaikan: 7.14,
  perawatanTerbanyak: "Scaling",
  tingkatKepuasan: 94.5
};

// Data Aktivitas Terbaru
export const aktivitasData = [
  {
    id: 1,
    tipe: "Janji Baru",
    deskripsi: "Andi Wijaya booking jadwal scaling",
    waktu: "2 jam yang lalu",
    icon: "calendar"
  },
  {
    id: 2,
    tipe: "Pasien Baru",
    deskripsi: "Data pasien baru ditambahkan - Dewi Anggraeni",
    waktu: "5 jam yang lalu",
    icon: "user"
  },
  {
    id: 3,
    tipe: "Pembayaran",
    deskripsi: "Pembayaran scaling dari Budi Santoso - Rp350,000",
    waktu: "1 hari yang lalu",
    icon: "money"
  },
  {
    id: 4,
    tipe: "Reminder",
    deskripsi: "Notifikasi WhatsApp terkirim ke Siti Nurhaliza",
    waktu: "1 hari yang lalu",
    icon: "bell"
  }
];

// Helper function untuk format tanggal
export const formatTanggal = (tanggalISO) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(tanggalISO).toLocaleDateString('id-ID', options);
};

// Helper function untuk grouping data
export const getJadwalByTanggal = (tanggal) => {
  return jadwalData.filter(jadwal => jadwal.tanggal === tanggal);
};

export const getRiwayatByPasien = (pasienId) => {
  return riwayatPerawatanData.filter(riwayat => riwayat.pasienId === pasienId);
};

export const getNotifikasiByPasien = (pasienId) => {
  return notifikasiData.filter(notif => notif.pasienId === pasienId);
};