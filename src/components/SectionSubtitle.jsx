// components/SectionSubtitle.jsx
export default function SectionSubtitle({ children, style = {} }) {
  return (
    <p style={{ 
      fontSize: "14px", 
      color: "#A0AEC0", 
      marginTop: "4px", 
      marginBottom: "20px",
      ...style 
    }}>
      {children}
    </p>
  );
}