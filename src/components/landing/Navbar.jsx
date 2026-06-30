import { Link } from "react-router-dom";
import { FaTooth } from "react-icons/fa";

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "#FFFFFF",
        boxShadow: "0 2px 15px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "18px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: 45,
              height: 45,
              borderRadius: 12,
              background: "#4FD1C5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <FaTooth size={22} />
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: "#2D3748",
                fontSize: 20,
              }}
            >
              PERMATADENTAL
            </h2>

            <small
              style={{
                color: "#718096",
              }}
            >
              Klinik Gigi Modern Sejahtera
            </small>
          </div>
        </div>

        {/* Menu */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {[
            "Home",
            "Tentang",
            "Fitur",
            "Membership",
            "Kontak",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "#4A5568",
                fontWeight: 600,
              }}
            >
              {item}
            </a>
          ))}

          <Link
            to="/login"
            style={{
              background: "#4FD1C5",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}