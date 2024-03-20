/** @format */

import React from "react";
import Dropdown from "../dropdown";
import { Select } from "antd";
import { useState } from "react";
import MultipleSelection from "../AddOrders/MultipleSelection";
const { Option } = Select;
const listData = [
  "maxim-cummings-Full stack developer",
  "maxim-cummings-Front-End Developer",
  "maxim-cummings-Backend-End Developer",
  "maxim-cummings-Designer",
];
function CompanyDetails() {
  const [projectInput, setProjectInput] = useState([{ project: "" }]);
  const [queryClient, setQueryClient] = useState("");
  const [clientData, setClientData] = useState(listData);
  const [clientList, setClientList] = useState("");
  const [showClient, setShowClient] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);

  const handleInputChange = (e, idx) => {
    const { name, value } = e.target;
    const list = [...projectInput];
    list[idx][name] = value;
    setProjectInput(list);
    // setProjectDetails({ ...projectDetails, project:e.target.value})
  };
  const addProject = () => {
    setProjectInput([...projectInput, { project: "" }]);
  };
  const removeClient = (index) => {
    clientList.splice(index, 1);
    setClientList([...clientList]);
  };
  const countryData = [
    {
      id: 1,
      name: "India",
    },
    {
      id: 2,
      name: "America",
    },
    {
      id: 3,
      name: "Austria",
    },
    {
      id: 4,
      name: "Switzerland",
    },
    {
      id: 5,
      name: "Germany",
    },
  ];

  const stateData = [
    {
      id: 1,
      name: "Karnataka",
    },
    {
      id: 2,
      name: "Rajasthan",
    },
    {
      id: 3,
      name: "Manipur",
    },
    {
      id: 4,
      name: "Punjab",
    },
    {
      id: 5,
      name: "Meghalaya",
    },
  ];

  const contactDetails = [
    {
      id: 1,
      label: "Phone Number",
    },
    {
      id: 2,
      label: "Email",
    },
    {
      id: 3,
      label: "Website",
    },
  ];
  return (
    <>
      <div className="text-textcolor font-[600] text-[16px] mb-6 ">
        About project
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary"
        />
      </div>
      <MultipleSelection
        title={"Clients"}
        showModal={showClientModal}
        setShowModal={setShowClientModal}
        list={clientList}
        setList={setClientList}
        remove={removeClient}
        setQuery={setQueryClient}
        show={showClient}
        setShow={setShowClient}
        data={clientData}
      />
      {projectInput.map((val, i) => {
        return (
          <div className="text-textcolor font-[600] text-[16px] mb-6  ">
         Previous project
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder="Project title "
            onChange={(e) => handleInputChange(e, i)}
          />
        </div>
        );
      })}

      <button
        className="bg-gray-200 rounded-sm hover:font-bold w-[100%] py-[8px] flex items-center justify-center text-sm mb-6"
        onClick={addProject}
      >
        <i className="ri-add-line mr-2"></i>
        <div>Add projects </div>
      </button>
      <div className="text-textcolor font-[600] text-[16px] mb-6 ">Address</div>
      <div className="text-textcolor font-[600] text-[14px] mb-6 ">
        Address line 1
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary "
        />
      </div>
      <div className="text-textcolor font-[600] text-[14px] mb-6 ">
        Address line 2
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary "
        />
      </div>

      <div className="sm:flex block ">
        <div className="text-textcolor font-[600] text-[14px] mb-6 sm:mr-12">
          Company Name
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" Company Name "
          />
        </div>
        <div className="text-textcolor font-[600] text-[14px] mb-6 sm:mr-12">
          <div className="mb-4"> Country</div>

          <Dropdown
            width={150}
            dafaultVal={"India"}
            data={
              <>
                {countryData.map((data) => {
                  return (
                    <Option
                      key={data.id}
                      value={data.name}
                      className="text-black hover:text-blue-400  bg-none"
                    >
                      {data.name}
                    </Option>
                  );
                })}
              </>
            }
          />
        </div>
        <div className="text-textcolor font-[600] text-[14px] ">
          <div className="mb-4"> State</div>
          <Dropdown
            width={150}
            dafaultVal={"Karnataka"}
            data={
              <>
                {stateData.map((data) => {
                  return (
                    <Option
                      key={data.id}
                      value={data.name}
                      className="text-black hover:text-blue-400  bg-none"
                    >
                      {data.name}
                    </Option>
                  );
                })}
              </>
            }
          />
        </div>
      </div>

      <div className="text-textcolor font-[600] text-[16px] mb-4 mt-4 sm:mt-0">
        Contact Details{" "}
      </div>
      {contactDetails?.map((data) => {
        return (
          <div
            className="text-textcolor font-[600] text-[14px] mb-6"
            key={data.id}
          >
            {data.label}
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder={data.label}
            />
          </div>
        );
      })}
    </>
  );
}

export default CompanyDetails;
