import { Button, Tabs } from "antd";
import React from "react";
import image from "../../assets/Images/forgot.png";

const ViewProjectDetails = () => {
  return (
    <div className="flex flex-row m-3 justify-between ">
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
      <div className="w-full p-2 container mx-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">UX Designer</h1>
            <p className="text-base text-gray-400">
              <i class="ri-ancient-gate-line ri-1x text-green-400"></i>At ONEUX
              Creative Studio
            </p>
          </div>
          <div className="">
            <Button className="bg-gray-300 rounded border-0 text-red-600 font-bold mx-3">
              DELETE
            </Button>
            <Button className="bg-blue-600 rounded border-0 text-white mr-2">
              Edit
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center  mt-3">
          <div className="w-full">
            <Button className=" bg-gray-200 rounded  font-semibold border-0 w-full">
              Employee Details
            </Button>
          </div>
          <div className="w-full">
            <Button className="bg-blue-600 text-white rounded font-semibold border-0 w-full">
              {" "}
              Project Details
            </Button>
          </div>
          <div className="w-full">
            <Button className="bg-gray-200 rounded font-semibold border-0 w-full">
              {" "}
              Educational Details
            </Button>
          </div>
        </div>
        <div className="mt-4">
            <div className="mt-7">
            <h3 className=" text-[18px] font-semibold">UX Designer-ONEUX Creative Studio(2020-present)</h3>
            <p className="text-base text-gray-400 w-11/12">
            We have to set initial state value inside constructor function and set
             click event handler of the element upon which click, results in changing state.
              Then pass the function to the click handler and change the state of the component inside the function using setState. The setState function used to change the state of the component directly or with the callback approach as mentioned below.
            </p>
            </div>
            <div className="mt-10">
            <h3 className="text-[18px] font-semibold">UX Designer-Lollypop Design(2018-2020)</h3>
            <p className="text-base text-gray-400 w-11/12">
            We have to set initial state value inside constructor function and set
             click event handler of the element upon which click, results in changing state.
              Then pass the function to the click handler and change the state of the component inside the function using setState. The setState function used to change the state of the component directly or with the callback approach as mentioned below.
            </p>
            </div>
            <div className="mt-10">
            <h3 className="text-[18px] font-semibold">UI/UX Dope Design Studio</h3>
            <p className="text-base text-gray-400 w-11/12">
            We have to set initial state value inside constructor function and set
             click event handler of the element upon which click, results in changing state.
              Then pass the function to the click handler and change the state of the component inside the function using setState. The setState function used to change the state of the component directly or with the callback approach as mentioned below.
            </p>
            </div>
           
        </div>
       
        
      </div>
    </div>
  );
};

export default ViewProjectDetails;
