import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
