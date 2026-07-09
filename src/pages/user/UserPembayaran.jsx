import React from "react";
import { FiPrinter, FiCheckCircle } from "react-icons/fi";

const mintColor = "#4FD1C5";

export default function UserPembayaran() {
  const handlePrint = () => {
    window.print();
  };

  const dataInvoice = [
    { id: "INV-2026-042", tanggal: "20 Juni 2026", item: "Tambal Komposit Sinar + Konsultasi", total: "Rp 350.000", status: "Lunas" },
    { id: "INV-2026-019", tanggal: "05 Mei 2026", item: "Pemeriksaan Gigi Rutin", total: "Rp 150.000", status: "Lunas" },
  ];

  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.02)", overflow: "hidden" }}>
      <div style={{ padding: 24, borderBottom: "1px solid #E2E8F0" }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#2D3748" }}>Riwayat Transaksi</h2>
        <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#718096" }}>Berikut bukti pembayaran sah atas seluruh tindakan medis Anda.</p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#F8F9FA", borderBottom: "1px solid #E2E8F0", color: "#718096", fontWeight: 600 }}>
              <th style={{ padding: "14px 24px" }}>No. Invoice</th>
              <th style={{ padding: "14px 24px" }}>Tanggal</th>
              <th style={{ padding: "14px 24px" }}>Deskripsi Perawatan</th>
              <th style={{ padding: "14px 24px" }}>Total Bayar</th>
              <th style={{ padding: "14px 24px" }}>Status</th>
              <th style={{ padding: "14px 24px", textAlign: "center" }}>Aksi</th>
            </tr>
          </thead>
          <tbody style={{ color: "#4A5568" }}>
            {dataInvoice.map((inv) => (
              <tr key={inv.id} style={{ borderBottom: "1px solid #E2E8F0" }}>
                <td style={{ padding: "16px 24px", fontWeight: 600, fontFamily: "monospace", color: "#2D3748" }}>#{inv.id}</td>
                <td style={{ padding: "16px 24px" }}>{inv.tanggal}</td>
                <td style={{ padding: "16px 24px" }}>{inv.item}</td>
                <td style={{ padding: "16px 24px", fontWeight: 600 }}>{inv.total}</td>
                <td style={{ padding: "16px 24px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "rgba(79, 209, 197, 0.1)", color: mintColor }}>
                    <FiCheckCircle size={12} /> {inv.status}
                  </span>
                </td>
                <td style={{ padding: "16px 24px", textAlign: "center" }}>
                  <button
                    onClick={handlePrint}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 12px", background: "rgba(79, 209, 197, 0.1)", color: mintColor, border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(79, 209, 197, 0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(79, 209, 197, 0.1)")}
                  >
                    <FiPrinter size={14} /> Cetak Kwitansi
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}