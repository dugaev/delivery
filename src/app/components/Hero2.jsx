import Image from "next/image";
import React from "react";
import heroImg from "/public/img/HomeoffreshProd.png";
import "./../globals.css";

const Hero2 = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[140px] lg:mt-[257px] justify-between items-center">
      <div className="flex flex-col mt-[50px]">
        <h1 className="text-[44px] text-center lg:text-start lg:text-[50px] text-[#35B8BE]">
          The home of <br /> fresh products
        </h1>
        <span className="text-[#546285] text-center lg:text-start text-[18px] mt-[27px]">
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the industry&apos;s <br />{" "}
          standard dummy text ever since the 1500.
        </span>
        <div className="mt-[53px] flex items-center gap-[90px] ml-[90px] lg:ml-0">
          <button className="btn-76">
            Learn about us
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </button>
        </div>
      </div>
      <Image
        src={heroImg}
        width={523}
        height={614}
        alt="heroImg"
        className="mt-[50px] mr-[40px] md:block lg:block"
      />
    </div>
  );
};

export default Hero2;
