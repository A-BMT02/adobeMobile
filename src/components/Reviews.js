import React, { useState, useEffect, useRef } from "react";

import curve from "../images/curve.png";
import { Review } from "./Review";

export const Reviews = () => {
  const [target, setTarget] = useState(0);

  useEffect(() => {
    const percent = 33.33 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  const ref = useRef(null);
  return (
    <div className="mt-10 relative overflow-hidden">
      <img src={curve} />
      <div className="absolute w-full top-5 flex justify-between px-2 items-center">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Customer Reviews</p>
          <div className="w-[35px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-xs">View all</p>
        </div>
      </div>
      <div className="absolute top-[80px]">
        <div className="w-full ">
          <div ref={ref} className="flex transition-all duration-1000 w-[300%]">
            <div className="w-full">
              <Review />
            </div>
            <div className="w-full">
              <Review />
            </div>
            <div className="w-full">
              <Review />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-4 space-x-1 -mt-4">
        <div
          onClick={(e) => setTarget(0)}
          className={
            target == 0
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-white rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(1)}
          className={
            target == 1
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-white rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(2)}
          className={
            target == 2
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-white rounded-full"
          }
        ></div>
      </div>
    </div>
  );
};
