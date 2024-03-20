import React, { useState } from "react";
import './header.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import User from '../../assets/Images/user.png';

export default function Header(props) {
  const [showSideBar, setShowSideBar] = useState(true);
  const onHandleClick = () => {
    setShowSideBar(false)
  }
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';



  return (
    <div className="hidden md:block lg:block xl:block 2xl:block">
      <div className="flex  h-14 justify-between border-b  border-bordercolor ">
        <div className="flex ml-10 relative items-center ">
          <input
            className="h-8 border border-solid rounded pr-8 pl-10 outline-none w-full"
            placeholder="Search"
          />

          <div className="left-[10px] absolute ">
            <i className="ri-search-line items-center ri-lg"></i>
          </div>
        </div>
        <div className=" w-40 items-center md:mx-0 flex py-2  relative ">
          <i className="ri-notification-line ri-lg ml-10 text-blue-500"></i>
          <div className="group relative ml-10 hover:bg-[#FAFAFA]">
            <button className="text-black rounded w-[32px]   leading-[48px]">
              <img src={User} className="rounded-full" alt="user" />
            </button>
            <nav tabindex="0" className="absolute z-[9999] right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
              <ul className="py-1 PX-5">
                <li>
                  <a href="/" className="block px-4 py-2 ">
                    <i className="ri-user-line ri-lg mr-1.5 align-sub"></i>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="/Settings" className="block px-4 py-2 ">
                    <i className="ri-settings-5-line ri-lg mr-1.5 align-sub"></i>
                    Settings
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
      <div className=" flex border-b border-solid border-bordercolor flex-row justify-end items-center">
        <Space direction="vertical border-l border-solid border-bordercolor  border-r border-solid border-bordercolor" size={12}>

          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} bordered={false}
          />
        </Space>
        <div className=" flex  relative border-r border-solid border-bordercolor  items-center">
          <select id="countries" className="bg-white-50 w-28  text-textcolor text-[16px] font-semibold rounded-lg focus:ring-primary focus:border-bordercolor block  pl-4  dark:border-bordercolor dark:text-white dark:focus:ring-bordercolor dark:focus:border-bordercolor focus-visible:outline-bordercolor focus-visible:outline-0">
            <option selected>Device all</option>
            <option>Date</option>
            <option>Device</option>
            <option>Save All</option>
          </select>
          <select id="countries" className="bg-white-50 h-14 w-32  text-textcolor text-[16px] font-semibold rounded-lg focus:ring-primary focus:border-bordercolor block  pl-4  dark:border-bordercolor dark:text-white dark:focus:ring-bordercolor dark:focus:border-bordercolor focus-visible:outline-bordercolor focus-visible:outline-0">
            <option selected>Channel all</option>
            <option>Date</option>
            <option>Device</option>
            <option>Save All</option>

          </select>
        </div>

        <i className="ri-filter-2-fill ml-4 ri-lg w-14"></i>
      </div>
    </div>
  )
}