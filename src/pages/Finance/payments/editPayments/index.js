import React, { useState, useEffect } from "react";
const Editpayments = ({ data, setEdit }) => {
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
  const onClose = () => {
    // setVisible(false);
    setEdit(false)
};

  return (
    <div className=" md:m-3 m-0">
      <div className="block md:hidden lg:hidden lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
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
      <div
        className="float-right flex absolute z-40  bg-white w-10 h-10 items-center justify-center  rounded-full top-[50%] left-[-45px] cursor-pointer"
        onClick={onClose}
      >
        <i className="ri-close-line ri-1x text-[#6E78AC] text-[32px]" />
      </div>
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        {/* Form -1 */}
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-auto">
          <div className="lg:p-4 sm:p-3 p-2">
            <div className="py-3 text-[18px] font-bold">Edit payment</div>
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block mb-2 text-base font-semibold text-textcolor"
              >
                Payment
              </label>
              <input
                type="text"
                className="block py-2.5 ml-1 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="tittle"
                name="CompanyName"
              />
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="type"
                className="block mb-2 text-base font-semibold text-textcolor"
              >
                Company
              </label>
              <select
                name="type"
                id="underline_select"
                className="block py-2.5 ml-1 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                {typeData.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block mb-2 text-base font-semibold text-textcolor"
              >
                Amount Paid
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 ml-1 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="200.00"
                name=""
              />
            </div>
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block mb-2 text-base font-semibold text-textcolor"
              >
                Ticked ID
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 ml-1 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="TID013D"
                name=""
              />
            </div>
          </div>
        </div>
        {/* Form -2  */}
        <div className="  lg:w-2/3 sm:w-3/5  w-full ">
          <div className="hidden md:block lg:block">
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
          </div>
          <div className=" md:p-8 p-2">
            <div className="relative z-0 lg:mb-8 sm:mb-4 mb-4">
              <label
                for="address"
                className="block mb-2 text-base font-semibold text-textcolor"
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

            <h1 className="text-textcolor text-[18px] font-bold mb-4">
              Assign (Atleast one person)
            </h1>
            <div className="lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1">
              <div className="relative z-0 lg:mb-8 sm:mb-4 mb-4">
                <label
                  for="ceo"
                  className="block mb-2 text-base font-semibold text-textcolor"
                >
                  Assign
                </label>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Select</option>
                </select>
              </div>

              <div class="relative z-0 mb-8">
                <label
                  for="ceo"
                  className="block mb-2 text-base font-semibold text-textcolor"
                >
                  Assign
                </label>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected>Select</option>
                </select>
              </div>
            </div>
            <div className="add-more mb-8">
              <button
                type="button"
                className="md:text-base text-xs ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-textcolor focus:text-textcolor  rounded border-0 text-textcolor font-normal h-10 w-full"
              >
                <i className="ri-add-line ri-lg align-sub"></i>
                <span className="lg:text-base sm:text-[13px] text-[10px]">
                  Add more people
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpayments;
