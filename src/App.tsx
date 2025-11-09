import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dasboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";
import Chart from "./components/Chart"; 

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "chart":
        return <Chart />; // ✅ show Chart page when selected
      case "form":
        return <Form />;
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout onNavigate={setCurrentPage}>
      {renderPage()}
    </MainLayout>
  );
};

export default App;
