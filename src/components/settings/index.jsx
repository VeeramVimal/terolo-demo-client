import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LEFTARROW_LOGO } from "../../assets/Images";

const sideNavSetting = [
  {
    id: 1,
    name: "Settings",
    path: "Settings",
  },
  {
    id: 2,
    name: "People",
    path: "settings/peoples",
  },
  {
    id: 3,
    name: "Teams",
    path: "Teams",
  },
  {
    id: 4,
    name: "Spaces",
    path: "Spaces",
  },
  {
    id: 5,
    name: "Import/Export",
    path: "Import/Export",
  },
  {
    id: 6,
    name: "ClickApps",
    path: "ClickApps",
  },
  {
    id: 7,
    name: "Integrations",
    path: "settings/integrations",
  },
  {
    id: 8,
    name: "Upgrade",
    path: "Upgrade",
  },
  {
    id: 9,
    name: "Trash",
    path: "Trash",
  },
  {
    id: 10,
    name: "Security & Permissions",
    path: "Security & Permissions",
  },
];
const sideNavSettingOne = [
  {
    id: 11,
    name: "My Settings",
    path: "My Settings",
  },
  {
    id: 12,
    name: "Workspaces",
    path: "Workspaces",
  },
  {
    id: 13,
    name: "Notifications",
    path: "Notifications",
  },
  {
    id: 14,
    name: "Rewards",
    path: "Rewards",
  },
  {
    id: 15,
    name: "Log out",
    path: "Log out",
  },
];
const sideNavSettingTwo = [
  {
    id: 16,
    name: "Cloud Storage",
    path: "Cloud Storage",
  },
  {
    id: 17,
    name: "Time Tracking",
    path: "Time Tracking",
  },
  {
    id: 18,
    name: "Slack Notifications",
    path: "Slack Notifications",
  },
  {
    id: 19,
    name: "Apps",
    path: "Apps",
  },
  {
    id: 20,
    name: "Calander",
    path: "Calander",
  },
  {
    id: 21,
    name: "Zoom",
    path: "Zoom",
  },
  {
    id:22,
    name:"Expenses",
    path:"Expenses",
  },
];

const Settings = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <nav className="bg-[#f7f7f7] py-10">
      <div className="flex justify-center w-1/2">
        <button
          class="bg-purple-600 hover:bg-blue-600 text-white font-bold py-0.5 px-3 rounded-full cursor-pointer items-center justify-center inline-flex"
          onClick={() => navigate('/')}
        >
          <div className="mt-0.5">
            <i className={`ri-${LEFTARROW_LOGO}`}></i>
          </div>
          <span className="text-xs font-normal">BACK</span>
        </button>
      </div>
      <div className="mx-8 my-5 flex flex-col ">
        {/* <div className="overflow-y-scroll max-h-screen"> */}
          <text className="font-medium text-xl py-5">Settings</text>
          <div className="  flex-col text-sm cursor-pointer mt-4">
            <text className="text-purple-600 font-medium text-base pb-1.5 ">
              WORK SPACE AUTO
            </text>
            {sideNavSetting.map((item) => {
              return (
                <div
                  onClick={() => setSelectedTab(item.id)}
                  className="my-1 py-2.5 "
                >
                  <text
                    className={`text-[#a19da8] text-sm hover:text-black ${
                      selectedTab === item.id && "font-bold text-[#554f5f]"
                    }`}
                    onClick={() => {
                      navigate(`/${item.path}`);
                    }}
                  >
                    {item.name}
                  </text>
                </div>
              );
            })}
          </div>
          <hr />
          <div className=" my-5 flex-col text-sm cursor-pointer ">
            <text className="text-purple-600 font-medium text-base pb-1.5">
              MY WORKSPACE
            </text>
            {sideNavSettingOne.map((item) => {
              return (
                <div
                  onClick={() => setSelectedTab(item.id)}
                  className="my-1 py-2.5 "
                >
                  <text
                    className={`text-[#a19da8] text-sm hover:text-black ${
                      selectedTab === item.id && "font-bold text-[#554f5f]"
                    }`}
                  >
                    {item.name}
                  </text>
                </div>
              );
            })}
          </div>
          <hr />
          <div className=" my-5 flex-col text-sm cursor-pointer ">
            <text className="text-purple-600 font-medium text-base pb-1.5">
              MY APPS
            </text>
            {sideNavSettingTwo.map((item) => {
              return (
                <div
                  onClick={() => setSelectedTab(item.id)}
                  className="my-1 py-2.5 "
                >
                  <text
                    className={`text-[#a19da8] text-sm hover:text-black ${
                      selectedTab === item.id && "font-bold text-[#554f5f]"
                    }`}
                  >
                    {item.name}
                  </text>
                </div>
              );
            })}
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Settings;
