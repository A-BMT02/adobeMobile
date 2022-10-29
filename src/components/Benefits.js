import React, { useState, useEffect, useRef } from "react";
import truck from "../images/truck.png";
import medal from "../images/medal.png";
import gift from "../images/gift.png";

export const Benefits = () => {
  const [data, setData] = useState(["1", "2", "3"]);

  const [target, setTarget] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const percent = 33.33 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  return (
    <div className="flex flex-col space-y-6 mt-10 ">
      <div className="flex justify-between px-2 items-center">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Many benefits are waiting for you</p>
          <div className="w-[35px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-[10px] cursor-pointer  hover:border-b hover:border-dpink">
            View more
          </p>
        </div>
      </div>

      <div className="bg-bgray flex flex-col space-y-2 w-full overflow-hidden ">
        <div ref={ref} className=" transition-all duration-1000 w-[300%] flex">
          {data.map((item) => (
            <div className="flex justify-between items-start px-4 py-3 w-full">
              <div className="flex items-start w-[82px] text-center space-x-1">
                <img className="w-[30px]" src={truck} />
                <p className="font-bold text-xs ">Free Shipping</p>
              </div>

              <div className="flex  items-start w-[82px] text-center space-x-1  ">
                <img className="w-[30px]" src={medal} />
                <p className="font-bold text-xs">Your Point</p>
              </div>

              <div className="flex items-start w-[82px]  text-center space-x-1 ">
                <img className="w-[30px]" src={gift} />
                <p className="font-bold text-xs">Send your gift</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-3 space-x-1">
          <div
            onClick={(e) => setTarget(0)}
            className={
              target == 0
                ? "w-8 h-1 bg-dpink rounded-2xl"
                : "w-1 h-1 bg-lwhite rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(1)}
            className={
              target == 1
                ? "w-8 h-1 bg-dpink rounded-2xl"
                : "w-1 h-1 bg-lwhite rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(2)}
            className={
              target == 2
                ? "w-8 h-1 bg-dpink rounded-2xl"
                : "w-1 h-1 bg-lwhite rounded-full"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
