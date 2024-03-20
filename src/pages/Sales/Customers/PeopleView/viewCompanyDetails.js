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
     <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Projects</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">TCS - Official website redesign <br/>TCS - Big data visualization</h3>

            </div>
            <div className="relative z-0">
        <h1 className="text-sm font-bold text-[#22314F]">About</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">TCS - IT solution provider it is  expanded many countries to provide IT  solution to many sectors.</h3>
            </div>
            <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Clients</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">Aydan Fitzgerald, Richard Flynn </h3>
            </div>
            <div className="relative z-0 ">
        <h1 className="text-sm font-bold text-[#22314F]">Headoffice</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">ONEUX Creative Studio<br/>
         No 1,1st Avenue, HSR Layout,<br/>
         Bangalore -  500032, Karnataka - India </h3>
            </div>
            <div className="relative z-0 py-5 ">
        <h1 className="text-sm font-bold text-[#22314F]">Communication</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">Mobile Number: +91 9192939495<br/>
        Email ID: example@tcs.com<br/>
        Email ID: tcs.com </h3>
            </div>

        </div>
  );
};

export default AddEmployeeDetails;
