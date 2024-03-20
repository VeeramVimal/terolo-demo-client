import { Button, Tabs } from "antd";
import React from "react";
import image from "../../assets/Images/forgot.png";

const ViewEmployeeDetails = (props) => {
  console.log("ViewEmployeeDetails====props=======", props);
  return (
    <div className="flex flex-row m-3 justify-between w-full h-[710px] ">
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
            <Button className="bg-blue-600 rounded text-white font-semibold border-0 w-full">
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
            <Button className="bg-gray-200 rounded font-semibold border-0 w-full">
              {" "}
              Educational Details
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-start mt-6">
          <div className="w-80">
            <h3 className="text-lg font-semibold">Tools</h3>
            <div className="flex flex-row mt-2 ">
              <div className="w-28">
                <p className="text-sm font-semibold">software</p>
                <p className="text-gray-400">Figma</p>
                <p className="text-gray-400">illustrator</p>
                <p className="text-gray-400">inDesign</p>
              </div>
              <div className="px-7 ">
                <p className="text-sm font-semibold">Skills</p>
                <p className="text-gray-400">Research</p>
                <p className="text-gray-400">sketching</p>
                <p className="text-gray-400">Markup</p>
              </div>
            </div>
          </div>
          <div className="mr-4 ">
            <h1 className="text-lg font-semibold">Roll</h1>
            <div className="w-60">
              <p className="text-gray-400">Keeping the design consistent</p>
              <p className="text-gray-400"> Research about user experiance</p>
              <p className="text-gray-400">
                Exploring new UI/UX and brand strategies
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Abilities</h1>
            <div className="w-60">
              <p className="text-gray-400">Keeping the design consistent</p>
              <p className="text-gray-400"> Research about user experiance</p>
              <p className="text-gray-400">
                Exploring new UI/UX and brand strategies
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-96">
            <h1 className="text-lg font-semibold">Address</h1>
            <p className="w-60 text-gray-400">
              To change the state of the React component is useful when you are
              working on a single page application, it simply replaces the
              content of the existing component for the user without reloading
              the webpage.{" "}
            </p>
          </div>
          <div className="ml-25">
            <h1 className="text-lg font-semibold">Overall Experiance</h1>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">UX Designer:</span>ONEUX Creative
              Studio
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">UX Designer:</span>Netflix
              (2018-2019)
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">UI/UX Designer Intern : </span>
              Dope Designs{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-4">
          <div className="w-96">
            <h1 className="text-lg font-semibold">Bio</h1>
            <p className="w-60 text-gray-400">
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Age :</span>80 years
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Date of Birth :</span>10th Jan 1920
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Gender : </span>
              Female
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Blood Group : </span>
              B+
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Language : </span>
              Kannada, English,Hindi
            </p>
            </p>
          </div>
          <div className="ml-25">
            <h1 className="text-lg font-semibold">Communication</h1>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Mobile Number:</span>1234567890
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Email ID :</span>xyz@gmail.com
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Skype ID : </span>
              5485sjbdja74398yh{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeDetails;
