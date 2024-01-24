import Image from "next/image";
import React from "react";
import img from "/public/img/Call.png";
import Link from "next/link";
const CallToStore = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[150px] gap-[84px]">
      <div>
        <h1 className="text-[#35B8BE] text-[44px] lg:text-[50px] text-center lg:text-start mt-[70px]">
          Call our store and <br /> takeaway when it <br /> suits you best.
        </h1>
        <p className="text-[#546285] text-[18px] mt-[29px]  text-center lg:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500.
        </p>
        <button className="rounded-[6px] bg-[#35B8BE] px-8 py-4 text-white mt-[47px] hover:scale-110 transition ml-[90px] lg:ml-0">
          <Link href="tel: +999999999">Ph. +99 999 99 99</Link>
        </button>
      </div>
      <Image
        src={img}
        width={578}
        height={586}
        alt="callToShop"
        className="ml-[-20px] lg:ml-0"
      />
    </div>
  );
};

export default CallToStore;
