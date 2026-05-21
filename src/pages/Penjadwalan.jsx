import { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiSend,
  FiCalendar,
  FiSearch,
} from "react-icons/fi";
import { PageHeader, StatsGrid, SectionTitle } from "../components";

import jadwalData from "../data/jadwal.json";

function formatTanggal(tgl) {
  return new Date(tgl).toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}

export default function Penjadwalan() {
  const [filter, setFilter] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const today = new Date()
    .toISOString()
    .split("T")[0];

  const jadwalHariIni =
    jadwalData.filter(
      (j) => j.tanggal === today
    );

  const jadwalPending =
    jadwalData.filter(
      (j) => j.status === "Pending"
    );

  const filteredJadwal =
    (
      filter === "all"
        ? jadwalData
        : jadwalData.filter(
            (j) =>
              j.status.toLowerCase() ===
              filter.toLowerCase()
          )
    ).filter(
      (j) =>
        j.pasienNama
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        j.layanan
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  const stats = [
    {
      label: "Janji Hari Ini",
      value: jadwalHariIni.length,
      color: "#4FD1C5",
      icon: FiCalendar,
    },
    {
      label: "Pending",
      value: jadwalPending.length,
      color: "#F6AD55",
      icon: FiClock,
    },
    {
      label: "Total Jadwal",
      value: jadwalData.length,
      color: "#4299E1",
      icon: FiCheckCircle,
    },
  ];

  return (
    <div style={container}>
      <PageHeader
        title="Penjadwalan"
        breadcrumb="Jadwal"
      />
      <p style={subtitle}>
        Atur jadwal dan reminder pasien
      </p>

      <StatsGrid
        stats={stats.map((s) => ({
          title: s.label,
          value: s.value,
          icon: s.icon,
        }))}
      />

      {/* TABLE CARD */}
      <div style={tableCard}>
        {/* HEADER */}
        <div style={tableHeader}>
          <div>
              <SectionTitle>Daftar Penjadwalan</SectionTitle>
          </div>

          <div style={filterWrapper}>
            {[
              "all",
              "confirmed",
              "pending",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setFilter(tab)
                }
                style={{
                  ...filterBtn,
                  ...(filter === tab
                    ? activeFilter
                    : {}),
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH */}
        <div style={searchWrapper}>
          <FiSearch
            style={searchIcon}
          />

          <input
            type="text"
            placeholder="Cari pasien atau layanan..."
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
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={table}>
            <thead>
              <tr>
                {[
                  "Pasien",
                  "Layanan",
                  "Tanggal",
                  "Jam",
                  "Status",
                  "Reminder",
                ].map((h) => (
                  <th
                    key={h}
                    style={th}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredJadwal.length ===
                0 && (
                <tr>
                  <td
                    colSpan="6"
                    style={
                      emptyState
                    }
                  >
                    Tidak ada jadwal
                  </td>
                </tr>
              )}

              {filteredJadwal.map(
                (item) => (
                  <tr
                    key={item.id}
                    style={tr}
                  >
                    <td style={td}>
                      <div
                        style={{
                          fontWeight: 600,
                          color:
                            "#2d3748",
                        }}
                      >
                        {
                          item.pasienNama
                        }
                      </div>
                    </td>

                    <td style={td}>
                      {
                        item.layanan
                      }
                    </td>

                    <td style={td}>
                      {formatTanggal(
                        item.tanggal
                      )}
                    </td>

                    <td style={td}>
                      {item.jam}
                    </td>

                    <td style={td}>
                      <span
                        style={{
                          ...statusBadge,
                          background:
                            item.status ===
                            "Confirmed"
                              ? "#E6FFFA"
                              : "#FFF7ED",
                          color:
                            item.status ===
                            "Confirmed"
                              ? "#38B2AC"
                              : "#DD6B20",
                        }}
                      >
                        {item.status ===
                        "Confirmed" ? (
                          <FiCheckCircle />
                        ) : (
                          <FiClock />
                        )}

                        {item.status}
                      </span>
                    </td>

                    <td style={td}>
                      <button
                        style={
                          reminderBtn
                        }
                      >
                        <FiSend />

                        {
                          item.reminderMethod
                        }
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  minHeight: "100vh",
  background: "#f4f7fe",
  padding: 30,
  fontFamily: "'DM Sans', sans-serif",
};

const header = {
  marginBottom: 28,
};

const breadcrumb = {
  color: "#A0AEC0",
  fontSize: 14,
  marginBottom: 6,
};

const title = {
  fontSize: 30,
  margin: 0,
  color: "#2D3748",
};

const subtitle = {
  color: "#A0AEC0",
  marginTop: 8,
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(3, 1fr)",
  gap: 18,
  marginBottom: 28,
};

const statsCard = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  display: "flex",
  alignItems: "center",
  gap: 16,
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.03)",
};

const iconWrapper = {
  width: 52,
  height: 52,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: 20,
};

const statsLabel = {
  color: "#A0AEC0",
  fontSize: 14,
  marginBottom: 4,
};

const statsValue = {
  fontSize: 30,
  fontWeight: 700,
};

const tableCard = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.03)",
};

const tableHeader = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  marginBottom: 24,
};

const tableTitle = {
  margin: 0,
  color: "#2D3748",
};

const tableSub = {
  marginTop: 4,
  color: "#A0AEC0",
  fontSize: 14,
};

const filterWrapper = {
  display: "flex",
  gap: 10,
};

const filterBtn = {
  padding: "8px 16px",
  borderRadius: 12,
  border: "1px solid #E2E8F0",
  background: "#ffffff",
  color: "#718096",
  cursor: "pointer",
  textTransform: "capitalize",
  fontWeight: 500,
};

const activeFilter = {
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  color: "#ffffff",
  border: "none",
};

const searchWrapper = {
  position: "relative",
  marginBottom: 24,
};

const searchIcon = {
  position: "absolute",
  left: 15,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#A0AEC0",
};

const searchInput = {
  width: "100%",
  padding: "14px 14px 14px 45px",
  borderRadius: 14,
  border: "1px solid #E2E8F0",
  outline: "none",
  fontSize: 14,
  background: "#ffffff",
  boxSizing: "border-box",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: 16,
  fontSize: 12,
  color: "#A0AEC0",
  borderBottom:
    "1px solid #EDF2F7",
  textTransform: "uppercase",
};

const tr = {
  borderBottom:
    "1px solid #EDF2F7",
};

const td = {
  padding: 16,
  color: "#4A5568",
  fontSize: 14,
};

const statusBadge = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 12px",
  borderRadius: 30,
  fontSize: 12,
  fontWeight: 600,
};

const reminderBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  border: "none",
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  color: "#ffffff",
  padding: "8px 14px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 500,
};

const emptyState = {
  padding: 30,
  textAlign: "center",
  color: "#A0AEC0",
};