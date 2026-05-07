import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#F8F9FA", // Mengganti dark mode ke light mode yang bersih
      color: "#2D3748",      // Warna teks utama Navy Tua
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Sidebar tetap di sisi kiri */}
      <Sidebar />

      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        overflow: "hidden" 
      }}>
        {/* Header di bagian atas */}
        <Header />

        {/* Area Konten Utama */}
        <main style={{
          flex: 1,
          overflowY: "auto",
          padding: "32px 32px",
          background: "#F8F9FA", // Pastikan background main konsisten dengan kontainer
        }}>
          {/* Outlet akan merender halaman seperti Dashboard, Data Pasien, dll */}
          <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}