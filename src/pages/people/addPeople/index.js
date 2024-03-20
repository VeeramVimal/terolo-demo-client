import { Button, Tabs } from "antd";
import React, { useState } from "react";
import image from "../../../assets/Images/forgot.png";
import InputField from "../../../components/InputField";
import AddProjectDetails from "./addProjectDetails";
import AddEmployeeDetails from "./addEmployeeDetails";
import AddEducationalDetails from "./addEducationalDetails";

const AddPeople = ({ onClose }) => {
  const [employeePage, setEmployeePage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [educationPage, setEducationPage] = useState(false);
  const [addData,setAddData]=useState({
    firstName:"",
    lastName:"",
    experiance:"",
    info:""
  })
  const [addEmployee,setAddEmployee]=useState({})
  const [addProject,setAddProject]=useState({
    designation:"",
    company:"",
    year:"",
    summary:"",
    project:""
  })
  const [addEducation,setAddEducation]=useState({})

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

  return (
    <div className="flex flex-row m-3 justify-between w-full h-[710px] overflow--hidden">
      <div className="w-3/12 p-4 border-2 ">
        <img src={image} alt="image" width={500} height={900} />
        <div className="mt-8">
          <h2 className="text-md font-semibold ">Name</h2>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" inputBoxStyle="mt-3" />
        </div>
        <div className="mt-8">
          <h2 className="text-md font-semibold ">Experience</h2>
          <InputField placeholder="in Years" />
        </div>
        <div className="mt-8">
          <h2 className="text-md font-semibold ">Info</h2>
          <InputField placeholder="About yourself" />
        </div>
      </div>
      <div className="w-9/12 p-2 container mx-2">
        <div className="flex flex-row justify-between items-center">
          <div></div>
          <div className="">
            <Button
              className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-3"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white">
              Save
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center  mt-6">
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${employeePage?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showEmployeeDeatials}
            >
              Employee Details
            </Button>
          </div>
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${projectPage?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showProjectDeatials}
            >
              {" "}
              Project Details
            </Button>
          </div>
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${educationPage?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showEducationalDeatials}
            >
              {" "}
              Educational Details
            </Button>
          </div>
        </div>
        <div>
          {employeePage ? (
            <AddEmployeeDetails />
          ) : projectPage ? (
            <AddProjectDetails />
          ) : (
            <AddEducationalDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPeople;
