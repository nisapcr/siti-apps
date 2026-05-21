// components/TreatmentRow.jsx
import React from "react";
import { ProgressBar, ActionButton } from "./index";

const formatRupiah = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export default function TreatmentRow({ treatment, index, onSelect }) {
  const isCompleted = treatment.completion === 100;

  return (
    <tr style={{ borderBottom: "1px solid #EDF2F7" }}>
      <td style={{ padding: "16px", textAlign: "center" }}>{index}</td>
      <td style={{ padding: "16px", fontWeight: 600 }}>{treatment.patient}</td>
      <td style={{ padding: "16px" }}>{treatment.type}</td>
      <td style={{ padding: "16px" }}>{treatment.doctor}</td>
      <td style={{ padding: "16px", color: "#38B2AC", fontWeight: 600 }}>
        {formatRupiah(treatment.budget)}
      </td>
      <td style={{ padding: "16px", minWidth: "150px" }}>
        <ProgressBar percentage={treatment.completion} />
        <span style={{ fontSize: "12px", color: "#A0AEC0", marginTop: "4px", display: "block" }}>
          {treatment.completion}% Selesai
        </span>
      </td>
      <td style={{ padding: "16px" }}>
        <ActionButton 
          size="small" 
          onClick={onSelect}
          disabled={isCompleted}
        >
          {isCompleted ? "Selesai" : "Detail"}
        </ActionButton>
      </td>
    </tr>
  );
}