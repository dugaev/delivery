import Image from "next/image";
import React from "react";
import img1 from "/public/img/HowItWorks1.png";
import img2 from "/public/img/HowItWorks2.png";
import img3 from "/public/img/HowItWorks3.png";
const HowItWorks = () => {
  return (
    <div className="mt-[250px] items-center ">
      <h1 className="text-[44px] lg:text-[50px] text-center text-[#35B8BE]">
        How it works
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-[20px] mt-[67px]">
        <div className="text-center items-center ">
          <Image
            src={img1}
            width={333}
            height={267}
            alt="img1"
            className="ml-[30px] lg:ml-0"
          />
          <h3 className="text-[20px] mt-[48px]">Adapt your menu items</h3>
          <p className="mt-[15px] text-[14px] text-[#546285]">
            Easily adapt your menu using the <br /> webflow CMS and allow <br />{" "}
            customers to browse your items.
          </p>
        </div>
        <div className="text-center items-center">
          <Image
            src={img2}
            width={333}
            height={267}
            alt="img2"
            className="ml-[30px] lg:ml-0"
          />
          <h3 className="text-[20px] mt-[48px]">
            Accept online orders & takeout
          </h3>
          <p className="mt-[15px] text-[14px] text-[#546285]">
            Let your customers order and pay <br /> via the powerful ecommerce
            system, <br />
            or simple let them call your store..
          </p>
        </div>
        <div className="text-center items-center">
          <Image
            src={img3}
            width={333}
            height={267}
            alt="img3"
            className="ml-[40px] lg:ml-0"
          />
          <h3 className="text-[20px] mt-[48px]">Manage delivery or takeout</h3>
          <p className="mt-[15px] text-[14px] text-[#546285]">
            Manage your own logistics and <br /> take orders simply through the{" "}
            <br />
            e-commerce system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
