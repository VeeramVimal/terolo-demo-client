import { Button, Tabs } from "antd";
import React from "react";
import image from "../../../assets/Images/forgot.png";
import InputField from "../../../components/InputField";

const AddEmployeeDetails = ({ onClose }) => {
  return (
    <div>
      <div className="mt-5 ">
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Designation" placeholder="designation" />
          </div>
          <div className="w-full ml-3">
            <InputField label="Company" placeholder="Name" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <InputField
          placeholder="Example : Photoshop"
          label="Tools"
          labelStyle="font-semibold"
          maxLength="50"
        />
      </div>
      <div className="mt-8">
        <InputField
          label="Skills"
          placeholder=" Example : Javascript"
          maxLength="50"
        />
      </div>
      <div className="mt-8">
        <div className="flex mt-2 w-full">
          <div className="w-full">
            <InputField label="Roll" placeholder="summary" />
          </div>
          <div className="w-full ml-3">
            <InputField label="Abilities" placeholder="summary" />
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Overall Experiance</h2>
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Designation" placeholder="designation" />
          </div>
          <div className="w-full ml-3">
            <InputField label="Company" placeholder="Name" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <InputField
          placeholder="+ Add Experiance"
          labelStyle="font-semibold"
          maxLength="50"
          inputBoxStyle="text-center"
          
        />
      </div>
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Bio</h2>
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Date of Birth" placeholder="DD/MM/YYYY" type="date" />
          </div>
          <div className="w-full mx-5">
            <InputField label="Blood Group" placeholder="select" />
          </div>
          <div className="w-full ">
            <InputField label="Gender" placeholder="select" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <InputField label="Langauge" placeholder=" English" maxLength="50" />
      </div>
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Contact</h2>
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Email" placeholder="xyz@gmail.com"/>
          </div>
          <div className="w-full mx-5">
            <InputField label="Phone Number" placeholder="+91 1234567890" />
          </div>
          <div className="w-full mb-4 ">
            <InputField label="Skype ID" placeholder="live:ivantemptation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeDetails;
