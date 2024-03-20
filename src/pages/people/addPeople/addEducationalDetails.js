import { Button, Tabs } from "antd";
import React from "react";
import image from "../../../assets/Images/forgot.png";
import InputField from "../../../components/InputField";

const AddEducationalDetails = ({ onClose }) => {
  return (
    <div >
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Education</h2>
        <div className="flex mt-2 ">
          <div className="w-full font-semibold ">
            <InputField label="Collage" placeholder="Name" />
          </div>
          <div className="w-full mx-2">
            <InputField label="Field" placeholder="Name" />
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
          placeholder="Role in previous company"
          label="Summary"
          labelStyle="font-semibold"
          maxLength="50"
        />
      </div>
      <div className="mt-8">
        <InputField
          placeholder=" + Add Degree"
          maxLength="50"
          inputBoxStyle="text-center"
        />
      </div>
      <div className="mt-8">
        <div className="flex mt-2 w-full">
          <div className="w-full">
            <InputField label="School" placeholder="Name" />
          </div>
          <div className="w-full mx-2">
            <InputField label="Grade" placeholder="Class" />
          </div>
          <div className="flex flex-row">
            <InputField
              label="Year"
              placeholder="From"
              maxLength="50"
              inputBoxStyle="w-28"
            />
            <div className="mt-4 ml-2">
              {" "}
              <InputField
                placeholder="To"
                maxLength="50"
                inputBoxStyle="w-28"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <InputField
            placeholder="Role in previous company"
            label="Summary"
            maxLength="50"
          />
        </div>
      </div>
    </div>
  );
};

export default AddEducationalDetails;





























