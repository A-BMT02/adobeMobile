import React from "react";
import girl2 from "../images/girl2.png";
import arrow from "../images/whiteArrow.svg";

export const Latest = () => {
  return (
    <div className="flex flex-col  mt-5">
      <div className="flex flex-col px-4">
        <p className="font-bold">Latest</p>
        <div className="w-[20px] h-1 bg-dpink rounded-xl"></div>
      </div>

      <div className="relative flex flex-col">
        <div>
          <img src={girl2} />
          <div className="space-y-2 items-start text-white flex flex-col absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-28">
            <p className="text-sm max-w-[120px]">
              For all your summer clothing needs
            </p>
            <div className="flex justify-around space-x-4 px-4 py-2 bg-dpink rounded-2xl ">
              <p className="text-xs">SEE MORE</p>
              <img src={arrow} />
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-4 space-x-1">
          <div className="w-8 h-1 bg-dpink rounded-2xl"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
