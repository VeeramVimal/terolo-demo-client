import React from "react";
import Navbar from "../../components/navbar";

const TopNavbar = ({ headerText, buttonName, onClick }) => {
  return (
    <Navbar navBarStyle={"mt-1 mx-2"}>
      {/* <a href="/" className="flex items-center">
        <span className="self-center text-3xl font-semibold whitespace-nowrap  text-blue-500">
          goal.ly
        </span>
      </a> */}
      <div className="flex md:order-2 items-center">
        <text className="mr-3 text-sm  leading-3 dark:text-black hidden md:block">
          {headerText}
        </text>
        <button
          onClick={onClick}
          type="button"
          className="text-white bg-violet-700 hover:bg-violet-900 focus:outline-none font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 md:mr-0 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          {buttonName}
        </button>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
