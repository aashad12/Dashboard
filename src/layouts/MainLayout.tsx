import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar"; // import your sidebar

interface MainLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Topbar always on top */}
      <Topbar />

      {/* Main area: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
       <Sidebar onNavigate={onNavigate} />

        {/* Main content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
