import { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiPrinter,
  FiX,
  FiDollarSign,
  FiFileText,
} from "react-icons/fi";

import transaksiData from "../data/transaksi.json";

const formatTanggal = (tanggal) => {
  return new Date(tanggal).toLocaleDateString(
    "id-ID",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
};

/* =========================
   MODAL KWITANSI
========================= */
function KwitansiModal({
  transaksi,
  onClose,
}) {
  const lunas =
    transaksi.statusPembayaran ===
    "Lunas";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={overlay}>
      <div style={modalCard}>
        {/* HEADER */}
        <div style={modalHeader}>
          <div>
            <h2 style={modalTitle}>
              Preview Kwitansi
            </h2>

            <p style={modalSub}>
              {
                transaksi.noKwitansi
              }
            </p>
          </div>

          <button
            onClick={onClose}
            style={closeBtn}
          >
            <FiX />
          </button>
        </div>

        {/* BODY */}
        <div style={modalBody}>
          <div style={infoGrid}>
            <div>
              <p style={infoLabel}>
                Nama Pasien
              </p>

              <p style={infoValue}>
                {
                  transaksi.pasienNama
                }
              </p>
            </div>

            <div>
              <p style={infoLabel}>
                Tindakan
              </p>

              <p style={infoValue}>
                {
                  transaksi.tindakan
                }
              </p>
            </div>

            <div>
              <p style={infoLabel}>
                Tanggal
              </p>

              <p style={infoValue}>
                {formatTanggal(
                  transaksi.tanggal
                )}
              </p>
            </div>

            <div>
              <p style={infoLabel}>
                Status
              </p>

              <p
                style={{
                  ...infoValue,
                  color: lunas
                    ? "#38B2AC"
                    : "#DD6B20",
                }}
              >
                {
                  transaksi.statusPembayaran
                }
              </p>
            </div>
          </div>

          {/* TOTAL */}
          <div style={totalCard}>
            <div>
              <p style={totalLabel}>
                Total Pembayaran
              </p>

              <h2 style={totalValue}>
                Rp
                {transaksi.biaya.toLocaleString(
                  "id-ID"
                )}
              </h2>
            </div>
          </div>

          {/* BUTTON */}
          <div style={modalBtnWrap}>
            <button
              onClick={onClose}
              style={cancelBtn}
            >
              Batal
            </button>

            <button
              onClick={handlePrint}
              style={printBtn}
            >
              <FiPrinter />
              Cetak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */
export default function Pembayaran() {
  const [
    selectedTransaksi,
    setSelectedTransaksi,
  ] = useState(null);

  const totalPendapatan =
    transaksiData.reduce(
      (sum, t) => sum + t.biaya,
      0
    );

  const totalLunas =
    transaksiData.filter(
      (t) =>
        t.statusPembayaran ===
        "Lunas"
    ).length;

  const totalCicil =
    transaksiData.filter(
      (t) =>
        t.statusPembayaran ===
        "Cicil"
    ).length;

  const stats = [
    {
      label: "Total Pendapatan",
      value: `Rp${(
        totalPendapatan /
        1000000
      ).toFixed(1)}jt`,
      color: "#4FD1C5",
      icon: <FiDollarSign />,
    },

    {
      label: "Transaksi Lunas",
      value: totalLunas,
      color: "#4299E1",
      icon: <FiCheckCircle />,
    },

    {
      label: "Transaksi Cicil",
      value: totalCicil,
      color: "#F6AD55",
      icon: <FiClock />,
    },

    {
      label: "Total Invoice",
      value: transaksiData.length,
      color: "#9F7AEA",
      icon: <FiFileText />,
    },
  ];

  return (
    <div style={container}>
      {selectedTransaksi && (
        <KwitansiModal
          transaksi={
            selectedTransaksi
          }
          onClose={() =>
            setSelectedTransaksi(
              null
            )
          }
        />
      )}

      {/* HEADER */}
      <div style={header}>
        <p style={breadcrumb}>
        </p>

        <h1 style={title}>
          Manajemen Pembayaran
        </h1>

        <p style={subtitle}>
          Pantau transaksi dan
          cetak kwitansi pasien
        </p>
      </div>

      {/* STATS */}
      <div style={statsGrid}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={statsCard}
          >
            <div
              style={{
                ...statsIcon,
                background:
                  s.color,
              }}
            >
              {s.icon}
            </div>

            <div>
              <p style={statsLabel}>
                {s.label}
              </p>

              <h2
                style={{
                  ...statsValue,
                  color: s.color,
                }}
              >
                {s.value}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div style={tableCard}>
        <div style={tableHeader}>
          <div>
            <h2 style={tableTitle}>
              Riwayat Transaksi
            </h2>

            <p style={tableSub}>
              Data pembayaran
              pasien terbaru
            </p>
          </div>
        </div>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={table}>
            <thead>
              <tr>
                {[
                  "Kwitansi",
                  "Pasien",
                  "Tindakan",
                  "Biaya",
                  "Status",
                  "Aksi",
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
              {transaksiData.map(
                (t) => (
                  <tr
                    key={t.id}
                    style={tr}
                  >
                    <td style={td}>
                      <span
                        style={
                          invoiceText
                        }
                      >
                        {
                          t.noKwitansi
                        }
                      </span>
                    </td>

                    <td style={td}>
                      <strong>
                        {
                          t.pasienNama
                        }
                      </strong>
                    </td>

                    <td style={td}>
                      {
                        t.tindakan
                      }
                    </td>

                    <td style={td}>
                      <span
                        style={
                          biayaText
                        }
                      >
                        Rp
                        {t.biaya.toLocaleString()}
                      </span>
                    </td>

                    <td style={td}>
                      <span
                        style={{
                          ...statusBadge,
                          background:
                            t.statusPembayaran ===
                            "Lunas"
                              ? "#E6FFFA"
                              : "#FFF7ED",

                          color:
                            t.statusPembayaran ===
                            "Lunas"
                              ? "#38B2AC"
                              : "#DD6B20",
                        }}
                      >
                        {
                          t.statusPembayaran
                        }
                      </span>
                    </td>

                    <td style={td}>
                      <button
                        onClick={() =>
                          setSelectedTransaksi(
                            t
                          )
                        }
                        style={
                          cetakBtn
                        }
                      >
                        <FiPrinter />
                        Cetak
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

/* =========================
   STYLES
========================= */

const container = {
  minHeight: "100vh",
  background: "#f4f7fe",
  padding: 30,
  fontFamily:
    "'DM Sans', sans-serif",
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
    "repeat(auto-fit,minmax(220px,1fr))",
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

const statsIcon = {
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
  fontSize: 28,
  fontWeight: 700,
  margin: 0,
};

const tableCard = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.03)",
};

const tableHeader = {
  marginBottom: 20,
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

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: 16,
  fontSize: 12,
  color: "#A0AEC0",
  textTransform: "uppercase",
  borderBottom:
    "1px solid #EDF2F7",
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

const invoiceText = {
  color: "#718096",
  fontFamily: "monospace",
};

const biayaText = {
  color: "#38B2AC",
  fontWeight: 700,
};

const statusBadge = {
  padding: "6px 14px",
  borderRadius: 30,
  fontSize: 12,
  fontWeight: 600,
};

const cetakBtn = {
  border: "none",
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  color: "#ffffff",
  padding: "10px 16px",
  borderRadius: 12,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 600,
};

/* MODAL */

const overlay = {
  position: "fixed",
  inset: 0,
  background:
    "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999,
  backdropFilter: "blur(4px)",
};

const modalCard = {
  width: "100%",
  maxWidth: 520,
  background: "#ffffff",
  borderRadius: 24,
  overflow: "hidden",
  boxShadow:
    "0 10px 40px rgba(0,0,0,0.15)",
};

const modalHeader = {
  padding: 24,
  borderBottom:
    "1px solid #EDF2F7",
  display: "flex",
  alignItems: "center",
  justifyContent:
    "space-between",
};

const modalTitle = {
  margin: 0,
  color: "#2D3748",
};

const modalSub = {
  color: "#A0AEC0",
  fontSize: 13,
  marginTop: 4,
};

const closeBtn = {
  width: 38,
  height: 38,
  borderRadius: 12,
  border: "none",
  background: "#f4f7fe",
  cursor: "pointer",
};

const modalBody = {
  padding: 24,
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns:
    "1fr 1fr",
  gap: 18,
  marginBottom: 24,
};

const infoLabel = {
  fontSize: 12,
  color: "#A0AEC0",
  marginBottom: 6,
};

const infoValue = {
  fontSize: 14,
  fontWeight: 600,
  color: "#2D3748",
};

const totalCard = {
  background:
    "linear-gradient(135deg,#E6FFFA,#F0FFF4)",
  borderRadius: 20,
  padding: 22,
  marginBottom: 24,
};

const totalLabel = {
  color: "#718096",
  marginBottom: 8,
};

const totalValue = {
  margin: 0,
  color: "#38B2AC",
};

const modalBtnWrap = {
  display: "flex",
  gap: 12,
};

const cancelBtn = {
  flex: 1,
  padding: 14,
  borderRadius: 14,
  border: "1px solid #E2E8F0",
  background: "#ffffff",
  cursor: "pointer",
  fontWeight: 600,
};

const printBtn = {
  flex: 2,
  padding: 14,
  borderRadius: 14,
  border: "none",
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
};