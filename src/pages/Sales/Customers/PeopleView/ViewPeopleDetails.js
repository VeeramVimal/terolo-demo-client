import { Button, Tabs, Select } from "antd";
import React, { useState, useEffect } from "react";
import images from "../../../../assets/Images/user.png";

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

           <div className="relative z-0 py-10">
        <h1 className="text-sm font-bold text-[#22314F]">1.TCS - Official website redesign</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">TCS - Official website redesign </h3>

            </div>
            <div className="flex justify-center relative z-0">
            <img src={images} className="w-6 h-6 rounded-full" />
              <img src={images} className="w-6 h-6 rounded-full" />
              <img src={images} className="w-6 h-6 rounded-full " />
              <img src={images} className="w-6 h-6 rounded-full " />
            </div>
            <div className="relative z-0">
        <h1 className="text-sm font-bold text-[#22314F]">Project Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez.</h3>
            </div>
            <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Design Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>
            <div className="relative z-0 ">
        <h1 className="text-sm font-bold text-[#22314F]">Development Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>
            <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Testing Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>

            <h1 className="text-sm font-bold text-[#22314F]">Team</h1>
            <div className=" flex relative whitespace-pre  z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>     Front-End Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>     Front-End Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>     Back-End Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>     Back-End Developer</h3>
            </div>

            <div className="relative z-0 py-10">
        <h1 className="text-sm font-bold text-[#22314F]">2.TCS - Official website redesign</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">TCS - Official website redesign </h3>

            </div>
            <div className="flex justify-center relative z-0">
            <img src={images} className="w-6 h-6 rounded-full" />
              <img src={images} className="w-6 h-6 rounded-full" />
              <img src={images} className="w-6 h-6 rounded-full " />
              <img src={images} className="w-6 h-6 rounded-full " />
            </div>
            <div className="relative z-0">
        <h1 className="text-sm font-bold text-[#22314F]">Project Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez.</h3>
            </div>
            <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Design Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>
            <div className="relative z-0 ">
        <h1 className="text-sm font-bold text-[#22314F]">Development Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>
            <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Testing Lead</h1>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor">Yasmine Valdez</h3>
            </div>
        <div className="pb-5">
            <h1 className="text-sm font-bold text-[#22314F]">Team</h1>
            <div className=" flex relative whitespace-pre  z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold space-x">Maxim Cummings</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>      Full-Stack Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Maxim Cummings</span>      Full-Stack Developer</h3>
            </div>
            <div className=" flex relative whitespace-pre z-0">
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>      Full-Stack Developer</h3>
        <h3 className="block pt-1 px-0 w-full text-sm text-textcolor"><span className="text-sm  font-bold">Kenneth Mcconnel</span>      Full-Stack Developer</h3>
            </div>
            </div>
    </div>
  );
};

export default AddEmployeeDetails;
