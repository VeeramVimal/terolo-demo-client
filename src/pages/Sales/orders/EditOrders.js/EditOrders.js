/** @format */

import React from "react";
// import TCS from "../../../assets/Images/tcs.jpg";
import { useState } from "react";

// import ProfilePicker from "./ProfilePicker";
import Projectdetails from "./Projectdetails";
import CompanyDetails from "./CompanyDetails";

function EditOrders({ setEdit }) {
  const [projectDetails, setProjectDetails] = useState(true);
  const [companyDetails, setCompanyDetails] = useState(false);
  const [fileInvoice, setFileInvoice] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  var ordersData = JSON.parse(localStorage.getItem("orderData"));
  console.log("data+++++++++++++++", ordersData);

  return (
    <div className="sm:mt-5 mt-2 lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
      <div className="lg:flex items-center justify-between sm:flex-col md:flex-row mb-4 lg:hidden md:hidden sm:hidden">
        <div className="flex flex-col">
          <div className="text-[#22314F] sm:text-lg text-sm font-bold ">
            Estore - Ecommerce App Development{" "}
          </div>
          <div className="flex md:my-0 xs:my-2 items-center">
            {/* <div className="w-[20px] h-[20px] rounded  mr-2">
              <img
                src={`${TCS}`}
                alt=""
                className="w-[100%] h-[100%] rounded "
              />
            </div> */}
            <div className="lg:my-0 md:my-2 sm:my-1 my-2">
              {" "}
              California , USA
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel{" "}
          </button>
          <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]">
            Save{" "}
          </button>
        </div>
      </div>
      <div className="sm:w-[30%] xs:w-[100%] border border-gray-400 flex flex-col md:py-[30px] lg:p-6 sm:p-3 p-2 ">
        <div className="flex justify-center">
          {/* <ProfilePicker /> */}
          <div className="flex justify-center items-center w-full mb-[18px]">
            <label
              for="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-[180px] bg-gray-50 rounded-md border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6 relative">
                <div className="text-primary mb-4">
                  {profileImg ? `${profileImg}` : " No file choosen"}
                </div>
                <button className="bg-primary text-white py-1 px-2 rounded-sm">
                  {" "}
                  Browse Files
                </button>
                <input
                  id="dropzone-file"
                  type="file"
                  className="absolute top-13 hidden  "
                  onChange={(e) => {
                    setProfileImg(e.target.files[0].name);
                  }}
                />
              </div>
            </label>
          </div>
        </div>

        <div className="relative z-0 mb-8">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-textcolor"
          >
            Company{" "}
          </label>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Comapny name"
          />
          <input
            type="text"
            className=" mt-2 block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Invoice Number"
          />
        </div>

        <div className="text-textcolor font-medium text-sm mb-2 ">
          Information
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Summary"
          />
        </div>

        <div className="text-[#22314F] font-bold text-md mt-6 mb-3">
          {" "}
          Invoice (if Alredy paid)
        </div>
        <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
          <div className="text-primary text-[12px]">
            {fileInvoice ? `${fileInvoice} ` : "No file chosen"}
          </div>
          <div>
            <label for={"dropzone-file2"}>
              <div className="bg-primary text-white py-1 px-[6px] rounded-sm text-[12px] cursor-pointer">
                Browse Files
              </div>
              <input
                id="dropzone-file2"
                type="file"
                className="hidden"
                onChange={(e) => {
                  setFileInvoice(e.target.files[0].name);
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="md:w-[70%] xs:w-[100%] md:ml-8 sm:ml-4 xs:mt-4 sm:mt-0 md:mt-0 mt-5">
        <div className="flex lg:flex items-center justify-between  md:flex-row hidden md:block sm:block">
          <div className="flex flex-col">
            <div className="text-[#22314F] text-lg font-bold ">
              Estore - Ecommerce App Development{" "}
            </div>
            <div className="flex md:my-0 xs:my-2 items-center">
              {/* <div className="w-[20px] h-[20px] rounded  mr-2">
                <img
                  src={`${TCS}`}
                  alt=""
                  className="w-[100%] h-[100%] rounded "
                />
              </div> */}
              <div className="lg:my-0 md:my-2 sm:my-1 my-2">
                {" "}
                California , USA
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <button
              className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel{" "}
            </button>
            <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]">
              Save{" "}
            </button>
          </div>
        </div>
        <div className="my-6 flex lg:flex-row md:flex-row flex-col">
          <button
            className={`${
              projectDetails
                ? "bg-blue-600  text-white"
                : "bg-gray-200 text-black"
            }  text-center lg:py-2 py-2 px-4  rounded-[4px] lg:w-[50%] md:w-[50%]  mb-2 md:mb-0 `}
            onClick={() => {
              setCompanyDetails(false);

              setProjectDetails(true);
            }}
          >
            Project Details{" "}
          </button>
          <button
            className={`${
              companyDetails
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            } md:w-[50%] sm:w-[100%]  text-center lg:py-2 px-4 rounded-[4px] py-1`}
            onClick={() => {
              setProjectDetails(false);
              setCompanyDetails(true);
            }}
          >
            Company Details{" "}
          </button>
        </div>
        {projectDetails && <Projectdetails />}
        {companyDetails && <CompanyDetails />}
      </div>
    </div>
  );
}

export default EditOrders;
