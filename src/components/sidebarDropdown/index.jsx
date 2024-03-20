import React from "react";
import propTypes from "prop-types";
import { useState } from "react";

const SideBarDropDown = ({
  children,
  icon,
  handleChange,
  wrapperClassName,
  textClassName,
  sidebarText,
  showDropDown,
  arrowOnly,
  textOnly,
  arrowFirst,
  arrowClassName,
  iconClassName,
 
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div style={{transition:'50px 1s ease-in 50px 1s ease-in'}}>
      <div
          className={`flex flex-row justify-around cursor-pointer space-x-1 ${!arrowOnly?"border":""} rounded-lg px-0.5 py-0.5 transition-colors hover:text-blue-400 ${wrapperClassName}`}
        onClick={() => {!arrowOnly&&setVisible(!visible)}}
      >
     
        <div className={` pl-1 font-semibold flex items-center ${!arrowOnly?"border-r":""} pr-3 justify-center space-x-2 ${arrowFirst&&"order-last"}`}>
          <i className={icon}></i>
          <text className={textClassName} onClick={() => {textOnly&&setVisible(!visible)}} >{sidebarText}</text>
        </div>
        <div
          className={`flex justify-center items-center text-center ${arrowClassName}`}
        >
         {/* <img src={DownarrowIcon} alt={"DownarrowIcon"} /> */}
         <i className={`ri-arrow-down-s-line text-lg pr-1 pl-1 ${iconClassName} `} onClick={() => {arrowOnly?setVisible(!visible):setVisible(visible);console.log(visible)}}></i>
        </div>
      </div>
      {visible&&(
   <div className="absolute flex-col items-center mt-3 justify-center text-center rounded">
<div className="flex-col justify-center mt-2 pb-3 space-y-3 items-center text-center cursor-pointer" onClick={() => {setVisible(false)}}>
     
     {children}

</div>
   </div>
      
      )
      }
      
    </div>
    
  );
};


export default SideBarDropDown;

SideBarDropDown.propTypes = {
  children: propTypes.any,
  handleChange: propTypes.func,
  sidebarText: propTypes.string || propTypes.element,
  showDropDown: propTypes.bool,
};
SideBarDropDown.defaultProps = {
  children: null,
  handleChange: null,
  sidebarText: null,
  showDropDown: null,
};
