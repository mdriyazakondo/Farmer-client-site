import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1500px] mx-auto mt-18">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
