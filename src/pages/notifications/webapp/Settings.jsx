import React from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Infinity from "../../../assets/Images/infinity.png";
import Layout from "../../../components/layout";
import { Divider } from "antd";
import Cards from "./card";
import { useState } from "react";
import { useEffect } from "react";
import { Sidebar } from "semantic-ui-react";

export default function Notification() {
  const [all, setAll] = useState(true);
  const [mentioned, setMentioned] = useState(false);
  const [requests, setRequests] = useState(false);
  const [query, setQuery] = useState("");
 
  const cardData = [
    {
      id: 1,
      name: "Dashboard",
      type: "mentioned you in thread",
    
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 2,
      name: "Performance",
      type: "sent you kudos",
     
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
      
    },
    {
      id: 3,
      name: "Tickets ",
      type: "asks to join team Growth",
      
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    }, 
    {
      id: 4, 
      name: "Finance",
      type: "updated goal  Build incredible products",
      
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 5,  
      name: "sales",
      type: "posted Design Team weekly #37",
     
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      request: false,
      mentioned: true,
    },
    {
      id: 6,  
      name: "Notifications",
      type: "pcreated project  New sign-up flow",
     
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
  
  return (
      <div className="sm:mx-10 mx-4">
        <div className="flex pt-5 gap-4">
        <a href="/Dashboard"><button  className="bg-blue-500 text-white px-2 mt-1 rounded">Back</button></a>
            <a href="/Settings"><h1  className="text-base font-medium hover:text-blue-400 hover:border-b-2  border-solid border-blue-400">Webapp</h1></a>
           <a href="/Mobileapp"> <h1 className="text-base font-medium hover:text-blue-400 hover:border-b-2  border-solid border-blue-400">Mobilleapp</h1></a>
          </div>
        <div className="flex mt-4 flex-row justify-between ">

          <div>
            <h1 className="text-xl  font-semibold">My settings</h1>
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
  );
}
