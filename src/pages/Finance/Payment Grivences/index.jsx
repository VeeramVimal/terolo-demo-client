/** @format */

import { Checkbox, Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Layout from "../../../components/layout";
import Tables from "../../../components/table";
import SideDrawer from "../../../components/drawer";
import AddGrivences from "./Add Grivences/index";
import EditGrivences from "./Edit Grivences/index";
import ViewGrivences from "./View Grivences/index";

import { getAllPaymentGrievances,getSingleClickedData,deleteRecord,  } from "./paymentgrievances.action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get } from "../../../client/api";
import Swal from 'sweetalert2';


function Grivences() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [Ordersinfo, setOrdersInfo] = useState({
    status: [],
    response: [],
  });
  
 
  const onClose = () => {
      setOpen(false);
  };
  // const getAllValues = useSelector(
  //   (state) =>state.paymentGrievancesReducer.getAllPaymentGrievances
  // )

  const getAllValues = useSelector((state) => {
    if (state.paymentGrievancesReducer.getAllPaymentGrievances) {
      return state.paymentGrievancesReducer.getAllPaymentGrievances.data.data;
    }
    return null;
  });
    console.log("getall", getAllValues)
    const [data, setData] = useState(getAllValues);

    // const result = getAllValues.data.data
    // console.log("result",result)
  useEffect(()=>{
    dispatch(getAllPaymentGrievances())
    if (getAllValues) {
      setData(getAllValues);
    }
  },[dispatch,getAllValues?.length])

  const desc = function decodeHTMLEntities(text) {
    let textArea = document.createElement("textarea");
    let tex = text.slice(6,-7);
     textArea.innerHTML = tex;
     console.log("textArea.value",textArea.value);
    return textArea.value;
  }
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
  console.log("checkedStatus",checkedStatus)

  useEffect(() => {
    let resultData = [];
    const filterData = data?.filter((item) => {
      checkedStatus.map((val) => {
        console.log("val",item.paymentGrievanceStatus)
        if (val.toLowerCase() === item.paymentGrievanceStatus.toLowerCase()) {
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
          item.invoiceId.toLowerCase().includes(query.toLowerCase()) ||
          item.customerName.toLowerCase().includes(query.toLowerCase()) ||
          item.issue.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(getAllValues
        );
    }
  }, [query]);

  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };

  
  const menuStatus = [
    {
      id: "1",
      label: "Paid",
    },

    {
      id: "2",
      label: "Pending",
    },
    {
      id: "3",
      label: "Cancelled",
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

  const orderColumns = [
    {
      title: "INVOICE ID",
      dataIndex: "invoiceId",
      key: "invoiceId",
      sorter: (a, b) => {
        return a.Invoice > b.Invoice;
      },
      ellipsis: {
        showTitle: false,
      },
      // onCell: (record, rowIndex) => {
      //   return {
      //     onClick: () => {
      //       showViewPage();
      //       localStorage.setItem("paymentData", JSON.stringify(record));
      //     },
      //   };
      // },
      responsive: ["xs", "md"],
    },
    
  
    {
      title: "CUSTOMER NAME",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => a.customerName.localeCompare(b.customerName),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "ISSUE",
      dataIndex: "issue",
      key: "issue",
      sorter: (a, b) => a.issue.localeCompare(b.issue),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "REASON",
      dataIndex: "reason",
      key: "reason",
      sorter: (a, b) => a.reason.localeCompare(b.reason),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "REFUNDED AMOUNT",
      dataIndex: "refundedAmount",
      key: "refundedAmount",
      sorter: (a, b) => a.refundedAmount>b.refundedAmount,
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "CURRENCY TYPE",
      dataIndex: "currencyType",
      key: "currencyType",
      sorter: (a, b) => a.currencyType.localeCompare(b.currencyType),
      ellipsis: {
        showTitle: false,
      },
      
      responsive: ["xs", "md"],
    },
    {
      title: "DESCRIPTION",
      dataIndex: "clientDescription",
      key: "clientDescription",
      sorter: (a, b) => a.clientDescription.localeCompare(b.clientDescription),
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <>
          <div>{desc(record.clientDescription)}</div>
        </>
      ),
      responsive: ["xs", "md"],
    },
    
    {
      title: "STATUS",
      dataIndex: "paymentGrievanceStatus",
      key: "paymentGrievanceStatus",
      sorter: (a, b) => a.paymentGrievanceStatus - b.paymentGrievanceStatus,
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => (
        <>
          <div
            className={`${
              record.paymentGrievanceStatus.toLowerCase().includes("pending".toLowerCase())
                ? "bg-[#150e7e25] text-[#141344] w-24 py-1 text-center rounded"
                : record.paymentGrievanceStatus.toLowerCase().includes("paid".toLowerCase())
                ? "bg-[#34c02750] text-[#34c027] w-24 py-1 text-center rounded"
                : "bg-[#f090003d] text-[#F09000] w-24 py-1 text-center rounded"
            }`}
          >
            {record.paymentGrievanceStatus}
          </div>
        </>
      ),
  
      responsive: ["xs", "md"],
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      ellipsis: {
        showTitle: false,
      },
      render: (_, record) => {
        
        const menu = (
          <Menu
            className="dropdown-bg w-28"
            items={[
              {
                label: (
                  <ul className="flex items-center px-2 ">
                    <li
                      className="text-sm font-normal"
                      type=""
                      onClick={() =>{
                       console.log("record",record)
                        dispatch(getSingleClickedData(record.id))
                        setView(true);

                      }}
                    >
                      <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                      view
                    </li>
                  </ul>
                ),
                key: "0",
              },
              {
                label: (
                  <ul className="flex items-center px-2">
                    <li
                      className="text-sm font-normal "
                      onClick={() => {
                        console.log("editbutton",record);
                        dispatch(getSingleClickedData(record.id))
                        setEdit(true);
                      }}
                    >
                      <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                      edit
                    </li>
                  </ul>
                ),
                key: "2",
              },
              {
                label: (
                  <div className="flex items-center px-2"
                  onClick={() => {
                    Swal.fire({
                      title: 'Are you sure?',
                      text: "You won't be able to revert this!",
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(deleteRecord(record.id))
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                      }
                    })
                  }}>
                    <div className=" font-normal hover:text-blue-400" >
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
            <Dropdown
              overlay={menu}
              trigger={"click"}
              placement={"bottomCenter"}
            >
              <div className="w-32 flex justify-center items-center text-blue-300"
              onClick={() =>(dispatch(getSingleClickedData(record.id)))}>
                view

                <i class="ri-arrow-down-s-line ri-lg text-black ml-2 mt-1"></i>
              </div>
            </Dropdown>
           
          </>
        );
      },
      responsive: ["xs", "md"],
    },
  ];

  return (
    <Layout>
   
      {open && (
        <SideDrawer
        onClose={onClose} open={open}
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                  class="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                  onClick={() => {
                          setOpen(false);
                        }}          />
              </div>
          }
          // closeIcon={
          //   <i
          //     class="ri-close-line ri-1x absolute z-40 left-3 top-3 "
          //     onClick={() => {
          //       setOpen(false);
          //     }}
          //   />
          // }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "", padding: "30px" }}
        >
          <AddGrivences setOpen={setOpen} />
        </SideDrawer>
      )}
      {edit && (
        <SideDrawer
        onClose={()=>{
          setEdit(false)
        }} 
        edit={edit}
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <i
              className="ri-close-line ri-1x absolute z-40 left-3 top-3"
              onClick={() => {
                setEdit(false);
              }}
            />
          }
          closable={true}
          visible={edit}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <EditGrivences setEdit={setEdit} />
        </SideDrawer>
      )}
       {view && (
        <SideDrawer
        onClose={()=>{
          setView(false)
        }} view={view}
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <i
              className="ri-close-line ri-1x absolute z-40 left-3 top-3 "
              onClick={() => {
                setView(false);
              }}
            />
          }
          closable={true}
          visible={view}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <ViewGrivences setView={setView} />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Payment Grievances</h1>
            <p className="text-base text-gray-400">
            Manage the details of your payment grievances from all kind of compaines
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
              className="h-10 pr-8 pl-10 outline-none rounded"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search"
            />
            <div className="left-[10px] absolute  w-3 h-3">
              <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
            </div>
          </div>

          <div className=" w-[100%] sm:w-auto flex justify-center items-center relative border border-solid rounded">
            <input
              className="h-10 rounded pl-4 pr-8 outline-none "
              placeholder="Filter"
              disabled
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
          columns={orderColumns}
          data={checkedStatus?.length > 0 ? filteredData : data}
          scroll={{
            x: 700,
          }}
          pagination={{
            current: page,
            pageSize: pageSize,
            hideOnSinglePage: true,
            showTotal: showTotal,
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

export default Grivences;
