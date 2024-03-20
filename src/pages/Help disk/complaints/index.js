import { Checkbox, Divider, Dropdown,Button, Modal, Empty, Menu, Skeleton } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Layout from "../../../components/layout";
import Tables from "../../../components/table";
import SideDrawer from "../../../components/drawer";
import AddTickets from "./addComplaints";
import ViewTickets from "./viewComplaints";
import EditComplaint from './EditComplaint';
import { useDispatch } from "react-redux";
import moment from "moment";

import {
  getAllComplaints,
  createComplaints,
  singlecomplaints,
  editComplaints,
  deleteComplaint,
  getDateRange

} from "./complaints.action";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
// import { useLoading } from "../../../components/skeleton/LoadingContext";
// import { useLoading } from "../../../components/skeleton/LoadingContext";
const complaintStatus = [
  {
    id: "1",
    label: "Available",
  },

  {
    id: "2",
    label: "Yestoassign",
  },
  {
    id: "3",
    label: "Not Available",
  }
];

function Complaints() {
  const dispatch = useDispatch();
  const complaintState = useSelector((state) => state.DateRangeReducer);
  const allComplaintsData = useSelector(
    (state) => state.complaintReducer.getAllComplaints
    );
    console.log("complaintState===========", allComplaintsData);
  const [deleteId, setDeleteId] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setloading] = useState(false);
  const [dateRange, setDateRange] = useState([]);
  const dateState = useSelector((state) => state.DateRangeReducer);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [Ordersinfo, setOrdersInfo] = useState({
    status: [],
    response: [],
  });
  useEffect(() => {
    let date = new Promise((resolve, reject) => {
      resolve(dateState)
    })
    date.then((value) => {
      if(value.refundDate){
        setDateRange(value.refundDate)
      }
    })
  }, [dateState, dateRange]);
  const [fromDate, setFromDate] = useState("");
  const[toDate, setToDate] = useState("");
    useEffect(() => {
    if(dateRange){
      setFromDate(dateRange.from)
      setToDate(dateRange.to)
    } else {
      setFromDate("");
      setToDate("")
    }
  }, [dateRange, fromDate, toDate]);
  useEffect(() => {
    dispatch(getDateRange(query, fromDate, toDate ))
  }, [dispatch, query, dateRange, fromDate, toDate])  
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-left',
    iconColor: 'white',
    background: 'red',
    color: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true
  })
  // const handleModel = (ID) => {
  //   setDeleteId(ID)
  //   setModalOpen(!modalOpen)
  // }

  useEffect(() => {
    dispatch(getAllComplaints());
      setData(allComplaintsData)
      setloading(true)    
  },[dispatch, allComplaintsData?.length]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { status } = Ordersinfo;
    if (checked) {
      console.log("value-=====", value)
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
    console.log("Ordersinfo---",Ordersinfo);
    console.log("status---",status);
  };

  const checkedStatus = Ordersinfo.status;

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handleModel = (ID) => {
    setDeleteId(ID)
    setModalOpen(!modalOpen)
  }
  useEffect(() => {
    let resultData = [];
    const filterData = data.filter((item) => {
      checkedStatus.map((val) => {
        if (val.toLowerCase() === item.complaintStatus.toLowerCase()) {
          resultData.push(item);
        }
      });
    });
    setFilteredData(resultData);
  }, [checkedStatus]);


  const sendDispatchValue = (ID) => {
    dispatch(singlecomplaints(ID))
  }
  const showViewPage = () => {
    setView(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const menu = (
    
  // );

  useEffect(() => {
    if (query) {
      const searchData = data?.filter(
        (item) =>
          item.complaint.toLowerCase().includes(query.toLowerCase()) ||
          item.customerName.toLowerCase().includes(query.toLowerCase()) ||
          item.complaintPriority.toLowerCase().includes(query.toLowerCase()) ||
          item.complaintDescription.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(allComplaintsData);
    }
  }, [query, data, allComplaintsData]);


  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };

  const filterMenu = (
    <Menu
      className=" w-40 px-3 mt-2"
      items={[
        {
          label: (
            <ul className="items-center ">
              {complaintStatus.map((value, id) => {
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
  const getFullDate = (date) => {
    const dateAndTime = date.split("T");

    return dateAndTime[0].split("-").join("-");
  };
  const complaintscolumns = [
    {
      title: "COMPLAINT",
      dataIndex: "complaint",
      key: "complaint",
      sorter: (a, b) => {
        return a.complaint > b.complaint;
      },
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            showViewPage();
            sendDispatchValue(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },

    {
      title: "CUSTOMER NAME",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => {
        return a.customerName > b.customerName;
      }, ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            showViewPage();
            sendDispatchValue(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },
    {
      title: "PRIORITY",
      dataIndex: "complaintPriority",
      key: "complaintPriority",
      sorter: (a, b) => a.complaintPriority.localeCompare(b.complaintPriority),
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <div className=" rounded">
          <i className="ri-checkbox-blank-circle-fill px-2 text-[#2B5BFC]"></i>

          {record.complaintPriority}
        </div>
      ),
      responsive: ["xs", "md"],
    },
    {
      title: "ASSIGN",
      dataIndex: "complaintDescription",
      key: "complaintDescription",
      sorter: (a, b) => a.complaintDescription.localeCompare(b.complaintDescription),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "DATE",
      dataIndex: "Date",
      key: "Date",
      sorter: (a, b) => a.Date.localeCompare(b.Date),
      ellipsis: {
        showTitle: false,
      },
      render: (date) => getFullDate(date),

      responsive: ["xs", "md"],
    },
    
    // {
    //   title: "DATE PAID",
    //   // dataIndex: moment("dateOfPaid", "DD-MM-YYYY"),
    //   key: "dateOfPaid",
    //   sorter: (a, b) => a.Date.length - b.Date.length,
    //   ellipsis: {
    //     showTitle: false,
    //   },
    //   render: (row) => (
    //     <span className="">
    //       {moment(row.dateOfPaid).local().format('DD-MM-YYYY')}
    //     </span>
    //   ),
    //   onCell: (record, rowIndex) => {
    //     return {
    //       onClick: () => {
    //         // showViewPage();
    //         // viewPages(record.id)
    //         // setStateId(record.id)
    //       },
    //     };
    //   },
    //   responsive: ["xs", "md"],
    // },
    {
      title: "ORDER ID",
      dataIndex: "orderId",
      key: "orderId",
      sorter: (a, b) => a.orderId.localeCompare(b.orderId),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },

    {
      title: "STATUS",
      dataIndex: "complaintStatus",
      key: "complaintStatus",
      sorter: (a, b) => a.complaintStatus.localeCompare(b.complaintStatus),
      ellipsis: {
        showTitle: false,
      },

      render: (_, record) => (
        <>
          <div
            className={`${record.complaintStatus
                .toLowerCase()
                .includes("Available".toLowerCase())
                ? "bg-[#150e7e25] text-[#141344] w-24 py-1 text-center rounded"
                : record.complaintStatus
                  .toLowerCase()
                  .includes("closed".toLowerCase())
                  ? "bg-[#34c02750] text-[#34c027] w-24 py-1 text-center rounded"
                  : "bg-[#f090003d] text-[#F09000] w-24 py-1 text-center rounded"
              }`}
          >
            {record.complaintStatus}
          </div>
        </>
      ),
      responsive: ["xs", "md"],
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      sorter: (a, b) => a.action - b.action,
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            sendDispatchValue(record.id)
          },
        };
      },
      onCell: (record, rowIndex) => {
      },
      render: (_, record) => {
        /**
         * @description edit, delete, and view menu bar implement
         */
        const menu = (
          <Menu
            items={[
              // {
              //   label: (
              //     <div
              //       className="flex items-center pl-[20px]  text-[12px] uppercase"
              //       onClick={() =>
              //         setData(record.id);
              //         setView(true);
              //       }>
              //       <div className=" font-normal hover:text-blue-400 " type="">
              //         <i className="ri-eye-line ri-lg mr-2 align-sub"></i>
              //         view
              //       </div>
              //     </div>
              //   ),
              //   key: "0",
              // },
              {
                label: (
                  <div
                    className="flex items-center  pl-[20px]  text-[12px] uppercase"
                    onClick={() => {
                      dispatch(editComplaints(record.id, record));
                      setData(data);
                      setShowEdit(true);
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
                  <div className="flex items-center  pl-[20px] text-[12px] uppercase">
                    <div className=" font-normal hover:text-blue-400"
                      onClick={() => handleModel(record.id)}>
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
        return (
          <>
            <Dropdown overlay={menu} trigger={"click"} placement={"bottomRight"}>
              <div
                className="w-32 flex ml-4 text-black items-center hover:text-blue-400 cursor-pointer"
              >Edit<i class="ri-arrow-down-s-fill ri-lg text-black hover:text-blue-400"></i>
              </div>
            </Dropdown>
            {modalOpen ?
              <Modal
                footer={null}
                centered
                width={450}
                visible={modalOpen}
                onOk={() => setModalOpen(modalOpen)}
                onCancel={() => setModalOpen(modalOpen)}
              >
                <div className="flex-col justify-center ">
                  <p className="ml-40 font-bold text-lg mb-3">Delete?</p>
                  <p className="ml-16 mb-3 font-medium text-gray-400">
                    {` Are you sure delete ${record.name} from People?`}
                  </p>
                  <div>
                    <Button
                      className="ml-28 mr-3 bg-gray-200 rounded border-0 text-gray-600 font-semibold"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="ml-3 bg-gray-300 rounded border-0 text-red-600 font-bold"
                      onClick={() => {
                        dispatch(deleteComplaint(deleteId));
                        setModalOpen(!modalOpen);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal> :
              null
            }
          </>
        )
          },
      responsive: ["xs", "md"],
    },
  ];

  useEffect(() => {
    dispatch(editComplaints);
  }, [dispatch]);

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
          closable={true}
          visible={open}
          open={open}
          onClose={onClose}
          bodyStyle={{ backgroundColor: "", padding: "30px" }}
        >
          <AddTickets setOpen={setOpen} open={open} />
        </SideDrawer>
      )}
      {view && (
        <SideDrawer
          placement="right"
          width={"70%"}
          headerStyle={{ padding: "0px" }}
         
          closable={true}
          visible={view}
          // onClose={}
          setView={setView}
          bodyStyle={{ backgroundColor: "white" }}
        >
          <ViewTickets data={data} setView={setView} />
        </SideDrawer>
      )}
      {showEdit && (
        <SideDrawer
          placement="right"
          width={"70%"}
          headerStyle={{ padding: "0px" }}
          closable={true}
          visible={showEdit}
          setView={setShowEdit}
          bodyStyle={{ backgroundColor: "white" }}
        >
          <EditComplaint  setView={setShowEdit} />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Complaints</h1>
            <p className="text-base text-gray-400">
              Manage the details from all kind of complaints
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
              onChange={(e) => {
                handleSearch(e);
              }}
              placeholder="Search"
            />
            <div className="left-[10px] absolute  w-3 h-3">
              <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
            </div>
          </div>

         
          <div className=" w-[100%] sm:w-auto flex justify-center items-center relative border border-solid border-bordercolor rounded">
              <Dropdown
                overlay={filterMenu}
                trigger={"click"}
                placement={"bottomLeft"}
                className={"h-10 rounded pl-4 pr-8 outline-none"}
              >
                <div className="p-2 flex items-center justify-center content-center cursor-pointer">
                  <span className="text-medium text-[14px] text-[#a3a3a3]" >Filter by Type</span>
                  <div className="right-[20px] absolute  w-2 h-3 cursor-pointer">
                    <i className="ri-arrow-down-s-line ri-lg"></i>
                  </div>
                </div>
              </Dropdown>
            </div>
        </div>
      
        <Tables
          columns={complaintscolumns}
          
          data={data}
          locale={{emptyText:loading?<Skeleton/>:<Empty/>}}
          scroll={{
            x: 700,
          }}
          // onChange={(e) =>handlelistChange(e)}

          pagination={{
            current: page,
            pageSize: pageSize,
            showTotal: showTotal,
            pageSizeOptions: [5, 10, 15, 20],
            hideOnSinglePage: true,
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

export default Complaints;
