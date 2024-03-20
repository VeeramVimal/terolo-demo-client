
import React, { useState } from 'react';
import SideDrawer from "../../components/drawer";
import SideBar from '../sidebar';
import terolo from "../../assets/Images/bm.png"
import './header.css'
import User from '../../assets/Images/user.png';

export default function Mobilenavbar() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className="  visible sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
       <div className='flex justify-between space-x-1 items-center border-b-2 border-solid border-bordercolor '>
       <img src={terolo} alt="Terolo logo" className='w-8 ml-3 h-8'/>

       <div className="flex  h-14 justify-between  ">
        <div className="flex  relative items-center ">
          <input
            className="h-8 border border-solid rounded pr-8 pl-10 outline-none w-28"
            placeholder="Search"
          />

          <div className="left-[10px] absolute ">
            <i className="ri-search-line ri-lg"></i>
          </div>
        </div>
        <div className="   items-center md:mx-0 flex py-2  relative ">
          <div className="group relative  hover:bg-[#FAFAFA]">
            <button className="text-black ml-3 rounded w-[32px]   leading-[48px]">
              <img src={User} className="rounded-full" alt="user" />
            </button>
            <nav tabindex="0" className="absolute right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
              <ul className="py-1 PX-5">
                <li>
                  <a href="/" className="block px-4 py-2 ">
                    <i className="ri-user-line ri-lg mr-1.5 align-sub"></i>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2">
                    <i className="ri-logout-circle-r-line  ri-lg mr-1.5 align-sub"></i>
                    Logout
                  </a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
        </div>
            {open && (
                <SideDrawer
                    className="drawer_styles"
                    placement="left"
                    headerStyle={{ padding: "" }}
                    closeIcon={
                        <i className="ri-close-circle-line ri-xl text-textcolor content-end top-[3px]" onClick={onClose} title="Close the app launcher" />
                    }

                    // title="Oneapp"

                    closable={true}
                    visible={open}
                    bodyStyle={{ backgroundColor: "white" }}
                >
                    {" "}
                    <SideBar onClose={onClose} />{" "}
                </SideDrawer>
            )}
        
            <nav className="bg-white rounded dark:bg-gray-900">
                <div className="flex flex-wrap items-center mx-auto ">

                    <div className="leading-[48px] hover:bg-[#FAFAFA]">
                        <button className=" min-w-[64px]" title="App launcher" onClick={showDrawer}>
                            <i className="ri-menu-3-line ri-xl  top-1"></i>
                        </button>
                    </div>
                  
                </div>
            </nav>
            </div>

        </div>
    )
}