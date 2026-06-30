import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlayCircle,
  FaUsers,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "#F8FAFC",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* ================= LEFT ================= */}

        <div>
          <span
            style={{
              background: "#E6FFFA",
              color: "#2C7A7B",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Klinik Gigi Modern Sejahtera
          </span>

          <h1
            style={{
              fontSize: "54px",
              lineHeight: "65px",
              marginTop: 25,
              color: "#2D3748",
              marginBottom: 20,
            }}
          >
            Kelola Hubungan Pasien
            <br />
            Lebih Mudah dengan
            <span style={{ color: "#4FD1C5" }}>
              {" "}
              PERMATADENTAL
            </span>
          </h1>

          <p
            style={{
              color: "#718096",
              fontSize: 18,
              lineHeight: 1.8,
              maxWidth: "560px",
            }}
          >
            Sistem Customer Relationship Management
            untuk Klinik Permata Dental yang membantu
            mengelola pasien, jadwal, pembayaran,
            loyalitas member, serta monitoring pelayanan
            secara real-time dalam satu dashboard.
          </p>

          {/* BUTTON */}

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/login"
              style={{
                background: "#4FD1C5",
                color: "#fff",
                padding: "15px 28px",
                borderRadius: "14px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 600,
              }}
            >
              Login Dashboard
              <FaArrowRight />
            </Link>

            <a
              href="#fitur"
              style={{
                border: "2px solid #4FD1C5",
                color: "#4FD1C5",
                padding: "15px 28px",
                borderRadius: "14px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 600,
              }}
            >
              <FaPlayCircle />
              Lihat Fitur
            </a>
          </div>

          {/* MINI STATS */}

          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "60px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#2D3748",
                }}
              >
                1.200+
              </h2>

              <small
                style={{
                  color: "#718096",
                }}
              >
                Pasien Aktif
              </small>
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#2D3748",
                }}
              >
                98%
              </h2>

              <small
                style={{
                  color: "#718096",
                }}
              >
                Kepuasan Pasien
              </small>
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#2D3748",
                }}
              >
                24/7
              </h2>

              <small
                style={{
                  color: "#718096",
                }}
              >
                Monitoring
              </small>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "30px",
              padding: "28px",
              boxShadow: "0 25px 50px rgba(0,0,0,.08)",
            }}
          >
            {/* TOP */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "#2D3748",
                  }}
                >
                  Dashboard CRM
                </h3>

                <small
                  style={{
                    color: "#718096",
                  }}
                >
                  Ringkasan Klinik Hari Ini
                </small>
              </div>

              <div
                style={{
                  width: 14,
                  height: 14,
                  background: "#4FD1C5",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* CARD */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "18px",
              }}
            >
              <DashboardCard
                icon={<FaUsers />}
                title="42"
                subtitle="Pasien Hari Ini"
              />

              <DashboardCard
                icon={<FaCalendarAlt />}
                title="156"
                subtitle="Janji Temu"
              />

              <DashboardCard
                icon={<FaAward />}
                title="Gold"
                subtitle="Member Aktif"
              />

              <DashboardCard
                icon={<FaUsers />}
                title="98%"
                subtitle="Kepuasan"
              />
            </div>

            {/* Chart Dummy */}

            <div
              style={{
                marginTop: 30,
                height: 180,
                background:
                  "linear-gradient(135deg,#E6FFFA,#FFFFFF)",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#2C7A7B",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({
  icon,
  title,
  subtitle,
}) {
  return (
    <div
      style={{
        background: "#F8FAFC",
        borderRadius: 18,
        padding: 20,
      }}
    >
      <div
        style={{
          color: "#4FD1C5",
          fontSize: 22,
          marginBottom: 12,
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          margin: 0,
          color: "#2D3748",
        }}
      >
        {title}
      </h2>

      <small
        style={{
          color: "#718096",
        }}
      >
        {subtitle}
      </small>
    </div>
  );
}