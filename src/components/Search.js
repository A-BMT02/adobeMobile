import React from "react";
import search from "../images/search.svg";
import camera from "../images/camera.png";

export const Search = () => {
  return (
    <div className="flex justify-between bg-bgray rounded-xl py-1 px-3">
      <div className="flex space-x-2 bg-bgray">
        <img className="cursor-pointer" src={search} />
        <input className="text-opink bg-bgray" placeholder="Search..." />
      </div>

      <div>
        <img className="cursor-pointer" src={camera} />
      </div>
    </div>
  );
};
