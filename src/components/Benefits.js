import React from "react";
import truck from "../images/truck.png";
import medal from "../images/medal.png";
import gift from "../images/gift.png";

export const Benefits = () => {
  return (
    <div className="flex flex-col space-y-4 mt-5">
      <div className="flex justify-between px-2">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Many benefits are waiting for you</p>
          <div className="w-[35px] h-1 bg-dpink"></div>
        </div>
        <div>
          <p className="text-dpink text-sm">View more</p>
        </div>
      </div>

      <div className="bg-bgray flex flex-col space-y-4 ">
        <div className="flex justify-between items-start px-4 py-3">
          <div className="flex items-start w-[82px]">
            <img src={truck} />
            <p className="font-bold text-xs text-center">Free Shipping</p>
          </div>

          <div className="flex  items-start w-[82px] text-center  ">
            <img src={medal} />
            <p className="font-bold text-xs">Your Point</p>
          </div>

          <div className="flex items-start w-[82px]  text-center ">
            <img src={gift} />
            <p className="font-bold text-xs">Send your gift</p>
          </div>
        </div>

        <div className="flex justify-center pb-4 space-x-1">
          <div className="w-8 h-1 bg-dpink rounded-2xl"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
