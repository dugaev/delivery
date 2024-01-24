import Image from "next/image";
import React from "react";
import img from "/public/img/SupprotGoodFood.png";
const Support = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[22px] mt-[170px]  ">
      <Image
        src={img}
        width={666}
        height={640}
        alt="supportImg"
        className="rounded-[20px]"
      />
      <div className="bg-white  w-full lg:text-start lg:justify-center flex flex-col  lg:ml-[50px]  text-center">
        <h1 className="text-[#35B8BE] text-[44px] lg:text-[53px]">
          Support good food <br /> and local business.
        </h1>
        <button className="bg-[#35B8BE] text-white px-28 py-5 lg:px-8 lg:py-4 w-fit  rounded-[6px] mt-[52px] hover:scale-110 transition ml-[40px] lg:ml-0">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Support;
