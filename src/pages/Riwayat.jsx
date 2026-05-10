import { useState } from "react";
import {
  FiSearch,
  FiDownload,
  FiFileText,
  FiX,
  FiFolder,
} from "react-icons/fi";

import riwayatPerawatanData from "../data/riwayatPerawatan.json";

/* =========================
   FORMAT TANGGAL
========================= */
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

/* =========================
   EXPORT CSV
========================= */
function exportToCSV(data) {
  const headers = [
    "Pasien",
    "Tindakan",
    "Tanggal",
    "Dokter",
    "Biaya",
    "Status",
  ];

  const rows = data.map((r) => [
    r.pasienNama,
    r.tindakan,
    formatTanggal(r.tanggal),
    r.dokter,
    `Rp${r.biaya.toLocaleString(
      "id-ID"
    )}`,
    r.status,
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map(
          (cell) =>
            `"${String(
              cell
            ).replace(/"/g, '""')}"`
        )
        .join(",")
    )
    .join("\n");

  const blob = new Blob(
    ["\uFEFF" + csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download = `riwayat-perawatan-${new Date()
    .toISOString()
    .split("T")[0]}.csv`;

  a.click();

  URL.revokeObjectURL(url);
}

/* =========================
   EXPORT PRINT
========================= */
function exportToPrint(data) {
  window.print();
}

/* =========================
   MODAL EXPORT
========================= */
function ExportModal({
  data,
  onClose,
}) {
  const total = data.reduce(
    (sum, r) => sum + r.biaya,
    0
  );

  return (
    <div style={overlay}>
      <div style={modalCard}>
        {/* HEADER */}
        <div style={modalHeader}>
          <div>
            <h2 style={modalTitle}>
              Export Data
            </h2>

            <p style={modalSub}>
              {data.length} catatan
              akan diekspor
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
          <div style={summaryCard}>
            <div
              style={summaryRow}
            >
              <span>
                Total Catatan
              </span>

              <strong>
                {data.length}
              </strong>
            </div>

            <div
              style={summaryRow}
            >
              <span>
                Total Biaya
              </span>

              <strong
                style={{
                  color:
                    "#38B2AC",
                }}
              >
                Rp
                {total.toLocaleString(
                  "id-ID"
                )}
              </strong>
            </div>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexDirection:
                "column",
              gap: 14,
            }}
          >
            <button
              onClick={() => {
                exportToCSV(
                  data
                );

                onClose();
              }}
              style={
                exportBtnMint
              }
            >
              <div
                style={
                  exportIconMint
                }
              >
                <FiDownload />
              </div>

              <div>
                <div
                  style={
                    exportTitle
                  }
                >
                  Download CSV
                </div>

                <div
                  style={
                    exportDesc
                  }
                >
                  Export ke Excel
                  atau Google
                  Sheets
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                exportToPrint(
                  data
                );

                onClose();
              }}
              style={
                exportBtnBlue
              }
            >
              <div
                style={
                  exportIconBlue
                }
              >
                <FiFileText />
              </div>

              <div>
                <div
                  style={
                    exportTitle
                  }
                >
                  Print / PDF
                </div>

                <div
                  style={
                    exportDesc
                  }
                >
                  Cetak atau
                  simpan PDF
                </div>
              </div>
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
export default function Riwayat() {
  const [search, setSearch] =
    useState("");

  const [
    showExport,
    setShowExport,
  ] = useState(false);

  const filtered =
    riwayatPerawatanData
      .filter(
        (r) =>
          r.pasienNama
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          r.tindakan
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
      .sort(
        (a, b) =>
          new Date(
            b.tanggal
          ) -
          new Date(a.tanggal)
      );

  return (
    <div style={container}>
      {showExport && (
        <ExportModal
          data={filtered}
          onClose={() =>
            setShowExport(
              false
            )
          }
        />
      )}

      {/* HEADER */}
      <div style={header}>
        <p style={breadcrumb}>
        </p>

        <h1 style={title}>
          Riwayat Perawatan
        </h1>

        <p style={subtitle}>
          Catatan medis lengkap
          pasien klinik
        </p>
      </div>

      {/* SEARCH + BUTTON */}
      <div style={topBar}>
        <div style={searchWrap}>
          <FiSearch
            style={searchIcon}
          />

          <input
            type="text"
            placeholder="Cari pasien atau tindakan..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            style={searchInput}
          />
        </div>

        <button
          onClick={() =>
            setShowExport(true)
          }
          style={exportMainBtn}
        >
          <FiDownload />
          Export
        </button>
      </div>

      {/* TABLE */}
      <div style={tableCard}>
        <div style={tableHeader}>
          <div
            style={tableHeaderLeft}
          >
            <div
              style={
                tableHeaderIcon
              }
            >
              <FiFolder />
            </div>

            <div>
              <h2
                style={
                  tableTitle
                }
              >
                Catatan Medis
              </h2>

              <p
                style={
                  tableSub
                }
              >
                Data riwayat
                pasien terbaru
              </p>
            </div>
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
                  "Pasien",
                  "Tindakan",
                  "Tanggal",
                  "Dokter",
                  "Biaya",
                  "Status",
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
              {filtered.map(
                (riwayat) => (
                  <tr
                    key={
                      riwayat.id
                    }
                    style={tr}
                  >
                    <td style={td}>
                      <strong>
                        {
                          riwayat.pasienNama
                        }
                      </strong>
                    </td>

                    <td style={td}>
                      {
                        riwayat.tindakan
                      }
                    </td>

                    <td style={td}>
                      {formatTanggal(
                        riwayat.tanggal
                      )}
                    </td>

                    <td style={td}>
                      {
                        riwayat.dokter
                      }
                    </td>

                    <td style={td}>
                      <span
                        style={
                          biayaText
                        }
                      >
                        Rp
                        {Number(
                          riwayat.biaya
                        ).toLocaleString(
                          "id-ID"
                        )}
                      </span>
                    </td>

                    <td style={td}>
                      <span
                        style={
                          statusBadge
                        }
                      >
                        {
                          riwayat.status
                        }
                      </span>
                    </td>
                  </tr>
                )
              )}

              {filtered.length ===
                0 && (
                <tr>
                  <td
                    colSpan={6}
                    style={
                      emptyState
                    }
                  >
                    Tidak ada
                    hasil untuk "
                    {search}"
                  </td>
                </tr>
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

const topBar = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  marginBottom: 24,
  gap: 20,
};

const searchWrap = {
  position: "relative",
  flex: 1,
  maxWidth: 420,
};

const searchIcon = {
  position: "absolute",
  left: 16,
  top: "50%",
  transform:
    "translateY(-50%)",
  color: "#A0AEC0",
};

const searchInput = {
  width: "100%",
  padding:
    "14px 14px 14px 46px",
  borderRadius: 16,
  border: "1px solid #E2E8F0",
  outline: "none",
  background: "#ffffff",
  fontSize: 14,
  boxSizing: "border-box",
};

const exportMainBtn = {
  border: "none",
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  color: "#ffffff",
  padding: "14px 20px",
  borderRadius: 16,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 600,
};

const tableCard = {
  background: "#ffffff",
  borderRadius: 24,
  padding: 24,
  boxShadow:
    "0 4px 20px rgba(0,0,0,0.03)",
};

const tableHeader = {
  marginBottom: 24,
};

const tableHeaderLeft = {
  display: "flex",
  alignItems: "center",
  gap: 16,
};

const tableHeaderIcon = {
  width: 52,
  height: 52,
  borderRadius: 16,
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: 20,
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

const biayaText = {
  color: "#38B2AC",
  fontWeight: 700,
};

const statusBadge = {
  background: "#E6FFFA",
  color: "#38B2AC",
  padding: "6px 14px",
  borderRadius: 30,
  fontSize: 12,
  fontWeight: 600,
};

const emptyState = {
  padding: 40,
  textAlign: "center",
  color: "#A0AEC0",
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
  maxWidth: 450,
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

const summaryCard = {
  background:
    "linear-gradient(135deg,#E6FFFA,#F0FFF4)",
  borderRadius: 18,
  padding: 18,
  marginBottom: 20,
};

const summaryRow = {
  display: "flex",
  justifyContent:
    "space-between",
  marginBottom: 10,
  color: "#4A5568",
};

const exportBtnMint = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  border: "none",
  background:
    "rgba(79,209,197,0.08)",
  padding: 16,
  borderRadius: 16,
  cursor: "pointer",
};

const exportBtnBlue = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  border: "none",
  background:
    "rgba(66,153,225,0.08)",
  padding: 16,
  borderRadius: 16,
  cursor: "pointer",
};

const exportIconMint = {
  width: 46,
  height: 46,
  borderRadius: 14,
  background:
    "linear-gradient(135deg,#4FD1C5,#38B2AC)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: 18,
};

const exportIconBlue = {
  width: 46,
  height: 46,
  borderRadius: 14,
  background:
    "linear-gradient(135deg,#63B3ED,#4299E1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: 18,
};

const exportTitle = {
  fontSize: 14,
  fontWeight: 700,
  color: "#2D3748",
  textAlign: "left",
};

const exportDesc = {
  fontSize: 12,
  color: "#718096",
  marginTop: 4,
  textAlign: "left",
};