export default function SelectField({ label, value, onChange, options, error }) {
  return (
    <div>
      <label className="block text-pink-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-pink-200 rounded-lg"
      >
        <option value="">-- Pilih --</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>

      {error && (
        <div className="mt-2 p-2 bg-red-100 border-l-4 border-red-400 text-red-700 text-sm">
          ⚠ {error}
        </div>
      )}
    </div>
  );
}