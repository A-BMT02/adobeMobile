import React from "react";
import arrow from "../images/whiteArrow.svg";
import star from "../images/star.svg";

export const Category = ({ title, image, background }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className={title == "Sportwear" ? "my-5" : ""}>
          <img src={background} />
        </div>

        <div className="text-white items-center flex flex-col space-y-2 absolute absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2">
          <p>{title}</p>
          <div className="flex bg-dpink justify-around space-x-2 px-4 py-2 rounded-2xl">
            <p className="text-sm">SEE MORE </p>
            <img src={arrow} />
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-2 px-1">
        <div className="flex justify-between space-x-2 ">
          <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
            <img className="" src={image} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <div className="flex justify-between">
              <div className="flex space-x-1 items-center">
                <p className="text-[10px]">$119.00</p>
                <del className="text-[7px]">$200</del>
              </div>
              <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                <img className="w-2" src={star} />
                <p className="text-[8px]">4.8</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
            <img src={image} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <div className="flex justify-between">
              <div className="flex space-x-1 items-center">
                <p className="text-[10px]">$119.00</p>
                <del className="text-[7px]">$200</del>
              </div>
              <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                <img className="w-2" src={star} />
                <p className="text-[8px]">4.8</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
            <img src={image} />
            <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
            <div className="flex justify-between">
              <div className="flex space-x-1 items-center">
                <p className="text-[10px]">$119.00</p>
                <del className="text-[7px]">$200</del>
              </div>
              <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                <img className="w-2" src={star} />
                <p className="text-[8px]">4.8</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-1 mt-4">
        <div className="w-8 h-1 bg-dpink rounded-2xl"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
      </div>
    </div>
  );
};
