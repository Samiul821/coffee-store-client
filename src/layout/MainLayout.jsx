import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar/>
      <main className=" w-full px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
