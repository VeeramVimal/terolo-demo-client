import { Button, Tabs } from "antd";
import React, { useState } from "react";
import ViewcompanyDetails from "./viewCompanyDetails";
import ViewPeopleDetails from "./ViewPeopleDetails";
import image from "../../../../assets/Images/forgot.png";

const AddPeople = ({ onClose }) => {
  const [employeePage, setEmployeePage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [educationPage, setEducationPage] = useState(false);
  const [addData,setAddData]=useState({
    firstName:"",
    lastName:"",
    experiance:"",
    info:""
  })
  const [addEmployee,setAddEmployee]=useState({})
  const [addProject,setAddProject]=useState({
    designation:"",
    company:"",
    year:"",
    summary:"",
    project:""
  })
  const [addEducation,setAddEducation]=useState({})

  const showEmployeeDeatials = () => {
    setEmployeePage(true);
    setProjectPage(false);
    setEducationPage(false);
  };

  const showProjectDeatials = () => {
    setEmployeePage(false);
    setProjectPage(true);
    setEducationPage(false);
  };

  const showEducationalDeatials = () => {
    setEmployeePage(false);
    setProjectPage(false);
    setEducationPage(true);
  };

  const peopleData = (data)=>{
    console.log("data : ",data)
  }

  return (
    <div className="">
     <div className="flex block md:hidden lg:hidden justify-end pl-4 mt-2">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span onClick={onClose} className="text-[#AC0C02]">Cancel</span>
            </button>
            <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
            >
              Edit
            </button>
          </div>
            
    
   
     <div className="flex lg:flex-row md:flex-row  flex-col  mx-3 mt-4 justify-between w-full h-[710px] overflow--hidden ">
     <div className="lg:w-3/12 p-4 border-2 ">
     <img src={image} alt="image" width={500} height={900} />
        <div className="mt-8">
          <h1 className="text-sm font-bold text-[#22314F]">Company</h1>
           <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">TCS</h3>
          <p className="text-[10px]">GSTNO: 21APLCA0271D1ZE</p>
       </div>
        
        <div className="relative z-0 py-5">
        <h1 className="text-sm font-bold text-[#22314F]">Information</h1>
        <h3 className="block pt-2.5 px-0 w-full text-sm text-textcolor">TCS - IT solution provider it is  expanded many countries to provide IT  solution to many sectors.</h3>

            </div>
       
      </div>
      
      <div className=" lg:w-9/12  container lg:ml-2 md:ml-2 md:w-8/12 lg:p-2 md:p-2 pt-2">
      <div className='flex justify-between'>
              <div>
              <h1  className='font-bold md:text-xl taxt-base'>Development Team</h1><br/>
              <span className='text-sm whitespace-pre font-bold text-textcolor my-5'><span className="bg-black text-white p-1">tcs</span>    California, USA</span></div>
              <div className="flex hidden md:block lg:block lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span onClick={onClose} className="text-[#AC0C02]">Cancel</span>
            </button>
            <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
            >
              Edit
            </button>
          </div>
              </div>
   
        <div className="flex items-center mt-6 lg:flex-row md:flex-row flex-col lg:mr-0  md:mr-0">
          <div className="w-full ">
            <Button
              className={`font-semibold border-0 w-full ${employeePage?"bg-blue-600 rounded   text-white":"bg-gray-200 rounded"}`}
              onClick={showEmployeeDeatials}
            >
              Company Details
            </Button>
          </div>
     
          <div className="w-full">
            <Button
              className={`font-semibold border-0 w-full ${educationPage?"bg-blue-600 rounded   text-white":"bg-gray-200 rounded"}`}
              onClick={showEducationalDeatials}
            >
              {" "}
            People
            </Button>
          </div>
        </div>
        <div>
          {employeePage ? (
            <ViewcompanyDetails />
         
          ) : (
            <ViewPeopleDetails />
          )}
        </div>
      </div>
     </div>
    </div>
  );
};

export default AddPeople;
