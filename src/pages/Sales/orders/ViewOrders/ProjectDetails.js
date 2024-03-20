import React from "react";
import { Avatar } from "antd";
import AVATAR from "../../../../assets/Images/Avatar 8.png";
function ProjectDetails() {
  var ordersData = JSON.parse(localStorage.getItem("orderData"));
  return (
    <>
      <div className="text-[16px] text-[#22314F] font-bold mb-[6px] ">
        {" "}
        About Project{" "}
      </div>
      <div className="">
        {" "}
        Estore is a new ecommerce platform to support milleons of store to
        deliver on demand
      </div>
      <div className="text-[16px] text-[#22314F] font-bold mt-6 mb-[6px]">
        Clients
      </div>
      <div> {ordersData.customer} </div>
      <div className=" text-[#22314F] font-bold mt-6  text-[16px]">
        {" "}
        Resource who worked on this company project{" "}
      </div>

      <div className="text-center my-6">
        <Avatar.Group>
          <Avatar src={`${AVATAR}`} />
          <Avatar src={`${AVATAR}`} />
          <Avatar src={`${AVATAR}`} />
          <Avatar src={`${AVATAR}`} />
        </Avatar.Group>
      </div>
      <div className="text-textcolor font-[600] text-[14px] mb-[6px]">
        {" "}
        Project Lead
      </div>
      <div className="mb-6  "> Emmit Watson </div>
      <div className="text-textcolor font-[600] text-[14px] mb-[6px]">
        {" "}
        Design Lead
      </div>
      <div className="mb-6  "> Emmit Watson </div>
      <div className="text-textcolor font-[600] text-[14px]  mb-[6px]">
        {" "}
        Development Lead
      </div>
      <div className="mb-6  "> Emmit Watson </div>
      <div className="text-textcolor font-[600] text-[14px] mb-[6px]">
        {" "}
        Testing Lead
      </div>
      <div className="mb-6  "> Emmit Watson </div>
      <div className="text-textcolor font-[600] text-[14px] mb-[6px] ">
        {" "}
        Team{" "}
      </div>

      <div className="lg:flex">
        <div className="flex">
          <div className="list-none   text-[#22314F] mr-4">
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
          </div>
          <div className="list-none   text-blue-600 mr-10">
            <li> Full-Stack Developer</li>
            <li> Full-Stack Developer</li>
            <li> Full-Stack Developer</li>
            <li> Back-End Developer</li>
            <li> Full-Stack Developer</li>
            <li> Front-End Developer</li>
          </div>
        </div>
        <div className="flex lg:mt-0 mt-4">
          <div className="list-none   text-[#22314F] mr-4">
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
            <li> Maxim Cummings</li>
          </div>
          <div className="list-none  text-blue-600">
            <li> Designer</li>
            <li> Designer</li>
            <li> Designer</li>
            <li> Tester</li>
            <li> Tester</li>
            <li> Tester</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
