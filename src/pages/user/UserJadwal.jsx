import React from "react";
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaPlus, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const mintColor = "#4FD1C5";

export default function UserJadwal() {
  // Jadwal aktif terdekat (mendatang)
  const jadwalAktif = {
    id: "APT-2026-004",
    tanggal: "Rabu, 15 Juli 2026",
    waktu: "14:00 - 15:00 WIB",
    dokter: "drg. Budi Darmawan",
    spesialis: "Spesialis Konservasi Gigi",
    tindakan: "Pembersihan Karang Gigi (Scaling) & Evaluasi Pasca Tambal",
    ruangan: "Ruang Perawatan Utama (Lantai 1)",
    status: "Dikonfirmasi"
  };

  // Riwayat pendaftaran/janji temu masa lalu
  const riwayatJanjiTemu = [
    {
      id: "APT-2026-001",
      tanggal: "20 Juni 2026",
      dokter: "drg. Budi Darmawan",
      tindakan: "Penambalan Gigi Geraham",
      status: "Selesai"
    },
    {
      id: "APT-2026-002",
      tanggal: "05 Mei 2026",
      dokter: "drg. Siti Aminah",
      tindakan: "Konsultasi Rutin",
      status: "Selesai"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= 💳 KARTU HEADER ================= */}
      <div 
        style={{ 
          background: "#FFFFFF", 
          border: "1px solid #E2E8F0", 
          borderRadius: 16, 
          padding: 24, 
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#2D3748" }}>Jadwal Kunjungan Saya</h2>
          <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#718096", lineHeight: "1.5" }}>
            Kelola janji temu konsultasi, cetak tiket antrean, atau buat reservasi kunjungan baru.
          </p>
        </div>
        
        {/* Tombol Buat Janji Baru */}
        <button
          style={{
            background: mintColor,
            color: "#FFFFFF",
            border: "none",
            padding: "10px 18px",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(79,209,197,0.3)",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <FaPlus size={11} /> Buat Janji Temu
        </button>
      </div>

      {/* ================= 📅 JADWAL AKTIF UTAMA ================= */}
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>
          Janji Temu Mendatang
        </h3>

        {jadwalAktif ? (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
              borderLeft: `5px solid ${mintColor}`,
              overflow: "hidden"
            }}
          >
            {/* Bagian Atas Kartu */}
            <div style={{ padding: 24, borderBottom: "1px solid #EDF2F7", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, color: mintColor, background: "rgba(79,209,197,0.1)", padding: "4px 8px", borderRadius: 6, display: "inline-block", marginBottom: 8 }}>
                  {jadwalAktif.id}
                </span>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#2D3748" }}>{jadwalAktif.tindakan}</h4>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2B6CB0", background: "#EBF8FF", padding: "6px 12px", borderRadius: 20 }}>
                {jadwalAktif.status}
              </span>
            </div>

            {/* Grid Detail Waktu, Dokter & Lokasi */}
            <div style={{ padding: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, background: "#FAFAFA" }}>
              
              {/* Tanggal & Jam */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ color: mintColor, marginTop: 2 }}><FaCalendarAlt size={16} /></div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Waktu Kunjungan</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#2D3748", display: "block", marginTop: 2 }}>{jadwalAktif.tanggal}</span>
                  <span style={{ fontSize: 12, color: "#718096", display: "block", marginTop: 1 }}><FaClock size={10} /> {jadwalAktif.waktu}</span>
                </div>
              </div>

              {/* Dokter */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ color: mintColor, marginTop: 2 }}><FaUserMd size={16} /></div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Dokter Gigi</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#2D3748", display: "block", marginTop: 2 }}>{jadwalAktif.dokter}</span>
                  <span style={{ fontSize: 12, color: "#718096" }}>{jadwalAktif.spesialis}</span>
                </div>
              </div>

              {/* Ruangan */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ color: mintColor, marginTop: 2 }}><FaMapMarkerAlt size={16} /></div>
                <div>
                  <span style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Lokasi / Ruang</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#4A5568", display: "block", marginTop: 2 }}>{jadwalAktif.ruangan}</span>
                  <span style={{ fontSize: 12, color: "#A0AEC0" }}>Permata Dental Hub</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div style={{ background: "#FFF", border: "1px dashed #E2E8F0", borderRadius: 16, padding: "40px 0", textAlign: "center", color: "#A0AEC0" }}>
            <FaCalendarAlt size={32} style={{ marginBottom: 12, opacity: 0.5 }} />
            <p style={{ margin: 0, fontSize: 13 }}>Tidak ada jadwal kunjungan aktif saat ini.</p>
          </div>
        )}
      </div>

      {/* ================= ⏳ RIWAYAT PENDAFTARAN SEBELUMNYA ================= */}
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: "#718096", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>
          Riwayat Kunjungan Sebelumnya
        </h3>
        
        <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#F8F9FA", borderBottom: "1px solid #E2E8F0" }}>
                <th style={{ padding: "14px 20px", color: "#718096", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>ID Janji</th>
                <th style={{ padding: "14px 20px", color: "#718096", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>Tanggal</th>
                <th style={{ padding: "14px 20px", color: "#718096", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>Dokter</th>
                <th style={{ padding: "14px 20px", color: "#718096", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>Tindakan</th>
                <th style={{ padding: "14px 20px", color: "#718096", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {riwayatJanjiTemu.map((item, index) => (
                <tr 
                  key={item.id} 
                  style={{ 
                    borderBottom: index === riwayatJanjiTemu.length - 1 ? "none" : "1px solid #EDF2F7",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#FDFDFD"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <td style={{ padding: "14px 20px", fontWeight: 600, color: mintColor }}>{item.id}</td>
                  <td style={{ padding: "14px 20px", color: "#2D3748", fontWeight: 500 }}>{item.tanggal}</td>
                  <td style={{ padding: "14px 20px", color: "#4A5568" }}>{item.dokter}</td>
                  <td style={{ padding: "14px 20px", color: "#718096" }}>{item.tindakan}</td>
                  <td style={{ padding: "14px 20px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#38A169", fontWeight: 600, fontSize: 12 }}>
                      <FaCheckCircle size={12} /> {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}