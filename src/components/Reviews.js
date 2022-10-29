import React from "react";
import curve from "../images/curve.png";
import { Review } from "./Review";

export const Reviews = () => {
  return (
    <div className="mt-10 relative">
      <img src={curve} />
      <div className="absolute w-full top-5 flex justify-between px-2 items-center">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Customer Reviews</p>
          <div className="w-[35px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-[10px]">View all</p>
        </div>
      </div>
      <div className="absolute top-[80px]">
        <Review />
      </div>
    </div>
  );
};
