/** @format */

import { Select } from "antd";
import React from "react";
const Dropdown = ({ data, width, dafaultVal }) => {
  return (
    <>
      <Select
        suffixIcon={<i className="ri-arrow-down-s-line ri-lg"></i>}
        defaultValue={dafaultVal}
        style={{
          width: width,
          color: "#6E78AC",
          borderBottom: "1px solid #d1d5db",
        }}
        defaultActiveFirstOption={false}
        bordered={false}
        size={"small"}
        onSelect={() => {}}
      >
        {data}
      </Select>
    </>
  );
};

export default Dropdown;
