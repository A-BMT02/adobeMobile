import React from "react";
import { SmallCard } from "./SmallCard";
import { BigCard } from "./BigCard";
import left from "../images/left.png";
import right from "../images/right.png";

export const Cards = () => {
  return (
    <div className="flex-col space-y-4">
      <div className="flex relative items-center mt-10 justify-center px-10">
        <div className="-mr-16 -mb-8">
          <SmallCard image={left} />
        </div>
        <div className="z-10">
          <BigCard />
        </div>
        <div className="-ml-16 -mb-8">
          <SmallCard image={right} />
        </div>
      </div>

      <div className="flex justify-center pb-4 space-x-1">
        <div className="w-8 h-1 bg-dpink rounded-2xl"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
        <div className="w-1 h-1 bg-bgray rounded-full"></div>
      </div>
    </div>
  );
};
