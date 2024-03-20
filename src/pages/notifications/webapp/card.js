import React from "react";
import { useState } from "react";
import AVATAR from "../../../assets/Images/user.png";
import ArrowDown from "../../../assets/Images/arrow-right-s-line.png"
import ArrowUp from "../../../assets/Images/arrow-drop-down-line.png"
function Cards({ name, time, msg, prof, content, request, type }) {
  const [showContent, setShowContent] = useState(false);
  const text = content;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="border mt-4 border-[#F0F3F7] sm:p-[10px] p-[8px] rounded-sm relative">
      <div className="flex">
        <div
          className="sm:mr-4 mr-3 sm:w-[48px] w-[50px] sm:h-[48px] h-[48px] rounded-sm"
          style={{ backgroundImage: `url(${AVATAR})`, backgroundSize: "cover", height: "36px", width: "36px"}}
        ></div>
        <div className="flex flex-col font-normal sm:text-[15px] text-[12px]">
          <div className="">
            <div className="mr-2 font-medium"> {name} </div>
            <div>
              {" "}
              {type} <span className="font-medium"> {msg} </span>{" "}
            </div>
          </div>
          <div className="text-[#979FC8] sm:text-xs text-[10px] mt-1">
            {time}  {prof}{" "}
          </div>
          <div
            className="absolute sm:right-4 right-2 sm:top-4 top-2 w-3 sm:w-auto"
            onClick={() => {
              console.log("arrow down");
              setShowContent(!showContent);
            }}
          >
            <img
              src={showContent ? `${ArrowUp}` : `${ArrowDown}`}
              alt=""
              className="w-[100%]"
            />
          </div>
        </div>
      </div>

      {content && showContent && (
        <div className="sm:mt-2 mt-1 ml-[56px] sm:mr-6 mr-3 text-justify  rounded-sm  bg-gray-200 sm:p-[6px] p-[4px] inline-block sm:text-xs text-[10px] text-[#22314F] ">
          <span className="  ">
            {isReadMore ? text.slice(0, 80) : text}
            <span
              onClick={toggleReadMore}
              className="text-[#43B5E5] text-[10px] cursor-pointer"
            >
              {isReadMore ? "...View More" : " Show Less"}
            </span>
          </span>
        </div>
      )}
      {request && showContent && (
        <div className=" sm:mt-3 mt-1 ml-[60px] sm:mr-6 mr-3 ">
          <button className="bg-primary font-medium sm:text-[14px] text-[12px] text-white px-2 sm:py-[5px] py-[1px] rounded-[4px] mr-4">
            {" "}
            Accept{" "}
          </button>
          <button className="bg-white text-[#22314F] font-medium sm:text-[14px] text-[12px] border border-gray-500 px-2 sm:py-[4px] rounded-[4px]">
            {" "}
            Decline{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
