import React from "react";

export const SmallCard = ({ image }) => {
  return (
    <div className="relative">
      <div className="border border-opink w-fit rounded-xl">
        <img src={image} />
      </div>
    </div>
  );
};
