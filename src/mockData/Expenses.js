import { responsiveArray } from "antd/lib/_util/responsiveObserve";
import { HORIZENTAL_LINE } from "../assets/Images";
// import { CheckSquareOutlined } from 'antd';
// import image2 from "../assets/Images/CheckSquare.svg";
// import image3 from "../assets/Images/empty box.svg";
// import {CheckSquareOutlined } from 'antd';
export const userData = [
  {
    key: 1,
    name: (
      
        <div className="font-bold"><span></span> laptop <p className="text-xs text-gray-400">For employee</p></div>
         
    ),
    price: "$799",
    date: "7 sep 2022",
    company:"Thinroot",
    invoice: "NA",
 
    status: (<div className="bg-gray-200 text-gray-400 w-20 text-center rounded">Pending</div>),
    actions: (
        <div className="text-blue-300 font-semibold">Approve <p className="text-red-500">Reject</p></div>
    )
  
    
  },
  {
    name : (
        <div className="font-bold">Coffee machine <p className="text-xs text-gray-400">For office</p></div>
    ),
    price: "$799",
    date: "7 sep 2022",
    company: "Thinroot",
    invoice: "NA",

    status: (<div className="bg-gray-200 text-gray-500 w-20 text-center rounded">Pending</div>),
    actions: (
        <div className="text-blue-300 font-semibold">Approve <p className="text-red-500">Reject</p></div>
    )
  },
  {
    name: (
        <div className="font-bold">Table <p className="text-xs text-gray-400">For office</p></div>
    ),
     price: "$799",
    date: "7 sep 2022",
    company: "Thinroot",
    invoice: "NA",
   
    status: (<div className="bg-gray-200 text-gray-500 w-20 text-center rounded">Pending</div>),
    actions: (
        <div className="text-blue-300 font-semibold">Approve <p className="text-red-500">Reject</p></div>
    )
  },
  {
    name: (
        <div className="font-bold">Maintainance <p className="text-xs text-gray-400">For office</p></div>
    ),
     price: "$799",
    date: "6 sep 2022",
    company: "Thinroot",
    invoice: "#12345",

    status: (<div className="bg-green-200 text-green-500 w-20 text-center rounded">Approved</div>),
    actions: (
        <div className="text-blue-300 font-semibold">Approved</div>
    )
  },
  {
    name: (
        <div className="font-bold">TV <p className="text-xs text-gray-400">For office</p></div>
    ),
     price: "$799",
    date: "6 sep 2022",
    company: "OneUXStudio",
    invoice: "#12345",
  
    status: (<div className="bg-green-200 text-green-500 w-20 text-center rounded">Approved</div>),
    actions: (
    <div className="text-blue-300 font-semibold">Approved</div>
    )
  },
  {
    name: (
        <div className="font-bold">Reception Sofa <p className="text-xs text-gray-400">For office</p></div>
    ),
     price: "$799",
    date: "5 sep 2022",
    company: "OneUXStudio",
    invoice: "#12345",
 
    status: (<div className="bg-red-200 text-red-500 w-20 text-center rounded">Rejected</div>),
    actions:  (
    <div className="text-blue-300 font-semibold">Rejected</div>
    )
  },
  {
    name: (
        <div className="font-bold">Electricity Bill <p className="text-xs text-gray-400">For office</p></div>
    ),
    price: "$799",
    date: "5 sep 2022",
    company: "Thinroot",
    invoice: "#12345",
 
    status: (<div className="bg-green-200 text-green-500 w-20 text-center rounded">Available</div>),
    actions:  (
    <div className="text-blue-300 font-semibold">Approved</div>
    )
  },
  {
    name:(
        <div className="font-bold">Rent <p className="text-xs text-gray-400">For office</p></div>
    ),
    price: "$799",
    date: "2 sep 2022",
    company: "RippleForce",
    invoice: "#12345",
 
    status: (<div className="bg-green-200 text-green-500 w-20 text-center rounded">Available</div>),
    actions:  (
    <div className="text-blue-300 font-semibold">Approved</div>
    )
  },
  {
    name: (
        <div className="font-bold">Chairs <p className="text-xs text-gray-400">For employees</p></div>
    ),
    price: "$799",
    date: "2 sep 2022",
    company: "Thinroot",
    invoice: "#12345",

    status: (<div className="bg-green-200 text-green-500 w-20 text-center rounded">Available</div>),
    actions:  (
    <div className="text-blue-300 font-semibold">Approved</div>
    )
  },
  {
    name: (
        <div className="font-bold">Web Hosting Bill <p className="text-xs text-gray-400">LimitScale.Thinroot Website</p></div>
    ),
    price: "$799",
    date: "2 sep 2022",
    company: "LimitScale",
    invoice: "#12345",
   
    status:(<div className="bg-green-200 text-green-500 w-20 text-center rounded">Available</div>),

    actions:  (
    <div className="text-blue-300 font-semibold">Approved</div>
    )
    
    
  },
  
 
];



export const userColumns = [
  {
    title: (<div className="font-bold">Transactions</div>),
    dataIndex: "name",
    key: "name",
     responsiveArray:["sm"],
     
    width: 200,
     onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.name.length - b.name.length,
    ellipsis: {
      showTitle: false,
    },
    
  },
  {
    title: (<div className="font-bold">Amount</div>),
    dataIndex: "price",
    key: "price",
     responsiveArray:["sm"],
    width: 200,
     onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.price.length - b.price.length,
    ellipsis: {
      showTitle: false,
    },
     
   
  },
  {
    title: (<div className="font-bold">Date</div>),
    dataIndex: "date",
    key: "date",
     responsiveArray:["sm"],
     onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.date.length - b.date.length,
    ellipsis: {
      showTitle: false,
    },
     
  },
  {
    title: (<div className="font-bold">Company</div>),
    dataIndex: "company",
    key: "company",
     responsiveArray:["sm"],
     onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.company.length - b.company.length,
    ellipsis: {
      showTitle: false,
    },
    
  },
  {
    title: (<div className="font-bold">Invoice</div>),
    dataIndex: "invoice",
    key: "invoice",
     responsiveArray:["sm"],
     onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.invoice.length - b.invoice.length,
    ellipsis: {
      showTitle: false,
    },
     
  },
    {
        title:(<div className="font-bold">Status</div>),
        dataIndex:"status",
        key:"status",
         responsiveArray:["sm"],
         onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.status.length - b.status.length,
    ellipsis: {
      showTitle: false,
    },
    
    },
    {
        title:(<div className="font-bold">Actions</div>),
        dataIndex:"actions",
        key:"actions",
        responsiveArray:["sm"],
         onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.actions.length - b.actions.length,
    ellipsis: {
      showTitle: false,
    },
    
    },
];