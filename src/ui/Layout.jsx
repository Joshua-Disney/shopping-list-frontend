import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Layout;
