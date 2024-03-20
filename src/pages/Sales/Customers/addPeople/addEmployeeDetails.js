import { Button, Tabs, Select } from "antd";
import React, { useState, useEffect } from "react";

const AddEmployeeDetails = ({ onClose }) => {
  const [addExperience, setAddExperience] = useState([
    { designation: "", company: "" },
  ]);


  const [add, setAdd] = useState({
    Designation: "",
    Language: "",
    Bloodgroup: "",
    Tools: "",
    Skills: "",
    Gender: "",
  });


  const Countrygroup = [
    {
      id: 1,
      label: "Select",
    },
    {
      id: 2,
      label: "India",
    },
    {
      id: 2,
      label: "Landon",
    },
    {
      id: 2,
      label: "Cannada",
    },
    {
      id: 2,
      label: "Japan",
    },
  ];
  const states = [
    {
      id: 1,
      label: "Select",
    },
    {
      id: 2,
      label: "Tamil Nadu",
    },
    {
      id: 3,
      label: "Karnataka",
    },
    {
      id: 4,
      label: "Kerala",
    },
  ];

  const handleChange = (e) => {
    setAdd((preprops) => ({ ...preprops, [e.target.name]: e.target.value }));
  };

  const addExperienceInput = () => {
    setAddExperience([...addExperience, { designation: "", company: "" }]);
  };

  return (
    <div>
      <div className="relative z-0 py-5">
        <label
          for="name"
          className="block  text-sm font-medium text-textcolor"
        >
          About
        </label>
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary"
          name="Summary"
        />
      </div>
      <div className="relative z-0 ">
        <label
          for="name"
          className="block  text-sm font-medium text-textcolor"
        >
          Clients
        </label>
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Select from customers"
          name="Select from customers"
        />
      </div>
      <div className="relative z-0 py-5">
        <label
          for="name"
          className="block  text-sm font-medium text-textcolor"
        >
          Previous projects
        </label>
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Project title"
          name="Project title"
        />
      </div>
      <div className="mt-2">
        <Button
          className="w-full text-gray-700 rounded pb-2 h-10 border-0 bg-gray-300"
          onClick={addExperienceInput}
        >
          + Add projects
        </Button>
      </div>
      <h1 className="text-base font-semibold pt-5">Address</h1>
      <div className="relative z-0 py-5">
        <label
          for="name"
          className="block  text-sm font-medium text-textcolor"
        >
          Address line 1
        </label>
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary"
          name="Summary"
        />
      </div>
      <div className="relative z-0 ">
        <label
          for="name"
          className="block  text-sm font-medium text-textcolor"
        >
          Address line 2
        </label>
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary"
          name="Summary"
        />
      </div>


      <div className="mt-8 ">
        <div className="flex mt-3 lg:flex-row lg:mt-2  md:flex-row md:mt-2 flex-col">
          <div className="w-full   lg:mt-0  md:mt-0 ">
            <label
              for="name"
              className="block  text-sm font-medium text-textcolor"
            >
              Company Name
            </label>
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder="TCS"
              name="TCS"
            />
          </div>
          <div className="w-full mt-4  lg:mt-0 md:mx-3 md:mt-0">
            <label for="Bloodgroup" className="text-sm font-medium">
              Country
            </label>
            <select
              name="Country"
              id="Country"
              className="block py-2.5 px-0 w-full  text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={add.Countrygroup}
              onChange={handleChange}
            >
              {Countrygroup.map((val) => (
                <option value={val.label}>{val.label}</option>
              ))}
            </select>
          </div>
          <div className="w-full mt-4 lg:mr-0 lg:ml-2 lg:mt-0  md:mt-0 lg:w-full">
            <label for="State" className="text-sm font-medium">
              State
            </label>
            <select
              name="State"
              id="State"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              value={add.states}
              onChange={handleChange}
            >
              {states.map((val) => (
                <option value={val.label}>{val.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-lg font-semibold ">Contact details</h2>
        <div className="relative z-0 py-5">
          <label
            for="name"
            className="block  text-sm font-medium text-textcolor"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="xxxxxx4898"
            name="xxxxxx4898"
          />
        </div>
        <div className="relative z-0 py-5">
          <label
            for="name"
            className="block  text-sm font-medium text-textcolor"
          >
            Email
          </label>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="hari@gmail.com"
            name="email"
          />
        </div>
        <div className="relative z-0 py-5">
          <label
            for="name"
            className="block  text-sm font-medium text-textcolor"
          >
            Website
          </label>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="www.dummy.com"
            name="Website"
          />
        </div>

      </div>
    </div>
  );
};

export default AddEmployeeDetails;
