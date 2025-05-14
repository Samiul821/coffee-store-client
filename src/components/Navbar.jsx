import React from "react";
import navbarBg from "../assets/images/more/15.jpg";
import navLogo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="py-[15px] h-[120px] bg-cover bg-center"
      style={{ backgroundImage: `url(${navbarBg})` }}
    >
      <div className="flex items-center justify-center gap-4">
        <img src={navLogo} alt="Logo" className="h-[80px]" />
        <h1 className="font-primary text-[40px] md:text-[60px] text-white">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
