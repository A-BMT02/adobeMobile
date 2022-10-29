import React, { useState } from "react";
import back from "../images/back.svg";
import heart from "../images/heart.svg";
import cart from "../images/cart.svg";
import { Search } from "./Search";

export const Top = () => {
  const [target, setTarget] = useState(0);
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex justify-between">
        <img className="cursor-pointer" src={back} />
        <div className="flex space-x-3">
          <img className="cursor-pointer" src={heart} />
          <div className="relative">
            <img className="cursor-pointer" src={cart} />
            <div className="absolute -bottom-1 -left-1 rounded-full w-4 h-4  bg-bpink flex justify-center items-center text-white">
              <p className="text-[8px]">7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Search />
      </div>

      <div className="flex text-sm flex justify-between pt-4 border-t-2 border-lgray ">
        <p
          onClick={(e) => setTarget(0)}
          className={
            target == 0
              ? "text-bpink cursor-pointer"
              : "text-tgray cursor-pointer"
          }
        >
          BEST MATCH
        </p>
        <p
          onClick={(e) => setTarget(1)}
          className={
            target == 1
              ? "text-bpink cursor-pointer"
              : "text-tgray cursor-pointer"
          }
        >
          TOP RATED
        </p>
        <p
          onClick={(e) => setTarget(2)}
          className={
            target == 2
              ? "text-bpink cursor-pointer"
              : "text-tgray cursor-pointer"
          }
        >
          PRICE LOW-HIGH
        </p>
      </div>
    </div>
  );
};
