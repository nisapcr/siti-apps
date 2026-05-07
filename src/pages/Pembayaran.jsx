import { useState } from "react";
import { FiCheckCircle, FiClock, FiPrinter, FiX, FiDownload } from "react-icons/fi";
// Pastikan path ini benar sesuai struktur foldermu
import transaksiData from "../data/transaksi.json";

const formatTanggal = (tanggal) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

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
          .total-row { display: flex; justify-content: space-between; align-items: center; background: #f9fafb; border-radius: 10px; padding: 16px 20px; margin-bottom: 28px; }
          .total-label { font-size: 14px; color: #6b7280; }
          .total-value { font-size: 22px; font-weight: 700; color: #059669; }
          .footer { text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div><div class="clinic-name">🦷 Klinik Gigi</div><div class="clinic-sub">Pelayanan Kesehatan Gigi Terpercaya</div></div>
          <span class="badge">${transaksi.statusPembayaran}</span>
        </div>
        <div class="title-row"><span class="title">Kwitansi Pembayaran</span><span class="no-kwitansi">${transaksi.noKwitansi}</span></div>
        <div class="info-grid">
          <div class="info-item"><label>Nama Pasien</label><span>${transaksi.pasienNama}</span></div>
          <div class="info-item"><label>Tanggal</label><span>${formatTanggal(transaksi.tanggal)}</span></div>
          <div class="info-item"><label>Tindakan</label><span>${transaksi.tindakan}</span></div>
          <div class="info-item"><label>Metode Bayar</label><span>${transaksi.metodePembayaran || "Tunai"}</span></div>
        </div>
        <hr style="border:none; border-top:1px solid #e5e7eb; margin: 20px 0;" />
        <div class="total-row">
          <div class="total-label">Total Pembayaran</div>
          <div class="total-value">Rp${transaksi.biaya.toLocaleString("id-ID")}</div>
        </div>
        <div class="footer">Terima kasih telah mempercayakan kesehatan gigi Anda kepada <strong>Klinik Gigi</strong></div>
      </body>
      </html>`
    );
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 300);
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, width: "100%", maxWidth: 480, overflow: "hidden" }}>
        <div style={{ padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#d0dde8" }}>Preview Kwitansi</div>
            <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 2 }}>{transaksi.noKwitansi}</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8, cursor: "pointer", color: "#6a7a8a", padding: 5 }}>
            <FiX size={18} />
          </button>
        </div>

        <div style={{ padding: "22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: 20 }}>
            {[
              { label: "Nama Pasien", value: transaksi.pasienNama },
              { label: "Tindakan", value: transaksi.tindakan },
              { label: "Tanggal", value: formatTanggal(transaksi.tanggal) },
              { label: "Status", value: transaksi.statusPembayaran },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: 10, color: "#4a5a6a", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#d0dde8", fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(31,212,160,0.06)", border: "1px solid rgba(31,212,160,0.15)", borderRadius: 10, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: "#6a7a8a" }}>Total Tagihan</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1FD4A0" }}>Rp{transaksi.biaya.toLocaleString("id-ID")}</div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={onClose} style={{ flex: 1, padding: "12px", borderRadius: 10, background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#6a7a8a", cursor: "pointer" }}>Batal</button>
            <button onClick={handlePrint} style={{ flex: 2, background: "#1FD4A0", color: "#0f1117", border: "none", borderRadius: 10, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <FiPrinter size={14} /> Cetak Kwitansi
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

  const stats = [
    { label: "Total Pendapatan", value: `Rp${(totalPendapatan / 1000000).toFixed(1)}jt`, color: "#1FD4A0" },
    { label: "Transaksi Lunas", value: totalLunas, color: "#4A9EF5" },
    { label: "Transaksi Cicil", value: totalCicil, color: "#F5A623" },
    { label: "Total Invoice", value: transaksiData.length, color: "#8B5CF6" },
  ];

  return (
    <div style={{ padding: "24px", color: "#fff" }}>
      {selectedTransaksi && (
        <KwitansiModal transaksi={selectedTransaksi} onClose={() => setSelectedTransaksi(null)} />
      )}

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>💰 Manajemen Pembayaran</h1>
        <p style={{ color: "#4a5a6a", fontSize: 14 }}>Pantau arus kas dan cetak kwitansi pasien</p>
      </div>

      {/* Grid Stats (Diperbaiki agar pas 4 kolom) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: s.color, borderRadius: "16px 0 0 16px" }} />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Tabel */}
      <div style={{ background: "#161a26", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{ padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>Riwayat Transaksi Terkini</h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", background: "rgba(255,255,255,0.02)" }}>
                {["Kwitansi", "Pasien", "Tindakan", "Biaya", "Status", "Aksi"].map(h => (
                  <th key={h} style={{ padding: "14px 20px", fontSize: 11, color: "#4a5a6a", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transaksiData.map((t) => (
                <tr key={t.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  <td style={{ padding: "16px 20px", fontSize: 13, color: "#6a7a8a", fontFamily: "monospace" }}>{t.noKwitansi}</td>
                  <td style={{ padding: "16px 20px", fontSize: 14, fontWeight: 500 }}>{t.pasienNama}</td>
                  <td style={{ padding: "16px 20px", fontSize: 14, color: "#a0b0c0" }}>{t.tindakan}</td>
                  <td style={{ padding: "16px 20px", fontSize: 14, fontWeight: 700, color: "#1FD4A0" }}>Rp{t.biaya.toLocaleString()}</td>
                  <td style={{ padding: "16px 20px" }}>
                    <span style={{ 
                      padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                      background: t.statusPembayaran === "Lunas" ? "rgba(31,212,160,0.1)" : "rgba(245,166,35,0.1)",
                      color: t.statusPembayaran === "Lunas" ? "#1FD4A0" : "#F5A623"
                    }}>
                      {t.statusPembayaran}
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <button 
                      onClick={() => setSelectedTransaksi(t)}
                      style={{ background: "#1FD4A0", color: "#0f1117", border: "none", padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                    >
                      Cetak
                    </button>
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