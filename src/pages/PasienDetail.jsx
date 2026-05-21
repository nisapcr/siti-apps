import { useParams } from "react-router-dom";
import {
  PageHeader,
  StatusBadge,
} from "../components";
import pasienData from "../data/pasien.json";

export default function PasienDetail() {

    const { id } = useParams();

    const pasien = pasienData.find(
        (item) => item.id === Number(id)
    );

    if (!pasien) {
        return (
            <div style={container}>
                <div style={errorCard}>
                    Pasien Tidak Ditemukan
                </div>
            </div>
        );
    }

    return (
        <div style={container}>
            <PageHeader
              title="Detail Pasien"
              breadcrumb="Pasien"
            />

            <div style={card}>

                <div style={avatar}>
                    {pasien.nama.charAt(0).toUpperCase()}
                </div>

                <h1 style={title}>
                    {pasien.nama}
                </h1>

                <div style={infoWrapper}>

                    <div style={infoItem}>
                        <span style={label}>
                            ID Pasien
                        </span>

                        <span style={value}>
                            {pasien.id}
                        </span>
                    </div>

                    <div style={infoItem}>
                        <span style={label}>
                            Email
                        </span>

                        <span style={value}>
                            {pasien.email}
                        </span>
                    </div>

                    <div style={infoItem}>
                        <span style={label}>
                            Telepon
                        </span>

                        <span style={value}>
                            {pasien.telepon}
                        </span>
                    </div>

                    <div style={infoItem}>
                        <span style={label}>
                            Jenis Kelamin
                        </span>

                        <span style={value}>
                            {pasien.jenisKelamin}
                        </span>
                    </div>

                    <div style={infoItem}>
                        <span style={label}>
                            Golongan Darah
                        </span>

                        <span
                            style={{
                                background: "#ebf8ff",
                                color: "#3182ce",
                                padding: "6px 14px",
                                borderRadius: 20,
                                fontWeight: 700,
                                fontSize: 13,
                            }}
                        >
                            {pasien.golonganDarah}
                        </span>
                    </div>

                    <div style={infoItem}>
                        <span style={label}>
                            Status
                        </span>

                        <StatusBadge
                          text={pasien.status}
                          color={
                            pasien.status === "Aktif"
                              ? "#48BB78"
                              : "#4A5568"
                          }
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

/* ================= STYLE ================= */

const container = {
    minHeight: "100vh",
    background: "#f4f7fe",
    padding: 30,
};

const card = {
    maxWidth: 700,
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: 24,
    padding: 40,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const avatar = {
    width: 90,
    height: 90,
    borderRadius: "50%",
    background:
        "linear-gradient(135deg,#4FD1C5,#38B2AC)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "bold",
    margin: "0 auto 20px",
};

const title = {
    textAlign: "center",
    marginBottom: 35,
    color: "#2d3748",
};

const infoWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: 18,
};

const infoItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    borderBottom: "1px solid #edf2f7",
};

const label = {
    color: "#718096",
    fontWeight: 600,
};

const value = {
    color: "#2d3748",
    fontWeight: 500,
};

const statusBadge = {
    padding: "6px 16px",
    borderRadius: 30,
    fontSize: 13,
    fontWeight: 600,
};

const errorCard = {
    background: "#ffffff",
    padding: 30,
    borderRadius: 20,
    textAlign: "center",
    color: "#e53e3e",
    fontWeight: "bold",
};