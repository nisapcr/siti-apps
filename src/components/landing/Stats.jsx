import {
  FaUsers,
  FaUserMd,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "42",
    title: "Pasien Hari Ini",
    desc: "Pasien yang melakukan kunjungan hari ini.",
  },
  {
    icon: <FaUserMd />,
    value: "8",
    title: "Dokter Aktif",
    desc: "Dokter yang sedang bertugas melayani pasien.",
  },
  {
    icon: <FaCalendarCheck />,
    value: "156",
    title: "Janji Temu",
    desc: "Total jadwal konsultasi yang telah dibuat.",
  },
  {
    icon: <FaClock />,
    value: "14 Menit",
    title: "Rata-rata Waktu Tunggu",
    desc: "Estimasi waktu tunggu pasien sebelum pelayanan.",
  },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "90px 20px",
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
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              color: "#2D3748",
              marginBottom: "15px",
            }}
          >
            Statistik Klinik
          </h2>

          <p
            style={{
              color: "#718096",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: 1.7,
            }}
          >
            Ringkasan performa Klinik Permata Dental
            berdasarkan aktivitas pelayanan pasien.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#F8FAFC",
                borderRadius: "22px",
                padding: "35px",
                transition: ".3s",
                cursor: "pointer",
                border: "1px solid #EDF2F7",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(79,209,197,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "18px",
                  background: "#E6FFFA",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#38B2AC",
                  fontSize: 28,
                  marginBottom: 25,
                }}
              >
                {item.icon}
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#2D3748",
                  fontSize: 34,
                }}
              >
                {item.value}
              </h2>

              <h4
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  color: "#2D3748",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#718096",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}