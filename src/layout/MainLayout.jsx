import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import footerBg from "../assets/images/more/13.jpg";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="min-h-screen w-full px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto">
        <Outlet />
      </main>
      <footer
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
