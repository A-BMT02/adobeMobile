import React from "react";
import standing from "../images/standing.png";

export const BigCard = () => {
  return (
    <div className="relative">
      <div className="border border-opink w-fit rounded-xl">
        <img src={standing} />
      </div>

      <div className="flex flex-col absolute bottom-2 left-6">
        <p className="text-[10px]">Ankle Boot</p>
        <div className="flex space-x-3 items-center">
          <del className="text-[12px] text-tgray">$200</del>
          <p className="text-[10px]">$100</p>
        </div>
      </div>
    </div>
  );
};
