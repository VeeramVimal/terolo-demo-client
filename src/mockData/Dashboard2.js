import { Menu, Dropdown, Space, Popover,Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { HORIZENTAL_LINE } from "../assets/Images";
import { ToolTip } from "../components/toolTip";


 
  
export const userData = [
  {
    key: 1,
    ID: "#89325",
    ratio: "4:3",
    customername: "microsoft",
    status:(<div className="bg-green-200 text-green-500 w-20 text-center rounded">Live</div>),
    revenue:  (
        <div className="flex">
        <span>$74,999</span>
        <div className="bg-[#DFFBF0] w-10 text-green-500 px-1.5 py-1 mx-1 rounded-full text-xs">
          23 %
        </div>
        </div>
    )
  },
  {
    key: 2,
    ID: "#53262",
    ratio: "2:3",
    customername: "Tcs",
    status:(<div className="bg-green-200 text-green-500 w-20 text-center rounded">Live</div>),
    revenue:  (
        <div className="flex">
        <span>$52,999</span>
        <div className="bg-red-200 w-10 text-red-500 px-1.5 py-1 mx-1 rounded-full text-xs">
          37 %
        </div>
        </div>
    )
  },
  {
    key: 3,
    ID: "#64251",
    ratio: "4:3",
    customername: "capgemini",
    status:(<div className="bg-blue-200 text-blue-500 w-20 text-center rounded">Disable</div>),
    revenue:  (
        <div className="flex">
        <span>$49,999</span>
        <div className="bg-[#DFFBF0] w-10 text-green-500 px-1.5 py-1 mx-1 rounded-full text-xs">
          23 %
        </div>
        </div>
    )
  },
  
 
  
];


export const userColumns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
   
    responsive: ["xs","md"]      
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    
    responsive: ["xs","md"],
  
  },
  {
    title: "CUSTOMER",
    dataIndex: "customername",
    key: "customername",
  
    responsive:["xs","md"]
  },
  {
    title: "REVENUE",
    dataIndex: "revenue",
    key: "revenue",
   
    responsive: ["xs","md"]
  },
  {
    title: "PROFIT RATIO",
    dataIndex: "ratio",
    key: "ratio",
   
    responsive: ["xs","md"]
  },
  
    

];







