import { useState } from "react";
import { FiPlus, FiSearch, FiTrash2, FiMaximize2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import {
  PageHeader,
  ActionButton,
} from "../components";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import pasienData from "../data/pasien.json";

function TambahPasienModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    jenisKelamin: "Laki-laki",
    golonganDarah: "",
    status: "Aktif",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPasien = {
      id: Date.now(),
      ...form,
    };

    onSave(newPasien);
    onClose();
  };

  return (
    <div
      style={overlayStyle}
      onClick={(e) =>
        e.target === e.currentTarget &&
        onClose()
      }
    >
      <div style={modalStyle}>
        <div style={modalHeader}>
          <h2 style={{ margin: 0, color: "#2d3748" }}>
            Tambah Pasien
          </h2>

          <button onClick={onClose} style={closeBtn}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formGroup}>
            <label style={labelStyle}>Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>Telepon</label>
            <input
              type="text"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={grid2}>
            <div style={formGroup}>
              <label style={labelStyle}>Jenis Kelamin</label>
              <select
                name="jenisKelamin"
                value={form.jenisKelamin}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div style={formGroup}>
              <label style={labelStyle}>Golongan Darah</label>
              <select
                name="golonganDarah"
                value={form.golonganDarah}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Pilih Golongan Darah</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </div>
          </div>

          <button type="submit" style={btnPrimary}>
            Simpan Pasien
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Pasien() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pasienList, setPasienList] = useState(pasienData || []);
  const [activePasien, setActivePasien] = useState(null);
  const [openRiwayat, setOpenRiwayat] = useState(false);

  const handleAddPasien = (newPasien) => {
    setPasienList([newPasien, ...pasienList]);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Hapus pasien ini?");
    if (confirmDelete) {
      setPasienList(pasienList.filter((item) => item.id !== id));
    }
  };

  const filteredPasien = pasienList.filter((item) => {
    return (
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div style={container}>
      {showModal && (
        <TambahPasienModal
          onClose={() => setShowModal(false)}
          onSave={handleAddPasien}
        />
      )}

      <PageHeader title="Data Pasien" breadcrumb="Pasien">
        <ActionButton onClick={() => setShowModal(true)}>
          <FiPlus />
          Tambah Pasien
        </ActionButton>
      </PageHeader>

      {/* SEARCH */}
      <div style={searchWrapper}>
        <FiSearch style={searchIcon} />
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama atau email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />
      </div>

      {/* TABLE */}
      <div style={tableCard}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>PASIEN</th>
              <th style={th}>KONTAK</th>
              <th style={th}>STATUS</th>
              <th style={th}>AKSI</th>
            </tr>
          </thead>

          <tbody>
            {filteredPasien.map((pasien) => (
              <tr key={pasien.id} style={tr}>
                {/* Kolom Profil Pasien */}
                <td style={td}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={avatarStyle}>
                      {pasien.nama.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      {/* Klik nama langsung membuka Dialog Pratinjau */}
                      <Dialog onOpenChange={(open) => {
                        if (open) {
                          setActivePasien(pasien);
                          setOpenRiwayat(false);
                        }
                      }}>
                        <DialogTrigger asChild>
                          <button style={nameLinkBtn}>
                            {pasien.nama}
                          </button>
                        </DialogTrigger>

                        <DialogContent style={{ fontFamily: "sans-serif", maxWidth: "450px", borderRadius: "16px", padding: "24px" }}>
                          <DialogHeader>
                            <DialogTitle style={{ fontSize: "18px", fontWeight: "700", color: "#2d3748", marginBottom: "8px" }}>
                              Pratinjau Ringkas Pasien
                            </DialogTitle>
                          </DialogHeader>

                          {activePasien && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#4a5568" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid #edf2f7" }}>
                                <div style={{ ...avatarStyle, width: "48px", height: "48px", fontSize: "18px" }}>
                                  {activePasien.nama.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <div style={{ fontWeight: "700", fontSize: "16px", color: "#2d3748" }}>{activePasien.nama}</div>
                                  <div style={{ color: "#a0aec0", fontSize: "12px" }}>ID: {activePasien.id}</div>
                                </div>
                              </div>

                              <div style={previewRow}>
                                <span style={previewLabel}>Email:</span>
                                <span style={previewValue}>{activePasien.email || "-"}</span>
                              </div>

                              <div style={previewRow}>
                                <span style={previewLabel}>Telepon:</span>
                                <span style={previewValue}>{activePasien.telepon || "-"}</span>
                              </div>

                              <div style={previewRow}>
                                <span style={previewLabel}>Jenis Kelamin:</span>
                                <span style={previewValue}>{activePasien.jenisKelamin || "-"}</span>
                              </div>

                              <div style={previewRow}>
                                <span style={previewLabel}>Golongan Darah:</span>
                                <span style={{ ...previewValue, color: "#e53e3e", fontWeight: "700" }}>{activePasien.golonganDarah || "-"}</span>
                              </div>

                              <div style={previewRow}>
                                <span style={previewLabel}>Status:</span>
                                <span style={{
                                  padding: "3px 10px",
                                  borderRadius: "20px",
                                  background: activePasien.status === "Aktif" ? "#e6fffa" : "#edf2f7",
                                  color: activePasien.status === "Aktif" ? "#319795" : "#718096",
                                  fontSize: "12px",
                                  fontWeight: "600"
                                }}>
                                  {activePasien.status}
                                </span>
                              </div>

                              {/* Accordion Mini Riwayat di dalam Dialog */}
                              <div style={{ border: "1px solid #e2e8f0", borderRadius: "10px", overflow: "hidden", marginTop: "8px" }}>
                                <button 
                                  type="button"
                                  onClick={() => setOpenRiwayat(!openRiwayat)}
                                  style={accordionMiniTrigger}
                                >
                                  <span>Riwayat Kunjungan Singkat</span>
                                  <span>{openRiwayat ? "▲" : "▼"}</span>
                                </button>
                                
                                {openRiwayat && (
                                  <div style={{ padding: "12px", background: "#fff", borderTop: "1px solid #e2e8f0", fontSize: "12px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
                                      <span>Scaling Gigi</span>
                                      <span style={{ color: "#a0aec0" }}>14 Jan 2025</span>
                                    </div>
                                    <div style={{ color: "#718096", fontSize: "11px", marginTop: "2px" }}>drg. Permata</div>
                                  </div>
                                )}
                              </div>
                              
                              {/* Shortcut langsung lompat ke halaman rekam medis penuh */}
                              <Link to={`/pasien/${activePasien.id}`} style={fullRecordLink}>
                                <FiMaximize2 size={13} /> Buka Rekam Medis Lengkap
                              </Link>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <div style={{ fontSize: 13, color: "#a0aec0", marginTop: "2px" }}>
                        ID: {pasien.id}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Kolom Kontak */}
                <td style={td}>
                  <div style={{ color: "#4a5568", fontSize: 14 }}>{pasien.email || "-"}</div>
                  <div style={{ color: "#a0aec0", fontSize: 13 }}>{pasien.telepon || "-"}</div>
                </td>

                {/* Kolom Status */}
                <td style={td}>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: 30,
                      background: pasien.status === "Aktif" ? "#48bb78" : "#edf2f7",
                      color: pasien.status === "Aktif" ? "#fff" : "#718096",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {pasien.status}
                  </span>
                </td>

                {/* Kolom Aksi */}
                <td style={td}>
                  <div style={{ display: "flex", gap: 10 }}>
                    {/* AKSI 1: Tombol Utama Menuju Halaman Penuh */}
                    <Link
                      to={`/pasien/${pasien.id}`}
                      style={actionBtn}
                      title="Lihat Detail Rekam Medis"
                    >
                      <FiMaximize2 />
                    </Link>

                    {/* AKSI 2: Tombol Hapus */}
                    <button
                      onClick={() => handleDelete(pasien.id)}
                      style={{ ...actionBtn, color: "#e53e3e" }}
                      title="Hapus Pasien"
                    >
                      <FiTrash2 />
                    </button>
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

/* ================= DESAIN CSS-IN-JS ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f7fe",
  padding: 30,
};

const searchWrapper = {
  position: "relative",
  marginBottom: 25,
};

const searchIcon = {
  position: "absolute",
  left: 15,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#a0aec0",
};

const searchInput = {
  width: "100%",
  padding: "14px 14px 14px 45px",
  borderRadius: 14,
  border: "1px solid #e2e8f0",
  outline: "none",
  background: "#ffffff",
  fontSize: 14,
};

const tableCard = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: 16,
  color: "#a0aec0",
  fontSize: 12,
  borderBottom: "1px solid #edf2f7",
};

const tr = {
  borderBottom: "1px solid #edf2f7",
};

const td = {
  padding: 16,
};

const avatarStyle = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  background: "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontWeight: "bold",
};

const nameLinkBtn = {
  background: "none",
  border: "none",
  padding: 0,
  fontSize: "14px",
  fontWeight: 700,
  color: "#319795",
  cursor: "pointer",
  textAlign: "left",
  outline: "none",
};

const actionBtn = {
  width: 36,
  height: 36,
  borderRadius: 10,
  border: "1px solid #e2e8f0",
  background: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#4a5568",
};

const btnPrimary = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  border: "none",
  color: "#ffffff",
  padding: "12px 22px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 600,
  marginTop: 10,
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
};

const modalStyle = {
  width: "100%",
  maxWidth: 520,
  background: "#ffffff",
  borderRadius: 24,
  padding: 28,
};

const modalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
};

const closeBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: 20,
};

const formGroup = {
  marginBottom: 18,
};

const labelStyle = {
  display: "block",
  marginBottom: 8,
  color: "#4a5568",
  fontSize: 14,
};

const inputStyle = {
  width: "100%",
  padding: 12,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  background: "#ffffff",
  outline: "none",
  boxSizing: "border-box",
};

const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
};

/* Gaya Tambahan Baru untuk Penyelarasan Dialog */
const previewRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const previewLabel = {
  color: "#a0aec0",
};

const previewValue = {
  fontWeight: "600",
};

const accordionMiniTrigger = {
  width: "100%",
  padding: "10px 12px",
  background: "#f7fafc",
  border: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: "600",
  color: "#4a5568",
  outline: "none",
  fontSize: "13px",
};

const fullRecordLink = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  background: "#e6fffa",
  color: "#234e52",
  padding: "10px",
  borderRadius: "10px",
  fontWeight: "700",
  fontSize: "13px",
  textDecoration: "none",
  textAlign: "center",
  marginTop: "6px",
};