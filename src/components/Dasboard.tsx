

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: "1,240" },
    { title: "Monthly Sales", value: "$5,670" },
    { title: "Active Projects", value: "18" },
    { title: "Pending Orders", value: "12" },
    { title: "Support Tickets", value: "7" },
  ];

  const recentActivities = [
    { user: "John", action: "registered", time: "2h ago" },
    { user: "Anna", action: "completed a sale", time: "3h ago" },
    { user: "Server", action: "maintenance scheduled", time: "5h ago" },
    { user: "Admin", action: "updated system settings", time: "1d ago" },
  ];

  const recentSales = [
    { id: 101, product: "Laptop", customer: "Alice", amount: "$1,200", status: "Completed" },
    { id: 102, product: "Headphones", customer: "Bob", amount: "$150", status: "Pending" },
    { id: 103, product: "Smartphone", customer: "Charlie", amount: "$700", status: "Completed" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* ===== Stats Cards ===== */}
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-3xl font-bold text-cyan-600">{item.value}</p>
        </div>
      ))}

      {/* ===== Revenue Chart Section ===== */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">Revenue Chart</h3>
        <div className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
          Chart Placeholder
        </div>
      </div>

      {/* ===== Recent Activity Section ===== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          {recentActivities.map((act, idx) => (
            <li key={idx}>
              <span className="font-semibold">{act.user}</span> {act.action} <span className="text-gray-400">({act.time})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Tasks Section ===== */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">Tasks / To-Do</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>Finish monthly report</span>
            <span className="text-xs text-gray-500">Due: Today</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>Update project documentation</span>
            <span className="text-xs text-gray-500">Due: Tomorrow</span>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>Review support tickets</span>
            <span className="text-xs text-gray-500">Due: 2d</span>
          </li>
        </ul>
      </div>

      {/* ===== Recent Sales Table ===== */}
      <div className="md:col-span-3 bg-white p-6 rounded-xl shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-3">Recent Sales</h3>
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentSales.map((sale) => (
              <tr key={sale.id} className="border-b">
                <td className="px-4 py-2">{sale.id}</td>
                <td className="px-4 py-2">{sale.product}</td>
                <td className="px-4 py-2">{sale.customer}</td>
                <td className="px-4 py-2">{sale.amount}</td>
                <td className={`px-4 py-2 font-semibold ${sale.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                  {sale.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
