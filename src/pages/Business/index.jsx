import React, { useState } from "react";
import Layout from "../../components/layout";
import images from "../../assets/Images/sample_logo.svg";
import SideDrawer from "../../components/drawer";
import AddBusiness from "./AddBusiness/addbusiness";
import { PaginationComp } from "../../components/pagination/pagination";

const CompanyData = [

  {
    id: 1,
    image: (images),
    name: "Limitscale Digital",
    category: "Service based",
    type: "Digital Agency",
    Address: "Bangalore, India",
  },

  {
    id: 2,
    image: (images),
    name: "Thinroot Software",
    category: "Service based",
    type: "Digital Agency",
    Address: "Bangalore, India",
  },

  {
    id: 3,
    image: (images),
    name: "ONEUX Creative Studio  ",
    category: "Service based",
    type: "Design Agency",
    Address: "Bangalore, India",
  }
];

const showTotal = (pages, range) => {
  return `No of records: ${range[0]}-${range[1]} of ${pages} `;
};




export default function Home() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
              class="ri-close-line ri-lg absolute z-40 left-3 top-3 "
              onClick={onClose}
            />
          }
          closable={true}
          visible={open}
          bodyStyle={{ backgroundColor: "white" }}
        >
          {" "}
          <AddBusiness onClose={onClose} />{" "}
        </SideDrawer>
      )}
      <div className="mx-10 mt-[7px] ">
        <div className="performance-section pb-8">
          <div className="py-4 border-y border-solid border-[#F0F3F7]">
            <div className="flex">
              <div className="w-4/5">
                <h1 className="text-xl font-semibold mb-1.5">Business</h1>
                <p className="text-base text-[#6E78AC]">Manage the details of your all kind of companies</p>
              </div>
              <div className="w-1/5 flex items-center justify-end">
                <div className="bg-blue-500 w-10 h-10 flex items-center justify-center text-white rounded cursor-pointer" onClick={showDrawer}>
                  <i class="ri-add-line ri-2x"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="business-section">
            <div className="flex relative items-center py-8">
              <input className="h-10 border border-solid rounded pr-8 pl-10 outline-none w-60" placeholder="Search" />
              <div className="left-[10px] absolute  w-3 h-3">
                <i class={`ri-search-line ri-lg`}></i>
              </div>
            </div>
            <div className="grid grid-cols-1  xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-3 overflow-x-hidden">
              {CompanyData.map((item) => {
                return (
                  <div className=" border border-bordercolor border-solid rounded">
                    <div className="flex justify-between p-4 items-center">
                      <div className=" flex ">
                        <img className="w-14 h-14" src={`${item.image}`} />
                      </div>
                      
                    </div>

                    <div className="business-details px-4">
                      <p className="text-[14px] font-bold mb-1">{item.name}</p>
                      <p className="text-[14px] font-semibold mb-1">Category - <span className="text-[14px] font-normal">{item.category}</span></p>
                      <p className="text-[14px] font-semibold mb-1">Type - <span className="text-[14px] font-normal">{item.type}</span></p>
                      <p className="text-[14px] font-semibold mb-1">Location- <span className="text-[14px] font-normal">{item.Address}</span></p>
                    </div>

                    <div className="group pr-3 relative text-right">
                        <button className="text-black rounded"><i class="ri-more-fill font-extrabold ri-xl"></i> </button>
                        <nav tabindex="0" className="absolute bottom-5 right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                          <ul className="py-1 PX-5">
                            <li>
                              <a href="#" className="block px-4 py-2 ">
                                <i class="ri-eye-line ri-lg mr-1.5 align-sub"></i>
                                View
                              </a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2">
                                <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                                Edit
                              </a>
                            </li>

                            <li>
                              <a href="#" className="block px-4 py-2">
                                <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                                Delete
                              </a>
                            </li>

                          </ul>
                        </nav>
                      </div>

                  </div>

                );
              })}
            </div>
          </div>
          {/* Compony Name  Desktop*/}
        </div>



      </div>

      <div className="flex justify-center mt-5">
        <PaginationComp
          total={100}
          showTotal={showTotal}
          defaultCurrent={10}
          defaultPageSize={5}
        />
      </div>
    </Layout>
  );
}
