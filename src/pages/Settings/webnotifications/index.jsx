import React from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Infinity from "../../../assets/Images/infinity.png";
import Layout from "../../../components/layout";
import { Divider } from "antd";
import Cards from "../Mobilenotifications/card";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Popover } from 'antd';

export default function Notification() {
  const [all, setAll] = useState(true);
  const [mentioned, setMentioned] = useState(false);
  const [requests, setRequests] = useState(false);
  const [query, setQuery] = useState("");
  const card = [
    {
      id: 1,
      name: "HansZ",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 2,
      name: "HansZ",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
   
    
   
  ];
  const cardData = [
    {
      id: 1,
      name: "HansZ",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 2,
      name: "Hobby",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 3,
      name: "Hobby",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    }, 
    {
      id: 4,
      name: "Hobby",
      type: "mentioned you in thread",
      msg: " What are we gonna do",
      time: "2h ago",
      profession: "Hobby List",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
   
  ];
  const [data, setData] = useState(cardData);
  useEffect(() => {
    if (query) {
      const searchData = data?.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(cardData);
    }
  }, [data]);
  const content = (
    <div>
       <div className="pb-4 w-80 text-sm">
        
            {card?.map((val) => {
              return (
                <Cards
                  key={val.id}
                  name={val.name}
                  type={val.type}
                  msg={val.msg}
                  time={val.time}
                  prof={val.profession}
                  content={val.content}
                  request={val.request}
                />
              );
            })}
          </div>
    </div>
  );
  return (
    <Layout>
      <div className="sm:mx-10 mx-4">
        <div className="flex mt-4 flex-row justify-between ">
          <div>
            <h1 className="text-xl  font-semibold">Webnotifications</h1>
            <p className="text-base text-[#6E78AC]">
              Manage the details of your all kind of Webnotifications
            </p>
          </div>
          <div
            className="cursor-pointer bg-blue-500 hover:bg-blue-400 w-12 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white rounded mt-4 sm:mt-2 ml-2"
            // onClick={() => {
            //   setOpen(true);
            // }}
          >
            <i className="ri-add-line ri-2x"></i>
          </div>
        </div>
        <Divider />
        <div className="flex items-center  border border-solid rounded sm:w-[260px] w-full px-2 mt-4">
          <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
          <input
            className="h-10 pr-8 pl-4 outline-none rounded "
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
        <div className="text-xl font-semibold mt-6 text-[#22314F]">
          {" "}
          Notifications
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="flex text-[16px] text-[#22314F] font-normal">
            <div
              className="sm:mr-14 py-[2px] flex items-center justify-center hover:bg-gray-200  rounded-sm  cursor-pointer"
              onClick={() => {
                setRequests(false);
                setMentioned(false);
                setAll(true);
              }}
            >
              <img src={`${Infinity}`} alt="" className=" hidden sm:block" />
              <button className="font-medium">All</button>
            </div>
            <div
              className="sm:mr-14 py-[2px] flex items-center justify-center hover:bg-gray-200 rounded-sm px-2 cursor-pointer"
              onClick={() => {
                setAll(false);
                setRequests(false);
                setMentioned(true);
              }}
            >
              <i className="ri-at-line mr-1 hidden sm:block text-[#A8A8A8] "></i>
              <div className="font-medium">Mentions</div>
            </div>
            <div
              className="sm:mr-14 py-[2px] flex items-center justify-center hover:bg-gray-200 rounded-sm px-2 cursor-pointer"
              onClick={() => {
                setAll(false);
                setMentioned(false);
                setRequests(true);
              }}
            >
              <i className="ri-check-line mr-1 hidden sm:block text-[#A8A8A8]"></i>
              <button className="font-medium"> Requests</button>
            </div>
          </div>
          <div className="space-x-6">
          <Popover placement="bottom"  content={content} trigger="click">
        <Button className="border-0">          
          <i className="ri-notification-4-line text-2xl border-0 text-gray-400 font-thin "></i>
</Button>
      </Popover>
            <i className="ri-filter-line text-2xl text-gray-400 font-thin"></i>{" "}
          </div>
        </div>
        {all && (
          <div className="pb-4">
            {data?.map((val) => {
              return (
                <Cards
                  key={val.id}
                  name={val.name}
                  type={val.type}
                  msg={val.msg}
                  time={val.time}
                  prof={val.profession}
                  content={val.content}
                  request={val.request}
                />
              );
            })}
          </div>
        )}

        {requests && (
          <div className="pb-4">
            {data?.map((val) => {
              if (val.request) {
                return (
                  <Cards
                    key={val.id}
                    name={val.name}
                    type={val.type}
                    msg={val.msg}
                    time={val.time}
                    prof={val.profession}
                    content={val.content}
                    request={val.request}
                  />
                );
              }
            })}
          </div>
        )}
        {mentioned && (
          <div className="pb-4">
            {data?.map((val) => {
              if (val.mentioned) {
                return (
                  <Cards
                    key={val.id}
                    name={val.name}
                    type={val.type}
                    msg={val.msg}
                    time={val.time}
                    prof={val.profession}
                    content={val.content}
                    request={val.request}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
