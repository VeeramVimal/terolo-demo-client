/** @format */

import { Checkbox, Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Layout from "../../../components/layout";
import Tables from "../../../components/table";
import SideDrawer from "../../../components/drawer";
import AddTickets from "./Addtickets";
import ViewTickets from "./Viewticket";
import { useDispatch } from "react-redux";
import {
  deleteTicket,
  getAllAssign,
  getAllCompany,
  getAllTickets,
  getCategory,
  updateTicket,
} from "./tickets.action";
import { useSelector } from "react-redux";
import EditTickets from "./EditTicket";
import Swal from "sweetalert2";
const getDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  return (today = yyyy + "-" + mm + "-" + dd);
};
function Tickets() {
  const dispatch = useDispatch();
  const assignData = useSelector((state) => state.ticketsReducer.assign);
  const allTicketsData = useSelector(
    (state) => state.ticketsReducer.getAllTickets
  );
  const dateRangeData = useSelector((state) => {
    if (state.ticketsReducer.dateRange) {
      return state.ticketsReducer.dateRange;
    }
    return null;
  });
  const [editdata, setEditData] = useState(null);
  const initialValues = {
    issueTitle: editdata?.issueTitle,
    ticketCategory: editdata?.ticketCategory,
    ticketPriority: editdata?.ticketPriority,
    companyDetail: editdata?.companyDetail,
    ticketDescription: editdata?.ticketDescription,
    ticketIssueImage: editdata?.ticketIssueImage,
    ticketIssueDoc: editdata?.ticketIssueDoc,
    ticketIssueImageName: editdata?.ticketIssueImageName,
    ticketIssueDocName: editdata?.ticketIssueDocName,
    ticketStatus: editdata?.ticketStatus,
    peopleId: editdata?.peopleId,
    dateOfCreate: editdata?.dateOfCreate,
  };

  const [data, setData] = useState(allTicketsData);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState("");
  const [statusId, setStatusId] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [Ordersinfo, setOrdersInfo] = useState({
    status: [],
  });
  const [fileUploadDoc, setFileUploadDoc] = useState(null);
  const [viewData, setViewData] = useState(null);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { status } = Ordersinfo;
    if (checked) {
      setOrdersInfo({
        status: [...status, value],
        response: [...status, value],
      });
    } else {
      setOrdersInfo({
        status: status.filter((e) => e !== value),
        response: status.filter((e) => e !== value),
      });
    }
  };
  const checkedStatus = Ordersinfo.response;
  useEffect(() => {
    let resultData = [];
    data?.filter((item) => {
      checkedStatus?.map((val) => {
        if (val?.toLowerCase() === item?.ticketStatus.toLowerCase()) {
          resultData.push(item);
        }
      });
    });
    setFilteredData(resultData);
  }, [checkedStatus]);

  const showViewPage = () => {
    setView(true);
  };
  useEffect(() => {
    if (query) {
      const searchData = data?.filter(
        (item) =>
          item.issueTitle.toLowerCase().includes(query.toLowerCase()) ||
          item.ticketCategory.toLowerCase().includes(query.toLowerCase()) ||
          item.ticketPriority.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(allTicketsData);
    }
  }, [query]);

  useEffect(() => {
    dispatch(getAllTickets);
    dispatch(getCategory);
    dispatch(getAllCompany);
    dispatch(getAllAssign);
    if (allTicketsData) {
      setData(allTicketsData);
    }
  }, [dispatch, allTicketsData?.length]);
  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };

  const menuStatus = [
    {
      id: "1",
      label: "In Progress",
    },

    {
      id: "2",
      label: "Yet to assign",
    },
    {
      id: "3",
      label: "Closed",
    },
  ];

  const filterMenu = (
    <Menu
      className=" w-40 px-3 mt-2"
      items={[
        {
          label: (
            <ul className="items-center ">
              {menuStatus.map((value, id) => {
                return (
                  <li className="text-sm font-normal" key={id}>
                    <Checkbox
                      value={value.label}
                      className="truncate mb-1"
                      onChange={handleChange}
                    >
                      {value.label}
                    </Checkbox>
                  </li>
                );
              })}
            </ul>
          ),
        },
      ]}
    />
  );

  const statusMenu = (
    <Menu
      className=" w-35"
      items={[
        {
          label: (
            <div className="items-center ">
              {menuStatus.map((value, id) => {
                return (
                  <div
                    key={id}
                    className="flex items-center px-[10px]  text-[12px] uppercase mb-1"
                    onClick={() => {
                      setStatus(value.label);
                    }}
                  >
                    <div className=" font-normal hover:text-blue-400 ">
                      {value.label}
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        },
      ]}
    />
  );

  useEffect(() => {
    if (editdata && statusId === editdata.id && status) {
      initialValues.ticketStatus = status;
      dispatch(updateTicket(statusId, initialValues));
    }
  }, [status]);
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              className="flex items-center pl-[20px]  text-[12px] uppercase"
              onClick={() => {
                if (viewData) {
                  setView(true);
                }
              }}
            >
              <div className=" font-normal hover:text-blue-400 " type="">
                <i className="ri-eye-line ri-lg mr-2 align-sub"></i>
                view
              </div>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div
              className="flex items-center  pl-[20px]  text-[12px] uppercase"
              onClick={() => {
                if (viewData) {
                  setEdit(true);
                }
              }}
            >
              <div className=" font-normal hover:text-blue-400">
                <i className="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                edit
              </div>
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div
              className="flex items-center  pl-[20px] text-[12px] uppercase"
              onClick={() => {
                if (viewData) {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(deleteTicket(viewData.id));
                      dispatch(getAllTickets);
                      Swal.fire(
                        "Deleted!",
                        "Your data has been deleted.",
                        "success"
                      );
                    }
                  });
                }
              }}
            >
              <div className=" font-normal hover:text-blue-400">
                <i className="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                delete
              </div>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );

  const getFullDate = (date) => {
    const dateAndTime = date.split("T");

    return dateAndTime[0].split("-").join("-");
  };

  const Ticketcolumns = [
    {
      title: "ISSUE",
      dataIndex: "issueTitle",
      key: "issueTitle",
      sorter: (a, b) => a.issueTitle.localeCompare(b.issueTitle),
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            setViewData(record);
            if (viewData) {
              showViewPage();
            }
          },
        };
      },
      responsive: ["xs", "md"],
    },
    {
      title: "DATE",
      dataIndex: "dateOfCreate",
      key: "dateOfCreate",
      sorter: (a, b) => new Date(a.dateOfCreate) - new Date(b.dateOfCreate),
      ellipsis: {
        showTitle: false,
      },
      render: (date) => getFullDate(date),
      responsive: ["xs", "md"],
    },
    {
      title: "PRIORITY",
      dataIndex: "ticketPriority",
      key: "Priority",
      sorter: (a, b) => a.ticketPriority.localeCompare(b.ticketPriority),
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <div className=" rounded">
          <i
            className={`${
              record.ticketPriority
                .toLowerCase()
                .includes("Nice to be done".toLowerCase())
                ? "ri-checkbox-blank-circle-fill px-2 text-[#3f90db]"
                : record.ticketPriority
                    .toLowerCase()
                    .includes("urgent".toLowerCase())
                ? "ri-checkbox-blank-circle-fill px-2 text-[#d13f25]"
                : "ri-checkbox-blank-circle-fill px-2 text-[#f1ee3e]"
            }`}
          >
            {" "}
          </i>
          {record.ticketPriority}
        </div>
      ),
      responsive: ["xs", "md"],
    },
    {
      title: "TicketID",
      dataIndex: "ticketId",
      key: "ticketId",
      sorter: (a, b) => new Date(a.ticketId) - new Date(b.ticketId),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "STATUS",
      dataIndex: "ticketStatus",
      key: "ticketStatus",
      sorter: (a, b) => a.ticketStatus.localeCompare(b.ticketStatus),
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <Dropdown
          overlay={statusMenu}
          trigger={"click"}
          placement={"bottom"}
          onClick={() => {
            setEditData(record);
            setStatusId(record.id);
            setViewData(record);
          }}
        >
          <div>
            <div
              className={` cursor-pointer ${
                record.ticketStatus
                  .toLowerCase()
                  .includes("Yet to assign".toLowerCase()) ||
                (status &&
                  record.id === statusId &&
                  status.toLowerCase().includes("Yet to assign".toLowerCase()))
                  ? "bg-[#150e7e25] text-[#141344] w-24 py-1 text-center rounded "
                  : record.ticketStatus
                      .toLowerCase()
                      .includes("closed".toLowerCase()) ||
                    (status &&
                      record.id === statusId &&
                      status.toLowerCase().includes("closed".toLowerCase()))
                  ? "bg-[#34c02750] text-[#34c027] w-24 py-1 text-center rounded"
                  : "bg-[#f090003d] text-[#F09000] w-24 py-1 text-center rounded"
              }`}
            >
              {status && record.id === statusId ? status : record.ticketStatus}
            </div>
          </div>
        </Dropdown>
      ),
      responsive: ["xs", "md"],
    },

    {
      title: "CATEGORY",
      dataIndex: "ticketCategory",
      key: "Category",
      responsiveArray: ["xs", "md"],
      onFilter: (value, record) => record.lastActive.includes(value),
      sorter: (a, b) => a.ticketCategory.localeCompare(b.ticketCategory),
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <>
          <div>{record.ticketCategory}</div>
        </>
      ),
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      sorter: (a, b) => a.action - b.action,
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <Dropdown
          overlay={menu}
          trigger={"click"}
          placement={"bottomRight"}
          onClick={() => {
            setViewData(record);
          }}
        >
          <div className="w-32 cursor-pointer">
            View <i className="ri-arrow-down-s-line ri-lg ml-2 text-black"></i>
          </div>
        </Dropdown>
      ),
      responsive: ["xs", "md"],
    },
  ];

  return (
    <Layout>
      {open && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
          }
          onClose={() => setOpen(false)}
          closable={true}
          visible={open}
          bodyStyle={{
            backgroundColor: "",
            padding: "25px",
            paddingRight: "10px",
          }}
        >
          <AddTickets
            assignData={assignData}
            fileUploadDoc={fileUploadDoc}
            setFileUploadDoc={setFileUploadDoc}
            setOpen={setOpen}
            allTicketsData={allTicketsData}
            setData={setData}
            getDate={getDate}
          />
        </SideDrawer>
      )}
      {edit && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setView(false);
                  setEdit(false);
                }}
              />
            </div>
          }
          onClose={() => setEdit(false)}
          closable={true}
          visible={edit}
          bodyStyle={{ backgroundColor: "", padding: "30px" }}
        >
          <EditTickets
            assignData={assignData}
            setEdit={setEdit}
            setView={setView}
            statusId={statusId}
            editData={viewData}
            edit={edit}
            allTicketsData={allTicketsData}
            setData={setData}
            getDate={getDate}
          />
        </SideDrawer>
      )}
      {view && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          onClose={() => setView(false)}
          closable={true}
          visible={view}
          setView={setView}
          bodyStyle={{ backgroundColor: "white" }}
        >
          <ViewTickets
            allTicketsData={allTicketsData}
            setView={setView}
            data={viewData}
            setEdit={setEdit}
            assignData={assignData}
          />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Tickets</h1>
            <p className="text-base text-gray-400">
              Manage the details from all kind of tickets
            </p>
          </div>
          <div
            className="cursor-pointer bg-blue-500 hover:bg-blue-400 w-10 h-10 flex items-center justify-center text-white rounded mt-2 "
            onClick={() => {
              setOpen(true);
            }}
          >
            <i className="ri-add-line ri-2x"></i>
          </div>
        </div>
        <Divider />
        <div className=" flex justify-between items-center mb-6 flex-col sm:flex-row">
          <div className="flex relative items-center mb-3 md:mb-0 w-[100%] sm:w-auto  border border-solid rounded">
            <input
              className="h-10 pr-8 pl-10 outline-none rounded "
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <div className="left-[10px] absolute w-3 h-3">
              <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
            </div>
          </div>

          <div className=" w-[100%] sm:w-auto flex justify-center items-center relative border border-solid rounded">
            <input
              className="h-10 rounded pl-4 pr-8 outline-none "
              placeholder="Filter"
              disabled={"disabled"}
            />

            <Dropdown
              overlay={filterMenu}
              trigger={"click"}
              placement={"bottomLeft"}
            >
              <div className="right-[20px] absolute  w-2 h-3 cursor-pointer">
                <i className="ri-arrow-down-s-line ri-lg"></i>
              </div>
            </Dropdown>
          </div>
        </div>
        <Tables
          columns={Ticketcolumns}
          data={
            checkedStatus?.length > 0
              ? filteredData
              : dateRangeData
              ? dateRangeData
              : data
          }
          scroll={{
            x: 700,
          }}
          pagination={{
            current: page,
            pageSize: pageSize,
            showTotal: showTotal,
            hideOnSinglePage: true,
            pageSizeOptions: [5, 10, 15, 20],
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      </div>
    </Layout>
  );
}

export default Tickets;
