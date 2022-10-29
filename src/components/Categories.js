import React from "react";
import { Category } from "./Category";
import girl3 from "../images/girl3.png";
import girl4 from "../images/girl4.png";
import { Cards } from "./Cards";
import underwear from "../images/underwear.png";
import outwear from "../images/outwear.png";
import sportwear from "../images/sports.png";
import { CurveSection } from "./CurveSection";

export const Categories = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2">
        <div className="flex flex-col px-2">
          <p className="font-bold text-sm">Category</p>
          <div className="w-[35px] h-1 bg-dpink rounded-xl"></div>
        </div>
        <div>
          <p className="text-dpink text-sm">View all</p>
        </div>
      </div>
      <Category title="Outwear" image={girl3} background={outwear} />
      <Category title="Hijab Clothing" image={girl3} background={outwear} />
      <Category title="Hijab Clothing" image={girl4} background={outwear} />

      <div className="flex justify-center space-x-4 mt-5  text-sm px-5 ">
        <div className=" bg-dpink text-white px-4 py-1.5 rounded-xl  w-[100px] text-center flex items-center">
          <p>Best seller</p>
        </div>

        <div className="border border-dpink text-blacke px-4 py-1.5 rounded-xl  w-[100px] text-center flex items-center">
          <p>More like</p>
        </div>
        <div className="border border-dpink text-blacke px-4 py-1.5 rounded-xl w-[100px] text-center flex items-center">
          <p>More interactive</p>
        </div>
      </div>

      <Cards />

      <Category title="Lingerie" image={girl3} background={outwear} />
      <Category title="Underwear" background={underwear} image={girl4} />
      <Category title="Sportwear" background={sportwear} image={girl3} />

      <CurveSection />
      <Category title="Maternity Clothes" image={girl4} background={outwear} />
      <Category title="Girl Clothes" image={girl3} background={underwear} />
      <Category title="Big Size" image={girl4} background={underwear} />
    </div>
  );
};
