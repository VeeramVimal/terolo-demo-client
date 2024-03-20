import Button from "../components/button";
import homeIcon from "../../src/assets/Images/home.svg";
import bellIcon from "../../src/assets/Images/bell.svg";
import WirelessIcon from "../../src/assets/Images/wireless.svg";
import goalsIcon from "../../src/assets/Images/goals.svg";
import archivedIcon from "../../src/assets/Images/archived.svg";
import layoutIcon from "../../src/assets/Images/layout.svg";
import darkbarIcon from "../../src/assets/Images/darkbar.svg";
import { ADD_LOGO } from "../assets/Images";

export const listData = [
    {
      key: 1,
      label: "My Settings",
      path: "settings/mysettings",
    },
    {
      key: 2,
      label: "Notifications",
      path: "settings/notification",
    },
    {
      key: 3,
      label: "Layout size & style",
      path: "settings/layoutSize",
    },
    {
      key: 4,
      label: "Apps",
      path: "settings/Apps",
    },
    {
      key: 5,
      label: "Rewards",
      path: "settings/Rewards",
    },
    {
      key: 6,
      label: "Log out",
      path: "settings/logout",
    },
  ];
  
 export const workSpaceData = [
    {
      key: 1,
      label: "Settings",
      path: "settings/setting",
    },
    {
      key: 2,
      label: "Import/Export",
      path: "settings/Import",
    },
    {
      key: 3,
      label: (
        <div className="flex h-7">
          <div>People </div>
          <i
            className={`ri-user-add-line bg-gradient-to-r from-[#8930fd] to-[#49ccf9] text-white h-6 rounded-sm w-[70px] mx-3 px-2 `}
          >
            <span className="mx-1 font-bold">Invite</span>
          </i>
        </div>
      ),
      path: "settings/Peoples",
    },
    {
      key: 4,
      label: "ClickApps",
      path: "settings/clickapps",
    },
    {
      key: 5,
      label: "Spaces",
      path: "settings/Spacess",
    },
    {
      key: 6,
      label: "Integration",
      path: "settings/Integration",
    },
    {
      key: 7,
      label: "Template Center",
      path: "/template",
    },
    {
      key: 8,
      label: "Trash",
      path: "/trash",
    },
    {
      key: 9,
      label: (
        <Button
          buttonText={"Upgrade"}
          buttonStyle={
            "w-full h-6 items-center justify-center px-6  font-medium rounded-md bg-violet-500 text-white hover:bg-violet-500"
          }
        />
      ),
      path: "/Upgrade",
    },
    {
      key: 10,
      label: "Security & Permissions",
      path: "/permissions",
    },
    {
      Key:11,
      label:"Expenses",
      path:"/Expenses",
    },
  ];
  
 export const sideBarMenu = [
    {
      id: 1,
      name: "Home",
      path: "Home",
      image: homeIcon,
    },
    {
      id: 2,
      name: "Notifications",
      path: "Notifications",
      image: bellIcon,
    },
    {
      id: 3,
      name: "Pulse",
      path: "Pulse",
      image: WirelessIcon,
    },
    {
      id: 4,
      name: "Goals",
      path: "Goals",
      image: goalsIcon,
    },
  ];
  
 export const dropDownList = [
    {
      id: 1,
      name: "Show archived",
      image: archivedIcon,
      path: "/show",
    },
    {
      id: 2,
      name: "Layout size & style",
      image: layoutIcon,
      path: "/",
    },
    {
      id: 3,
      name: "Dark side(Bar)",
      image: darkbarIcon,
      path: "/",
    },
  ];
  
 export const sideDrawerList = [
    {
      id: 1,
      name: "favorites",
      subText:
        "You don't have any favorites yet. Learn how to create one and hide this.",
      isButtonAvail: false,
      buttonText: "",
      image: "",
    },
    {
      id: 2,
      name: "spaces",
      subText: "",
      isButtonAvail: true,
      buttonText: "New Space",
      subList: [
        {
          label: "Space 1",
          spaceId: "2212321",
          color: "violet-500",
          lists: [
            {
              listName: "List 1",
              listId: "3321123",
            },
            {
              listName: "List 6",
              listId: "9912112",
            },
          ],
        },
        {
          label: "Space 2",
          spaceId: "2234121",
          color: "green-500",
          lists: [
            {
              listName: "List 3",
              listId: "4244112",
            },
          ],
        },
        {
          label: "Space 3",
          spaceId: "5542213",
          color: "gray-500",
          lists: [
            {
              listName: "List 4",
              listId: "5124112",
            },
          ],
        },
      ],
      image: "",
    },
    {
      id: 3,
      name: "dashboard",
      subText: "",
      isButtonAvail: true,
      buttonText: "MyDashboard",
      image: ADD_LOGO,
    },
    {
      id: 4,
      name: "docs",
      subText: "",
      isButtonAvail: true,
      buttonText: "AddNew",
      image: "",
    },
  ];
  