import Image from "next/image";
import React from "react";
import "./../globals.css";
import heroImg from "/public/img/HeroImg.png";
import trustPilot from "/public/img/TrustPilot.png";
const Hero = () => {
  return (
    <div className="flex flex-row mt-[157px] justify-between gap-[70px]">
      <div className="flex flex-col mt-[50px]">
        <h1 className="text-[60px]">
          Beautiful food & <br />
          takeaway, <span className="text-[#35B8BE]">delivered</span>
          <br /> to your door.
        </h1>
        <span className="text-[#546285] text-[18px] mt-[27px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500.
        </span>
        <div className="mt-[53px] flex items-center gap-[90px]">
          <button className="btn-76">
            Place an Order
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </button>
          <div className="flex flex-col">
            <Image src={trustPilot} width={110} height={27} alt="trustPilot" />
            <p>
              <span className="text-[#35B8BE]">4.8 out of 5</span> based on
              2000+ reviews
            </p>
          </div>
        </div>
      </div>
      <Image src={heroImg} width={600} height={580} alt="heroImg" />
    </div>
  );
};

export default Hero;
