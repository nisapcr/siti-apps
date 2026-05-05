// src/pages/Pasien.jsx
import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiEye, FiX, FiUser, FiMail, FiPhone, FiCalendar, FiMapPin, FiActivity } from "react-icons/fi";
import { pasienData, formatTanggal } from "../data/dummyData";

const inputStyle = {
  width: "100%",
  background: "#0f1117",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: "10px 14px",
  color: "#d0dde8",
  fontSize: 13,
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle = {
  fontSize: 11,
  color: "#4a5a6a",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  marginBottom: 6,
  display: "block",
};

const fieldWithIcon = (icon, children) => (
  <div style={{ position: "relative" }}>
    <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a", pointerEvents: "none" }}>
      {icon}
    </div>
    {children}
  </div>
);

function TambahPasienModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    nama: "", email: "", telepon: "", tanggalLahir: "",
    jenisKelamin: "Laki-laki", alamat: "", golonganDarah: "",
    perawatanTerakhir: "", tanggalTerakhir: "", status: "Aktif",
  });
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.nama.trim())         e.nama = "Nama wajib diisi";
    if (!form.email.trim())        e.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Format email tidak valid";
    if (!form.telepon.trim())      e.telepon = "Nomor telepon wajib diisi";
    if (!form.tanggalLahir)        e.tanggalLahir = "Tanggal lahir wajib diisi";
    return e;
  };

  const handleSave = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const newPasien = {
      id: Date.now(),
      nama: form.nama,
      email: form.email,
      telepon: form.telepon,
      tanggalLahir: form.tanggalLahir,
      jenisKelamin: form.jenisKelamin,
      alamat: form.alamat,
      golonganDarah: form.golonganDarah,
      status: form.status,
      perawatanTerakhir: (form.perawatanTerakhir || "").trim() || "-",
      tanggalTerakhir: form.tanggalTerakhir || new Date().toISOString().split("T")[0],
    };
    onSave(newPasien);
    onClose();
  };

  const fields = [
    { key: "nama",              label: "Nama Lengkap",      icon: <FiUser size={14} />,     type: "text",  placeholder: "cth. Budi Santoso",       fullWidth: false },
    { key: "email",             label: "Email",             icon: <FiMail size={14} />,     type: "email", placeholder: "budi@email.com",           fullWidth: false },
    { key: "telepon",           label: "Nomor Telepon",     icon: <FiPhone size={14} />,    type: "text",  placeholder: "08xx-xxxx-xxxx",           fullWidth: false },
    { key: "tanggalLahir",      label: "Tanggal Lahir",     icon: <FiCalendar size={14} />, type: "date",  placeholder: "",                         fullWidth: false },
    { key: "alamat",            label: "Alamat",            icon: <FiMapPin size={14} />,   type: "text",  placeholder: "Jl. Contoh No. 1, Jakarta",fullWidth: true  },
    { key: "perawatanTerakhir", label: "Riwayat Perawatan", icon: <FiActivity size={14} />, type: "text",  placeholder: "cth. Tambal Gigi, Scaling",fullWidth: false },
    { key: "tanggalTerakhir",   label: "Tanggal Perawatan", icon: <FiCalendar size={14} />, type: "date",  placeholder: "",                         fullWidth: false },
  ];

  return (
    // Backdrop
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.65)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal */}
      <div style={{
        background: "#161a26",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 18,
        width: "100%", maxWidth: 520,
        maxHeight: "90vh", overflowY: "auto",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
      }}>
        {/* Modal header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          position: "sticky", top: 0, background: "#161a26", borderRadius: "18px 18px 0 0", zIndex: 1,
        }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#d0dde8", fontFamily: "'Playfair Display', serif" }}>
              Tambah Pasien Baru
            </div>
            <div style={{ fontSize: 12, color: "#4a5a6a", marginTop: 2 }}>Isi data pasien dengan lengkap</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)", border: "none", borderRadius: 8,
              width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#6a7a8a", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
          >
            <FiX size={15} />
          </button>
        </div>

        {/* Form */}
        <div style={{ padding: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 14px" }}>
            {fields.map(({ key, label, icon, type, placeholder, fullWidth }) => (
              <div key={key} style={{ gridColumn: fullWidth ? "1 / -1" : "auto" }}>
                <label style={labelStyle}>{label}</label>
                {fieldWithIcon(
                  icon,
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => set(key, e.target.value)}
                    style={{
                      ...inputStyle,
                      paddingLeft: 36,
                      borderColor: errors[key] ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = errors[key] ? "rgba(248,113,113,0.7)" : "rgba(31,212,160,0.35)")}
                    onBlur={(e) => (e.target.style.borderColor = errors[key] ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)")}
                  />
                )}
                {errors[key] && (
                  <div style={{ fontSize: 11, color: "#F87171", marginTop: 4 }}>{errors[key]}</div>
                )}
              </div>
            ))}

            {/* Jenis Kelamin */}
            <div>
              <label style={labelStyle}>Jenis Kelamin</label>
              <select
                value={form.jenisKelamin}
                onChange={(e) => set("jenisKelamin", e.target.value)}
                style={{ ...inputStyle, borderColor: "rgba(255,255,255,0.08)", cursor: "pointer" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Golongan Darah */}
            <div>
              <label style={labelStyle}>Golongan Darah</label>
              <select
                value={form.golonganDarah}
                onChange={(e) => set("golonganDarah", e.target.value)}
                style={{ ...inputStyle, borderColor: "rgba(255,255,255,0.08)", cursor: "pointer" }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <option value="">Pilih golongan darah</option>
                {["A", "B", "AB", "O"].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "20px 0" }} />

          {/* Actions */}
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <button
              onClick={onClose}
              style={{
                padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 500,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#6a7a8a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: "10px 22px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                border: "none", color: "#0f1117", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Simpan Pasien
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pasien() {
  const [search, setSearch] = useState("");
  const [pasienList, setPasienList] = useState(pasienData);
  const [showModal, setShowModal] = useState(false);

  const filtered = pasienList.filter(
    (p) =>
      p.nama.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (newPasien) => {
    setPasienList((prev) => [newPasien, ...prev]);
  };

  const handleDelete = (id) => {
    setPasienList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Modal */}
      {showModal && (
        <TambahPasienModal onClose={() => setShowModal(false)} onSave={handleSave} />
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: "#fff", fontFamily: "'Playfair Display', serif", margin: 0 }}>Data Pasien</h1>
          <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>Total {pasienList.length} pasien terdaftar</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            color: "#0f1117", fontSize: 13, fontWeight: 600,
            padding: "9px 16px", borderRadius: 10,
            border: "none", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <FiPlus size={15} /> Tambah Pasien
        </button>
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <FiSearch style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#4a5a6a", fontSize: 14 }} />
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama atau email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            background: "#161a26",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            padding: "10px 14px 10px 40px",
            color: "#a0b0c0",
            fontSize: 13,
            outline: "none",
            fontFamily: "'DM Sans', sans-serif",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(31,212,160,0.35)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      {/* Table Panel */}
      <div style={{ background: "#161a26", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#d0dde8" }}>Daftar Pasien</div>
          <span style={{ fontSize: 11, color: "#4a5a6a" }}>{filtered.length} hasil ditemukan</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
            <thead>
              <tr style={{ background: "#0f1117" }}>
                {["Nama", "Email / Telepon", "Riwayat Terakhir", "Status", "Aksi"].map((h) => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, color: "#3d4f5e", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((pasien) => (
                <tr
                  key={pasien.id}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: "50%",
                        background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: 600, color: "#0f1117", flexShrink: 0,
                      }}>
                        {pasien.nama.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#d0dde8" }}>{pasien.nama}</div>
                        <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>{formatTanggal(pasien.tanggalLahir)}</div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ fontSize: 13, color: "#a0b0c0" }}>{pasien.email}</div>
                    <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>{pasien.telepon}</div>
                  </td>

                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ fontSize: 13, color: "#a0b0c0" }}>{pasien.perawatanTerakhir}</div>
                    <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>{formatTanggal(pasien.tanggalTerakhir)}</div>
                  </td>

                  <td style={{ padding: "13px 16px" }}>
                    <span style={{
                      display: "inline-block",
                      padding: "3px 10px", borderRadius: 20, fontSize: 11,
                      background: pasien.status === "Aktif" ? "rgba(31,212,160,0.1)" : "rgba(255,255,255,0.05)",
                      color: pasien.status === "Aktif" ? "#1FD4A0" : "#5a6a7a",
                    }}>
                      {pasien.status}
                    </span>
                  </td>

                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button
                        title="Lihat"
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#4A9EF5", padding: 4, borderRadius: 6, transition: "background 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(74,158,245,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        <FiEye size={15} />
                      </button>
                      <button
                        title="Edit"
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#1FD4A0", padding: 4, borderRadius: 6, transition: "background 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(31,212,160,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        <FiEdit2 size={15} />
                      </button>
                      <button
                        title="Hapus"
                        onClick={() => handleDelete(pasien.id)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#f57272", padding: 4, borderRadius: 6, transition: "background 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245,57,57,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: "36px 16px", textAlign: "center", color: "#3d4f5e", fontSize: 13 }}>
                    {search ? `Tidak ada pasien yang cocok dengan "${search}"` : "Belum ada data pasien."}
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