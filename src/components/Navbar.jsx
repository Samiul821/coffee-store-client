import React from "react";
import navbarBg from "../assets/images/more/15.jpg";
import navLogo from "../assets/images/more/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="py-[15px] h-[120px] bg-cover bg-center"
      style={{ backgroundImage: `url(${navbarBg})` }}
    >
      <Link
        to="/"
        className="flex items-center justify-center gap-4 px-4 py-2 md:py-4"
      >
        <img
          src={navLogo}
          alt="Logo"
          className="h-16 md:h-20 lg:h-24" // height scales up on bigger screens
        />
        <h1 className="font-primary text-3xl md:text-5xl lg:text-6xl text-white leading-none">
          Espresso Emporium
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
