import data from "./courses.json"; // ⬅️ WAJIB

export default function AdminView() {
  return (
    <div className="p-4 overflow-x-auto">

      <h1 className="text-2xl font-bold mb-4">Admin View</h1>

      <table className="min-w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Level</th>
            <th>Price</th>
            <th>Instructor</th>
            <th>Students</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center border-t">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.level}</td>
              <td>Rp {item.price}</td>
              <td>{item.instructor.name}</td>
              <td>{item.instructor.students}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}