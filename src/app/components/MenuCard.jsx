"use client";
import React, { useState } from "react";
import Image from "next/image";

const MenuCard = ({ imgURL, title, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex gap-[30px] border border-slate-200 py-4">
      <Image
        src={imgURL}
        width={120}
        height={120}
        alt="menuItemImg"
        className="ml-[5px] rounded-[3px]"
      />
      <div>
        <div className="flex gap-[30px]">
          <h2>{title}</h2>
          <p className="text-[#35B8BE] text-[16px]">$ {price} USD</p>
        </div>

        <p className="text-[#546285] text-[16px] mt-[10px]">{description}</p>
        <div className="flex items-center gap-[15px]">
          <div className="flex flex-row items-center mt-[12px]">
            <button
              className="px-2 py-1 rounded-[3px] border border-slate-200 text-black"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="px-2 py-1 rounded-[3px] border border-slate-200 text-black"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>

          <div>
            <button className="px-6 py-2 rounded-[6px] bg-[#35B8BE] text-white mt-[15px] hover:scale-110 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
