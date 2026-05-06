import { useState } from "react";
import { FiCheckCircle, FiClock, FiSend, FiCalendar } from "react-icons/fi";
import jadwalData from "../data/jadwal.json";


function formatTanggal(tgl) {
  return new Date(tgl).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
export default function Penjadwalan() {
  const [filter, setFilter] = useState("all");

  const today = new Date().toISOString().split("T")[0];
  const jadwalHariIni = jadwalData.filter((j) => j.tanggal === today);
  const jadwalPending = jadwalData.filter((j) => j.status === "Pending");
  const [search, setSearch] = useState("");
  const filteredJadwal =
    (filter === "all"
      ? jadwalData
      : jadwalData.filter((j) => j.status.toLowerCase() === filter.toLowerCase())
    ).filter((j) =>
      j.pasienNama.toLowerCase().includes(search.toLowerCase()) ||
      j.layanan.toLowerCase().includes(search.toLowerCase())
    );

  const stats = [
    { label: "Janji Hari Ini", value: jadwalHariIni.length, color: "#1FD4A0", bg: "rgba(31,212,160,0.08)", top: "#1FD4A0" },
    { label: "Pending", value: jadwalPending.length, color: "#F5A623", bg: "rgba(245,166,35,0.08)", top: "#F5A623" },
    { label: "Total Jadwal", value: jadwalData.length, color: "#4A9EF5", bg: "rgba(74,158,245,0.08)", top: "#4A9EF5" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif" }}>Penjadwalan</h1>
        <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Atur jadwal dan reminder pasien</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14,
            padding: "18px 20px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${s.top}, transparent)` }} />
            <div style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{s.label}</div>
            <div style={{ fontSize: 28, fontWeight: 600, color: s.color, lineHeight: 1 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Table Panel */}
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
        {/* Panel Header */}
        <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>Daftar Penjadwalan</div>
          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: 6 }}>
            {["all", "confirmed", "pending"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 8,
                  border: filter === tab ? "1px solid rgba(31,212,160,0.25)" : "1px solid transparent",
                  background: filter === tab ? "rgba(31,212,160,0.1)" : "transparent",
                  color: filter === tab ? "#1FD4A0" : "#5a6a7a",
                  fontSize: 12,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginLeft: 10 }}>
          <input
            type="text"
            placeholder="Cari pasien / layanan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0f1117",
              color: "#a0b0c0",
              fontSize: 12,
              outline: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
        </div>
        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead>
              <tr style={{ background: "#0f1117" }}>
                {["Pasien", "Layanan", "Tanggal", "Jam", "Status", "Reminder"].map((h) => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, color: "#3d4f5e", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredJadwal.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ padding: "32px 16px", textAlign: "center", color: "#3d4f5e", fontSize: 13 }}>
                    Tidak ada jadwal
                  </td>
                </tr>
              )}
              {filteredJadwal.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <td style={{ padding: "13px 16px", fontWeight: 500, color: "#d0dde8", fontSize: 13 }}>{item.pasienNama}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{item.layanan}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{formatTanggal(item.tanggal)}</td>
                  <td style={{ padding: "13px 16px", color: "#a0b0c0", fontSize: 13 }}>{item.jam}</td>
                  <td style={{ padding: "13px 16px" }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      padding: "3px 10px", borderRadius: 20, fontSize: 11,
                      background: item.status === "Confirmed" ? "rgba(31,212,160,0.1)" : "rgba(245,166,35,0.1)",
                      color: item.status === "Confirmed" ? "#1FD4A0" : "#F5A623",
                    }}>
                      {item.status === "Confirmed" ? <FiCheckCircle size={11} /> : <FiClock size={11} />}
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: "13px 16px" }}>
                    <button style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      color: "#1FD4A0", background: "none", border: "none",
                      cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans', sans-serif",
                    }}>
                      <FiSend size={12} /> {item.reminderMethod}
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