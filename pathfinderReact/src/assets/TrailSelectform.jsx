import { useState } from "react";

function TrailForm({ onAddTrip }) {
  const [form, setForm] = useState({ title: "", location: "", duration: "1 day", difficulty: "Easy" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.location) return;
    onAddTrip({
      title: form.title,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      location: form.location,
      duration: form.duration,
      difficulty: form.difficulty,
      activities: ["Hiking", "Camping"]
    });
    setForm({ title: "", location: "", duration: "1 day", difficulty: "Easy" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Trip name"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-3 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="w-full p-3 border rounded-lg"
      />
      <div className="flex gap-4">
        <select
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          className="p-3 border rounded-lg"
        >
          <option value="1 day">1 day</option>
          <option value="2 days">2 days</option>
          <option value="3 days">3 days</option>
          <option value="5 days">5 days</option>
        </select>
        <select
          value={form.difficulty}
          onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
          className="p-3 border rounded-lg"
        >
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Difficult">Difficult</option>
        </select>
      </div>
      <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
        Add Trip
      </button>
    </form>
  );
}
export default TrailForm;
