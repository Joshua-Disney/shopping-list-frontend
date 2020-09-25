import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
