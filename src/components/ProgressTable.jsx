// components/ProgressTable.jsx
import React from "react";
import { TableHeader, TreatmentRow } from "./index";

export default function ProgressTable({ data, onSelectRow }) {
  const headers = ["No", "Pasien", "Tindakan", "Dokter", "Anggaran", "Progress", "Aksi"];

  return (
    <div style={{ 
      background: "#FFFFFF", 
      borderRadius: "20px", 
      padding: "20px",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      overflowX: "auto"
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <TableHeader headers={headers} />
        <tbody>
          {data.map((item, index) => (
            <TreatmentRow 
              key={item.id}
              index={index + 1}
              treatment={item}
              onSelect={() => onSelectRow(item)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}