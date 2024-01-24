import Image from "next/image";
import React from "react";
import img from "/public/img/OnlineOrder.png";
const OrderOnline = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[150px] gap-[84px]">
      <Image src={img} width={578} height={586} alt="onlineOrder" />
      <div>
        <h1 className="text-[#35B8BE] text-[44px] text-center lg:text-start lg:text-[50px] mt-[70px] lg:mt-[150px]">
          Order online with <br /> our simple checkout.
        </h1>
        <p className="text-[#546285] text-[18px] mt-[29px] text-center lg:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500.
        </p>
        <button className="rounded-[6px] bg-[#35B8BE] px-8 py-4 text-white mt-[47px] hover:scale-110 transition ml-[120px] lg:ml-0">
          See our FAQ
        </button>
      </div>
    </div>
  );
};

export default OrderOnline;
