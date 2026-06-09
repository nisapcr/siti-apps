import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiActivity, FiFileText, FiDollarSign } from "react-icons/fi";

import {
    PageHeader,
    StatusBadge,
} from "../components";

// IMPORT COMPONENT SHADCN AWAL PILIHAN ANDA
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import pasienData from "../data/pasien.json";

export default function PasienDetail() {
    const { id } = useParams();

    // State untuk kontrol buka-tutup Accordion Manual di dalam tab rekam medis
    const [bukaRiwayat, setBukaRiwayat] = useState(false);
    const [bukaBayar, setBukaBayar] = useState(false);
    const [hoverRiwayat, setHoverRiwayat] = useState(false);
    const [hoverBayar, setHoverBayar] = useState(false);

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
            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <PageHeader
                    title="Rekam Medis Pasien"
                    breadcrumb="Pasien"
                />
                <Link to="/pasien" style={backBtn}>
                    <FiArrowLeft /> Kembali
                </Link>
            </div>

            {/* STRUKTUR TATA LETAK BARU: DUA KOLOM (KIRI & KANAN) */}
            <div style={layoutGrid}>
                
                {/* ================= SISI KIRI: PROFIL & BIODATA RINGKAS ================= */}
                <div style={sidebarCard}>
                    <div style={avatarLarge}>
                        {pasien.nama.charAt(0).toUpperCase()}
                    </div>

                    <h1 style={sidebarTitle}>
                        {pasien.nama}
                    </h1>
                    <span style={{ fontSize: "12px", color: "#a0aec0", fontFamily: "monospace", display: "block", marginBottom: "24px" }}>
                        ID: {pasien.id}
                    </span>

                    <div style={infoWrapper}>
                        <div style={infoItemVertical}>
                            <span style={label}>Email</span>
                            <span style={value}>{pasien.email || "-"}</span>
                        </div>

                        <div style={infoItemVertical}>
                            <span style={label}>Telepon</span>
                            <span style={value}>{pasien.telepon || "-"}</span>
                        </div>

                        <div style={infoItemVertical}>
                            <span style={label}>Jenis Kelamin</span>
                            <span style={value}>{pasien.jenisKelamin}</span>
                        </div>

                        <div style={infoItemVertical}>
                            <span style={label}>Golongan Darah</span>
                            <span style={bloodBadge}>{pasien.golonganDarah || "-"}</span>
                        </div>

                        <div style={infoItemVertical}>
                            <span style={label}>Status Pasien</span>
                            <div style={{ marginTop: "4px" }}>
                                <StatusBadge
                                    text={pasien.status}
                                    color={pasien.status === "Aktif" ? "#48BB78" : "#4A5568"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SISI KANAN: PUSAT INFORMASI KLINIS (TABS) ================= */}
                <div style={mainContentCard}>
                    
                    {/* IMPLEMENTASI TABS SHADCN UI */}
                    <Tabs defaultValue="rekam-medis" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-slate-100 p-1 rounded-xl mb-6">
                            <TabsTrigger value="rekam-medis" className="rounded-lg py-2.5 text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <FiActivity style={{ display: "inline", marginRight: "6px" }} /> Riwayat Perawatan
                            </TabsTrigger>
                            <TabsTrigger value="catatan" className="rounded-lg py-2.5 text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <FiFileText style={{ display: "inline", marginRight: "6px" }} /> Catatan Alergi & Obat
                            </TabsTrigger>
                            <TabsTrigger value="billing" className="rounded-lg py-2.5 text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                <FiDollarSign style={{ display: "inline", marginRight: "6px" }} /> Billing / Transaksi
                            </TabsTrigger>
                        </TabsList>

                        {/* ISI TAB 1: RIWAYAT PERAWATAN (MENGGUNAKAN ACCORDION ANDA) */}
                        <TabsContent value="rekam-medis" className="outline-none">
                            <h3 style={sectionTitle}>Daftar Kunjungan Klinis Gigi</h3>
                            
                            <div style={accordionBox}>
                                <button 
                                    onClick={() => setBukaRiwayat(!bukaRiwayat)}
                                    onMouseEnter={() => setHoverRiwayat(true)}
                                    onMouseLeave={() => setHoverRiwayat(false)}
                                    style={{
                                        ...accordionTrigger,
                                        background: hoverRiwayat ? "#edf2f7" : "#f7fafc"
                                    }}
                                >
                                    <span style={{ fontWeight: 600, color: "#2d3748" }}>Kunjungan Tindakan Scaling Gigi (drg. Permata)</span>
                                    <span style={accordionIcon}>{bukaRiwayat ? "▲" : "▼"}</span>
                                </button>
                                
                                {bukaRiwayat && (
                                    <div style={accordionContent}>
                                        <div style={contentCard}>
                                            <span style={{ fontWeight: 700, color: "#2d3748", marginBottom: "6px" }}>
                                                Detail Tindakan Pemeriksaan Gigi
                                            </span>
                                            <p style={{ margin: "2px 0", color: "#4a5568" }}><strong>Keluhan:</strong> Gusi berdarah saat sikat gigi.</p>
                                            <p style={{ margin: "2px 0", color: "#4a5568" }}><strong>Diagnosis:</strong> Gingivitis e.c. Calculus.</p>
                                            <p style={{ margin: "2px 0", color: "#4a5568" }}><strong>Tindakan:</strong> Pembersihan karang gigi rahang atas & bawah.</p>
                                            <span style={{ color: "#a0aec0", fontSize: "12px", marginTop: "8px" }}>
                                                Tanggal Kunjungan: 14 Januari 2025
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        {/* ISI TAB 2: CATATAN MEDIS */}
                        <TabsContent value="catatan" className="outline-none">
                            <h3 style={sectionTitle}>Peringatan Kesehatan & Kontraindikasi</h3>
                            
                            <div style={dangerAlert}>
                                <strong>⚠️ ALERGI OBAT BERBAHAYA:</strong>
                                <p style={{ margin: "4px 0 0 0" }}>Pasien alergi terhadap obat antibiotik golongan <em>Amoxicillin</em>.</p>
                            </div>

                            <div style={{ fontSize: "14px", color: "#4a5568", lineHeight: "1.6" }}>
                                <h4 style={{ fontWeight: "700", color: "#2d3748", marginBottom: "6px" }}>Rencana Tindakan Lanjutan:</h4>
                                <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                                    <li>Observasi karang gigi kembali dalam 6 bulan ke depan.</li>
                                    <li>Disarankan foto Rontgen Panoramik pada kunjungan berikutnya untuk melihat posisi impaksi gigi geraham bungsu rahang bawah kiri.</li>
                                </ul>
                            </div>
                        </TabsContent>

                        {/* ISI TAB 3: TAGIHAN / BILLING */}
                        <TabsContent value="billing" className="outline-none">
                            <h3 style={sectionTitle}>Riwayat Nota Transaksi</h3>
                            
                            <div style={accordionBox}>
                                <button 
                                    onClick={() => setBukaBayar(!bukaBayar)}
                                    onMouseEnter={() => setHoverBayar(true)}
                                    onMouseLeave={() => setHoverBayar(false)}
                                    style={{
                                        ...accordionTrigger,
                                        background: hoverBayar ? "#edf2f7" : "#f7fafc"
                                    }}
                                >
                                    <span style={{ fontWeight: 600, color: "#2d3748" }}>Invoice Pembayaran INV-2025-001</span>
                                    <span style={accordionIcon}>{bukaBayar ? "▲" : "▼"}</span>
                                </button>

                                {bukaBayar && (
                                    <div style={accordionContent}>
                                        <div style={contentCard}>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "6px" }}>
                                                <span style={{ color: "#4a5568", fontWeight: 500 }}>Tindakan Pembersihan Karang Gigi</span>
                                                <span style={{ fontWeight: 700, color: "#319795" }}>Rp 250.000</span>
                                            </div>
                                            <div style={{ borderTop: "1px solid #edf2f7", width: "100%", paddingTop: "8px", marginTop: "4px" }}>
                                                <span style={miniBadge}>Lunas</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    );
}

/* ================= DESAIN CSS-IN-JS (MURNI STYLES BARU) ================= */

const container = {
    minHeight: "100vh",
    background: "#f4f7fe",
    padding: 30,
};

const backBtn = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "#fff",
    border: "1px solid #e2e8f0",
    padding: "8px 16px",
    borderRadius: "10px",
    color: "#4a5568",
    fontSize: "14px",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
};

