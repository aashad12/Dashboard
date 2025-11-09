import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 300 },
  { month: "Mar", sales: 500 },
  { month: "Apr", sales: 200 },
  { month: "May", sales: 600 },
];

const barData = [
  { name: "Product A", revenue: 2400 },
  { name: "Product B", revenue: 1398 },
  { name: "Product C", revenue: 9800 },
  { name: "Product D", revenue: 3908 },
];

const pieData = [
  { name: "Chrome", value: 400 },
  { name: "Firefox", value: 300 },
  { name: "Safari", value: 300 },
  { name: "Edge", value: 200 },
];

const COLORS = ["#06b6d4", "#facc15", "#22c55e", "#ef4444"];

const Chart: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">📈 Charts </h2>

      {/*  Charts container */}
      <div className="flex flex-wrap gap-6 justify-between">
        {/*  Line Chart */}
        <div className="bg-white p-5 rounded-xl shadow w-full md:w-[48%]">
          <h3 className="text-lg font-semibold mb-3">Monthly Sales</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-5 rounded-xl shadow w-full md:w-[48%]">
          <h3 className="text-lg font-semibold mb-3">Revenue by Product</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/*  Pie Chart */}
        <div className="bg-white p-5 rounded-xl shadow w-full md:w-[48%]">
          <h3 className="text-lg font-semibold mb-3">Browser Usage</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="bg-white p-5 rounded-xl shadow w-full md:w-[48%]">
          <h3 className="text-lg font-semibold mb-3">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
