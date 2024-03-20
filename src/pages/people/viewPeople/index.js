import { Button, Tabs } from "antd";
import React, { useState } from "react";
import image from "../../../assets/Images/forgot.png";
import InputField from "../../../components/InputField";
import ViewProjectDetails from "./viewProjectDetails";
import ViewEmployeeDetails from "./viewEmployeeDetails";
import ViewEducationalDetails from "./viewEducationalDetails";

const ViewDetails = ({ onClose }) => {
  const [employee, setEmployee] = useState(true);
  const [project, setProject] = useState(false);
  const [education, setEducation] = useState(false);

  const showEmployeeDeatials = () => {
    setEmployee(true);
    setProject(false);
    setEducation(false);
  };

  const showProjectDeatials = () => {
    setEmployee(false);
    setProject(true);
    setEducation(false);
  };

  const showEducationalDeatials = () => {
    setEmployee(false);
    setProject(false);
    setEducation(true);
  };

  return (
    <div className="flex flex-row m-3 justify-between w-full h-[710px] overflow--hidden">

      <div className="w-80 p-6 border-2 ">
        <img src={image} alt="image" width={500} height={900} />
        <div className="mt-8">
          <h1 className="text-xl font-semibold">Aydan Fitzgerald</h1>
          <p className="text-base text-gray-400">ID NO : JFJDOI</p>
        </div>
        <div className="mt-8">
          <h1 className="text-md font-semibold">Experiance</h1>
          <p className="text-base text-gray-400">4 years</p>
        </div>
        <div className="mt-8">
          <h1 className="text-md font-semibold">Education</h1>
          <p className="text-base text-gray-400">Bachelor in Graphic Design </p>
        </div>
        <div className="mt-8">
          <h1 className="text-md font-semibold">Info</h1>
          <p className="text-base text-gray-400">Bachelor in Graphic Design  
          To change the state of the React component is useful when you are 
          working on a single page application, it simply replaces the content
           of the existing component for the user without reloading the webpage. 
          </p>
        </div>
      </div>
      <div className="w-9/12 p-2 container mx-2">
      <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">UX Designer</h1>
            <p className="text-base text-gray-400">
              <i class="ri-ancient-gate-line ri-1x text-green-400"></i>At ONEUX
              Creative Studio
            </p>
          </div>
          <div className="">
            <Button className="bg-gray-300 rounded border-0 text-red-600 font-bold mx-3" onClick={onClose}>
              DELETE
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white mr-2">
              Edit
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center  mt-6">
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${employee?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showEmployeeDeatials}
            >
              Employee Details
            </Button>
          </div>
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${project?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showProjectDeatials}
            >
              {" "}
              Project Details
            </Button>
          </div>
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${education?"bg-blue-600 rounded text-white":"bg-gray-200 rounded"}`}
              onClick={showEducationalDeatials}
            >
              {" "}
              Educational Details
            </Button>
          </div>
        </div>
        <div>
          {employee ? (
            <ViewEmployeeDetails />
          ) : project ? (
            <ViewProjectDetails />
          ) : (
            <ViewEducationalDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
