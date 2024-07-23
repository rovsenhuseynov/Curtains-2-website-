import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";

import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <div className="line1"></div>
      <Footer/>
    </div>
  );
};

export default Layout;
