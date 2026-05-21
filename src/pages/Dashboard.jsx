// pages/Dashboard.jsx
import React, { useState } from "react";  // ✅ tambah useState
import {
  FiUsers,
  FiActivity,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import {
  PageHeader,
  StatsGrid,
  StatisticCard,
  SectionTitle,
  SectionSubtitle,
  ProgressTable,
  TreatmentPanel,
  QueuePanel,
  Timeline,
  DashboardContent,
  StatusBadge,        // ✅ TAMBAHKAN import StatusBadge
  ActionButton,       // ✅ TAMBAHKAN import ActionButton (opsional untuk toggle)
} from "../components";

// Data contoh untuk StatisticCard tambahan
const additionalStats = [
  { title: "Pendapatan Bulan Ini", value: "Rp 142.5jt", change: "+18%", icon: FiCalendar, color: "#9F7AEA" },
  { title: "Rating Klinik", value: "4.8/5", change: "+0.3", icon: FiActivity, color: "#F6AD55" },
];

const treatmentData = [
  {
    id: 1,
    patient: "Andi Herlambang",
    type: "Pemasangan Behel",
    doctor: "drg. Shinta",
    budget: 8500000,
    completion: 60,
  },
  {
    id: 2,
    patient: "Siti Aminah",
    type: "Implan Gigi",
    doctor: "drg. Budi",
    budget: 12000000,
    completion: 10,
  },
  {
    id: 3,
    patient: "Rudi Tabuti",
    type: "Scaling & Cleaning",
    doctor: "drg. Denny",
    budget: 500000,
    completion: 100,
  },
  {
    id: 4,
    patient: "Clara Shinta",
    type: "Veneer Gigi",
    doctor: "drg. Shinta",
    budget: 25000000,
    completion: 40,
  },
];

const queueData = [
  {
    id: 1,
    task: "Pencabutan Gigi Geraham - Pasien #421",
    time: "22 DEC 7:20 PM",
    priority: "high",
    patient: "Budi Santoso",
  },
  {
    id: 2,
    task: "Konsultasi Dokter Baru - Pasien #422",
    time: "21 DEC 11:21 PM",
    priority: "urgent",
    patient: "Siti Nurhaliza",
  },
  {
    id: 3,
    task: "Pembayaran Laboratorium - Ortho",
    time: "21 DEC 9:28 PM",
    priority: "normal",
    patient: "Ahmad Fauzi",
  },
  {
    id: 4,
    task: "Pendaftaran Pasien Member Baru",
    time: "20 DEC 3:52 PM",
    priority: "low",
    patient: "Dewi Kartika",
  },
];

const timelineData = [
  { id: 1, title: "Konsultasi Dr. Shinta", time: "09:00", date: "2024-12-22", status: "completed", description: "Pasien Andi - Pemasangan Behel" },
  { id: 2, title: "Scaling Pasien Rudi", time: "10:30", date: "2024-12-22", status: "ongoing", description: "Perawatan rutin" },
  { id: 3, title: "Implan Gigi", time: "13:00", date: "2024-12-22", status: "pending", description: "Pasien Siti - Tahap awal" },
  { id: 4, title: "Veneer Gigi", time: "15:00", date: "2024-12-22", status: "pending", description: "Pasien Clara - Konsultasi lanjutan" },
];

export default function DentalDashboard() {
  // ✅ Tambah state untuk toggle status badge
  const [showStatus, setShowStatus] = useState(true);

  const stats = [
    {
      title: "Pasien Hari Ini",
      value: "42",
      change: "+12%",
      icon: FiUsers,
    },
    {
      title: "Dokter Aktif",
      value: "8",
      change: "+2",
      icon: FiActivity,
    },
    {
      title: "Total Janji Temu",
      value: "156",
      change: "+5%",
      icon: FiCalendar,
    },
    {
      title: "Waktu Tunggu",
      value: "14m",
      change: "-3m",
      icon: FiClock,
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        background: "#F8F9FA",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <PageHeader title="Dashboard" breadcrumb="Home" />

      {/* StatsGrid pertama */}
      <StatsGrid stats={stats} />

      {/* Section Title & Subtitle untuk Statistic Card tambahan */}
      <SectionTitle>Statistik Klinik</SectionTitle>
      <SectionSubtitle>Data performa klinik dalam 30 hari terakhir</SectionSubtitle>

      {/* StatisticCard tambahan (2 card) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "32px" }}>
        {additionalStats.map((stat, idx) => (
          <StatisticCard
            key={idx}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* DashboardContent */}
      <DashboardContent
        treatmentData={treatmentData}
        queueData={queueData}
        timelineData={timelineData}
      />

      {/* ========== ✅ TAMBAHAN: StatusBadge Section ========== */}
      <div style={{ marginTop: "32px" }}>
        {/* Tombol toggle StatusBadge */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
          <ActionButton onClick={() => setShowStatus(!showStatus)} size="small">
            {showStatus ? "Sembunyikan Status" : "Tampilkan Status"}
          </ActionButton>
        </div>

        {/* StatusBadge yang ditampilkan */}
        {showStatus && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
            }}
          >
            <SectionTitle>Status Sistem</SectionTitle>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <StatusBadge text="✅ Sistem Online" color="#38B2AC" bgColor="#E6FFFA" />
              <StatusBadge text="🟢 Database Terkoneksi" color="#48BB78" bgColor="#F0FFF4" />
              <StatusBadge text="🔄 Backup Terjadwal" color="#805AD5" bgColor="#FAF5FF" />
              <StatusBadge text="📊 Sync Real-time" color="#3182CE" bgColor="#EBF8FF" />
              <StatusBadge text="🔒 SSL Active" color="#2F855A" bgColor="#F0FFF4" />
              <StatusBadge text="⏱️ Last Update: Hari Ini" color="#718096" bgColor="#F7FAFC" />
            </div>
          </div>
        )}
      </div>
      {/* ========== END StatusBadge Section ========== */}

    </div>
  );
}