import React from "react";
import picture from "../images/picture.png";
import star from "../images/starIcon.svg";

export const Review = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className=" flex justify-center ">
        <div className="relative flex w-[90%] flex-col border-2 bg-white px-5 rounded-xl border-opink items-center">
          <div className="absolute w-[80px] -top-[40px]">
            <img src={picture} />
          </div>
          <div className="flex flex-col items-center space-y-2 pt-10 mb-1">
            <p className="text-sm text-opink">Cristopher Dan</p>
            <div className="flex space-x-1">
              <img className="h-4" src={star} />
              <img className="h-4" src={star} />
              <img className="h-4" src={star} />
              <img className="h-4" src={star} />
              <img className="h-4" src={star} />
            </div>
          </div>
          <div>
            <p className="text-center mb-6  text-xs">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-4 space-x-1">
        <div className="w-8 h-1 bg-dpink rounded-2xl"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
};
