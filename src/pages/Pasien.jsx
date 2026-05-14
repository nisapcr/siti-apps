import { useState } from "react";

import {
  FiPlus,
  FiSearch,
  FiTrash2,
  FiEye,
} from "react-icons/fi";

import { Link } from "react-router-dom";

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
          <h2
            style={{
              margin: 0,
              color: "#2d3748",
            }}
          >
            Tambah Pasien
          </h2>

          <button
            onClick={onClose}
            style={closeBtn}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formGroup}>
            <label style={labelStyle}>
              Nama Lengkap
            </label>

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
            <label style={labelStyle}>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label style={labelStyle}>
              Telepon
            </label>

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
              <label style={labelStyle}>
                Jenis Kelamin
              </label>

              <select
                name="jenisKelamin"
                value={form.jenisKelamin}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="Laki-laki">
                  Laki-laki
                </option>

                <option value="Perempuan">
                  Perempuan
                </option>
              </select>
            </div>

            <div style={formGroup}>
              <label style={labelStyle}>
                Golongan Darah
              </label>

              <select
                name="golonganDarah"
                value={form.golonganDarah}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">
                  Pilih Golongan Darah
                </option>

                <option value="A">
                  A
                </option>

                <option value="B">
                  B
                </option>

                <option value="AB">
                  AB
                </option>

                <option value="O">
                  O
                </option>
              </select>
            </div>

          </div>

          <button
            type="submit"
            style={btnPrimary}
          >
            Simpan Pasien
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Pasien() {
  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [pasienList, setPasienList] =
    useState(pasienData || []);

  const handleAddPasien = (
    newPasien
  ) => {
    setPasienList([
      newPasien,
      ...pasienList,
    ]);
  };

  const handleDelete = (id) => {
    const confirmDelete =
      window.confirm(
        "Hapus pasien ini?"
      );

    if (confirmDelete) {
      setPasienList(
        pasienList.filter(
          (item) => item.id !== id
        )
      );
    }
  };

  const filteredPasien =
    pasienList.filter((item) => {
      return (
        item.nama
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.email
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
      );
    });

  return (
    <div style={container}>
      {showModal && (
        <TambahPasienModal
          onClose={() =>
            setShowModal(false)
          }
          onSave={handleAddPasien}
        />
      )}

      {/* HEADER */}
      <div style={header}>
        <div>
          <p style={breadcrumb}>
          </p>

          <h1 style={title}>
            Data Pasien
          </h1>
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          style={btnPrimary}
        >
          <FiPlus />
          Tambah Pasien
        </button>
      </div>

      {/* SEARCH */}
      <div style={searchWrapper}>
        <FiSearch style={searchIcon} />

        <input
          type="text"
          placeholder="Cari pasien..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={searchInput}
        />
      </div>

      {/* TABLE */}
      <div style={tableCard}>
        <div style={tableHeader}>
          <h2 style={tableTitle}>
          </h2>
        </div>

        <table style={table}>
          <thead>
            <tr>
              <th style={th}>
                PASIEN
              </th>

              <th style={th}>
                KONTAK
              </th>

              <th style={th}>
                STATUS
              </th>

              <th style={th}>
                AKSI
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredPasien.map(
              (pasien) => (
                <tr
                  key={pasien.id}
                  style={tr}
                >
                  <td style={td}>
                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: 14,
                      }}
                    >
                      <div
                        style={
                          avatarStyle
                        }
                      >
                        {pasien.nama
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            color:
                              "#2d3748",
                          }}
                        >
                          {
                            pasien.nama
                          }
                        </div>

                        <div
                          style={{
                            fontSize: 13,
                            color:
                              "#a0aec0",
                          }}
                        >
                          ID :
                          {pasien.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={td}>
                    <div
                      style={{
                        color:
                          "#4a5568",
                        fontSize: 14,
                      }}
                    >
                      {
                        pasien.email
                      }
                    </div>

                    <div
                      style={{
                        color:
                          "#a0aec0",
                        fontSize: 13,
                      }}
                    >
                      {
                        pasien.telepon
                      }
                    </div>
                  </td>

                  <td style={td}>
                    <span
                      style={{
                        padding:
                          "6px 14px",
                        borderRadius:
                          30,
                        background:
                          pasien.status ===
                            "Aktif"
                            ? "#48bb78"
                            : "#edf2f7",
                        color:
                          pasien.status ===
                            "Aktif"
                            ? "#fff"
                            : "#718096",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {
                        pasien.status
                      }
                    </span>
                  </td>

                  <td style={td}>
                    <div
                      style={{
                        display:
                          "flex",
                        gap: 10,
                      }}
                    >
                      <Link
                        to={`/pasien/${pasien.id}`}
                        style={actionBtn}
                      >
                        <FiEye />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            pasien.id
                          )
                        }
                        style={{
                          ...actionBtn,
                          color:
                            "#e53e3e",
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f7fe",
  padding: 30,
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 30,
};

const breadcrumb = {
  color: "#a0aec0",
  marginBottom: 6,
  fontSize: 14,
};

const title = {
  margin: 0,
  fontSize: 30,
  color: "#2d3748",
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
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.03)",
};

const tableHeader = {
  marginBottom: 20,
};

const tableTitle = {
  margin: 0,
  color: "#2d3748",
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
  borderBottom:
    "1px solid #edf2f7",
};

const td = {
  padding: 16,
};

const avatarStyle = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontWeight: "bold",
};

const btnPrimary = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  border: "none",
  color: "#ffffff",
  padding: "12px 22px",
  borderRadius: 14,
  cursor: "pointer",
  fontWeight: 600,
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