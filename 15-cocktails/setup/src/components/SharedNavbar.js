import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedNavbar;
