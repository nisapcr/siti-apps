import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { ActionButton, SectionTitle } from "../../components";
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

const iconStyle = {
position: "absolute",
left: 14,
top: "50%",
transform: "translateY(-50%)",
color: "#A0AEC0",
fontSize: 16,
};

export default function Register() {
const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
fullname: "",
email: "",
password: "",
confirmPassword: "",
});

const focusIn = (e) => {
e.target.style.borderColor = mintColor;
e.target.style.background = "#fff";
e.target.style.boxShadow =
"0 0 0 3px rgba(79,209,197,0.1)";
};

const focusOut = (e) => {
e.target.style.borderColor = "#E2E8F0";
e.target.style.background = "#F8F9FA";
e.target.style.boxShadow = "none";
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

if (
  formData.password !==
  formData.confirmPassword
) {
  alert("Konfirmasi password tidak sama");
  return;
}

try {
  setLoading(true);

  const users = await usersAPI.getUsers();

  const emailExist = users.find(
    (item) =>
      item.email === formData.email
  );

  if (emailExist) {
    alert("Email sudah terdaftar");
    return;
  }

  await usersAPI.createUser({
    fullname: formData.fullname,
    email: formData.email,
    password: formData.password,
    role: "user",
  });

  alert("Registrasi berhasil");

  navigate("/login");
} catch (error) {
  console.error(error);
  alert("Registrasi gagal");
} finally {
  setLoading(false);
}

};

return (
<div style={{ fontFamily: "'Inter', sans-serif" }}>
<div
style={{
marginBottom: 32,
textAlign: "center",
}}
>

Daftar Akun Baru



    <p
      style={{
        fontSize: 14,
        color: "#A0AEC0",
        marginTop: 8,
      }}
    >
      Bergabunglah untuk mulai
      mengelola klinik Anda
    </p>
  </div>

  <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: 18 }}>
      <label style={labelStyle}>
        Nama Lengkap
      </label>

      <div style={{ position: "relative" }}>
        <FiUser style={iconStyle} />

        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap"
          style={inputStyle}
          onFocus={focusIn}
          onBlur={focusOut}
          required
        />
      </div>
    </div>

    <div style={{ marginBottom: 18 }}>
      <label style={labelStyle}>
        Email
      </label>

      <div style={{ position: "relative" }}>
        <FiMail style={iconStyle} />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          style={inputStyle}
          onFocus={focusIn}
          onBlur={focusOut}
          required
        />
      </div>
    </div>

    <div style={{ marginBottom: 18 }}>
      <label style={labelStyle}>
        Password
      </label>

      <div style={{ position: "relative" }}>
        <FiLock style={iconStyle} />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          style={inputStyle}
          onFocus={focusIn}
          onBlur={focusOut}
          required
        />
      </div>
    </div>

    <div style={{ marginBottom: 28 }}>
      <label style={labelStyle}>
        Konfirmasi Password
      </label>

      <div style={{ position: "relative" }}>
        <FiLock style={iconStyle} />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          style={inputStyle}
          onFocus={focusIn}
          onBlur={focusOut}
          required
        />
      </div>
    </div>

    <ActionButton
      type="submit"
      disabled={loading}
    >
      {loading
        ? "Mendaftarkan..."
        : "Daftar Sekarang"}
    </ActionButton>
  </form>

  <p
    style={{
      textAlign: "center",
      fontSize: 14,
      color: "#718096",
      marginTop: 24,
    }}
  >
    Sudah punya akun?{" "}
    <Link
      to="/login"
      style={{
        color: mintColor,
        textDecoration: "none",
        fontWeight: 600,
      }}
    >
      Masuk di sini
    </Link>
  </p>
</div>

);
}