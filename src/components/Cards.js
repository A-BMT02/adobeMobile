import React, { useState } from "react";
import { SmallCard } from "./SmallCard";
import { BigCard } from "./BigCard";
import left from "../images/left.png";
import right from "../images/right.png";

export const Cards = () => {
  const [target, setTarget] = useState(0);
  return (
    <div className="flex-col space-y-4  ">
      <div className="flex relative items-center mt-10 justify-center px-10  ">
        <div
          className={
            target == 0
              ? "-mr-16 -mb-8 order-1 transition-all duration-1000 "
              : target == 1
              ? "-ml-16 -mb-8 order-3 transition-all duration-1000  "
              : "z-10 order-2 scale-100 transition-all duration-1000"
          }
        >
          <SmallCard image={left} />
        </div>
        <div
          className={
            target == 0
              ? "z-10 order-2 transition-all duration-1000  "
              : target == 1
              ? "-mr-16 -mb-8 order-1 scale-75 transition-all duration-1000  "
              : "-ml-16 -mb-8 order-3 scale-75 transition-all duration-1000 "
          }
        >
          <BigCard />
        </div>
        <div
          className={
            target == 0
              ? "-ml-16 -mb-8 order-3 transition-all duration-1000  "
              : target == 1
              ? "z-10 order-2 scale-100 transition-all duration-1000 "
              : "-mr-16 -mb-8 order-1 transition-all duration-1000"
          }
        >
          <SmallCard image={right} />
        </div>
      </div>

      <div className="flex justify-center pb-4 space-x-1">
        <div
          onClick={(e) => setTarget(0)}
          className={
            target == 0
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-[#f6cfe5] rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(1)}
          className={
            target == 1
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-[#f6cfe5] rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(2)}
          className={
            target == 2
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-[#f6cfe5] rounded-full"
          }
        ></div>
      </div>
    </div>
  );
};
