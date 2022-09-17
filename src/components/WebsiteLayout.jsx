import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "@animxyz/core";

export default function WebsiteLayout({ children }) {
  const [nightMode, setNightMode] = useState(false);
  const themeChange = function () {
    setNightMode(() => {
      return !nightMode;
    });
  };

  return (
    <div className="relative" data-theme={nightMode ? "autumn" : "black"}>
      <Navbar setTheme={themeChange} />
      {children}
      <Footer />
    </div>
  );
}
