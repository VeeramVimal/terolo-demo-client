import { Menu, Dropdown, Space, Popover, Button, Select, Layout } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { HORIZENTAL_LINE } from "../assets/Images";
import { ToolTip } from "../components/toolTip";
import View from "../pages/tickets";
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
                                IT Support
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
                                Product Support
                            </div>
                        </div>
                    ),
                    key: "2",
                },

            ]}
        />
    );
};

const Assign = (dispatch) => {
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
                                Maxim Cummings
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
                                Aydan Fitzgerald                     </div>
                        </div>
                    ),
                    key: "2",
                },
                {
                    label: (
                        <div className="flex items-center pl-7">
                            <div
                                className="text-sm font-normal text-blue-400"
                                type=""
                                onClick={() => sessionStorage.setItem('isDrawerVisible', true)}
                            >
                                Richard Flynn                </div>
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
                                Select from people                    </div>
                        </div>
                    ),
                    key: "2",
                },

            ]}
        />
    );
};

export default menu;

export const userData = [
    {
        key: 1,
        Issue: "Login Problem",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#2B5BFC]"></i>
            Nice to do
        </div>),
        Assign: "Select from people",
        Category: (
            <div className="text-[#3761EE]">
                IT support
            </div>
        ),
        status: (
            <div className="bg-[#F7F9FF] text-[#6E78AC] py-1 w-24 text-center rounded">
                Yes to assign
            </div>
        ),
        action: "",
    },
    {
        key: 2,
        Issue: "Goaly-Bugfixing",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#EB4335]"></i>
            Urgent
        </div>),
        Assign: "Select from people",
        Category: (
            <div className="text-[#3761EE]">
                Product support
            </div>
        ),
        status: (
            <div className="bg-[#F7F9FF] text-[#6E78AC] py-1 w-24 text-center rounded">
                Yes to assign
            </div>
        ),
        action: "",
    },
    {
        key: 3,
        Issue: "Computer crashed",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#FFC700]"></i>
            Important
        </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Richard Flynn
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                IT support
            </div>
        ),
        status: (
            <div className="bg-[#FFF8EB] text-[#F09000] w-24 py-1 text-center rounded">
                InProgress
            </div>
        ),
        action: "",
    },
    {
        key: 4,
        Issue: "Design Update-Goal.ly",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#2B5BFC]"></i>
            Nice to do
        </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Aydan Fitzgerald
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                Product support
            </div>
        ),
        status: (
            <div className="bg-[#FFF8EB] text-[#F09000] w-24 py-1 text-center rounded">
                InProgress
            </div>
        ),
        action: "",
    },
    {
        key: 5,
        Issue: "Goaly.onboard-Testing",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#2B5BFC]"></i>
            Nice to do
        </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Maxim Cummings
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                Product support
            </div>
        ),
        status: (
            <div className="bg-[#FFF8EB] text-[#F09000] w-24 py-1 text-center rounded">
                InProgress      </div>
        ),
        action: "",
    },
    {
        key: 6,
        Issue: "Goaly Bug Fixing",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#EB4335]"></i>
            Urgent
        </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Kenneth Mcconnell
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                Product support
            </div>
        ),
        status: (
            <div className="bg-[#DFFBF0] text-[#02AC6A] w-24 py-1 text-center rounded">
                closed
            </div>
        ),
        action: "",
    },
    {
        key: 7,
        Issue: "Computer Crashed",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#EB4335]"></i>
            Urgent
        </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Richard Flynn
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                IT support
            </div>
        ),
        status: (
            <div className="bg-[#DFFBF0] text-[#02AC6A] w-24 py-1  text-center rounded">
                closed
            </div>
        ),
        action: "",
    },
    {
        key: 8,
        Issue: "Goaly Bug fixing",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#FFC700]"></i>
            Important    </div>),
        Assign: (
            <div className="text-[#3761EE]">
                Susan Stevens
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                IT support
            </div>
        ),
        status: (
            <div className="bg-[#DFFBF0] text-[#02AC6A] w-24 py-1 text-center rounded">
                closed
            </div>
        ),
        action: "",
    },
    {
        key: 9,
        Issue: "Office Internet expired",
        Date: "27sep2022",
        Priority: (<div className=" rounded">
            <i className="ri-checkbox-blank-circle-fill px-2 text-[#FFC700]"></i>
            Important    </div>),
        Assign: "Select from people", Assign: (
            <div className="text-[#3761EE]">
                Richard Flynn
            </div>
        ),
        Category: (
            <div className="text-[#3761EE]">
                Product support
            </div>
        ),

        status: (
            <div className="bg-[#DFFBF0] text-[#02AC6A] w-24 py-1 text-center rounded">
                closed
            </div>
        ),
        action: "",
    },
];

export const userColumns = [
    {
        title: "ISSUE",
        dataIndex: "Issue",
        key: "Issue",
        onFilter: (value, record) => record.Issue.includes(value),
        sorter: (a, b) => a.Issue.length - b.Issue.length,
        ellipsis: {
            showTitle: false,
        },
        responsive: ["xs", "md"],
    },
    {
        title: "DATE",
        dataIndex: "Date",
        key: "Date",
        onFilter: (value, record) => record.Issue.includes(value),
        sorter: (a, b) => a.Date.length - b.Date.length,
        ellipsis: {
            showTitle: false,
        },
        responsive: ["xs", "md"],
        
    },
    {
        title: "PRIORITY",
        dataIndex: "Priority",
        key: "Priority",
        onFilter: (value, record) => record.Issue.includes(value),
        sorter: (a, b) => a.Priority.length - b.Priority.length,
        ellipsis: {
            showTitle: false,
        },
        responsive: ["xs", "md"],
    },
    {
        title: "ASSIGN",
        dataIndex: "Assign",
        key: "Assign",
        onFilter: (value, record) => record.Assign.includes(value),
        sorter: (a, b) => a.Assign.length - b.Assign.length,
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
        title: "CATEGORY",
        dataIndex: "Category",
        key: "Category",
        onFilter: (value, record) => record.Category.includes(value),
        sorter: (a, b) => a.Category.length - b.Category.length,
        ellipsis: {
            showTitle: false,
        },
        responsive: ["xs", "md"],
    },
];
