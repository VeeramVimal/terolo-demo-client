import React, { useState, useEffect } from "react";
import SideDrawer from "../../components/drawer";
import { Select } from "antd";

function ViewInvestment({ data, setView }) {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const [fileUpload, setFileUpload] = useState(null);

  const onClose = () => {
    // setVisible(false);
    setView(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  //let data=JSON.parse(localStorage.getItem("Investment data"));
  //localStorage.removeItem("Investment data");
  //console.log(data.company);
  //console.log(data.date);

  //console.log("hey"+investment.company);
  //console.log("Amount"+investment.amount);
  //console.log("Currency"+investment.currency);
  //console.log("from d"+d.company);
  const category = [
    {
      id: 1,
      label: "Select category",
    },
    {
      id: 2,
      label: "Product based",
    },
    {
      id: 3,
      label: "Service based",
    },
  ];
  const typeData = [
    {
      id: 1,
      label: "type",
    },
    {
      id: 2,
      label: "Digital Agency",
    },
    {
      id: 3,
      label: "IT",
    },
  ];

  const save = () => {
    //alert("save");
  };
  return (
    <div className="add-business md:m-3 m-0">
      <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
        <i onClick={onClose} className="ri-close-line ri-xl text-black" />
      </div>
      {/* lg:flex lg:w-full lg:flex-row md:flex */}
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        {/* Form -1 */}
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-auto">
          <h1 className="font-bold p-2 pl-5">View Tickets</h1>
          <div className="lg:p-8 sm:p-3 p-2">
            <div className="relative z-0 mb-8">
              <label
                for="category"
                className="block text-sm font-medium text-textcolor"
              >
                Category
              </label>
              <select
                name="Category"
                id="Category"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                value={data.Category}
              >
                {category.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="type"
                className="block text-sm font-medium text-textcolor"
              >
                Priority
              </label>
              <select
                name="type"
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                value={data.Priority}
              >
                {typeData.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>
            <div className="relative z-0 mb-8">
              <label
                for="type"
                className="block text-sm font-medium text-textcolor"
              >
                Date
              </label>
              <select
                name="type"
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                value={data.Date}
              >
                {typeData.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block text-sm font-medium text-textcolor"
              >
                TickedID
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="TID013D"
                name="CompanyName"
              />
            </div>
          </div>
        </div>

        {/* Form -2  */}
        <div className="  lg:w-2/3 sm:w-3/5  w-full ">
          <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span onClick={onClose}>Cancel</span>
            </button>
            <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
            >
              Save
            </button>
          </div>
          <div className=" md:p-8 p-2">
            {/* Financial Details */}
            <div className="relative z-0 lg:mb-4 sm:mb-4 mb-4">
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-textcolor"
              >
                Description
              </label>
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
              />
            </div>
            <div className="py-4">
              <h1 className="font-bold text-base">Files</h1>
              <div className="lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1">
                <div className="relative mb-8">
                  <label
                    for="invoice"
                    className="block mb-2 py-2
                            text-sm font-medium text-textcolor"
                  >
                    Invoice(Optional)
                  </label>
                  <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                    <div className="text-primary text-[12px]">
                      {fileUpload ? `${fileUpload} ` : "No file chosen"}
                    </div>
                    <div>
                      <label for={"file-dropzone"}>
                        <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                          Browse Files
                        </div>
                        <input
                          id="file-dropzone"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            setFileUpload(e.target.files[0].name);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
                  <label
                    for="invoice"
                    className="block mb-2 py-2
                            text-sm font-medium text-textcolor"
                  >
                    Invoice(Optional)
                  </label>
                  <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                    <div className="text-primary text-[12px]">
                      {fileUpload ? `${fileUpload} ` : "No file chosen"}
                    </div>
                    <div>
                      <label for={"file-dropzone"}>
                        <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                          Browse Files
                        </div>
                        <input
                          id="file-dropzone"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            setFileUpload(e.target.files[0].name);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Others */}

            <div className="relative z-0 py-5 lg:mb-4 sm:mb-4 mb-4">
              <label
                for="address"
                className="block mb-2 border-b border-solid text-sm font-medium text-textcolor"
              >
                Assign
              </label>
              <Select
                mode="multiple"
                style={{
                  width: "100%",
                }}
                placeholder="select one country"
                defaultValue={["china"]}
                onChange={handleChange}
                optionLabelProp="label"
              >
                <Option
                  value="Maxim Cummings - Full-Stack Developer"
                  label="Maxim Cummings - Full-Stack Developer"
                >
                  <div className="demo-option-label-item">
                    Maxim Cummings - Full-Stack Developer
                  </div>
                </Option>
                <Option
                  value="Maxim Cummings - Full"
                  label="Maxim Cummings - Full"
                >
                  <div className="demo-option-label-item">
                    Maxim Cummings - Full-Stack Developer{" "}
                  </div>
                </Option>
                <Option
                  value="Maxim Cummings - Full"
                  label="Maxim Cummings - Full"
                >
                  <div className="demo-option-label-item">
                    Maxim Cummings - Full-Stack Developer{" "}
                  </div>
                </Option>
                <Option
                  value="Maxim Cummings - Full-Stack "
                  label="Maxim Cummings - Full-Stack "
                >
                  <div className="demo-option-label-item">
                    Maxim Cummings - Full-Stack Developer{" "}
                  </div>
                </Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvestment;
