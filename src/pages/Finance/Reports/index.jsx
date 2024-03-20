import { Checkbox, Divider, Dropdown, Menu } from "antd";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE } from "../../../assets/Images";
import Layout from "../../../components/layout";
import Tables from "../../../components/table";
import SideDrawer from "../../../components/drawer";
import Addreports from './Addreports/index';
import Viewreports from './Viewreports/index';


const reportData = [
    {
        key: 1,
        Invoice: "INV-3068",
        date: "06 Sept 2022",
        company: "Tcs",
        Reporter: "Maxim Cummings",
        Income: (
            <div >
                12,179.22<i className="ri-arrow-down-line text-red-500"></i>
            </div>
        ),
        status: (
            <div className="bg-red-200 p-0.5 w-20 text-red-500 text-center rounded">
                Cancel
            </div>
        ),
        action: "",
    },
    {
        key: 2,
        Invoice: "INV-3067",
        date: "16 Aug 2022",
        company: "Thinroot",
        Reporter: "Maxim Cummings",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className=" p-0.5 w-20 bg-[#F7F9FF] text-[#6E78AC] text-center rounded">
                Pending
            </div>
        ),
        action: "",
    },
    {
        key: 3,
        Invoice: "INV-3066",
        date: "09 Sept 2022",
        company: "oneux",
        Reporter: "Kenneth Mcconnel",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className="bg-[#F7F9F9] text-[#6E78AC] w-20 p-0.5 text-center rounded">
                Pending
            </div>
        ),
        action: "",
    },
    {
        key: 4,
        Invoice: "INV-3065",
        date: "09 Oct 2022",
        company: "Rippleforce",
        Reporter: "Kenneth Mcconnel",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-down-line ri-2xl text-red-500"></i>
            </div>
        ),
        status: (
            <div className="bg-green-200 p-0.5 w-20 text-green-500 text-center rounded">
                Paid
            </div>
        ),
        action: "",
    },
    {
        key: 5,
        Invoice: "INV-3064",
        date: "06 Sept 2022",
        company: "Human",
        Reporter: "Maxim Cummings",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className="bg-red-200 p-0.5 w-20 text-red-500 text-center rounded">
                Cancel
            </div>
        ),
        action: "",
    },
    {
        key: 6,
        Invoice: "INV-3063",
        date: "09 Oct 2022",
        company: "Moviewood",
        Reporter: "Maxim Cummings",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className="bg-green-200 p-0.5 w-20 text-green-500 text-center rounded">
                Paid
            </div>
        ),
        action: "",
    },
    {
        key: 7,
        Invoice: "INV-3062",
        date: "02 Nov 2022",
        company: "Tcs",
        Reporter: "Kenneth Mcconnel",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className="bg-green-200 p-0.5 w-20 text-green-500  text-center rounded">
                Paid
            </div>
        ),
        action: "",
    },
    {
        key: 8,
        Invoice: "INV-3061",
        date: "08 Nov 2022",
        company: "Tcs",
        Reporter: "Kenneth Mcconnel",
        Income: (
            <div >
                22,179.22<i className="ri-arrow-up-line ri-2xl text-green-500"></i>
            </div>
        ),
        status: (
            <div className="bg-green-200 p-0.5 w-20 text-green-500  text-center rounded">
                Paid
            </div>
        ),
        action: "",
    },
];

function Reports() {
  const [data, setData] = useState(reportData);
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
    const filterData = data.filter((item) => {
      checkedStatus.map((val) => {
        if (val.toLowerCase() === item.status.props.children.toLowerCase()) {
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
          item.customer.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase()) ||
          item.company.toLowerCase().includes(query.toLowerCase())
      );
      setData(searchData);
    }
    if (query === "") {
      setData(reportData);
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
      label: "Cancel",
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
      title: "INVOICE",
      dataIndex: "Invoice",
      key: "Invoice",
      sorter: (a, b) => {
        return a.Invoice > b.Invoice;
      },
      ellipsis: {
        showTitle: false,
      },
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            showViewPage();
            localStorage.setItem("reportData", JSON.stringify(record));
          },
        };
      },
      responsive: ["xs", "md"],
    },

    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "REPORTER",
      dataIndex: "Reporter",
      key: "Reporter",
      sorter: (a, b) => a.Reporter.localeCompare(b.Reporter),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
    {
      title: "INCOME",
      dataIndex: "Income",
      key: "Income",
      sorter: (a, b) => a.Income.localeCompare(b.Income),
      ellipsis: {
        showTitle: false,
      },
      responsive: ["xs", "md"],
    },
  
    {
        title: "COMPANY",
        dataIndex: "company",
        key: "company",
        sorter: (a, b) => a.company - b.company,
        ellipsis: {
            showTitle: false,
        },
        responsive: ["xs", "md"],
    },

    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status - b.status,
      ellipsis: {
        showTitle: false,
      },
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
          <Addreports setOpen={setOpen} />
        </SideDrawer>
      )}
      {edit && (
        <SideDrawer
          placement="right"
          width={"65%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <i
              className="ri-close-line ri-1x absolute z-40 left-3 top-3 "
              onClick={() => {
                setEdit(false);
              }}
            />
          }
          closable={true}
          visible={edit}
          bodyStyle={{ backgroundColor: "white", padding: "30px" }}
        >
          <Viewreports setEdit={setEdit} />
        </SideDrawer>
      )}
      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">Reports</h1>
            <p className="text-base text-gray-400">
            Manage the details of your reports from all kind of compaines
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

export default Reports;
