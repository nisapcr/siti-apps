import React from "react";

export default function StatusBadge({
  text,
  color = "#4FD1C5",
}) {
  return (
    <span
      style={{
        background: `${color}20`,
        color,
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {text}
    </span>
  );
}