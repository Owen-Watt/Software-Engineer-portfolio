import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
import "./index.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;