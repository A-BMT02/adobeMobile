import React from "react";
import back from "../images/back.svg";
import heart from "../images/heart.svg";
import cart from "../images/cart.svg";
import { Search } from "./Search";

export const Top = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex justify-between">
        <img src={back} />
        <div className="flex space-x-2">
          <img src={heart} />
          <div className="relative">
            <img src={cart} />
            <div className="absolute -bottom-1 -left-1 rounded-full w-4 h-4  bg-dpink flex justify-center items-center text-white">
              <p className="text-sm">7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Search />
      </div>

      <div className="flex text-sm flex justify-between pt-4 border-t-2 border-lgray ">
        <p className="text-tpink">BEST MATCH</p>
        <p className="text-tgray">TOP RATED</p>
        <p className="text-tgray">PRICE LOW-HIGH</p>
      </div>
    </div>
  );
};
