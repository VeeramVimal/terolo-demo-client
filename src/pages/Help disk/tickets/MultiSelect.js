import React from "react";
import { Select } from "antd";
const { Option } = Select;

const MultiSelect = ({ data, width, setFieldValue }) => {
  const handleChange = (value) => {
    setFieldValue("peopleId", value.toString());
  };
  return (
    <>
      <Select
        mode="multiple"
        style={{
          width: width,
        }}
        placeholder="Select People"
        onChange={handleChange}
        placement={"bottomLeft"}
      >
        {data?.map((item, index) => {
          return (
            <Option value={`${item.id}`} name={"peopleId"}>
              <div className="demo-option-label-item">
                <div key={index}>
                  {item.name} - {item.ed_currentDesignation}
                </div>
              </div>
            </Option>
          );
        })}
      </Select>
    </>
  );
};
export default MultiSelect;
