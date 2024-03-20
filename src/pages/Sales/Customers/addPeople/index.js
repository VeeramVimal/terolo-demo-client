import { Button, Tabs } from "antd";
import React, { useState } from "react";
import AddEmployeeDetails from "./addEmployeeDetails";
import AddEducationalDetails from "./addEducationalDetails";

const AddPeople = ({ onClose }) => {
  const [employeePage, setEmployeePage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [educationPage, setEducationPage] = useState(false);
  const [addData, setAddData] = useState({
    firstName: "",
    lastName: "",
    experiance: "",
    info: "",
  });
  const [addEmployee, setAddEmployee] = useState({});
  const [addProject, setAddProject] = useState({
    designation: "",
    company: "",
    year: "",
    summary: "",
    project: "",
  });
  const [addEducation, setAddEducation] = useState({});

  const showEmployeeDeatials = () => {
    setEmployeePage(true);
    setProjectPage(false);
    setEducationPage(false);
  };

  const showProjectDeatials = () => {
    setEmployeePage(false);
    setProjectPage(true);
    setEducationPage(false);
  };

  const showEducationalDeatials = () => {
    setEmployeePage(false);
    setProjectPage(false);
    setEducationPage(true);
  };

  const peopleData = (data) => {
    console.log("data : ", data);
  };

  return (
    <div className="">
      <div className="block md:hidden lg:hidden flex justify-end pl-4 mt-2">
        <button
          type="button"
          className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
        >
          <span onClick={onClose} className="text-[#AC0C02]">
            Cancel
          </span>
        </button>
        <button
          type="submit"
          className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
        >
          Save
        </button>
      </div>
      <div className="flex lg:flex-row md:flex-row  flex-col  mx-3 mt-4 justify-between w-full h-[710px] overflow--hidden ">
        <div className="lg:w-3/12 p-4 border-2 ">
          <h1 className="block  text-sm font-medium text-textcolor pb-3">
            Logo
          </h1>
          <div class="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-60 bg-white rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <p class="mb-2 text-sm text-blue-500 dark:text-blue-600">
                  <span class="font-semibold">No file chosen</span>
                </p>
                <p class="text-xs text-white bg-blue-600 p-2 px-4  rounded font-medium">
                  Browse File
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          <div className="mt-8">
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
                Company
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Name"
                name="Name"
              />
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="GST Number"
                name="GST Number"
              />
            </div>
          </div>

          <div className="relative z-0 py-5">
            <label
              for="name"
              className="block  text-sm font-medium text-textcolor"
            >
              Information
            </label>
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="Summary"
              name="Summary"
            />
          </div>
        </div>

        <div className=" lg:w-9/12  container lg:ml-2 md:ml-2 md:w-8/12 lg:p-2 md:p-2 pt-2">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold md:text-xl text-base ">
                Development Team
              </h1>
              <br />
              <span className="text-sm whitespace-pre font-bold text-textcolor my-5">
                <span className="bg-black text-white p-1">TCS</span> California,
                USA
              </span>
            </div>
            <div className="hidden md:block lg:block flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
              <button
                type="button"
                className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
              >
                <span onClick={onClose} className="text-[#AC0C02]">
                  Cancel
                </span>
              </button>
              <button
                type="submit"
                className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
              >
                Save
              </button>
            </div>
          </div>

         
          <div className="my-6 flex lg:flex-row md:flex-row flex-col">
            <button
              className={`${
                employeePage
                  ? "bg-blue-600  text-white"
                  : "bg-gray-200 text-black"
              }  text-center lg:py-2 py-2 px-4 font-bold rounded-[4px] lg:w-[50%] md:w-[50%]  mb-2 md:mb-0 `}
              onClick={() => {
                showEducationalDeatials(false);

                showEmployeeDeatials(true);
              }}
            >
              Company Details{" "}
            </button>
            <button
              className={`${
                educationPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              } md:w-[50%] sm:w-[100%] font-bold  text-center lg:py-2 px-4 rounded-[4px] py-1`}
              onClick={() => {
                showEmployeeDeatials(false);
                showEducationalDeatials(true);
              }}
            >
              People {" "}
            </button>
          </div>
          <div>
            {employeePage ? <AddEmployeeDetails /> : <AddEducationalDetails />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPeople;
