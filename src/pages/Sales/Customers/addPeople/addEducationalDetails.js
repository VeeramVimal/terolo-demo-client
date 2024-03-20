import { Button, Tabs, Select } from "antd";
import React, { useState, useEffect } from "react";

const { Option } = Select;
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
     <h1 className="text-[14px] pt-5 font-bold">Resources who worked on this company’s project</h1>
      <div className="relative z-0 py-5">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
                About project
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
                Project Lead
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Project title"
                name="Project title"
              />
            </div>
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
                Design Lead
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Select from people"
                name="Select from people"
              />
            </div>  
            <div className="relative z-0 pt-5">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
              Development Lead
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Select from people"
                name="Select from people"
              />
            </div>  
     
        <div className="relative z-0  lg:mb-4 sm:mb-4 mb-4 mt-5">
                            <label
                                for="address"
                                className="block mb-2 text-base font-medium text-textcolor"
                            >
                                Assign
                            </label>
                            <Select
                                mode="multiple"
                                style={{
                                    width: '100%',
                                }}
                                placeholder="select one country"
                                defaultValue={['china']}
                                onChange={handleChange}
                                optionLabelProp="label"
                            >
                                <Option value="Maxim Cummings - Full-Stack Developer" label="Maxim Cummings - Full-Stack Developer">
                                    <div className="demo-option-label-item">
                                        Maxim Cummings - Full-Stack Developer                                       
                                    </div>
                                </Option>
                                <Option value="Maxim Cummings - Full" label="Maxim Cummings - Full">
                                    <div className="demo-option-label-item">
                                        
                                        Maxim Cummings - Full-Stack Developer      </div>
                                </Option>
                                <Option value="Maxim Cummings - Full" label="Maxim Cummings - Full">
                                    <div className="demo-option-label-item">
                                     
                                        Maxim Cummings - Full-Stack Developer      </div>
                                </Option>
                                <Option value="Maxim Cummings - Full-Stack " label="Maxim Cummings - Full-Stack ">
                                    <div className="demo-option-label-item">
                                       
                                        Maxim Cummings - Full-Stack Developer      </div>
                                </Option>
                            </Select>
                        </div>

        </div>
  );
};

export default AddEmployeeDetails;
