// src/pages/user/UserLayout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Calendar, History, CreditCard, Bell, LogOut } from 'lucide-react';
import { logoutUser, getCurrentUser } from '../../lib/auth';

export default function UserLayout() {
  const navigate = useNavigate();
  const user = getCurrentUser() || { name: 'Pasien', email: '' };

  const handleLogout = () => {
    logoutUser(); // Membersihkan session/localStorage
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900">
      {/* SIDEBAR USER */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between">
        <div className="p-6">
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-600 mb-8">
            <span className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm">S</span>
            SITI Portal
          </div>
          
          <nav className="space-y-1">
            <SidebarLink to="/portal" icon={<LayoutDashboard size={18} />} label="Dashboard" />
            <SidebarLink to="/portal/jadwal" icon={<Calendar size={18} />} label="Jadwal Kunjungan" />
            <SidebarLink to="/portal/riwayat" icon={<History size={18} />} label="Riwayat Perawatan" />
            <SidebarLink to="/portal/pembayaran" icon={<CreditCard size={18} />} label="Pembayaran" />
            <SidebarLink to="/portal/notifikasi" icon={<Bell size={18} />} label="Notifikasi" />
          </nav>
        </div>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-9 w-9 min-w-[36px] rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold text-sm">
              {user.name[0]?.toUpperCase()}
            </div>
            <div className="truncate">
              <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate">Pasien</p>
            </div>
          </div>
          <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-500 rounded-lg transition-colors" title="Logout">
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-lg font-medium text-slate-700">Portal Pasien SITI</h1>
          <div className="text-sm text-slate-500">{user.email}</div>
        </header>
        <div className="p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

// Helper Mini Component untuk Navigasi aktif
function SidebarLink({ to, icon, label }) {
  const isActive = window.location.pathname === to;
  return (
    <a href={to} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
      isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    }`}>
      {icon}
      {label}
    </a>
  );
}