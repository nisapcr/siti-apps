import React from "react";
import { FaBell, FaCalendarAlt, FaReceipt, FaInfoCircle, FaCheck } from "react-icons/fa";

const mintColor = "#4FD1C5";

export default function UserNotifikasi() {
  // 1. Ambil data user login agar pesannya dinamis
  const session = localStorage.getItem("siti_session");
  const user = session ? JSON.parse(session) : { name: "Pasien" };

  const dataNotifikasi = [
    {
      id: 1,
      tipe: "jadwal",
      judul: "Pengingat Jadwal Kunjungan Besok",
      // 2. GANTI TEKS SITI MENJADI ${user.name}
      pesan: `Halo ${user.name || "Pasien"}, jangan lupa besok Anda memiliki jadwal perawatan Pembersihan Karang Gigi (Scaling) dengan drg. Budi Darmawan pukul 14:00 WIB. Mohon datang 15 menit lebih awal.`,
      waktu: "1 jam yang lalu",
      belumBaca: true,
      ikon: FaCalendarAlt,
      warnaKategori: "#4FD1C5",
      bgKategori: "rgba(79, 209, 197, 0.1)"
    },
    {
      id: 2,
      tipe: "tagihan",
      judul: "Kwitansi Digital Tersedia",
      pesan: "Pembayaran untuk transaksi #REC-2026-089 telah diverifikasi. Kwitansi digital Anda sudah dapat diunduh dan dicetak melalui menu Pembayaran.",
      waktu: "Yesterday, 11:00 WIB",
      belumBaca: false,
      ikon: FaReceipt,
      warnaKategori: "#ED8936", // Orange
      bgKategori: "rgba(237, 137, 54, 0.1)"
    },
    {
      id: 3,
      tipe: "info",
      judul: "Edukasi: Tips Pasca Penambalan Gigi",
      pesan: "Terima kasih telah melakukan penambalan gigi kemarin. Ingat untuk menghindari konsumsi minuman terlalu panas atau dingin, serta hindari mengunyah di sisi kanan selama 3 hari ya!",
      waktu: "20 Juni 2026",
      belumBaca: false,
      ikon: FaInfoCircle,
      warnaKategori: "#4299E1", // Blue
      bgKategori: "rgba(66, 153, 225, 0.1)"
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
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#2D3748" }}>Kotak Masuk Notifikasi</h2>
          <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#718096", lineHeight: "1.5" }}>
            Pantau pengingat janji temu, konfirmasi pembayaran, dan tips kesehatan gigi Anda di sini.
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
          <FaBell size={20} />
        </div>
      </div>

      {/* 🔔 DAFTAR PESAN NOTIFIKASI */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {dataNotifikasi.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#A0AEC0" }}>
            <FaBell size={40} style={{ marginBottom: 12, opacity: 0.5 }} />
            <p style={{ margin: 0, fontSize: 14 }}>Belum ada pengingat atau notifikasi baru.</p>
          </div>
        ) : (
          dataNotifikasi.map((notif) => {
            const IconKategori = notif.ikon;
            return (
              <div
                key={notif.id}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 16,
                  padding: 20,
                  display: "flex",
                  gap: 16,
                  position: "relative",
                  boxShadow: notif.belumBaca ? "0 2px 8px rgba(79, 209, 197, 0.06)" : "0 1px 3px rgba(0,0,0,0.01)",
                  borderLeft: notif.belumBaca ? `4px solid ${mintColor}` : "1px solid #E2E8F0",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = notif.belumBaca ? "0 2px 8px rgba(79, 209, 197, 0.06)" : "0 1px 3px rgba(0,0,0,0.01)";
                }}
              >
                {/* Bulatan Badge untuk Pesan yang Belum Dibaca */}
                {notif.belumBaca && (
                  <span style={{
                    position: "absolute",
                    top: 22,
                    right: 22,
                    width: 8,
                    height: 8,
                    backgroundColor: mintColor,
                    borderRadius: "50%"
                  }} />
                )}

                {/* Wadah Ikon Kategori Berwarna */}
                <div 
                  style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: 10, 
                    background: notif.bgKategori, 
                    color: notif.warnaKategori, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <IconKategori size={16} />
                </div>

                {/* Konten Teks Detail */}
                <div style={{ flex: 1, paddingRight: notif.belumBaca ? 16 : 0 }}>
                  <div style={{ display: "flex", justifyContent: "between", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px", marginBottom: 6 }}>
                    <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: notif.belumBaca ? "#1A202C" : "#4A5568" }}>
                      {notif.judul}
                    </h4>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "#718096", lineHeight: "1.6", marginBottom: 8 }}>
                    {notif.pesan}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#A0AEC0", fontWeight: 500 }}>
                    <span>{notif.waktu}</span>
                    {!notif.belumBaca && (
                      <>
                        <span>&bull;</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 2, color: "#718096" }}>
                          <FaCheck size={9} /> Sudah dibaca
                        </span>
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}