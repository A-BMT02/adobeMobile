import React, { useState, useEffect, useRef } from "react";
import arrow from "../images/whiteArrow.svg";
import star from "../images/star.svg";

export const Category = ({ title, image, background }) => {
  const [data, setData] = useState(["1", "2", "3", "4", "5"]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    const percent = 20 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  const ref = useRef(null);
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className={title == "Sportwear" ? "my-5" : ""}>
          <img src={background} />
        </div>

        <div className="text-white items-center flex flex-col space-y-2  absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2">
          <p className="tracking-wider text-sm">{title}</p>
          <div className="flex bg-dpink justify-around space-x-2 px-4 py-2 rounded-2xl hover:bg-transparent hover:border hover:border-white cursor-pointer">
            <p className="text-[10px]">SEE MORE </p>
            <img src={arrow} />
          </div>
        </div>
      </div>

      <div
        className={
          title == "Sportwear"
            ? "flex justify-between space-x-2 overflow-hidden  w-full"
            : "flex justify-between space-x-2 overflow-hidden -mt-5 w-full"
        }
      >
        <div ref={ref} className="flex transition-all  duration-1000 w-[500%] ">
          {data.map((item) => (
            <div
              className="flex justify-between space-x-2 w-screen px-1
px-1  "
            >
              <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
                <img className="" src={image} />
                <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
                <div className="flex justify-between">
                  <div className="flex space-x-1 items-center">
                    <p className="text-[10px]">$119.00</p>
                    <del className="text-[7px]">$200</del>
                  </div>
                  <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                    <img className="w-1.5" src={star} />
                    <p className="text-[7px]">4.8</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
                <img className="" src={image} />
                <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
                <div className="flex justify-between">
                  <div className="flex space-x-1 items-center">
                    <p className="text-[10px]">$119.00</p>
                    <del className="text-[7px]">$200</del>
                  </div>
                  <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                    <img className="w-1.5" src={star} />
                    <p className="text-[7px]">4.8</p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col border border-dpink rounded-xl p-3 space-y-2">
                <img className="" src={image} />
                <p className="text-[10px]">Loose Knit 3/4 Sleeve</p>
                <div className="flex justify-between">
                  <div className="flex space-x-1 items-center">
                    <p className="text-[10px]">$119.00</p>
                    <del className="text-[7px]">$200</del>
                  </div>
                  <div className="flex items-center space-x-0.5 px-1 rounded-lg bg-dpink text-white">
                    <img className="w-1.5" src={star} />
                    <p className="text-[7px]">4.8</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-1 mt-4">
        <div
          onClick={(e) => setTarget(0)}
          className={
            target == 0
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-bgray rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(1)}
          className={
            target == 1
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-bgray rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(2)}
          className={
            target == 2
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-bgray rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(3)}
          className={
            target == 3
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-bgray rounded-full"
          }
        ></div>
        <div
          onClick={(e) => setTarget(4)}
          className={
            target == 4
              ? "w-8 h-1 bg-dpink rounded-2xl"
              : "w-1 h-1 bg-bgray rounded-full"
          }
        ></div>
      </div>
    </div>
  );
};
