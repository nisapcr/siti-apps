import React from "react";
import { FaHistory, FaCheckCircle, FaUserMd, FaFileAlt } from "react-icons/fa";

const mintColor = "#4FD1C5";

export default function UserRiwayat() {
  // Simulasi data riwayat rekam medis pasien dari database
  const dataRiwayat = [
    {
      id: "REC-2026-089",
      tanggal: "20 Juni 2026",
      waktu: "10:30 WIB",
      dokter: "drg. Budi Darmawan",
      tindakan: "Penambalan Gigi Geraham Kanan Bawah",
      diagnosa: "Karies Gigi (Gigi Berlubang) mencapai dentin",
      catatan: "Penambalan menggunakan bahan komposit sinar (light-cured). Pasien disarankan menghindari mengunyah makanan keras di sisi kanan selama 3 hari.",
      status: "Selesai"
    },
    {
      id: "REC-2026-041",
      tanggal: "05 Mei 2026",
      waktu: "14:15 WIB",
      dokter: "drg. Siti Aminah",
      tindakan: "Pembersihan Karang Gigi (Scaling) & Polishing",
      diagnosa: "Gingivitis ringan akibat penumpukan kalkulus/karang gigi",
      catatan: "Pembersihan karang gigi seluruh rahang sukses dilakukan. Edukasi teknik menyikat gigi dan penggunaan dental floss diberikan kepada pasien.",
      status: "Selesai"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, fontFamily: "'Inter', sans-serif" }}>
      
      {/* 💳 KARTU HEADER */}
      <div 
        style={{ 
          background: "#FFFFFF", 
          border: "1px solid #E2E8F0", 
          borderRadius: 16, 
          padding: 24, 
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#2D3748" }}>Riwayat Medis & Perawatan</h2>
          <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#718096", lineHeight: "1.5" }}>
            Seluruh catatan rekam medis gigi Anda tercatat secara digital dan dikunci aman di sistem Permata Dental.
          </p>
        </div>
        <div 
          style={{ 
            width: 48, 
            height: 48, 
            borderRadius: 12, 
            background: "rgba(79, 209, 197, 0.1)", 
            color: mintColor, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          <FaHistory size={20} />
        </div>
      </div>

      {/* 🕒 TIMELINE RIWAYAT MEDIS */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {dataRiwayat.map((item, index) => (
          <div 
            key={item.id}
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 16,
              boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.02)";
            }}
          >
            {/* Bagian Atas Kartu (Header Baris Transaksi) */}
            <div 
              style={{ 
                background: "#F8F9FA", 
                padding: "14px 24px", 
                borderBottom: "1px solid #E2E8F0", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: mintColor, fontFamily: "monospace", background: "rgba(79, 209, 197, 0.1)", padding: "4px 8px", borderRadius: 6 }}>
                  #{item.id}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#4A5568" }}>
                  {item.tanggal} &bull; <span style={{ fontWeight: 500, color: "#718096" }}>{item.waktu}</span>
                </span>
              </div>
              <span 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: 4, 
                  padding: "4px 10px", 
                  borderRadius: 20, 
                  fontSize: 12, 
                  fontWeight: 600, 
                  background: "rgba(79, 209, 197, 0.1)", 
                  color: mintColor 
                }}
              >
                <FaCheckCircle size={11} /> {item.status}
              </span>
            </div>

            {/* Bagian Isi Rekam Medis */}
            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Tindakan Utama */}
              <div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#2D3748" }}>
                  {item.tindakan}
                </h3>
              </div>

              {/* Grid Dokter dan Diagnosa */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                {/* Informasi Dokter */}
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ color: "#A0AEC0", marginTop: 2 }}><FaUserMd size={15} /></div>
                  <div>
                    <span style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Dokter Gigi</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#4A5568" }}>{item.dokter}</span>
                  </div>
                </div>

                {/* Informasi Diagnosa */}
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ color: "#A0AEC0", marginTop: 2 }}><FaFileAlt size={15} /></div>
                  <div>
                    <span style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#A0AEC0", textTransform: "uppercase" }}>Diagnosa Medis</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#4A5568" }}>{item.diagnosa}</span>
                  </div>
                </div>
              </div>

              {/* Catatan Perawatan / Resep & Edukasi */}
              <div 
                style={{ 
                  background: "#F8F9FA", 
                  borderLeft: `4px solid ${mintColor}`, 
                  padding: 16, 
                  borderRadius: "0 12px 12px 0" 
                }}
              >
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#718096", textTransform: "uppercase", marginBottom: 4 }}>
                  Catatan Klinis & Saran Dokter:
                </span>
                <p style={{ margin: 0, fontSize: 13, color: "#4A5568", lineHeight: "1.6", fontStyle: "italic" }}>
                  "{item.catatan}"
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}