const layoutGrid = {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "24px",
    alignItems: "start",
    marginTop: "20px",
};

const sidebarCard = {
    background: "#ffffff",
    borderRadius: 20,
    padding: "24px",
    boxShadow: "0 4px 20px rgba(160, 174, 192, 0.08)",
    textAlign: "center",
};

const mainContentCard = {
    background: "#ffffff",
    borderRadius: 20,
    padding: "28px",
    boxShadow: "0 4px 20px rgba(160, 174, 192, 0.08)",
    minHeight: "460px",
};

const avatarLarge = {
    width: 72,
    height: 72,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4FD1C5, #38B2AC)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    margin: "0 auto 12px",
    boxShadow: "0 4px 12px rgba(56, 178, 172, 0.25)",
};

const sidebarTitle = {
    margin: "0 0 4px 0",
    color: "#2d3748",
    fontSize: "18px",
    fontWeight: 700,
};

const infoWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    textAlign: "left",
};

const infoItemVertical = {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
    borderBottom: "1px dashed #f1f5f9",
};

const label = {
    color: "#a0aec0",
    fontWeight: 600,
    fontSize: "12px",
    textTransform: "uppercase",
    marginBottom: "2px",
};

const value = {
    color: "#2d3748",
    fontWeight: 600,
    fontSize: "14px",
};

const bloodBadge = {
    background: "#fff5f5",
    color: "#e53e3e",
    padding: "3px 10px",
    borderRadius: 6,
    fontWeight: 700,
    fontSize: 13,
    border: "1px solid #fed7d7",
    alignSelf: "flex-start",
};

const sectionTitle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "16px",
};

const dangerAlert = {
    padding: "14px",
    background: "#fff5f5",
    border: "1px solid #fed7d7",
    borderRadius: "12px",
    color: "#e53e3e",
    fontSize: "13px",
    marginBottom: "20px",
};

const errorCard = {
    background: "#ffffff",
    padding: 30,
    borderRadius: 20,
    textAlign: "center",
    color: "#e53e3e",
    fontWeight: "bold",
    maxWidth: 400,
    margin: "40px auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

/* --- Gaya Style Lipat Accordion --- */
const accordionBox = {
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    marginBottom: "14px",
    overflow: "hidden",
};

const accordionTrigger = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    outline: "none",
    transition: "background 0.2s ease",
};

const accordionIcon = {
    fontSize: "11px",
    color: "#a0aec0",
};

const accordionContent = {
    padding: "0 16px 16px 16px",
    background: "#f7fafc",
};

const contentCard = {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#ffffff",
    border: "1px solid #edf2f7",
    borderRadius: "10px",
    fontSize: "13px",
};

const miniBadge = {
    background: "#e6fffa",
    color: "#234e52",
    padding: "3px 10px",
    borderRadius: "6px",
    fontSize: "10px",
    fontWeight: 700,
    textTransform: "uppercase",
    display: "inline-block",
};