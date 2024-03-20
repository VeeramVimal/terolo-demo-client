import { Button, Tabs } from "antd";
import React from "react";
import image from "../../../assets/Images/forgot.png";
import InputField from "../../../components/InputField";

const  AddProjectDetails = ({ onClose }) => {
  return (
    <div >
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Experience</h2>
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Designation" placeholder="designation"/>
          </div>
          <div className="w-full mx-2">
            <InputField label="Company" placeholder="Name" />
          </div>
          <div className="flex flex-row ">
            <InputField label="Year" placeholder="From" inputBoxStyle="w-28" />
            <div className="mt-4 ml-2">
              {" "}
              <InputField placeholder="To" inputBoxStyle="w-28" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <InputField
          placeholder="role in company"
          label="Summary"
          labelStyle="font-semibold"
          maxLength="50"
        />
      </div>
      <div className="mt-8">
        <InputField
          label="Project"
          placeholder="summary"
          maxLength="50"
        />
      </div>
      <div className="mt-8">
        <InputField
          placeholder="+ Add Project"
          maxLength="50"
          inputBoxStyle="text-center"
        />
      </div>
      <div className="mt-8">
        <InputField
          placeholder="+ Add Experiance"
          maxLength="50"
          inputBoxStyle="text-center text-black-600"
          inputStyle="text-black-600"
        />
      </div>
      
    </div>
  );
};

export default AddProjectDetails;






























