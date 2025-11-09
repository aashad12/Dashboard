import React, { useState } from "react";

interface SidebarProps {
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [openPage, setOpenPage] = useState(false);

  const togglePages = () => {
    setOpenPage(!openPage);
  };

  const menuItems = [
    { label: "📊 Dashboard", page: "dashboard" },
    {
      label: "📄 Pages",
      children: [
        { label: "🔑 Login", page: "login" },
        { label: "🧾 Register", page: "register" },
      ],
    },
    { label: "👥 Form", page: "form" },
    { label: "📈 Chart", page: "chart" },
  ];

  return (
    <div className="w-50 bg-white shadow-md p-8 min-h-[90vh]">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            {/* Parent item */} 
            <div
              className="font-semibold text-gray-700 cursor-pointer hover:text-cyan-600 flex justify-between items-center"
              onClick={() => {
                // Only toggle if parent has children
                if (item.children) togglePages();
                else if (item.page) onNavigate(item.page);
              }}
            >
              {item.label}
              {item.children && <span>{openPage ? "▲" : "▼"}</span>}
            </div>

            {/* Children dropdown (Pages only) */}
            {item.children && openPage && (
              <ul className="ml-6 mt-1 space-y-1">
                {item.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className="text-gray-500 hover:text-cyan-600 cursor-pointer"
                    // ✅ Children only navigate, do NOT toggle
                    onClick={() => onNavigate(child.page)}
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
