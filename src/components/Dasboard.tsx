import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  // ================= Revenue + Pie Data =================
  const data = [
    { name: "Jan", revenue: 10000 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 20000 },
    { name: "Apr", revenue: 25000 },
    { name: "May", revenue: 23000 },
    { name: "Jun", revenue: 28000 },
    { name: "Jul", revenue: 18000 },
  ];

  const pieData = [
    { name: "Male", value: 6500 },
    { name: "Female", value: 6098 },
  ];

  const COLORS = ["#6366F1", "#EC4899"];

  // ================= Work List (To-Do List) =================
  const [tasks, setTasks] = useState<string[]>([
    "Prepare monthly sales report",
    "Check inventory update",
    "Schedule team meeting",
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // ================== UI ==================
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Today's Revenue", value: "$34,482" },
          { title: "Today's Orders", value: "108" },
          { title: "Average Customers", value: "238" },
          { title: "Average Revenue", value: "$42,088" },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
          >
            <h3 className="text-gray-500 text-sm">{card.title}</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold mb-4">Revenue Overview (2025)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="font-semibold mb-4">Customers Info</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500">12,598 Customers</p>
        </div>
      </div>

      {/* Work List Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Work List / To-Do List</h3>

        {/* Add Task */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center border border-gray-200 rounded-lg px-3 py-2 hover:bg-indigo-50"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
