// src/pages/Pasien.jsx
import { useState } from "react";
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import pasienData from "../data/pasien.json";
// Komponen Modal Tambah Pasien
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
const formatTanggal = (tanggalISO) => {
  if (!tanggalISO) return "-";
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(tanggalISO).toLocaleDateString('id-ID', options);
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      perawatanTerakhir: form.perawatanTerakhir || "-",
      tanggalTerakhir: form.tanggalTerakhir || new Date().toISOString().split("T")[0],
    };
    onSave(newPasien);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#161a26",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          width: "100%",
          maxWidth: 520,
          maxHeight: "90vh",
          overflowY: "auto",
          fontFamily: "'DM Sans', sans-serif",
          position: "relative",
        }}
      >
        {/* Modal header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            background: "#161a26",
            borderRadius: "18px 18px 0 0",
            zIndex: 1,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "#d0dde8",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Tambah Pasien Baru
            </div>
            <div style={{ fontSize: 12, color: "#4a5a6a", marginTop: 2 }}>
              Isi data pasien dengan lengkap
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "none",
              borderRadius: 8,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#6a7a8a",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ padding: "24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 14px",
              }}
            >
              {/* Nama */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="cth. Budi Santoso"
                  required
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="budi@email.com"
                  required
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Telepon */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  name="telepon"
                  value={form.telepon}
                  onChange={handleChange}
                  placeholder="08xx-xxxx-xxxx"
                  required
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Tanggal Lahir */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={form.tanggalLahir}
                  onChange={handleChange}
                  required
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Alamat - full width */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Alamat
                </label>
                <input
                  type="text"
                  name="alamat"
                  value={form.alamat}
                  onChange={handleChange}
                  placeholder="Jl. Contoh No. 1, Jakarta"
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Riwayat Perawatan */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Riwayat Perawatan
                </label>
                <input
                  type="text"
                  name="perawatanTerakhir"
                  value={form.perawatanTerakhir}
                  onChange={handleChange}
                  placeholder="cth. Tambal Gigi, Scaling"
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Tanggal Perawatan */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Tanggal Perawatan
                </label>
                <input
                  type="date"
                  name="tanggalTerakhir"
                  value={form.tanggalTerakhir}
                  onChange={handleChange}
                  style={{
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
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              {/* Jenis Kelamin */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Jenis Kelamin
                </label>
                <select
                  name="jenisKelamin"
                  value={form.jenisKelamin}
                  onChange={handleChange}
                  style={{
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
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              {/* Golongan Darah */}
              <div>
                <label
                  style={{
                    fontSize: 11,
                    color: "#4a5a6a",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 6,
                    display: "block",
                  }}
                >
                  Golongan Darah
                </label>
                <select
                  name="golonganDarah"
                  value={form.golonganDarah}
                  onChange={handleChange}
                  style={{
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
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(31,212,160,0.35)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                >
                  <option value="">Pilih golongan darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                margin: "20px 0",
              }}
            />

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#6a7a8a",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                }
              >
                Batal
              </button>
              <button
                type="submit"
                style={{
                  padding: "10px 22px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                  border: "none",
                  color: "#0f1117",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Simpan Pasien
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Komponen Utama Pasien
export default function Pasien() {
  const [search, setSearch] = useState("");
  const [pasienList, setPasienList] = useState(pasienData);
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAddPasien = (newPasien) => {
    setPasienList([newPasien, ...pasienList]);
  };

  const handleDeletePasien = (id) => {
    setPasienList(pasienList.filter((p) => p.id !== id));
  };

  const filteredPasien = pasienList.filter(
    (p) =>
      p.nama.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Modal Tambah Pasien */}
      {showModal && (
        <TambahPasienModal
          onClose={() => setShowModal(false)}
          onSave={handleAddPasien}
        />
      )}

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              margin: 0,
            }}
          >
            Data Pasien
          </h1>
          <p style={{ color: "#4a5a6a", fontSize: 13, marginTop: 4 }}>
            Total {pasienList.length} pasien terdaftar
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
            color: "#0f1117",
            fontSize: 13,
            fontWeight: 600,
            padding: "9px 16px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <FiPlus size={15} /> Tambah Pasien
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ position: "relative", marginBottom: 20 }}>
        <FiSearch
          style={{
            position: "absolute",
            left: 13,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#4a5a6a",
            fontSize: 14,
          }}
        />
        <input
          type="text"
          placeholder="Cari pasien berdasarkan nama atau email..."
          value={search}
          onChange={handleSearchChange}
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
            transition: "border-color 0.2s",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = "rgba(31,212,160,0.35)")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(255,255,255,0.08)")
          }
        />
      </div>

      {/* Table Panel */}
      <div
        style={{
          background: "#161a26",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 15,
              color: "#d0dde8",
            }}
          >
            Daftar Pasien
          </div>
          <span style={{ fontSize: 11, color: "#4a5a6a" }}>
            {filteredPasien.length} hasil ditemukan
          </span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: 800,
            }}
          >
            <thead>
              <tr style={{ background: "#0f1117" }}>
                <th
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
                  Nama
                </th>
                <th
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
                  Email / Telepon
                </th>
                <th
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
                  Riwayat Terakhir
                </th>
                <th
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
                  Status
                </th>
                <th
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
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPasien.map((pasien) => (
                <tr
                  key={pasien.id}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  {/* Nama */}
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1FD4A0, #0FA877)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#0f1117",
                          flexShrink: 0,
                        }}
                      >
                        {pasien.nama.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#d0dde8" }}>
                          {pasien.nama}
                        </div>
                        <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>
              
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Email / Telepon */}
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ fontSize: 13, color: "#a0b0c0" }}>
                      {pasien.email}
                    </div>
                    <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>
                      {pasien.telepon}
                    </div>
                  </td>

                  {/* Riwayat Terakhir */}
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ fontSize: 13, color: "#a0b0c0" }}>
                      {pasien.perawatanTerakhir || "-"}
                    </div>
                    <div style={{ fontSize: 11, color: "#3d4f5e", marginTop: 2 }}>
                    </div>
                  </td>

                  {/* Status */}
                  <td style={{ padding: "13px 16px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: 11,
                        background:
                          pasien.status === "Aktif"
                            ? "rgba(31,212,160,0.1)"
                            : "rgba(255,255,255,0.05)",
                        color:
                          pasien.status === "Aktif" ? "#1FD4A0" : "#5a6a7a",
                      }}
                    >
                      {pasien.status}
                    </span>
                  </td>

                  {/* Aksi */}
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button
                        title="Lihat"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#4A9EF5",
                          padding: 4,
                          borderRadius: 6,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "rgba(74,158,245,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "none")
                        }
                      >
                        <FiEye size={15} />
                      </button>
                      <button
                        title="Edit"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#1FD4A0",
                          padding: 4,
                          borderRadius: 6,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "rgba(31,212,160,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "none")
                        }
                      >
                        <FiEdit2 size={15} />
                      </button>
                      <button
                        title="Hapus"
                        onClick={() => handleDeletePasien(pasien.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#f57272",
                          padding: 4,
                          borderRadius: 6,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "rgba(245,57,57,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "none")
                        }
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPasien.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    style={{
                      padding: "36px 16px",
                      textAlign: "center",
                      color: "#3d4f5e",
                      fontSize: 13,
                    }}
                  >
                    {search
                      ? `Tidak ada pasien yang cocok dengan "${search}"`
                      : "Belum ada data pasien."}
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