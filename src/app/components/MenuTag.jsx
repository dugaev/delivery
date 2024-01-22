import React from "react";

const MenuTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-[#35B8BE]"
    : "text-black border-slate-300 hover:border-slate-600";
  return (
    <button
      className={`${buttonStyles} rounded-[6px] border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default MenuTag;
