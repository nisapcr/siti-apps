import { useState } from "react";
import { FiSearch, FiDownload, FiFileText, FiX } from "react-icons/fi";
import { riwayatPerawatanData, formatTanggal } from "../data/dummyData";

function exportToCSV(data) {
  const headers = ["Pasien", "Tindakan", "Tanggal", "Dokter", "Biaya", "Status"];
  const rows = data.map((r) => [
    r.pasienNama,
    r.tindakan,
    formatTanggal(r.tanggal),
    r.dokter,
    `Rp${r.biaya.toLocaleString("id-ID")}`,
    r.status,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `riwayat-perawatan-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportToPrint(data) {
  const rows = data
    .map(
      (r) => `
      <tr>
        <td>${r.pasienNama}</td>
        <td>${r.tindakan}</td>
        <td>${formatTanggal(r.tanggal)}</td>
        <td>${r.dokter}</td>
        <td>Rp${r.biaya.toLocaleString("id-ID")}</td>
        <td><span class="badge">${r.status}</span></td>
      </tr>`
    )
    .join("");

  const printWindow = window.open("", "_blank", "width=900,height=700");
  printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Riwayat Perawatan</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; color: #1a1a2e; padding: 32px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #1FD4A0; }
    .title { font-size: 20px; font-weight: 700; }
    .subtitle { font-size: 12px; color: #6b7280; margin-top: 4px; }
    .meta { font-size: 12px; color: #6b7280; text-align: right; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    thead tr { background: #f3f4f6; }
    th { padding: 10px 14px; text-align: left; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; }
    td { padding: 11px 14px; border-bottom: 1px solid #f0f0f0; color: #374151; }
    tr:hover td { background: #fafafa; }
    .badge { background: #d1fae5; color: #065f46; padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; }
    .footer { margin-top: 24px; text-align: center; font-size: 11px; color: #9ca3af; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="title">🦷 Laporan Riwayat Perawatan</div>
      <div class="subtitle">Klinik Gigi — Catatan Medis Pasien</div>
    </div>
    <div class="meta">
      Dicetak: ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}<br/>
      Total: ${data.length} catatan
    </div>
  </div>
  <table>
    <thead>
      <tr><th>Pasien</th><th>Tindakan</th><th>Tanggal</th><th>Dokter</th><th>Biaya</th><th>Status</th></tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="footer">Dokumen ini digenerate otomatis oleh sistem Klinik Gigi</div>
</body>
</html>`);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => { printWindow.print(); }, 300);
}

function ExportModal({ data, onClose }) {
  const total = data.reduce((sum, r) => sum + r.biaya, 0);

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, width: "100%", maxWidth: 400, fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#d0dde8", fontFamily: "'Playfair Display', serif" }}>Export Data</div>
            <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 2 }}>{data.length} catatan akan diekspor</div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#6a7a8a" }}>
            <FiX size={14} />
          </button>
        </div>

        {/* Summary */}
        <div style={{ padding: "18px 22px" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 16px", marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#4a5a6a" }}>Total Catatan</span>
              <span style={{ fontSize: 13, color: "#d0dde8", fontWeight: 600 }}>{data.length}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "#4a5a6a" }}>Total Biaya</span>
              <span style={{ fontSize: 13, color: "#1FD4A0", fontWeight: 600 }}>Rp{total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          {/* Export options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => { exportToCSV(data); onClose(); }}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(31,212,160,0.06)", border: "1px solid rgba(31,212,160,0.2)",
                borderRadius: 10, padding: "14px 16px", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(31,212,160,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(31,212,160,0.2)")}
            >
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(31,212,160,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiDownload size={16} style={{ color: "#1FD4A0" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#d0dde8" }}>Download CSV</div>
                <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 1 }}>Buka di Excel, Google Sheets, dll.</div>
              </div>
            </button>

            <button
              onClick={() => { exportToPrint(data); onClose(); }}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(74,158,245,0.06)", border: "1px solid rgba(74,158,245,0.2)",
                borderRadius: 10, padding: "14px 16px", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(74,158,245,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(74,158,245,0.2)")}
            >
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(74,158,245,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FiFileText size={16} style={{ color: "#4A9EF5" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#d0dde8" }}>Cetak / Simpan PDF</div>
                <div style={{ fontSize: 11, color: "#4a5a6a", marginTop: 1 }}>Print atau simpan sebagai file PDF</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Riwayat() {
  const [search, setSearch] = useState("");
  const [showExport, setShowExport] = useState(false);

  const filtered = riwayatPerawatanData.filter(
    (r) =>
      r.pasienNama.toLowerCase().includes(search.toLowerCase()) ||
      r.tindakan.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {showExport && <ExportModal data={filtered} onClose={() => setShowExport(false)} />}

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif" }}>Riwayat Perawatan</h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Catatan medis lengkap pasien</p>
      </div>

      {/* Search */}
      <div style={{ position: "relative", maxWidth: 360, marginBottom: 20 }}>
        <FiSearch style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a", fontSize: 14 }} />
        <input
          type="text"
          placeholder="Cari riwayat pasien..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: "10px 14px 10px 38px",
            color: "#a0b0c0",
            fontSize: 13,
            outline: "none",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      {/* Table Panel */}
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>Catatan Medis</div>
          <button
            onClick={() => setShowExport(true)}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
              color: "#0f1117", fontSize: 12, fontWeight: 600,
              padding: "6px 14px", borderRadius: 8,
              border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <FiDownload size={12} /> Export
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
            <thead>
              <tr style={{ background: "#0f1117" }}>
                {["Pasien", "Tindakan", "Tanggal", "Dokter", "Biaya", "Status"].map((h) => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, color: "#3d4f5e", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((riwayat) => (
                <tr
                  key={riwayat.id}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "13px 16px", fontWeight: 500, color: "#d0dde8", fontSize: 13 }}>{riwayat.pasienNama}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{riwayat.tindakan}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{formatTanggal(riwayat.tanggal)}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{riwayat.dokter}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>Rp{riwayat.biaya.toLocaleString()}</td>
                  <td style={{ padding: "13px 16px" }}>
                    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 11, background: "rgba(31,212,160,0.1)", color: "#1FD4A0" }}>
                      {riwayat.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: "32px 16px", textAlign: "center", color: "#3d4f5e", fontSize: 13 }}>
                    Tidak ada hasil untuk "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}