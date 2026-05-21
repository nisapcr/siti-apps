import React from "react";

export default function ActionButton({
  children,
  onClick,
  type = "button",
  disabled,
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        background: disabled ? "#CBD5E0" : "#4FD1C5",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "bold",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}