import React from "react";
import safe from "../images/safe.png";
import money from "../images/money.png";
import fast from "../images/fast.png";
import best from "../images/best.png";
import shipping from "../images/shipping.svg";

export const Why = () => {
  return (
    <div className="flex flex-col space-y-6 mt-10">
      <div className="flex flex-col px-4">
        <p className="font-bold">Why should you choose us?</p>
        <div className="w-[35px] h-1 bg-dpink rounded-xl"></div>
      </div>

      <div className="flex justify-between  px-2">
        <div className="flex flex-col space-y-3 items-center text-center w-1/4  ">
          <img src={safe} className="w-[58px] h-[58px]" />
          <p className="font-bold text-xs text-center">Safe Payment</p>
        </div>

        <div className="flex flex-col space-y-3  items-center text-center w-1/4  ">
          <img src={money} className="w-[58px] h-[58px]" />
          <p className="font-bold text-xs">Money-Back Gurantee</p>
        </div>

        <div className="flex flex-col space-y-3 items-center  text-center w-1/4 ">
          <div className="w-[58px] h-[58px] rounded-full border-[3px] border-[#f564b6] bg-[#ffeef8]">
            <img src={shipping} className="w-[58px] h-[58px]" />
          </div>
          <p className="font-bold text-xs ">Fast Shipping</p>
        </div>

        <div className="flex flex-col space-y-3 items-center  text-center w-1/4">
          <img src={best} className="w-[58px] h-[58px]" />
          <p className="font-bold text-xs">Best Quality</p>
        </div>
      </div>
    </div>
  );
};
