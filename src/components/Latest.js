import React, { useState, useEffect, useRef } from "react";
import girl2 from "../images/girl2.png";
import girl6 from "../images/girl6.png";

import arrow from "../images/whiteArrow.svg";

export const Latest = () => {
  const [target, setTarget] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const percent = 50 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);
  return (
    <div className="flex flex-col  mt-5">
      <div className="flex flex-col px-4">
        <p className="font-bold">Latest</p>
        <div className="w-[20px] h-1 bg-dpink rounded-xl"></div>
      </div>

      <div className=" flex flex-col">
        <div className="w-full overflow-hidden">
          <div
            ref={ref}
            className="flex transition-all duration-1000 w-[200%] "
          >
            {/* first */}
            <div className="w-full relative">
              <img src={girl2} />
              <div className="space-y-2 items-start text-white flex flex-col absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-24">
                <p className="text-sm max-w-[120px]">
                  For all your summer clothing needs
                </p>
                <div className="flex justify-around space-x-4 px-4 py-2 bg-dpink rounded-2xl hover:bg-transparent hover:border hover:border-white cursor-pointer ">
                  <p className="text-xs">SEE MORE</p>
                  <img src={arrow} />
                </div>
              </div>
            </div>
            {/* second */}
            <div className="mt-2 w-full relative">
              <img className="-ml-3" src={girl6} />
              <div className="space-y-2 items-start text-white flex flex-col absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-24">
                <p className="text-sm max-w-[120px]">
                  For all your summer clothing needs
                </p>
                <div className="flex justify-around space-x-4 px-4 py-2 bg-dpink rounded-2xl hover:bg-transparent hover:border hover:border-white cursor-pointer ">
                  <p className="text-xs">SEE MORE</p>
                  <img src={arrow} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-4 space-x-1">
          <div
            onClick={(e) => setTarget(0)}
            className={
              target === 0
                ? "w-8 h-1 bg-dpink rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(1)}
            className={
              target === 1
                ? "w-8 h-1 bg-dpink rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
