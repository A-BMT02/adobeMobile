import React from "react";
import girl from "../images/girl.png";
import arrow from "../images/arrow.svg";
import play from "../images/play.png";

export const Carousel = () => {
  return (
    <div className="relative">
      <div>
        <img src={girl} />
      </div>

      <div className="flex justify-between w-full px-3 items-center absolute top-1/2 -translate-x-2/4 -translate-y-2/4 left-1/2">
        <div className="flex space-x-2 items-center">
          <div className="cursor-pointer rounded-full bg-white ">
            <img className="w-2 md:w-none" src={arrow} />
          </div>
          <div className="flex flex-col text-white items-start space-y-2">
            <p className="w-[120px]">Sale of the summer collection</p>
            <div className="flex space-x-2 items-center">
              <button className="px-2 py-1 bg-dpink text-sm rounded-lg">
                Shop now
              </button>
              <div className="flex space-x-1 items-center">
                <img className="w-5 h-5" src={play} />
                <p className="text-sm">Play video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-2 items-center">
          <div className="flex flex-col space-y-1 items-center text-xs text-white">
            <p>01</p>
            <div className="w-0.5 h-20 bg-white"></div>
            <p>02</p>
          </div>
          <div className="rotate-180 cursor-pointer rounded-full bg-white flex space-x-2 ">
            <img className="w-2 md:w-none" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
