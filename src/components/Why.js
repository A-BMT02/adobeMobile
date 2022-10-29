import React from "react";
import safe from "../images/safe.png";
import money from "../images/money.png";
import fast from "../images/fast.png";
import best from "../images/best.png";

export const Why = () => {
  return (
    <div className="flex flex-col space-y-4 mt-5">
      <div className="flex flex-col px-4">
        <p className="font-bold">Why should you choose us?</p>
        <div className="w-[35px] h-1 bg-dpink"></div>
      </div>

      <div className="flex justify-between items-start px-2">
        <div className="flex flex-col space-y-3 items-center ">
          <img src={safe} className="w-[50px]" />
          <p className="font-bold text-xs text-center">Safe Payment</p>
        </div>

        <div className="flex flex-col space-y-3  items-center text-center  ">
          <img src={money} className="w-[50px]" />
          <p className="font-bold text-xs">Money-Back Gurantee</p>
        </div>

        <div className="flex flex-col space-y-3 items-center  text-center ">
          <img src={fast} className="w-[50px]" />
          <p className="font-bold text-xs">Fast Shipping</p>
        </div>

        <div className="flex flex-col space-y-3 items-center  text-center">
          <img src={best} className="w-[50px]" />
          <p className="font-bold text-xs">Best Quality</p>
        </div>
      </div>
    </div>
  );
};
