import { useEffect, useState } from "react";
import {
  FiUsers,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiMail,
  FiShield,
} from "react-icons/fi";

import { usersAPI } from "../services/usersAPI";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "user",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const data = await usersAPI.getUsers();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editId) {
        await usersAPI.updateUser(editId, form);
        alert("User berhasil diupdate");
      } else {
        await usersAPI.createUser(form);
        alert("User berhasil ditambahkan");
      }

      setForm({
        fullname: "",
        email: "",
        password: "",
        role: "user",
      });

      setEditId(null);
      loadUsers();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Yakin hapus user?")) return;

    await usersAPI.deleteUser(id);
    loadUsers();
  }

  function handleEdit(user) {
    setEditId(user.id);

    setForm({
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      role: user.role,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const filteredUsers = users.filter(
    (u) =>
      u.fullname
        ?.toLowerCase()
        .includes(keyword.toLowerCase()) ||
      u.email
        ?.toLowerCase()
        .includes(keyword.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "40px 30px",
        background: "#F7FAFC",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#1A202C",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            Manajemen User
          </h2>
          <p
            style={{
              color: "#718096",
              marginTop: 6,
              fontSize: "14px",
            }}
          >
            Kelola akun pengguna sistem klinik
          </p>
        </div>

        <div style={statCard}>
          <div style={iconBadge}>
            <FiUsers size={22} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}>
              {users.length}
            </h3>
            <span style={{ fontSize: "12px", opacity: 0.9, fontWeight: 500 }}>
              Total User
            </span>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div style={card}>
        <h3 style={sectionTitle}>
          {editId ? "✏️ Edit Informasi User" : "✨ Tambah User Baru"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div style={grid}>
            <input
              style={input}
              placeholder="Nama Lengkap"
              value={form.fullname}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullname: e.target.value,
                })
              }
            />

            <input
              style={input}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              style={input}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <select
              style={selectInputStyle}
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button style={saveBtn} type="submit">
            <FiPlus size={18} />
            {editId ? "Update User" : "Simpan User"}
          </button>
        </form>
      </div>

      {/* SEARCH */}
      <div style={searchWrapper}>
        <FiSearch color="#A0AEC0" size={18} />
        <input
          style={searchInput}
          placeholder="Cari user berdasarkan nama atau email..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div style={{ ...card, padding: 0, overflow: "hidden" }}>
        <table style={table}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Nama</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ ...tdStyle, textAlign: "center", color: "#A0AEC0", padding: "40px" }}>
                  Tidak ada data user ditemukan.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} style={tableRowStyle}>
                  <td style={{ ...tdStyle, fontWeight: 600, color: "#718096" }}>
                    #{user.id}
                  </td>

                  <td style={{ ...tdStyle, fontWeight: 600, color: "#2D3748" }}>
                    {user.fullname}
                  </td>

                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#4A5568" }}>
                      <FiMail size={14} style={{ color: "#A0AEC0" }} />
                      {user.email}
                    </div>
                  </td>

                  <td style={tdStyle}>
                    <span
                      style={{
                        background: user.role === "admin" ? "#EBF8FF" : "#F0FFF4",
                        color: user.role === "admin" ? "#3182CE" : "#38A169",
                        padding: "6px 14px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        textTransform: "capitalize",
                      }}
                    >
                      <FiShield size={12} />
                      {user.role}
                    </span>
                  </td>

                  <td style={tdStyle}>
                    <div style={{ display: "flex", gap: 2 }}>
                      <button
                        style={editBtn}
                        type="button"
                        onClick={() => handleEdit(user)}
                        title="Edit User"
                      >
                        <FiEdit2 size={14} />
                      </button>

                      <button
                        style={deleteBtn}
                        type="button"
                        onClick={() => handleDelete(user.id)}
                        title="Hapus User"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* STYLE */

const card = {
  background: "#fff",
  borderRadius: 24,
  padding: 30,
  marginBottom: 25,
  boxShadow: "0 10px 25px rgba(160, 174, 192, 0.07)",
  border: "1px solid #E2E8F0",
};

const sectionTitle = {
  marginTop: 0,
  marginBottom: 25,
  color: "#1A202C",
  fontSize: "18px",
  fontWeight: 600,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
};

const input = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid #E2E8F0",
  outline: "none",
  fontSize: 14,
  boxSizing: "border-box",
  color: "#2D3748",
  backgroundColor: "#FAFCFF",
  transition: "all 0.2s ease",
};

const selectInputStyle = {
  ...input,
  cursor: "pointer",
};

const saveBtn = {
  marginTop: 25,
  background: "linear-gradient(135deg, #4FD1C5, #38B2AC)",
  color: "#fff",
  border: "none",
  padding: "14px 28px",
  borderRadius: 14,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 600,
  fontSize: "14px",
  boxShadow: "0 8px 20px rgba(79, 209, 197, 0.3)",
  transition: "all 0.2s ease",
};

const statCard = {
  background: "linear-gradient(135deg, #4FD1C5, #38B2AC)",
  color: "#fff",
  padding: "16px 24px",
  borderRadius: 20,
  display: "flex",
  gap: 16,
  alignItems: "center",
  minWidth: 200,
  boxShadow: "0 10px 25px rgba(79, 209, 197, 0.3)",
};

const iconBadge = {
  background: "rgba(255, 255, 255, 0.2)",
  padding: "10px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const searchWrapper = {
  background: "#fff",
  padding: "14px 20px",
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 25,
  boxShadow: "0 4px 12px rgba(160, 174, 192, 0.05)",
  border: "1px solid #E2E8F0",
};

const searchInput = {
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: "14px",
  color: "#2D3748",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const tableRowStyle = {
  transition: "background-color 0.2s ease",
};

const editBtn = {
  background: "#EBF8FF",
  color: "#3182CE",
  border: "none",
  width: 38,
  height: 38,
  borderRadius: 12,
  marginRight: 8,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
};

const deleteBtn = {
  background: "#FFF5F5",
  color: "#E53E3E",
  border: "none",
  width: 38,
  height: 38,
  borderRadius: 12,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
};

const thStyle = {
  background: "#F8FAFC",
  padding: "18px 24px",
  textAlign: "left",
  color: "#718096",
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  borderBottom: "2px solid #E2E8F0",
};

const tdStyle = {
  padding: "18px 24px",
  borderBottom: "1px solid #EDF2F7",
  fontSize: "14px",
  verticalAlign: "middle",
};