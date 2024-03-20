import { Menu, Dropdown, Space, Popover, Button, Select, Layout } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { HORIZENTAL_LINE } from "../assets/Images";
import { ToolTip } from "../components/toolTip";
import ViewEmployeeDetails from "../pages/people/viewPeople/viewEmployeeDetails";
import { useNavigate } from "react-router-dom";
import People from "../pages/people";
import SideDrawer from "../components/drawer";
import AddPeople from "../pages/people/addPeople";
import { makeDrawerVisible } from "../pages/loginAndRegister/loginAndRegister.action";
import { useDispatch } from "react-redux";

const ViewPage = () => {
  return (
    <Layout>
      <SideDrawer
        placement="right"
        width={"70%"}
        headerStyle={{ padding: "0px" }}
        closeIcon={
          <i
            class="ri-close-line ri-1x absolute z-40 left-3 top-3 "
            // onClick={onClose}
          />
        }
        closable={true}
        visible={true}
        bodyStyle={{ backgroundColor: "white" }}
      >
        {" "}
        <AddPeople onClose={() => console.log("hi")} />{" "}
      </SideDrawer>
    </Layout>
  );
};

const menu = (dispatch) => {
  return (
    <Menu
      items={[
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
                type=""
                onClick={() => sessionStorage.setItem('isDrawerVisible', true)}
              >
                view
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
                // onClick={(e) => ViewPage(e)}
              >
                edit
              </div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className="flex items-center pl-7">
              <div
                className="text-sm font-normal text-blue-400"
                // onClick={(e) => ViewPage(e)}
              >
                delete
              </div>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );
};

export default menu;

export const userData = [
  {
    key: 1,
    name: "Abishek",
    email: "john@gmail.com",
    designation: "CEO",
    company: "Thinroot Software Bangalore",
    number: 2345678901,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 2,
    name: "Vinaya",
    email: "benny@gmail.com",
    designation: "manager",
    company: "Thinroot Software Bangalore",
    number: 4567374801,
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 3,
    name: "Harigaran",
    email: "pooja@gmail.com",
    designation: "employee",
    company: "Thinroot Software Bangalore",
    number: 6789054321,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 4,
    name: "Varun",
    email: "david@gmail.com",
    designation: "HR",
    company: "Thinroot Software Bangalore",
    number: 2345678901,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 5,
    name: "Krishna",
    email: "will@gmail.com",
    designation: "accountant",
    company: "Thinroot Software Bangalore",
    number: 4567374801,
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 6,
    name: "Nithish",
    email: "jane@gmail.com",
    designation: "TL",
    company: "Thinroot Software Bangalore",
    number: 6789054321,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 7,
    name: "Shilpa",
    email: "jim@gmail.com",
    designation: "trainee",
    company: "Thinroot Software Bangalore",
    number: 2345678901,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 8,
    name: "Sahana",
    email: "max@gmail.com",
    designation: "lead",
    company: "Thinroot Software Bangalore",
    number: 4567374801,
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 9,
    name: "Guru",
    email: "lucus@gmail.com",
    designation: "developer",
    company: "Thinroot Software Bangalore",
    number: 6789054321,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 10,
    name: "Shrikanth",
    email: "john@gmail.com",
    designation: "member",
    company: "Thinroot Software Bangalore",
    number: 2345678901,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 11,
    name: "Gokul",
    email: "vinaya@gmail.com",
    designation: "member",
    company: "Thinroot Software Bangalore",
    number: 4567374801,
    status: (
      <div className="bg-red-200 text-red-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
  {
    key: 12,
    name: "Vimal",
    email: "pooja@gmail.com",

    designation: "member",
    company: "Thinroot Software Bangalore",
    number: 6789054321,
    status: (
      <div className="bg-green-200 text-green-500 w-20 text-center rounded">
        active
      </div>
    ),
    action: "",
  },
];

export const userColumns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    onFilter: (value, record) => record.name.includes(value),
    sorter: (a, b) => a.name.length - b.name.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.length - b.email.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
    // render: (_, record) => (
    //   <Space size={"middle"}>
    //     <div className="group">
    //       {record.email}
    //       <Popover content={"copied"} trigger="click">
    //         <div
    //           className="inline-flex text-[12px] font-semibold h-6 mx-2 rounded px-[10px] text-white bg-[#622aea] justify-center items-center invisible group-hover:visible"
    //           onClick={() => navigator.clipboard.writeText(`${record.email}`)}
    //         >
    //           copy
    //         </div>
    //       </Popover>
    //     </div>
    //   </Space>
    // ),
    onFilter: (value, record) => record.role.includes(value),
  },
  {
    title: "DESIGNATION",
    dataIndex: "designation",
    key: "designation",
    onFilter: (value, record) => record.role.includes(value),
    sorter: (a, b) => a.designation.length - b.designation.length,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "COMPANY",
    dataIndex: "company",
    key: "company",
    onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.company - b.company,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "NUMBER",
    dataIndex: "number",
    key: "number",
    onFilter: (value, record) => record.role.includes(value),
    sorter: (a, b) => a.number - b.number,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.status - b.status,
    ellipsis: {
      showTitle: false,
    },
    responsive: ["xs", "md"],
  },
  {
    title: "ACTION",
    dataIndex: "action",
    key: "action",
    onFilter: (value, record) => record.lastActive.includes(value),
    sorter: (a, b) => a.action - b.action,
    ellipsis: {
      showTitle: false,
    },
    render: (_, record) => (
      <Dropdown overlay={menu} trigger={"click"} placement={"bottomRight"}>
        <div className="w-32 flex justify-center items-center text-blue-300">
          view<i class="ri-arrow-down-s-fill ri-lg text-black"></i>
        </div>
      </Dropdown>
    ),

    responsive: ["xs", "md"],
  },
];
