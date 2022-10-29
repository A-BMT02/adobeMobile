import React, { useState, useEffect, useRef } from "react";
import girl5 from "../images/girl5.png";

export const News = () => {
  const [data, setData] = useState(["1", "2", "3", "4", "5"]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    const percent = 20 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  const ref = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (target) {
        case 4:
          setTarget(0);
          return;
        default:
          setTarget((prev) => prev + 1);
          return;
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [target]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2 my-2 items-center">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Our News</p>
          <div className="w-[25px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-xs ">View all</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-dpink overflow-hidden">
        <div ref={ref} className="flex transition-all duration-1000 w-[500%] ">
          {data.map((item) => (
            <div className="flex justify-between">
              <div className=" p-2 ">
                <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
                  <div className="flex justify-center items-center border-2 border-dpink ">
                    <img src={girl5} />
                  </div>
                  <p className="text-[10px] text-tgray">
                    Loose Knit 3/4 Sleeve
                  </p>
                  <div className="flex space-x-1">
                    <p className="text-opink text-[10px]">$119.99</p>
                    <del className="text-tgray text-[8px]">$119.99</del>
                  </div>
                </div>
              </div>

              <div className="bg-dpink p-2  bg-dpink">
                <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
                  <div className="flex justify-center items-center border-2 border-dpink ">
                    <img src={girl5} />
                  </div>
                  <p className="text-[10px] text-tgray">
                    Loose Knit 3/4 Sleeve
                  </p>
                  <div className="flex space-x-1">
                    <p className="text-opink text-[10px]">$119.99</p>
                    <del className="text-tgray text-[8px]">$119.99</del>
                  </div>
                </div>
              </div>

              <div className="bg-dpink p-2  bg-dpink">
                <div className="flex flex-col space-y-2 bg-white w-fit p-2 ">
                  <div className="flex justify-center items-center border-2 border-dpink ">
                    <img src={girl5} />
                  </div>
                  <p className="text-[10px] text-tgray">
                    Loose Knit 3/4 Sleeve
                  </p>
                  <div className="flex space-x-1">
                    <p className="text-opink text-[10px]">$119.99</p>
                    <del className="text-tgray text-[8px]">$119.99</del>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-1 mt-4 pb-2">
          <div
            onClick={(e) => setTarget(0)}
            className={
              target == 0
                ? "w-8 h-1 bg-white rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(1)}
            className={
              target == 1
                ? "w-8 h-1 bg-white rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(2)}
            className={
              target == 2
                ? "w-8 h-1 bg-white rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(3)}
            className={
              target == 3
                ? "w-8 h-1 bg-white rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
          <div
            onClick={(e) => setTarget(4)}
            className={
              target == 4
                ? "w-8 h-1 bg-white rounded-2xl"
                : "w-1 h-1 bg-bgray rounded-full"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
