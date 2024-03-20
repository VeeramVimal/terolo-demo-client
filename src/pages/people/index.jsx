import { Divider } from "antd";
import { PaginationComp } from "../../components/pagination/pagination";
import React, { useState, useEffect } from "react";
import { SEARCH_LINE, CLOSE_FILL } from "../../assets/Images";
import Layout from "../../components/layout";
import Tables from "../../components/table";
import AddPeople from "./addPeople/index";
import SideDrawer from "../../components/drawer";
import { userData, userColumns } from "../../mockData/people";
import GridView from "./gridView/gridData";

function People(props) {
  const [gridView, setGridView] = useState(true);
  const [Query, setQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState(userData);
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState(100);

  useEffect(() => {
    if (Query) {
      const SearchData = userData?.filter(
        (item) =>
          item.price.toLowerCase().includes(Query.toLowerCase()) ||
          item.company.toLowerCase().includes(Query.toLowerCase()) ||
          item.company.toLowerCase().includes(Query.toLowerCase())
      );
      setSearchFilter(SearchData);
    }
    if (Query === "") {
      setSearchFilter(userData);
    }
  }, [Query]);

  const handleSearchValue = (e) => {
    e.preventdefault();
    setQuery(e.target.value);
  };

  const handleFilterValue = (e) => {
    e.preventdefault();
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showTotal = (pages, range) => {
    return `No of records: ${range[0]}-${range[1]} of ${pages} `;
  };
  const TableListView = () => {
    setGridView(true);
  };

  const TableGridView = () => {
    setGridView(false);
  };

  return (
    <Layout>
      {open && (
        <SideDrawer
          placement="right"
          width={"70%"}
          headerStyle={{ padding: "0px" }}
          closeIcon={
            <i
              class="ri-close-line ri-1x absolute z-40 left-3 top-3 "
              onClick={onClose}
            />
          }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "white" }}
        >
          {" "}
          <AddPeople onClose={onClose} />{" "}
        </SideDrawer>
      )}

      <div className="flex flex-col  pr-8 ml-10">
        <Divider />
        <div className="flex flex-row justify-between ">
          <div>
            <h1 className="text-xl font-semibold">People</h1>
            <p className="text-base text-gray-400">
              Manage the details of your partners and all kind of employees
            </p>
          </div>
          <div
            className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded "
            onClick={showDrawer}
          >
            <i class="ri-add-line ri-2x"></i>
          </div>
        </div>
        <Divider />
        <div className="flex flex-row justify-between mb-4">
          <div className="flex relative items-center ">
            <input
              className="h-10 border border-solid rounded pr-8 pl-10 outline-none w-full"
              onChange={(event) => handleSearchValue(event)}
              placeholder="search"
            />
            {Query && (
              <div
                className="pt-1 absolute right-1 cursor-pointer"
                onClick={() => setQuery(false)}
              >
                <i class={`ri-${CLOSE_FILL} ri-lg`}></i>
              </div>
            )}
            <div className="left-[10px] absolute  w-3 h-3">
              <i class={`ri-${SEARCH_LINE} ri-lg`}></i>
            </div>
          </div>
          <div className="flex relative items-center justify-between ">
            <div className="bg-gray-200 p-2 h-10 rounded mx-3 flex justify-center items-center text-gray-400">
              <span
                onClick={TableListView}
                className={`${
                  gridView
                    ? "mr-3 bg-gray-50 w-7 h-6 pt-1 pl-1 rounded"
                    : "w-7 h-6 pt-1 pl-1"
                }`}
              >
                <i class="ri-list-unordered ri-lg mt-2"></i>
              </span>
              <span
                onClick={TableGridView}
                className={`${
                  gridView
                    ? "w-7 h-6 pt-1 pl-1"
                    : "ml-3 rounded bg-gray-50 w-7 h-6 pt-1 pl-1"
                }`}
              >
                <i class="ri-layout-grid-line ri-lg mt-2 "></i>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <input
                className="h-10 border border-solid rounded pl-4 outline-none "
                onChange={(event) => {
                  handleFilterValue(event);
                }}
                placeholder="Filter"
              />
              <div className="right-[20px] absolute  w-2 h-3">
                <i class="ri-arrow-down-s-fill ri-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {gridView ? (
          <Tables
            columns={userColumns}
            data={searchFilter}
            pagination={false}
          />
        ) : (
          <GridView data={searchFilter} />
        )}
        <div className="flex justify-center mt-5">
          <PaginationComp
            total={pages}
            showTotal={showTotal}
            defaultCurrent={10}
            defaultPageSize={5}
          />
        </div>
      </div>
    </Layout>
  );
}
export default People;
