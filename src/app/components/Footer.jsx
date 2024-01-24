import Image from "next/image";
import React from "react";
import img from "/public/img/Logo.png";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-cold lg:flex-row justify-between mt-[170px] items-center mb-[80px] mx-28">
        <Image src={img} width={40} height={51} alt="footerLogo" />
        <div>
          <ul className="flex flex-col lg:flex-row gap-[15px]">
            <li className="cursor-pointer hover:text-[#35B8BE] hover:scale-110 transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#35B8BE] hover:scale-110 transition">
              Order
            </li>
            <li className="cursor-pointer hover:text-[#35B8BE] hover:scale-110 transition">
              Company
            </li>
            <li className="cursor-pointer hover:text-[#35B8BE] hover:scale-110 transition">
              FAQ
            </li>
            <li className="cursor-pointer hover:text-[#35B8BE] hover:scale-110 transition">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row justify-between items-center mx-3 lg:mx-28">
        <h3 className="text-slate-300 mt-[80px] mb-[30px] lg:mb-[80px]">
          All rights reserved Ⓒ 2023
        </h3>
        <div className="flex gap-[15px] mb-[40px] lg:mb-0">
          <Link href="https://www.instagram.com/">
            <BiLogoInstagramAlt
              size={38}
              className="cursor-pointer hover:scale-110 transition"
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <IoLogoYoutube
              size={37}
              className="cursor-pointer hover:scale-110 transition"
            />
          </Link>
          <Link href="https://twitter.com/">
            <FaSquareXTwitter
              size={33}
              className="cursor-pointer hover:scale-110 transition mt-[3px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
