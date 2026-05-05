// src/pages/Pembayaran.jsx
import { useState } from "react";
import { FiCheckCircle, FiClock, FiPrinter, FiX, FiDownload } from "react-icons/fi";
import { transaksiData, formatTanggal } from "../data/dummyData";

// ── Kwitansi Modal ──────────────────────────────────────────────────────────
function KwitansiModal({ transaksi, onClose }) {
  const lunas = transaksi.statusPembayaran === "Lunas";

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "width=700,height=900");
    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Kwitansi ${transaksi.noKwitansi}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: #fff; color: #1a1a2e; padding: 40px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #1FD4A0; }
    .clinic-name { font-size: 22px; font-weight: 700; color: #0f1117; }
    .clinic-sub { font-size: 12px; color: #6b7280; margin-top: 4px; }
    .badge { background: ${lunas ? "#d1fae5" : "#fef3c7"}; color: ${lunas ? "#065f46" : "#92400e"}; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .title-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .title { font-size: 18px; font-weight: 700; color: #1a1a2e; }
    .no-kwitansi { font-size: 13px; color: #6b7280; font-family: monospace; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; margin-bottom: 28px; }
    .info-item label { font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px; }
    .info-item span { font-size: 14px; color: #1a1a2e; font-weight: 500; }
    .divider { border: none; border-top: 1px solid #e5e7eb; margin: 20px 0; }
    .total-row { display: flex; justify-content: space-between; align-items: center; background: #f9fafb; border-radius: 10px; padding: 16px 20px; margin-bottom: 28px; }
    .total-label { font-size: 14px; color: #6b7280; }
    .total-value { font-size: 22px; font-weight: 700; color: #059669; }
    .metode { font-size: 12px; color: #6b7280; text-align: right; margin-top: 2px; }
    .footer { text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px; }
    .footer strong { color: #1FD4A0; }
    @media print { body { padding: 24px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="clinic-name">🦷 Klinik Gigi</div>
      <div class="clinic-sub">Pelayanan Kesehatan Gigi Terpercaya</div>
    </div>
    <span class="badge">${transaksi.statusPembayaran}</span>
  </div>

  <div class="title-row">
    <span class="title">Kwitansi Pembayaran</span>
    <span class="no-kwitansi">${transaksi.noKwitansi}</span>
  </div>

  <div class="info-grid">
    <div class="info-item"><label>Nama Pasien</label><span>${transaksi.pasienNama}</span></div>
    <div class="info-item"><label>Tanggal</label><span>${formatTanggal(transaksi.tanggal)}</span></div>
    <div class="info-item"><label>Tindakan</label><span>${transaksi.tindakan}</span></div>
    <div class="info-item"><label>Metode Bayar</label><span>${transaksi.metodePembayaran || "Tunai"}</span></div>
  </div>

  <hr class="divider" />

  <div class="total-row">
    <div>
      <div class="total-label">Total Pembayaran</div>
      <div class="metode">${transaksi.metodePembayaran || "Tunai"}</div>
    </div>
    <div class="total-value">Rp${transaksi.biaya.toLocaleString("id-ID")}</div>
  </div>

  <div class="footer">
    Terima kasih telah mempercayakan kesehatan gigi Anda kepada<br/>
    <strong>Klinik Gigi</strong> — Senyum Sehat, Hidup Bahagia
  </div>
</body>
</html>`);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 300);
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, width: "100%", maxWidth: 480, fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}>
        {/* Modal header */}
        <div style={{ padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#d0dde8", fontFamily: "'Playfair Display', serif" }}>Preview Kwitansi</div>
            <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 2, fontFamily: "monospace" }}>{transaksi.noKwitansi}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6a7a8a" }}>
            <FiX size={14} />
          </button>
        </div>

        {/* Preview body */}
        <div style={{ padding: "22px" }}>
          {/* Klinik info */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#d0dde8" }}>🦷 Klinik Gigi</div>
              <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 2 }}>Pelayanan Kesehatan Gigi Terpercaya</div>
            </div>
            <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600, background: lunas ? "rgba(31,212,160,0.1)" : "rgba(245,166,35,0.1)", color: lunas ? "#1FD4A0" : "#F5A623" }}>
              {transaksi.statusPembayaran}
            </span>
          </div>

          {/* Info grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 16px", marginBottom: 20 }}>
            {[
              { label: "Nama Pasien",   value: transaksi.pasienNama },
              { label: "Tanggal",       value: formatTanggal(transaksi.tanggal) },
              { label: "Tindakan",      value: transaksi.tindakan },
              { label: "Metode Bayar",  value: transaksi.metodePembayaran || "Tunai" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: 10, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#d0dde8", fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div style={{ background: "rgba(31,212,160,0.06)", border: "1px solid rgba(31,212,160,0.15)", borderRadius: 10, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: "#6a7a8a" }}>Total Pembayaran</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1FD4A0" }}>Rp{transaksi.biaya.toLocaleString("id-ID")}</div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={onClose}
              style={{ flex: 1, padding: "10px", borderRadius: 10, fontSize: 13, fontWeight: 500, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#6a7a8a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            >
              Batal
            </button>
            <button
              onClick={handlePrint}
              style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px", borderRadius: 10, fontSize: 13, fontWeight: 600, background: "linear-gradient(135deg, #1FD4A0, #0FA877)", border: "none", color: "#0f1117", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FiDownload size={14} /> Cetak / Simpan PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function Pembayaran() {
  const [selectedTransaksi, setSelectedTransaksi] = useState(null);
  const totalPendapatan = transaksiData.reduce((sum, t) => sum + t.biaya, 0);
  const totalLunas = transaksiData.filter((t) => t.statusPembayaran === "Lunas").length;
  const totalCicil = transaksiData.filter((t) => t.statusPembayaran === "Cicil").length;
  const totalKwitansi = transaksiData.filter((t) => t.dikirimKeWA).length;

  const stats = [
    { label: "Total Pendapatan", value: `Rp${(totalPendapatan / 1000000).toFixed(1)}jt`, color: "#1FD4A0" },
    { label: "Transaksi Lunas",  value: totalLunas,    color: "#4A9EF5" },
    { label: "Transaksi Cicil",  value: totalCicil,    color: "#F5A623" },
    { label: "Kwitansi Terkirim",value: totalKwitansi, color: "#8B5CF6" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {selectedTransaksi && (
        <KwitansiModal transaksi={selectedTransaksi} onClose={() => setSelectedTransaksi(null)} />
      )}
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif", margin: 0 }}>
          Manajemen Pembayaran
        </h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Kelola transaksi dan kwitansi digital</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#161a26",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "18px 20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.color}, transparent)` }} />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontSize: 26, fontWeight: 600, color: s.color, lineHeight: 1 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Tabel Transaksi */}
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>Daftar Transaksi</div>
          <span style={{ fontSize: 11, color: "#1FD4A0", cursor: "pointer" }}>Export →</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 820 }}>
            <thead>
              <tr style={{ background: "#0f1117" }}>
                {["No. Kwitansi", "Pasien", "Tindakan", "Tanggal", "Biaya", "Status", "Aksi"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 16px",
                      textAlign: "left",
                      fontSize: 11,
                      color: "#3d4f5e",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transaksiData.map((t) => {
                const lunas = t.statusPembayaran === "Lunas";
                return (
                  <tr
                    key={t.id}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "13px 16px", fontFamily: "monospace", fontSize: 12, color: "#6a7a8a" }}>{t.noKwitansi}</td>
                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#d0dde8", fontSize: 13 }}>{t.pasienNama}</td>
                    <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{t.tindakan}</td>
                    <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{formatTanggal(t.tanggal)}</td>
                    <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 600, color: "#1FD4A0" }}>
                      Rp{t.biaya.toLocaleString()}
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          padding: "3px 10px",
                          borderRadius: 20,
                          fontSize: 11,
                          fontWeight: 600,
                          background: lunas ? "rgba(31,212,160,0.1)" : "rgba(245,166,35,0.1)",
                          color: lunas ? "#1FD4A0" : "#F5A623",
                        }}
                      >
                        {lunas ? <FiCheckCircle size={11} /> : <FiClock size={11} />}
                        {t.statusPembayaran}
                      </span>
                    </td>
                    <td style={{ padding: "13px 16px" }}>
                      <button
                        onClick={() => setSelectedTransaksi(t)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                          color: "#0f1117",
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "6px 12px",
                          borderRadius: 8,
                          cursor: "pointer",
                          border: "none",
                          fontFamily: "'DM Sans', sans-serif",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      >
                        <FiPrinter size={12} /> Cetak
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}