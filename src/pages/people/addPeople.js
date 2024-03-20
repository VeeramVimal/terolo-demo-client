import { Button, Tabs } from "antd";
import React from "react";
import image from "../../assets/Images/forgot.png";
import InputField from "../../components/InputField";

const AddPeople = () => {
  return (
    <div className="flex flex-row m-3 justify-between w-full h-[710px] overflow--hidden">
      <div className="w-3/12 p-4 border-2 ">
        <img src={image} alt="image" width={500} height={900} />
        <div className="mt-8">
          <h2 className="text-md font-semibold ">Name</h2>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" className="mt-3" />
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
            <Button className="bg-gray-200 rounded border-0 text-gray-600 font-semibold mx-3">
              Cancel
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white">
              Save
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center  mt-6">
          <div className="w-full">
            <Button className="bg-gray-200 rounded  font-semibold border-0 w-full">
              Employee Details
            </Button>
          </div>
          <div className="w-full">
            <Button className="bg-gray-200 rounded font-semibold border-0 w-full">
              {" "}
              Project Details
            </Button>
          </div>
          <div className="w-full">
            <Button className="bg-blue-600 rounded text-white font-semibold border-0 w-full">
              {" "}
              Educational Details
            </Button>
          </div>
        </div>
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
              <InputField label="Year" placeholder="From" inputBoxStyle="w-28"/>
              <div className="mt-4 ml-2">  <InputField placeholder="To" inputBoxStyle="w-28"/></div>
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
          <InputField placeholder=" + Add Degree" maxLength="50" inputBoxStyle="text-center" />
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
              <InputField label="Year" placeholder="From" maxLength="50" inputBoxStyle="w-28" />
              <div className="mt-4 ml-2">  <InputField placeholder="To" maxLength="50" inputBoxStyle="w-28"/></div>
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
    </div>
  );
};

export default AddPeople;
