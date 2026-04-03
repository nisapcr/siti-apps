export default function InputField({ label, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="block text-pink-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400"
      />

      {error && (
        <div className="mt-2 p-2 bg-red-100 border-l-4 border-red-400 text-red-700 text-sm">
          ⚠ {error}
        </div>
      )}
    </div>
  );
}