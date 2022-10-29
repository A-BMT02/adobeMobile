import React from "react";
import girl5 from "../images/girl5.png";

export const News = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2 my-2">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Our News</p>
          <div className="w-[25px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-sm">View all</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 bg-dpink">
        <div className="flex justify-between">
          <div className=" p-2 ">
            <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
              <div className="flex justify-center items-center border-2 border-dpink ">
                <img src={girl5} />
              </div>
              <p className="text-[10px] text-tgray">Loose Knit 3/4 Sleeve</p>
              <div className="flex space-x-1">
                <p className="text-opink text-[10px]">$119.99</p>
                <del className="text-tgray text-[8px]">$119.99</del>
              </div>
            </div>
          </div>

          <div className="bg-dpink p-2  bg-dpink">
            <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
              <div className="flex justify-center items-center border-2 border-dpink ">
                <img src={girl5} />
              </div>
              <p className="text-[10px] text-tgray">Loose Knit 3/4 Sleeve</p>
              <div className="flex space-x-1">
                <p className="text-opink text-[10px]">$119.99</p>
                <del className="text-tgray text-[8px]">$119.99</del>
              </div>
            </div>
          </div>

          <div className="bg-dpink p-2  bg-dpink">
            <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
              <div className="flex justify-center items-center border-2 border-dpink ">
                <img src={girl5} />
              </div>
              <p className="text-[10px] text-tgray">Loose Knit 3/4 Sleeve</p>
              <div className="flex space-x-1">
                <p className="text-opink text-[10px]">$119.99</p>
                <del className="text-tgray text-[8px]">$119.99</del>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-4 space-x-1">
          <div className="w-8 h-1 bg-white rounded-2xl"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
          <div className="w-1 h-1 bg-bgray rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
