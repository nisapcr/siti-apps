import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function FormPendaftaran() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        kota: "",
        tujuan: "",
        tipe: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (data) => {
        let err = {};
        if (!data.nama) err.nama = "Nama wajib diisi";
        else if (/\d/.test(data.nama)) err.nama = "Nama tidak boleh angka";
        else if (data.nama.length < 3) err.nama = "Minimal 3 huruf";

        if (!data.email) err.email = "Email wajib diisi";
        else if (!data.email.includes("@")) err.email = "Email tidak valid";

        if (!data.kota) err.kota = "Kota wajib diisi";
        else if (/\d/.test(data.kota)) err.kota = "Kota tidak boleh angka";
        else if (data.kota.length < 3) err.kota = "Minimal 3 huruf";

        if (!data.tujuan) err.tujuan = "Pilih tujuan";
        if (!data.tipe) err.tipe = "Pilih tipe perjalanan";

        return err;
    };

    const handleChange = (field) => (e) => {
        const newForm = { ...form, [field]: e.target.value };
        setForm(newForm);
        setErrors(validate(newForm));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validate(form);

        if (Object.keys(validation).length === 0) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
            setErrors(validation);
        }
    };

    const isValid =
        form.nama &&
        form.email &&
        form.kota &&
        form.tujuan &&
        form.tipe &&
        Object.keys(errors).length === 0;

    return (
        <div className="flex items-center justify-center min-h-screen p-6 safelist: [
  'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]'
] from-rose-100 via-slate-50 to-orange-100">
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-md border border-white/50">
                
                <div className="relative mb-8 text-center">
                    <div className="inline-block p-3 rounded-2xl bg-pink-50 mb-4 text-2xl">
                        ✈️
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 italic">
                        Travel<span className="text-pink-500 font-black">Form</span>
                    </h2>
                    <div className="h-1 w-12 bg-pink-500 mx-auto mt-2 rounded-full"></div>
                    <p className="text-gray-500 mt-3 text-sm font-medium uppercase tracking-widest">
                        Rencanakan perjalananmu
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-4">
                        <InputField
                            label="Nama Lengkap"
                            type="text"
                            placeholder="Contoh: Alex J"
                            value={form.nama}
                            onChange={handleChange("nama")}
                            error={errors.nama}
                        />

                        <InputField
                            label="Alamat Email"
                            type="email"
                            placeholder="alex@gmail.com"
                            value={form.email}
                            onChange={handleChange("email")}
                            error={errors.email}
                        />

                        <InputField
                            label="Kota Asal"
                            type="text"
                            placeholder="Contoh: Jakarta"
                            value={form.kota}
                            onChange={handleChange("kota")}
                            error={errors.kota}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <SelectField
                                label="Tujuan"
                                value={form.tujuan}
                                onChange={handleChange("tujuan")}
                                options={["Bali", "Jepang", "Korea"]}
                                error={errors.tujuan}
                            />

                            <SelectField
                                label="Tipe Trip"
                                value={form.tipe}
                                onChange={handleChange("tipe")}
                                options={["Liburan", "Bisnis", "Edukasi"]}
                                error={errors.tipe}
                            />
                        </div>
                    </div>

                    {/* Tombol yang Lebih Interaktif */}
                    <div className="pt-4 min-h-17.5">
                        {isValid ? (
                            <button className="group relative w-full bg-pink-500 text-white p-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-200 overflow-hidden transition-all hover:bg-pink-600 active:scale-95">
                                <span className="relative z-10">Kirim ✨</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        ) : (
                            <div className="text-center py-4 px-2 border-2 border-dashed border-gray-200 rounded-2xl">
                                <p className="text-xs text-gray-400 font-medium">Lengkapi data untuk mengaktifkan tombol</p>
                            </div>
                        )}
                    </div>
                </form>

                {/* Output yang Lebih Estetik (Style Card Info) */}
                {submitted && (
                    <div className="mt-8 overflow-hidden rounded-3xl border border-green-200 bg-green-50/50 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-green-500 py-2 px-4 flex justify-between items-center">
                            <span className="text-white font-bold text-xs uppercase tracking-tighter">Booking Summary</span>
                            <span className="text-white text-lg font-bold">✓</span>
                        </div>
                        <div className="p-6 space-y-3 text-sm">
                            <div className="flex justify-between border-b border-green-100 pb-2">
                                <span className="text-green-600 font-semibold">Nama</span>
                                <span className="text-gray-700 font-bold uppercase">{form.nama}</span>
                            </div>
                            <div className="flex justify-between border-b border-green-100 pb-2">
                                <span className="text-green-600 font-semibold">Destinasi</span>
                                <span className="text-gray-700 font-bold">{form.tujuan} ({form.tipe})</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-green-600 font-semibold">Kontak</span>
                                <span className="text-gray-700 font-medium">{form.email}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}