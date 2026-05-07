import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
// Pastikan file JSON ini ada, atau ganti dengan [] jika belum ada
import pasienData from "../data/pasien.json"; 

// --- KOMPONEN MODAL (Tetap di atas atau pisah file) ---
function TambahPasienModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    tanggalLahir: "",
    jenisKelamin: "Laki-laki",
    alamat: "",
    golonganDarah: "",
    perawatanTerakhir: "",
    tanggalTerakhir: "",
    status: "Aktif",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPasien = {
      id: Date.now(),
      ...form,
      // Default jika kosong
      perawatanTerakhir: form.perawatanTerakhir || "-",
      tanggalTerakhir: form.tanggalTerakhir || new Date().toISOString().split("T")[0],
    };
    onSave(newPasien);
    onClose();
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto", position: "relative" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "#161a26", zIndex: 1 }}>
          <h2 style={{ fontSize: 18, color: "#d0dde8", margin: 0 }}>Tambah Pasien Baru</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#6a7a8a", cursor: "pointer", fontSize: 20 }}>✕</button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Input Nama */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Nama Lengkap</label>
              <input type="text" name="nama" value={form.nama} onChange={handleChange} required style={inputStyle} />
            </div>
            {/* Input Email */}
            <div>
              <label style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} style={inputStyle} />
            </div>
            {/* Input Telepon */}
            <div>
              <label style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Telepon</label>
              <input type="text" name="telepon" value={form.telepon} onChange={handleChange} style={inputStyle} />
            </div>
            {/* Jenis Kelamin */}
            <div>
              <label style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Jenis Kelamin</label>
              <select name="jenisKelamin" value={form.jenisKelamin} onChange={handleChange} style={inputStyle}>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            {/* Golongan Darah */}
            <div>
              <label style={{ fontSize: 11, color: "#4a5a6a", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Gol. Darah</label>
              <select name="golonganDarah" value={form.golonganDarah} onChange={handleChange} style={inputStyle}>
                <option value="">-</option>
                <option value="A">A</option><option value="B">B</option><option value="AB">AB</option><option value="O">O</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button type="button" onClick={onClose} style={{ padding: "10px 20px", borderRadius: 10, background: "transparent", color: "#6a7a8a", border: "1px solid #3d4f5e", cursor: "pointer" }}>Batal</button>
            <button type="submit" style={{ padding: "10px 20px", borderRadius: 10, background: "linear-gradient(135deg, #1FD4A0, #0FA877)", color: "#0f1117", border: "none", fontWeight: 600, cursor: "pointer" }}>Simpan Pasien</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- KOMPONEN UTAMA ---
export default function Pasien() {
  const [search, setSearch] = useState("");
  const [pasienList, setPasienList] = useState(pasienData || []);
  const [showModal, setShowModal] = useState(false);

  const handleAddPasien = (newPasien) => setPasienList([newPasien, ...pasienList]);
  const handleDelete = (id) => {
    if(window.confirm("Hapus data pasien ini?")) {
      setPasienList(pasienList.filter(p => p.id !== id));
    }
  };

  const filteredPasien = pasienList.filter(p => 
    p.nama.toLowerCase().includes(search.toLowerCase()) || 
    p.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ color: "#fff", minHeight: "100vh" }}>
      {showModal && <TambahPasienModal onClose={() => setShowModal(false)} onSave={handleAddPasien} />}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <div>
          <h1 style={{ fontSize: 24, margin: 0, fontFamily: "'Playfair Display', serif" }}>Data Pasien</h1>
          <p style={{ color: "#4a5a6a", fontSize: 14 }}>Kelola informasi pasien klinik Anda</p>
        </div>
        <button onClick={() => setShowModal(true)} style={btnPrimary}><FiPlus /> Tambah Pasien</button>
      </div>

      {/* Search Bar */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <FiSearch style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a" }} />
        <input 
          type="text" 
          placeholder="Cari nama atau email..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={searchInputStyle} 
        />
      </div>

      {/* Table */}
      <div style={{ background: "#161a26", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#0f1117", textAlign: "left", color: "#4a5a6a", fontSize: 12 }}>
              <th style={{ padding: 16 }}>NAMA PASIEN</th>
              <th style={{ padding: 16 }}>KONTAK</th>
              <th style={{ padding: 16 }}>STATUS</th>
              <th style={{ padding: 16 }}>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredPasien.map(pasien => (
              <tr key={pasien.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={avatarStyle}>{pasien.nama.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 500, color: "#d0dde8" }}>{pasien.nama}</div>
                      <div style={{ fontSize: 11, color: "#4a5a6a" }}>ID: {pasien.id.toString().slice(-5)}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: 16 }}>
                  <div style={{ fontSize: 13, color: "#a0b0c0" }}>{pasien.email}</div>
                  <div style={{ fontSize: 12, color: "#4a5a6a" }}>{pasien.telepon}</div>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, background: "rgba(31,212,160,0.1)", color: "#1FD4A0" }}>
                    {pasien.status}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button style={actionBtn}><FiEye /></button>
                    <button onClick={() => handleDelete(pasien.id)} style={{ ...actionBtn, color: "#ff4d4d" }}><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- STYLES ---
const inputStyle = { width: "100%", background: "#0f1117", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 14px", color: "#d0dde8", outline: "none", boxSizing: "border-box" };
const searchInputStyle = { width: "100%", background: "#161a26", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 12px 12px 45px", color: "#fff", outline: "none" };
const btnPrimary = { display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #1FD4A0, #0FA877)", color: "#0f1117", border: "none", padding: "10px 20px", borderRadius: 10, fontWeight: 600, cursor: "pointer" };
const avatarStyle = { width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #1FD4A0, #0FA877)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f1117", fontWeight: "bold" };
const actionBtn = { background: "rgba(255,255,255,0.05)", border: "none", color: "#a0b0c0", padding: 8, borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center" };