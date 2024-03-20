import React from "react";
import { useState } from "react";
// import TCS from "../../../assets/Images/tcs.jpg";
import image from "../../../../assets/Images/forgot.png";
import CompanyDetails from "./CompanyDetails";
import ProjectDetails from "./ProjectDetails";
function ViewOrders({ setView }) {
  const [projectDetails, setProjectDetails] = useState(true);
  const [companyDetails, setCompanyDetails] = useState(false);
  var ordersData = JSON.parse(localStorage.getItem("orderData"));
  return (
    <div className="mt-2 lg:mt-5 lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
      <div className="lg:flex items-center justify-between sm:flex-col md:flex-row mb-5 mt- lg:hidden md:hidden sm:hidden">
        <div className="flex flex-col">
          <div className="text-[#22314F] text-sm font-bold ">
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
            <div className="lg:my-0 md:my-2 sm:my-1 my-2 text-sm">
              {" "}
              California , USA
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
            onClick={() => {
              setView(false);
            }}
          >
            Cancel{" "}
          </button>
          <button className="bg-blue-600 text-white text-center py-1 px-4  rounded-[4px]">
            Save{" "}
          </button>
        </div>
      </div>
      <div className="sm:w-[30%] xs:w-[100%] border border-gray-400 flex flex-col  md:py-[30px] lg:p-8 sm:p-3 p-2    ">
        <div className="flex justify-center">
          <div className="h-[160px] w-[100%] bg-black border border-gray-400 mb-6  text-white flex justify-center items-center ">
            {/* <img src={`${TCS}`} alt="" className="w-[100%] h-[100%] " /> */}
            {/* <img src={image} alt="image" width={500} height={900} /> */}
             <h1 className="text-white">TCS</h1>
          </div>
        </div>

        <div className=" text-[#22314F] font-bold uppercase mb-[6px] text-lg">
          {ordersData.company}
        </div>
        <div className="mb-6"> {ordersData.invoice} </div>
        <div className="text-[#22314F] font-bold text-md mb-[6px]">
          {" "}
          Information
        </div>
        <div className="text-justify text-sm">
          {" "}
          {ordersData.company} - IT solution provider it is expanded many
          countries to provide IT solution to many sectors
        </div>
        <div className="text-[#22314F] font-bold text-md mt-6 mb-[6px]">
          {" "}
          Invoice (if Alredy paid)
        </div>
        <div className="w-[100%] border border-dashed border-blue-600 flex lg:flex-row flex-col justify-between items-center py-1 px-2 text-blue-600">
          <div> Greate !</div>
          <div>
            <button className="bg-blue-600 text-white py-1 px-2 rounded-sm">
              {" "}
              Invoice.pdf
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-[70%] xs:w-[100%] md:ml-8 sm:ml-4 xs:mt-4 sm:mt-0 md:mt-0 mt-5">
        <div className="lg:flex items-center justify-between sm:flex-col md:flex-row hidden sm:block">
          <div className="flex flex-col">
            <div className="text-[#22314F] sm:text-lg font-bold">
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
                setView(false);
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
            } md:w-[50%] sm:w-[100%]  text-center py-2 px-4 rounded-[4px]`}
            onClick={() => {
              setProjectDetails(false);
              setCompanyDetails(true);
            }}
          >
            Company Details{" "}
          </button>
        </div>
        {projectDetails && <ProjectDetails />}
        {companyDetails && <CompanyDetails />}
      </div>
    </div>
  );
}

export default ViewOrders;
