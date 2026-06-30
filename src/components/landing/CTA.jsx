import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUserShield,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section
      style={{
        padding: "100px 20px",
        background:
          "linear-gradient(135deg,#38B2AC,#4FD1C5)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "rgba(255,255,255,.18)",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <FaUserShield size={38} />
        </div>

        <h2
          style={{
            fontSize: 46,
            marginBottom: 25,
          }}
        >
          Siap Mengelola Klinik
          <br />
          Secara Lebih Profesional?
        </h2>

        <p
          style={{
            maxWidth: 720,
            margin: "auto",
            lineHeight: 1.8,
            fontSize: 18,
            opacity: .95,
          }}
        >
          Gunakan PERMATADENTAL untuk membantu
          pengelolaan pasien, penjadwalan,
          pembayaran, program loyalitas,
          hingga monitoring pelayanan
          secara real-time.
        </p>

        <div
          style={{
            marginTop: 45,
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/login"
            style={{
              background: "white",
              color: "#38B2AC",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: 15,
              fontWeight: 700,
            }}
          >
            Masuk ke Dashboard
          </Link>

          <a
            href="#fitur"
            style={{
              border: "2px solid white",
              color: "white",
              textDecoration: "none",
              padding: "18px 34px",
              borderRadius: 15,
              fontWeight: 700,
            }}
          >
            Pelajari Fitur
            <FaArrowRight
              style={{
                marginLeft: 10,
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}