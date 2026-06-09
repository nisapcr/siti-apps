import React, { useState } from "react";
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
  DashboardContent,
  StatusBadge,
  ActionButton,
} from "../components";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const additionalStats = [
  {
    title: "Pendapatan Bulan Ini",
    value: "Rp 142.5jt",
    change: "+18%",
    icon: FiCalendar,
    color: "#9F7AEA",
  },
  {
    title: "Rating Klinik",
    value: "4.8/5",
    change: "+0.3",
    icon: FiActivity,
    color: "#F6AD55",
  },
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
  {
    id: 1,
    title: "Konsultasi Dr. Shinta",
    time: "09:00",
    date: "2024-12-22",
    status: "completed",
    description: "Pasien Andi - Pemasangan Behel",
  },
  {
    id: 2,
    title: "Scaling Pasien Rudi",
    time: "10:30",
    date: "2024-12-22",
    status: "ongoing",
    description: "Perawatan rutin",
  },
  {
    id: 3,
    title: "Implan Gigi",
    time: "13:00",
    date: "2024-12-22",
    status: "pending",
    description: "Pasien Siti - Tahap awal",
  },
  {
    id: 4,
    title: "Veneer Gigi",
    time: "15:00",
    date: "2024-12-22",
    status: "pending",
    description: "Pasien Clara - Konsultasi lanjutan",
  },
];

export default function DentalDashboard() {
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
      <PageHeader
        title="Dashboard"
        breadcrumb="Home"
      />

      {/* SHADCN TABS */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "24px",
        }}
      >
        <Tabs defaultValue="overview">

  <TabsList
    className="w-full"
    style={{
      display: "flex",
      width: "100%",
      background: "#F7FAFC",
      borderRadius: "16px",
      padding: "6px",
      gap: "8px",
      marginBottom: "20px",
    }}
  >
    <TabsTrigger
      value="overview"
      style={{
        flex: 1,
        borderRadius: "12px",
        padding: "12px",
        fontWeight: 600,
      }}
    >
      📊 Overview
    </TabsTrigger>

    <TabsTrigger
      value="crm"
      style={{
        flex: 1,
        borderRadius: "12px",
        padding: "12px",
        fontWeight: 600,
      }}
    >
      👥 CRM
    </TabsTrigger>

    <TabsTrigger
      value="laporan"
      style={{
        flex: 1,
        borderRadius: "12px",
        padding: "12px",
        fontWeight: 600,
      }}
    >
      📈 Laporan
    </TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    <div
      style={{
        padding: "24px",
        background: "#F8FAFC",
        borderRadius: "16px",
      }}
    >
      <h3
        style={{
          marginBottom: "8px",
          color: "#2D3748",
        }}
      >
        Ringkasan Klinik Hari Ini
      </h3>

      <p style={{ color: "#718096" }}>
        Total pasien yang datang hari ini sebanyak
        42 orang dengan 156 janji temu aktif.
      </p>
    </div>
  </TabsContent>

  <TabsContent value="crm">
    <div
      style={{
        padding: "24px",
        background: "#F8FAFC",
        borderRadius: "16px",
      }}
    >
      <h3
        style={{
          marginBottom: "8px",
          color: "#2D3748",
        }}
      >
        Customer Relationship Management
      </h3>

      <p style={{ color: "#718096" }}>
        Loyalitas pasien meningkat 12% dibanding
        bulan sebelumnya. Program reminder dan
        follow-up berjalan dengan baik.
      </p>
    </div>
  </TabsContent>

  <TabsContent value="laporan">
    <div
      style={{
        padding: "24px",
        background: "#F8FAFC",
        borderRadius: "16px",
      }}
    >
      <h3
        style={{
          marginBottom: "8px",
          color: "#2D3748",
        }}
      >
        Laporan Klinik
      </h3>

      <p style={{ color: "#718096" }}>
        Pendapatan bulan ini mencapai Rp142.500.000
        dengan tingkat kepuasan pasien 4.8/5.
      </p>
    </div>
  </TabsContent>

</Tabs>
      </div>

      <StatsGrid stats={stats} />

      <SectionTitle>
        Statistik Klinik
      </SectionTitle>

      <SectionSubtitle>
        Data performa klinik dalam 30 hari terakhir
      </SectionSubtitle>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
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

      <DashboardContent
        treatmentData={treatmentData}
        queueData={queueData}
        timelineData={timelineData}
      />

      <div style={{ marginTop: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
          }}
        >
          <ActionButton
            onClick={() =>
              setShowStatus(!showStatus)
            }
          >
            {showStatus
              ? "Sembunyikan Status"
              : "Tampilkan Status"}
          </ActionButton>
        </div>

        {showStatus && (
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "20px",
              boxShadow:
                "0px 3.5px 5.5px rgba(0,0,0,0.02)",
            }}
          >
            <SectionTitle>
              Status Sistem
            </SectionTitle>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <StatusBadge
                text="✅ Sistem Online"
                color="#38B2AC"
                bgColor="#E6FFFA"
              />

              <StatusBadge
                text="🟢 Database Terkoneksi"
                color="#48BB78"
                bgColor="#F0FFF4"
              />

              <StatusBadge
                text="🔄 Backup Terjadwal"
                color="#805AD5"
                bgColor="#FAF5FF"
              />

              <StatusBadge
                text="📊 Sync Real-time"
                color="#3182CE"
                bgColor="#EBF8FF"
              />

              <StatusBadge
                text="🔒 SSL Active"
                color="#2F855A"
                bgColor="#F0FFF4"
              />

              <StatusBadge
                text="⏱️ Last Update: Hari Ini"
                color="#718096"
                bgColor="#F7FAFC"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}