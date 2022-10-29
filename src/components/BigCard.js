import React from "react";
import standing from "../images/standing.png";

export const BigCard = () => {
  return (
    <div className="relative">
      <div className="border border-opink w-fit rounded-xl">
        <img src={standing} />
      </div>

      <div className="flex flex-col absolute bottom-2 left-4">
        <p className="text-[4px] font-bold">Ankle Boot</p>
        <div className="flex space-x-1 items-center">
          <del className="text-[7px] text-tgray text-[#939393]">$200</del>
          <p className="text-[6px]">$100</p>
        </div>
      </div>
    </div>
  );
};
