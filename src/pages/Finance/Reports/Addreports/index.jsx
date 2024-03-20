import React, { useState } from "react";

const Addreport = ({
  onClose,
}) => {

  const shareholderData = [
    {
      id: 1,
      label: "Shareholder 1",
    },
    {
      id: 2,
      label: "Shareholder 2",
    },
    {
      id: 3,
      label: "Shareholder 3",
    },
  ];
  const [fileUpload, setFileUpload] = useState(null);

  const typeData = [
    {
      id: 1,
      label: "INR",
    },
    {
      id: 2,
      label: "USD",
    },
    {
      id: 3,
      label: "CAD",
    },
  ];

  return (

    <div className=" md:m-3 m-0">
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
          <h1 className="font-bold text-base py-5 pl-5">Add reports</h1>
          <div className="lg:px-5  ">
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Reason
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
                name="Summary"
              />
            </div>
          </div>
          <div className="lg:px-5 sm:p-3 ">
            <div className="relative mb-8 ">
              <label
                for="invoice"
                className="block mb-2 py-2
                            text-base font-medium text-textcolor"
              >
                Invoice(Optional)
              </label>
              <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                <div className="text-primary text-[12px]">
                  {
                    fileUpload ? `${fileUpload} ` : "No file chosen"
                  }
                </div>
                <div>
                  <label for={"file-dropzone"}>
                    <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                      Browse Files
                    </div>
                    <input id="file-dropzone" type="file" className="hidden" onChange={(e) => {
                      setFileUpload(e.target.files[0].name);
                    }} />
                  </label>

                </div>

              </div>

            </div>
          </div>
        </div>

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
          <h1 className="font-bold text-[18px] p-2  pl-5 py-3 ">Income</h1>
          <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
            <div className="relative z-0">
              <label
                for="name"
                className="block    text-base font-medium text-textcolor"
              >
                Amount
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Amount"
                name="Amount"
              />
            </div>
          
            <div className="relative z-0 ">
              <label
                for="type"
                className="block   text-base font-medium text-textcolor"
              >
                Refunded amount
              </label>
              <select
                name="type"
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                {shareholderData.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
          <div className="relative z-0 py-5">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Reporter
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
                name="Summary"
              />
            </div>
          </div>
          <h1 className="font-bold  text-[18px] pl-6 pb-3 ">Client</h1>
          <div className="ml-6   ">
            <div className="relative z-0">
              <label
                for="name"
                className="block    text-base font-medium text-textcolor"
              >
                Customer
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Select from customer"
                name="Customer"
              />
            </div>
          </div>
          <div className="ml-6   ">
            <div className="relative z-0 py-5">
              <label
                for="name"
                className="block    text-base font-medium text-textcolor"
              >
                Description
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
                name="Summary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addreport;
