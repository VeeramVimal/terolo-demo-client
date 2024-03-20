/** @format */

import { Button, Checkbox, Divider, Dropdown, Menu, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Layout from "../../../components/layout"; // import Layout Component from our components/layout/index.js file
import Tables from "../../../components/table"; // import Tables Component from our components/table/index.js file
import SideDrawer from "../../../components/drawer"; // import SideDrawer Component from our components/drawer/index.js file
import AddRefunds from "./AddRefunds"; // import Addrefunds Component from our Addrefunds.js file
import ViewRefunds from "./ViewRefunds"; // import ViewRefunds Component from our ViewRefunds.js file
import { useSelector, useDispatch } from "react-redux";
import { deleteRefunds, getAllRefunds, getPaymentType, searchRefunds, singleRefund } from "./refund.action"; // import refund.action Component from our refund.action.js file
import moment from "moment";

const refundStatusData = [
  {
    value: 1,
    label: "paid",
  },
  {
    value: 2,
    label: "pending",
  },
  {
    value: 3,
    label: "cancelled",
  },
  {
    value: 4,
    label: "open",
  }
];
function Refunds() {
  //** dispatch variable  */
  const dispatch = useDispatch();
  // const StateRefunds = useSelector((state) => (state.RefundReducer.getRefunds));
  const stateAllValue = useSelector((state) => state.RefundReducer);
  /**
   * @description create a state
   */
  const [data, setData] = useState([]);
  const [stateId, setStateId] = useState("");
  const [query, setQuery] = useState("");
  const [valId, setValId] = useState("");
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
  const [deleteId, setDeleteId] = useState("");
  const [searchQuery, setSearchQuery] = useState("")
  /**
   * @description get all refunds data dispatch use render method
   */
  useEffect(() => {
   dispatch(getPaymentType());
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllRefunds());
    setData(stateAllValue.getRefunds)
  }, [dispatch, stateAllValue.getRefunds?.length])
  /**
   * @description handle input field functionalities
   */
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { status, response } = Ordersinfo;
    if (checked) {
      setOrdersInfo({
        status: [...status, value],
        response: data.filter((e) => e.refundStatus == value),
      });
    } else {
      setOrdersInfo({
        status: status.filter((e) => e !== value),
        response: status.filter((e) => e !== value),
      });
    }
  };
  /**
   * @description status filter rendering
   */
  useEffect(() => {
    let resultData = [];
    const filterData = data.filter((item) => {
      Ordersinfo.status.map((val) => {
        if (val.toLowerCase() === item.refundStatus.toLowerCase()) {
          resultData.push(item);
        }
      });
    });
    setFilteredData(resultData);
  }, [Ordersinfo.status, data?.length]);

  /**
   * @description modal PopUp handle functionalities
   */
  const handleModel = (ID) => {
    setDeleteId(ID)
    setModalOpen(!modalOpen)
  }
  const viewPages = (ID) => {
    dispatch(singleRefund(ID));
    setView(true);
  }
  const editPages = (ID) => {
    dispatch(singleRefund(ID));
    setValId(ID)
    setEdit(true);
  }
  const [dateRange, setDateRange] = useState([]);
  const dateState = useSelector((state) => state.DateRangeReducer);
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
    dispatch(searchRefunds(searchQuery, fromDate, toDate ))
  }, [dispatch, searchQuery,dateRange, fromDate, toDate])

  useEffect(() => {
    if (stateAllValue.searchRefunds?.length || searchQuery) {
      setData(stateAllValue.searchRefunds)
    } else {
      setData(stateAllValue.getRefunds)
    }
  }, [data?.length, stateAllValue.searchRefunds?.length])

  const handleSearceChange = (e) => {
    if (e.target.value) {
      setData(stateAllValue.searchRefunds)
    } else {
      setData(stateAllValue.getRefunds)
    }
    setSearchQuery(e.target.value)
  }

  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };

  /**
   * @description filter menu bar functionalies
   */
  const filterMenu = (
    <Menu
      className=" w-40 px-3 mt-2"
      items={[
        {
          label: (
            <ul className="items-center ">
              {refundStatusData.map((value, id) => {
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
      title: "REFUND-ID",
      dataIndex: "refundId",
      key: "refundId",
      sorter: (a, b) => {
        return a.Refund > b.Refund;
      },
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },

    {
      title: "ORDER ID",
      dataIndex: "orderId",
      key: "orderId",
      sorter: (a, b) => a.Order.length - b.Order.length,
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },

    {
      title: "DATE PAID",
      // dataIndex: moment("dateOfPaid", "DD-MM-YYYY"),
      key: "dateOfPaid",
      sorter: (a, b) => a.date.length - b.date.length,
      ellipsis: {
        showTitle: false,
      },
      render: (row) => (
        <span className="">
          {moment(row.dateOfPaid).local().format('DD-MM-YYYY')}
        </span>
      ),
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },
    {
      title: "COMPANY",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (a, b) => a.company - b.company,
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },

    {
      title: "CUSTOMER",
      dataIndex: "customerName",
      key: "customerName",
      sorter: (a, b) => a.customer.localeCompare(b.customer),
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      responsive: ["xs", "md"],
    },
    {
      title: "AMOUNT PAID",
      dataIndex: "projectBudget",
      key: "projectBudget",
      sorter: (a, b) => a.amountPaid - b.amountPaid,
      ellipsis: {
        showTitle: false,
        onCell: (record, rowIndex) => {
          return {
            onClick: () => {
              viewPages(record.id)
            },
          };
        },
      },
      responsive: ["xs", "md"],
    },
    {
      title: "REFUDED AMOUNT",
      dataIndex: "refundedAmount",
      key: "refundedAmount",
      sorter: (a, b) => a.Refunded - b.Refunded,
      ellipsis: {
        showTitle: false,
        onCell: (record, rowIndex) => {
          return {
            onClick: () => {
              viewPages(record.id)
            },
          };
        },
      },
      responsive: ["xs", "md"],
    },
    {
      title: "STATUS",
      dataIndex: "refundStatus",
      key: "refundStatus",
      sorter: (a, b) => a.status - b.status,
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            viewPages(record.id)
          },
        };
      },
      render: (_, record) => (
        /**
         * @description here nested condition used Ex: if-else-if(nested)
         */
         <div className={`${record.refundStatus === 'paid' ?
         "bg-green-200 text-green-500 w-20 text-center rounded" :
         record.refundStatus === 'open' ? 
         "bg-[#f090003d] text-[#F09000] w-20 text-center rounded" :
         record.refundStatus === 'pending' ?
           "bg-[#F7F9FF] text-[#6E78AC] w-20 text-center rounded" :
           record.refundStatus === 'cancelled' &&
           "bg-red-200 text-red-500 w-20 text-center rounded"
         }`}>
         {record.refundStatus}
       </div>
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
      },
      render: (_, record) => {
        /**
         * @description edit, delete, and view menu bar implement
         */
        const menu = (
          <Menu
            items={[
              {
                label: (
                  <div
                    className="flex items-center pl-[20px]  text-[12px] uppercase"
                    onClick={() => viewPages(record.id)}>
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
                    onClick={() => editPages(record.id)}
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
              >Edit<i className="ri-arrow-down-s-fill ri-lg text-black hover:text-blue-400"></i>
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
                        dispatch(deleteRefunds(deleteId));
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

  return (
    <Layout>
      {view && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                className="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setView(false);
                }} />
            </div>
          }
          closable={true}
          visible={view}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <ViewRefunds setView={setView} />
        </SideDrawer>
      )}
      {open && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                className="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setOpen(false);
                }} />
            </div>
          }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "", padding: "30px" }}
        >
          <AddRefunds setOpen={setOpen} />
        </SideDrawer>
      )}
      {edit && (
        console.log("edit============", edit),
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i
                className="ri-close-line ri-1x absolute z-40 left-50 bottom-450 "
                onClick={() => {
                  setEdit(false);
                }} />
            </div>
          //   <i
          //   className="ri-close-line ri-1x absolute z-40 left-3 top-3 "
          //   onClick={() => {
          //     setEdit(false);
          //   }}
          // />
          }
          closable={true}
          visible={edit}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <AddRefunds setEdit={setEdit} valId={valId} setView={setView} />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Refunds</h1>
            <p className="text-base text-gray-400">
              Manage the details of your all kind of refunds
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
              // onChange={(e) => {
              //   setQuery(e.target.value);
              // }}
              onChange={handleSearceChange}
              placeholder="Search"
            />
            <div className="left-[10px] absolute  w-3 h-3">
              <i className={`ri-${SEARCH_LINE} ri-lg text-gray-400`}></i>
            </div>
          </div>

          <div className=" w-[100%] sm:w-auto flex justify-center items-center relative border border-solid rounded">

            <Dropdown
              overlay={filterMenu}
              trigger={"click"}
              placement={"bottomLeft"}
              className={"h-10 rounded pl-4 pr-8 outline-none"}
            >
              <div className="p-2 flex items-center justify-center content-center cursor-pointer">
                Filter Type
                <div className="right-[20px] absolute  w-2 h-3 cursor-pointer">
                  <i className="ri-arrow-down-s-line ri-lg"></i>
                </div>
              </div>
            </Dropdown>
          </div>
        </div>

        <Tables
          rowSelection={true}
          columns={orderColumns}
          data={Ordersinfo.status?.length > 0 ? filteredData : data}
          // data={data}
          scroll={{
            x: 700,
          }}
          pagination={{
            current: page,
            pageSize: pageSize,
            showTotal: showTotal,
            pageSizeOptions: [5, 10, 15, 20],
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        // onChange= {handleIdChange}
        />
      </div>
    </Layout>
  );
}

export default Refunds;