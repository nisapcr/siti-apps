import { useState } from "react";
import data from "./courses.json"; 

export default function GuestView() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.category === category) &&
    (level === "" || item.level === level)
  );

  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">Guest View</h1>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border p-2" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Category</option>
          <option>Programming</option>
          <option>Design</option>
          <option>Data</option>
          <option>Business</option>
        </select>

        <select className="border p-2" onChange={(e) => setLevel(e.target.value)}>
          <option value="">All Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="shadow rounded-lg overflow-hidden">
            <img src={item.thumbnail} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.category}</p>
              <p>{item.level}</p>
              <p className="text-blue-500">Rp {item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}