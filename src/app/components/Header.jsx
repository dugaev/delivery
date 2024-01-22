import React from "react";
import Image from "next/image";
import logoImg from "/public/img/Logo.png";

const Header = () => {
  return (
    <div className="mt-[24px] flex flex-row justify-between">
      <Image src={logoImg} width={40} height={51} alt="logoImg" />
      <div>
        <ul className="flex gap-[32px] text-[#28224B] items-center mt-[10px]">
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
  );
};

export default Header;
