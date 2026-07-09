// src/lib/auth.js

// Simulasi login (Sesuaikan dengan logic backend / localStorage Anda)
export const loginUser = (email, password) => {
  // 1. Kunci khusus untuk Admin
  if (email === 'admin@gmail.com' && password === 'admin123') {
    const adminUser = {
      name: 'Super Admin',
      email: email,
      role: 'admin', // Dapat akses penuh
    };
    localStorage.setItem('siti_session', JSON.stringify(adminUser));
    return adminUser;
  } 
  
  // 2. Jika email/password lain, anggap sebagai User/Pasien Biasa
  // (Idealnya di sini ada pengecekan ke database, tapi ini untuk pengaman frontend)
  const regularUser = {
    name: email.split('@')[0], // Ambil nama depan dari email
    email: email,
    role: 'user', // Akses terbatas ke /portal saja
  };
  
  localStorage.setItem('siti_session', JSON.stringify(regularUser));
  return regularUser;
};

// Fungsi untuk mengambil data user yang sedang login
export const getCurrentUser = () => {
  const session = localStorage.getItem('siti_session');
  return session ? JSON.parse(session) : null;
};

// Fungsi Logout untuk membersihkan session
export const logoutUser = () => {
  localStorage.removeItem('siti_session');
};