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
    <div className="lg:flex items-center lg:gap-[250px] w-full px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto pt-[80px]">
      <div>
        <img className="w-[75px] h-[90px] mb-6" src={logoPng} alt="" />
        <h1 className="font-primary text-[45px] text-[#331a15] mb-8">
          Espresso Emporium
        </h1>
        <p className="text-xl text-[#1b1a1a] mb-7">
          Always ready to be your friend. Come & Contact with us to share your{" "}
          <br /> memorable moments, to share with your best companion.
        </p>
        <div className="flex space-x-4">
          <FaFacebook className={"text-[#331A15] w-10 h-10"} />
          <FaTwitter className={"text-[#331A15] w-10 h-10"} />
          <FaInstagram className={"text-[#331A15] w-10 h-10"} />
          <FaLinkedin className={"text-[#331A15] w-10 h-10"} />
        </div>
        <div className="my-8">
          <h1 className="font-primary text-[#331A15] text-[45px] mb-7">Get in Touch</h1>
          <div className="space-y-4">
            <p className="flex items-center gap-6 text-xl text-[#1b1a1a]"><MdCall className="w-6 h-6 text-[#331A15]" /> +88 01533 333 333</p>
            <p className="flex items-center gap-6 text-xl text-[#1b1a1a]"><MdEmail className="w-6 h-6 text-[#331A15]" /> info@gmail.com</p>
            <p className="flex items-center gap-6 text-xl text-[#1b1a1a]"><FaLocationDot className="w-6 h-6 text-[#331A15]" /> 72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[45px] font-primary text-[#331A15]">Connect with Us</h1>
      </div>
    </div>
  );
};

export default Footer;
