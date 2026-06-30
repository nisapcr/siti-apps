import {
  FaUsers,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaGift,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    title: "Pasien Hari Ini",
    value: "42",
    icon: <FaUsers />,
    color: "#38B2AC",
  },
  {
    title: "Janji Temu",
    value: "156",
    icon: <FaCalendarAlt />,
    color: "#4299E1",
  },
  {
    title: "Pendapatan",
    value: "Rp142 Jt",
    icon: <FaMoneyBillWave />,
    color: "#805AD5",
  },
  {
    title: "Member Aktif",
    value: "875",
    icon: <FaGift />,
    color: "#DD6B20",
  },
];

const patients = [
  {
    name: "Andi Herlambang",
    treatment: "Pemasangan Behel",
    status: "Berjalan",
  },
  {
    name: "Siti Aminah",
    treatment: "Scaling",
    status: "Selesai",
  },
  {
    name: "Rudi Saputra",
    treatment: "Implan",
    status: "Menunggu",
  },
];

export default function DashboardPreview() {
  return (
    <section
      style={{
        background: "#F8FAFC",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          <span
            style={{
              color: "#38B2AC",
              fontWeight: 700,
            }}
          >
            DASHBOARD PREVIEW
          </span>

          <h2
            style={{
              fontSize: 42,
              marginTop: 15,
              color: "#2D3748",
            }}
          >
            Dashboard CRM yang Modern
          </h2>

          <p
            style={{
              color: "#718096",
              maxWidth: 700,
              margin: "20px auto",
              lineHeight: 1.8,
            }}
          >
            Seluruh aktivitas klinik dapat dipantau
            secara real-time mulai dari data pasien,
            pembayaran, loyalitas hingga jadwal
            pemeriksaan.
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 30,
            padding: 35,
            boxShadow: "0 30px 60px rgba(0,0,0,.08)",
          }}
        >
          {/* CARD */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
              marginBottom: 35,
            }}
          >
            {cards.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#F8FAFC",
                  borderRadius: 20,
                  padding: 25,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  style={{
                    margin: "15px 0 5px",
                    color: "#2D3748",
                  }}
                >
                  {item.value}
                </h2>

                <small
                  style={{
                    color: "#718096",
                  }}
                >
                  {item.title}
                </small>
              </div>
            ))}
          </div>

          {/* TABLE */}

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#F7FAFC",
                }}
              >
                <th
                  style={{
                    padding: 15,
                    textAlign: "left",
                  }}
                >
                  Pasien
                </th>

                <th
                  style={{
                    padding: 15,
                    textAlign: "left",
                  }}
                >
                  Perawatan
                </th>

                <th
                  style={{
                    padding: 15,
                    textAlign: "left",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {patients.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom:
                      "1px solid #EDF2F7",
                  }}
                >
                  <td style={{ padding: 16 }}>
                    {item.name}
                  </td>

                  <td style={{ padding: 16 }}>
                    {item.treatment}
                  </td>

                  <td style={{ padding: 16 }}>
                    <span
                      style={{
                        background:
                          item.status === "Selesai"
                            ? "#C6F6D5"
                            : item.status ===
                              "Berjalan"
                            ? "#BEE3F8"
                            : "#FEEBC8",

                        color:
                          item.status === "Selesai"
                            ? "#276749"
                            : item.status ===
                              "Berjalan"
                            ? "#2C5282"
                            : "#9C4221",

                        padding:
                          "8px 15px",

                        borderRadius: 30,
                        fontSize: 13,
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              textAlign: "right",
              marginTop: 25,
            }}
          >
            <button
              style={{
                background: "#38B2AC",
                color: "#fff",
                border: "none",
                padding: "15px 30px",
                borderRadius: 15,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Lihat Dashboard
              <FaArrowRight
                style={{
                  marginLeft: 10,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}