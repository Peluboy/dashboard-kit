import React from "react";
import Header from "../Header/Header";
import Maindash from "../MainDash/Maindash";
import Sidebar from "../Sidebar/Sidebar";

import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout_container">
        <Header />
        <div className="router_contents">
          <Maindash />
        </div>
      </div>
    </div>
  );
};

export default Layout;
