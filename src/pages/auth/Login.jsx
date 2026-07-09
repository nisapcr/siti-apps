import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";

import {
  ActionButton,
  SectionTitle,
} from "../../components";

import { usersAPI } from "../../services/usersAPI";

const mintColor = "#4FD1C5";

const inputStyle = {
  width: "100%",
  background: "#F8F9FA",
  border: "1px solid #E2E8F0",
  borderRadius: 12,
  padding: "12px 14px 12px 42px",
  color: "#2D3748",
  fontSize: 14,
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  boxSizing: "border-box",
  transition: "all 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#4A5568",
  marginBottom: 8,
};

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const user = await usersAPI.login(
        dataForm.email,
        dataForm.password
      );

      if (!user || user.length === 0) {
        setError("Email atau password salah");
        return;
      }

      const loggedInUser = user[0];

      // 1. Simpan data user ke localStorage dengan key "siti_session" agar dibaca ProtectedRoute
      localStorage.setItem(
        "siti_session",
        JSON.stringify(loggedInUser)
      );

      // 2. Logika Redirect Dinamis Berdasarkan Role Pengguna
      if (loggedInUser.role === "admin") {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/portal", { replace: true });
      }

    } catch (err) {
      console.error(err);
      setError(
        "Login gagal. Terjadi kesalahan pada server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          marginBottom: 32,
          textAlign: "center",
        }}
      >
        <SectionTitle>
          Selamat Datang Kembali
        </SectionTitle>

        <p
          style={{
            fontSize: 14,
            color: "#A0AEC0",
            marginTop: 4,
          }}
        >
          Masuk untuk mengelola data klinik Anda
        </p>
      </div>

      {/* Error */}
      {error && (
        <div
          style={{
            background: "#FFF5F5",
            border: "1px solid #FED7D7",
            color: "#E53E3E",
            padding: "12px 16px",
            borderRadius: 12,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <FiAlertCircle size={16} />
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div
          style={{
            background:
              "rgba(79,209,197,0.1)",
            border:
              "1px solid rgba(79,209,197,0.2)",
            color: mintColor,
            padding: "12px 16px",
            borderRadius: 12,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <FiLoader
            size={16}
            style={{
              animation:
                "spin 1s linear infinite",
            }}
          />
          Sedang memverifikasi...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>
            Email
          </label>

          <div style={{ position: "relative" }}>
            <FiMail
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform:
                  "translateY(-50%)",
                color: "#A0AEC0",
                fontSize: 16,
              }}
            />

            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              required
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor =
                  mintColor;
                e.target.style.background =
                  "#fff";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(79,209,197,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor =
                  "#E2E8F0";
                e.target.style.background =
                  "#F8F9FA";
                e.target.style.boxShadow =
                  "none";
              }}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>
            Password
          </label>

          <div style={{ position: "relative" }}>
            <FiLock
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform:
                  "translateY(-50%)",
                color: "#A0AEC0",
                fontSize: 16,
              }}
            />

            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor =
                  mintColor;
                e.target.style.background =
                  "#fff";
                e.target.style.boxShadow =
                  "0 0 0 3px rgba(79,209,197,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor =
                  "#E2E8F0";
                e.target.style.background =
                  "#F8F9FA";
                e.target.style.boxShadow =
                  "none";
              }}
            />
          </div>
        </div>

        <ActionButton
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Menghubungkan..."
            : "Masuk"}
        </ActionButton>
      </form>

      {/* Footer */}
      <div
        style={{
          marginTop: 24,
          textAlign: "center",
          fontSize: 14,
          color: "#718096",
        }}
      >
        <Link
          to="/forgot"
          style={{
            color: mintColor,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Lupa password?
        </Link>

        <span
          style={{
            margin: "0 10px",
            color: "#E2E8F0",
          }}
        >
          |
        </span>

        <Link
          to="/register"
          style={{
            color: mintColor,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Daftar akun
        </Link>
      </div>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}