import React, { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashbord from "../../assets/Images/dashboard.svg";
import archivedIcon from "../../assets/Images/archived.svg";
import layoutIcon from "../../assets/Images/layout.svg";
import darkbarIcon from "../../assets/Images/darkbar.svg";
import images from '../../assets/Images/user.png';
import performance from "../../assets/Images/performance-chart.svg";
import business from "../../assets/Images/business.svg";
import subscription from "../../assets/Images/subscription.svg";
import people from "../../assets/Images/people.svg";
import expenses from "../../assets/Images/expenses.svg";
import notification from "../../assets/Images/notification.svg";
import customers from "../../assets/Images/customers.svg";
import orders from "../../assets/Images/orders.svg";
import users from "../../assets/Images/users.svg";
import settings from "../../assets/Images/settings.svg";
import logout from "../../assets/Images/logout.svg";
// import settingsIcon from "../../assets/Images/settings.svg";
// import searchIcon from "../../assets/Images/search.svg";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Tooltip } from "antd";
import terolo from "../../assets/Images/bm.png"
import './sidebar.css'

const analyticsMenu = [

  {
    id: 1,
    name: "dashboard",
    path: "Dashboard",
    image: dashbord,
  },
  {
    id: 2,
    name: "performance",
    path: "Performance",
    image: performance,
  },

];
const creationsMenu = [

  {
    id: 1,
    name: "customers",
    path: "Customers",
    image: customers,
  },
  {
    id: 2,
    name: "subscriptions",
    path: "Subscriptions",
    image: subscription,
  },
  {
    id: 3,
    name: "orders",
    path: "orders",
    image: people,
  },


];
const AdministrationMenu = [

  {
    id: 1,
    name: "payments",
    path: "payments",
    image: settings,
  },
  {
    id: 2,
    name: "refunds",
    path: "refunds",
    image: logout,
  },
  {
    id: 3,
    name: "payment grievances",
    path: "payment grievances",
    image: settings,
  },
  {
    id: 4,
    name: "reports",
    path: "reports",
    image: logout,
  },
];

const SettingMenu = [

  {
    id: 1,
    name: "tickets",
    path: "tickets",
    image: settings,
  },
  {
    id: 2,
    name: "complaints",
    path: "complaints",
    image: logout,
  },
];

const Webapp = [

  {
    id: 1,
    name: "web notifications",
    path: "web-notifications",
    image: notification,
  },
  {
    id: 2,
    name: "mobile notifications",
    path: "mobile-notifications",
    image: notification,
  },
];

const dropDownList = [
  {
    id: 1,
    name: "Show archived",
    image: archivedIcon,
  },
  {
    id: 2,
    name: "Layout size & style",
    image: layoutIcon,
  },
  {
    id: 3,
    name: "Dark side(Bar)",
    image: darkbarIcon,
  },
];



export default function SideBar() {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const current_path = location.pathname;
  const [showSideBar, setShowSideBar] = useState(true);
  const [showLess, setShowLess] = useState({
    isShow: true,
    showLength: analyticsMenu.length,
  });
  const [showDropDown, setshowDropDown] = useState({
    isFavorites: false,
    isSpaces: false,
    isDachboards: false,
    isDocs: false,
  });
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [selectedtab, setSelectedtab] = useState([]);

  const drawerDropdownListUpdate = (item) => {
    if (selectedtab.some((el) => el.id === item.id)) {
      const newList = selectedtab.filter((value) => value.id !== item.id);
      setSelectedtab(newList);
    } else {
      setSelectedtab([
        ...selectedtab,
        {
          id: item.id,
          open: true,
        },
      ]);
    }
  };

  const isDropDownClicked = (item) => {
    return selectedtab.some((el) => el.id === item.id);
  };

  const DropDown = useCallback(() => {
    return (
      <div
        className={
          "z-50 min-w-fit absolute top-14 p-4 text-md list-none bg-white rounded shadow dark:bg-gray-700"
        }
        id="dropdown"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="top"
        onClick={() => {
          setShowModal(true);
          setIsClicked(!isClicked);
        }}
      >
        <div className="pl-1 text-[16px] pb-1">
          <text>Side bar settings</text>
        </div>
        {dropDownList.map((item) => {
          return (
            <div className="flex flex-row items-center p-2">
              <img src={item.image} alt={`item.image ${item.id}`} />
              <text className="pl-2 ">{item.name}</text>
            </div>
          );
        })}
      </div>
    );
  }, []);

  return (
    <>
      {showSideBar ? (
        <div className="sidebar_styles sticky ">
          <div className="md:w-72 w-80 border-r overflow-y-auto border-gray-200 h-screen bg-white flex flex-col scroll-style">
            <div className=" p-7 hidden md:block sm:block lg:block  ">

              <div className="flex items-center bg-white justify-between">
                <img src={terolo} alt="Terolo logo" />
                <div className="flex items-center ">
                  <div
                    className="cursor-pointer content-end "
                    onClick={() => setShowSideBar(false)}
                  >
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                    <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
                  </div>
                </div>
              </div>

            </div>
            <div className="py-2 pl-5">
              <span className="pl-2 text-[12px] font-medium text-[#6E78AC]	hover:text-[#3761EE]">ANALYTICS</span>
              {analyticsMenu
                .map((sideMenu, index) => {
                  return (
                    <div className={`
                  ${current_path.includes(sideMenu.path)
                        ? "  pt-2 border-r-4  border-primary w-25 text-[#3761EE] font-medium landing-3"
                        : " pt-2 flex  text-[#21304F] landing-3	hover:text-[#3761EE] font-medium"
                      }`}>
                      <div className="p-2 flex flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link className="ml-3 uppercase" to={`/${sideMenu.path}`}>
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="pl-5 mt-2">
              <span className="pl-2 text-[12px]  font-medium text-[#6E78AC] 	hover:text-[#3761EE]">SALES</span>
              {creationsMenu
                .map((sideMenu, index) => {
                  return (
                    <div className={`
                  ${current_path.includes(sideMenu.path)
                        ? " pt-2  border-r-4  border-primary w-25 text-[#3761EE] font-medium	 "
                        : " pt-2 flex  text-[#21304F]	hover:text-[#3761EE] font-medium"
                      }`}>
                      <div className="p-2 flex flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link className="ml-3 uppercase" to={`/${sideMenu.path}`}>
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="pl-5 mt-4">
              <span className="pl-2 text-[12px]  font-medium text-[#6E78AC]	hover:text-[#3761EE]">FINANCE</span>
              {AdministrationMenu
                // .slice(0, showLess.showLength)
                .map((sideMenu, index) => {
                  return (
                    <div className={`
                  ${current_path.includes(sideMenu.path)
                        ? " pt-2  border-r-4  border-primary w-25 text-[#3761EE] font-medium"
                        : " pt-2 flex text-[#21304F]	hover:text-[#3761EE] font-medium"
                      }`}>
                      <div className="p-2 flex flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link className="ml-3 uppercase" to={`/${sideMenu.path}`}>
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="pl-5 mt-4">
              <span className="pl-2 text-[12px]  font-medium text-[#6E78AC]	hover:text-[#3761EE]">HELP DESK</span>
              {SettingMenu
                // .slice(0, showLess.showLength)
                .map((sideMenu, index) => {
                  return (
                    <div className={`
                  ${current_path.includes(sideMenu.path)
                        ? " pt-4 border-r-4 font-Jakarta border-[#3761EE] w-25 text-[#21304F] font-medium"
                        : " flex font-Jakarta text-[#21304F]	hover:text-[#3761EE] font-medium"
                      }`}>
                      <div className="p-2 flex w-10 h-10 flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link className="ml-3 uppercase" to={`/${sideMenu.path}`}>
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
           
            <div className="pl-5 mt-4">
              <span className="pl-2 text-[12px]  font-medium text-[#6E78AC]	hover:text-[#3761EE]">NOTIFICATIONS</span>
              {Webapp
                // .slice(0, showLess.showLength)
                .map((sideMenu, index) => {
                  return (
                    <div className={`
                  ${current_path.includes(sideMenu.path)
                        ? " pt-4 border-r-4 font-Jakarta border-[#3761EE] w-25 text-[#21304F] font-medium"
                        : " flex font-Jakarta text-[#21304F]	hover:text-[#3761EE] font-medium"
                      }`}>
                      <div className="p-2 flex  h-10 flex-row items-center text-[12px]">
                        <img
                          src={sideMenu.image}
                          alt={`sideMenu.image ${index}`}
                        />
                        <Link className="ml-3 uppercase" to={`/${sideMenu.path}`}>
                          {sideMenu.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <>
          {width > 446 ? (
            <div className="w-12 items-center border-r border-gray-200 h-screen bg-white flex flex-col p-5">
              <div
                className="cursor-pointer rotate-180"
                onClick={() => setShowSideBar(true)}
              >
                <i className="ri-arrow-left-s-line text-2xl"></i>
                <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
              </div>
              {analyticsMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement='right'>
                      <img
                        className="max-w-none "
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {creationsMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement='right'>
                      <img
                        className="max-w-none "
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
              {AdministrationMenu.map((item) => {
                return (
                  <div key={item.id} className="hidden sm:block  p-4 bg-none">
                    <Tooltip title={`${item.name}`} placement='right'>
                      <img
                        className="max-w-none "
                        src={item.image}
                        alt={`item-${item.id}`}
                      />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="cursor-pointer rotate-180"
              onClick={() => setShowSideBar(true)}
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
              <i className="ri-arrow-left-s-line text-2xl -ml-4"></i>
            </div>
          )}
        </>
      )}
    </>
  );
}