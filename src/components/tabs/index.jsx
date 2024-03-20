import React, { useState } from "react";
import propTypes from "prop-types";

const Tabs = ({
  data,
  selectedTab,
  tabClassName,
  ulClassName,
  liClassName,
  onClick,
  children,
}) => {
  return (
    <div className={`${tabClassName}`}>
      <ul className={`${ulClassName}`}>
        {data.map((tab) => (
          <li
            onClick={() => onClick(tab)}
            key={tab.id}
            className={`${liClassName} ${
              tab.id === selectedTab && "border-b-2 font-bold text-xl"
            }`}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  data: propTypes.array,
  selectedTab: propTypes.number,
  tabClassName: propTypes.string,
  ulClassName: propTypes.string,
  liClassName: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.any,
};
Tabs.defaultProps = {
  data: [],
  selectedTab: 1,
  tabClassName: "",
  ulClassName: "",
  liClassName: "",
  onClick: null,
  children: null,
};
