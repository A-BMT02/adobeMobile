import React from "react";
import picture from "../images/picture.png";
import star from "../images/starIcon.svg";

export const Review = () => {
  return (
    <div className="relative flex  flex-col border-2 bg-white px-5 rounded-xl border-opink items-center">
      <div className="absolute w-[100px] -top-[50px]">
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  );
};
