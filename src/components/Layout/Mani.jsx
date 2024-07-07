import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
