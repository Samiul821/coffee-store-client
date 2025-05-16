import React from "react";

import logoPng from "../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between w-full px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto pt-[80px] gap-10 lg:gap-[250px]">
      <div className="flex-1">
        <img
          className="w-[60px] h-[70px] sm:w-[75px] sm:h-[90px] mb-6"
          src={logoPng}
          alt="Logo"
        />
        <h1 className="font-primary text-3xl sm:text-[45px] text-[#331a15] mb-8">
          Espresso Emporium
        </h1>
        <p className="text-base sm:text-xl text-[#1b1a1a] mb-7 leading-relaxed">
          Always ready to be your friend. Come & Contact with us to share your{" "}
          <br className="hidden sm:block" /> memorable moments, to share with your
          best companion.
        </p>
        <div className="flex space-x-4 text-[#331A15] text-2xl">
          <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-violet-600 transition" />
          <FaTwitter className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-violet-600 transition" />
          <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-violet-600 transition" />
          <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-violet-600 transition" />
        </div>

        <div className="my-8">
          <h1 className="font-primary text-[#331A15] text-3xl sm:text-[45px] mb-7">
            Get in Touch
          </h1>
          <div className="space-y-4 text-[#1b1a1a] text-base sm:text-xl">
            <p className="flex items-center gap-4 sm:gap-6">
              <MdCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#331A15]" /> +88 01533
              333 333
            </p>
            <p className="flex items-center gap-4 sm:gap-6">
              <MdEmail className="w-5 h-5 sm:w-6 sm:h-6 text-[#331A15]" /> info@gmail.com
            </p>
            <p className="flex items-center gap-4 sm:gap-6">
              <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#331A15]" /> 72,
              Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl sm:text-[45px] font-primary text-[#331A15]">
          Connect with Us
        </h1>
      </div>
    </div>
  );
};

export default Footer;
