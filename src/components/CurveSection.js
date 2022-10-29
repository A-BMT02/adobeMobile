import React from "react";
import bag from "../images/bag.png";
import arrow from "../images/whiteArrow.svg";

export const CurveSection = () => {
  return (
    <div className="flex flex-col space-y-4 bg-lpink py-6 px-2 rounded-tl-[100px] rounded-br-[100px] mt-5 ">
      <div className="flex justify-between items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
        </div>
        <div className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center">
          <img src={arrow} />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
        </div>
        <div className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center">
          <img src={arrow} />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
          <div className="flex flex-col ">
            <img src={bag} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <p className="text-[8px] font-bold">$9</p>
          </div>
        </div>
        <div className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center">
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};
