// components/TreatmentPanel.jsx
import React from "react";
import { SectionTitle, SectionSubtitle, ActionButton, ProgressBar } from "./index";
import { FiUser, FiActivity, FiDollarSign, FiCalendar } from "react-icons/fi";

const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function TreatmentPanel({ treatment }) {
  if (!treatment) return null;

  return (
    <div style={{
      background: "linear-gradient(135deg, #E6FFFA 0%, #F0FFF4 100%)",
      borderRadius: "20px",
      padding: "24px",
      marginBottom: "24px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <SectionTitle style={{ color: "#234E52", marginBottom: "4px" }}>
            Detail Perawatan: {treatment.patient}
          </SectionTitle>
          <SectionSubtitle style={{ color: "#4A5568" }}>
            {treatment.type} - ditangani oleh {treatment.doctor}
          </SectionSubtitle>
        </div>
        <ActionButton>Update Progress</ActionButton>
      </div>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "20px",
        marginTop: "24px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiUser size={20} color="#38B2AC" />
          </div>
          <div>
            <div style={{ fontSize: "12px", color: "#718096" }}>Pasien</div>
            <div style={{ fontWeight: 700, color: "#234E52" }}>{treatment.patient}</div>
          </div>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiActivity size={20} color="#38B2AC" />
          </div>
          <div>
            <div style={{ fontSize: "12px", color: "#718096" }}>Tindakan</div>
            <div style={{ fontWeight: 700, color: "#234E52" }}>{treatment.type}</div>
          </div>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiDollarSign size={20} color="#38B2AC" />
          </div>
          <div>
            <div style={{ fontSize: "12px", color: "#718096" }}>Anggaran</div>
            <div style={{ fontWeight: 700, color: "#234E52" }}>{formatRupiah(treatment.budget)}</div>
          </div>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <FiCalendar size={20} color="#38B2AC" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", color: "#718096" }}>Progress</div>
            <ProgressBar percentage={treatment.completion} showLabel />
          </div>
        </div>
      </div>
    </div>
  );
}