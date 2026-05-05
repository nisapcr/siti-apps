import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

export default function Forgot() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
        Lupa Password
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Masukkan email Anda untuk menerima link reset password
      </p>

      <form>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Kirim Reset Link
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Kembali ke{" "}
        <Link to="/login" className="text-green-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}