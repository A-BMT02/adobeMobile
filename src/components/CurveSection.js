import React, { useState, useEffect, useRef } from "react";
import bag from "../images/bag.png";
import arrow from "../images/whiteArrow.svg";

export const CurveSection = () => {
  const [target, setTarget] = useState(0);
  const [target1, setTarget1] = useState(0);
  const [target2, setTarget2] = useState(0);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const percent = 50 * target;
    ref.current.style.transform = `translateX(-${percent}%)`;
  }, [target]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (target) {
        case 0:
          setTarget(1);
          return;
        case 1:
          setTarget(0);
          return;
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [target]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (target1) {
        case 0:
          setTarget1(1);
          return;
        case 1:
          setTarget1(0);
          return;
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [target1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (target2) {
        case 0:
          setTarget2(1);
          return;
        case 1:
          setTarget2(0);
          return;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [target2]);

  useEffect(() => {
    const percent = 50 * target1;

    ref1.current.style.transform = `translateX(-${percent}%)`;
  }, [target1]);

  useEffect(() => {
    const percent = 50 * target2;
    ref2.current.style.transform = `translateX(-${percent}%)`;
  }, [target2]);
  return (
    <div className="flex flex-col space-y-4 bg-lpink py-6 px-2 rounded-tl-[100px] rounded-br-[100px] mt-5 ">
      <div className="flex justify-center space-x-4 items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="w-[170px] overflow-hidden">
          <div
            ref={ref}
            className="flex transition-all duration-1000 w-[340px] "
          >
            {/* first */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
            {/* second */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => (target == 0 ? setTarget(1) : setTarget(0))}
          className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center"
        >
          <img src={arrow} />
        </div>
      </div>

      <div className="flex justify-center space-x-4 items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="w-[170px] overflow-hidden">
          <div
            ref={ref1}
            className="flex transition-all duration-1000 w-[340px] "
          >
            {/* first */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
            {/* second */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => (target1 == 0 ? setTarget1(1) : setTarget1(0))}
          className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center"
        >
          <img src={arrow} />
        </div>
      </div>

      <div className="flex justify-center space-x-4 items-center">
        <div className="w-16 h-16 rounded-full p-2 border-4 border-dpink flex justify-center items-center bg-white text-center text-dpink">
          <p className="text-[10px]">less than 10$</p>
        </div>
        <div className="w-[170px] overflow-hidden">
          <div
            ref={ref2}
            className="flex transition-all duration-1000 w-[340px] "
          >
            {/* first */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
            {/* second */}
            <div className="flex space-x-3 items-center w-[170px]">
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
              <div className="flex flex-col ">
                <img className="w-[80px]" src={bag} />
                <p className="text-[8px]">Loose Knit 3/4 Sleeve</p>
                <p className="text-[8px] ">$9</p>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={(e) => (target2 == 0 ? setTarget2(1) : setTarget2(0))}
          className="bg-dpink p-2 w-6 h-6 rounded-full flex justify-center items-center"
        >
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};
