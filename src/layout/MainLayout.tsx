import React from "react";
import { Header, Sidebar, Footer } from "./index";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "16px" }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
