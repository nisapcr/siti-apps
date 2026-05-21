// components/TableHeader.jsx
export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            style={{
              textAlign: "left",
              padding: "16px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#A0AEC0",
              textTransform: "uppercase",
              borderBottom: "1px solid #EDF2F7",
            }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}