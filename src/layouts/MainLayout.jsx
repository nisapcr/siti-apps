import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#F8F9FA", 
      color: "#2D3748",      
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* 1. SIDEBAR (Fixed di kiri - Lebar 250px) */}
      <Sidebar />

      {/* 2. WRAPPER KONTEN (Harus geser ke kanan sebesar lebar sidebar) */}
      <div style={{ 
        flex: 1, 
        marginLeft: 250, // PENTING: Harus sama dengan lebar Sidebar kamu!
        display: "flex", 
        flexDirection: "column", 
        minHeight: "100vh",
      }}>
        
        {/* Header - Jika ingin Header nempel di atas saat scroll, gunakan position sticky */}
        <div style={{ 
          position: "sticky", 
          top: 0, 
          zIndex: 900, 
          background: "#F8F9FA" 
        }}>
          <Header />
        </div>

        {/* Area Konten Utama */}
        <main style={{
          flex: 1,
          padding: "32px",
          background: "#F8F9FA",
        }}>
          {/* Pembungkus Outlet agar konten tidak terlalu lebar di monitor besar */}
          <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}