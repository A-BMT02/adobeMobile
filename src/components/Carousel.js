import React, { useState, useEffect, useRef } from "react";
import girl from "../images/girl.png";
import arrow from "../images/arrow.svg";
import play from "../images/play.png";

export const Carousel = () => {
  const [target, setTarget] = useState(0);
  const [data, setData] = useState(["1", "2"]);

  useEffect(() => {
    const percent = 50 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  const ref = useRef(null);

  const next = () => {
    if (target === 1) {
      setTarget(0);
    } else {
      setTarget(1);
    }
  };

  const previous = () => {
    if (target == 0) {
      setTarget(1);
    } else {
      setTarget(0);
    }
  };
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-10 px-2 top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 w-full flex justify-between">
        <div
          onClick={(e) => next()}
          className="cursor-pointer rounded-full bg-white p-0.5 hover:bg-transparent hover:border hover:border-white "
        >
          <img className="w-2 md:w-none" src={arrow} />
        </div>

        <div
          onClick={(e) => previous()}
          className="rotate-180 cursor-pointer rounded-full bg-white flex space-x-2 p-0.5 hover:bg-transparent hover:border hover:border-white "
        >
          <img className="w-2 md:w-none" src={arrow} />
        </div>
      </div>

      <div ref={ref} className="flex transition-all duration-1000 w-[200%]">
        {data.map((item) => (
          <div className="relative">
            <div className="flex">
              <img src={girl} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full overlay"></div>

            <div className="w-full flex justify-between  px-3 items-center absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2 px-7">
              <div className="flex space-x-2 items-center">
                <div className="flex flex-col text-white items-start space-y-2">
                  <p className="w-[120px] leading-[17px] text-sm">
                    Sale of the summer collection
                  </p>
                  <div className="flex space-x-2 items-center">
                    <button className="px-2 py-1 bg-dpink text-[10px] rounded-lg ">
                      Shop now
                    </button>
                    <div className="flex space-x-1 items-center">
                      <img className="w-5 h-5" src={play} />
                      <p className="text-[10px]">Play video</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 items-center">
                <div className="flex flex-col space-y-0.5 items-center text-xs text-white">
                  <p className="text-[8px]">01</p>
                  <div className="relative ">
                    <div className="w-0.5 h-20 bg-white opacity-30"></div>
                    <div
                      className={
                        target === 0
                          ? "block absolute top-0 w-0.5 h-10 bg-white"
                          : "hidden"
                      }
                    ></div>
                    <div
                      className={
                        target === 1
                          ? "absolute bottom-0 w-0.5 h-10 bg-white"
                          : "hidden"
                      }
                    ></div>
                  </div>
                  <p className="text-[8px]">02</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
