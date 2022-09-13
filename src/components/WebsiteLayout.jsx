import React, { Component, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function WebsiteLayout({ children }) {
  const [nightMode, setNightMode] = useState(false);

  const themeChange = function () {
    setNightMode(!nightMode);
  };

  return (
    <div data-theme={nightMode ? "night" : "fantasy"}>
      <Navbar setTheme={themeChange} />
      {children}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
