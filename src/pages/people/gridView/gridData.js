import { Card, Checkbox, Dropdown, Menu, Modal, Button } from "antd";
import { useState } from "react";
import imag1 from "../../../assets/Images/dummy.png";
import SideDrawer from "../../../components/drawer";
import ViewDetails from "../viewPeople/index";
import EditDetails from "../editPeople";

const { confirm } = Modal;
const GridView = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

 

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleCheckBox = (e, key) => {
    let temp = { [key]: e.target.checked };
    setChecked({ ...checked, ...temp });
    setDropdownOpen(true);
  };

  const menu = (
    <Menu
      className="dropdown-bg w-40 pl-6 "
      items={[
        {
          label: (
            <ul className="flex items-center px-2 ">
              <li className="text-sm font-normal" type="" onClick={showDrawer}>
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
              <li className="text-sm font-normal " onClick={showDrawer}>
                <i class="ri-pencil-line ri-lg mr-1.5 align-sub"></i>
                edit
              </li>
            </ul>
          ),
          key: "2",
        },
        {
          label: (
            <ul className="flex items-center px-2">
              <li className="text-sm font-normal ">
              <i class="ri-honor-of-kings-line ri-lg mr-1.5 align-sub"></i>disable</li>
            </ul>
          ),
          key: "3",
        },
        {
          label: (
            <ul className="flex items-center px-2">
              <li
                className="text-sm font-normal"
                onClick={() => setModalOpen(true)}
              >
                <i class="ri-delete-bin-line ri-lg mr-1.5 align-sub"></i>
                delete
              </li>
            </ul>
          ),
          key: "4",
        },
      ]}
    />
  );

  return (
    <div className="grid grid-cols-4 gap-10 md:grid-cols-2 lg:grid-cols-4 sx:grid-cols-1 ">
      {props.data.map((item, idx) => {
        return (
          <Card
            hoverable
            className="mb-5 mx- text-center"
            key={idx}
            style={{
              width: "97%",
              height: "100%",
            }}
          >
            <div className="mt-0 items-center">
              <div className="flex flex-row justify-evenly relative mb-4 ">
                <Checkbox
                  key={item.key}
                  onChange={(e) => handleCheckBox(e, item.key)}
                  checked={
                    checked && checked[item.key] ? checked[item.key] : false
                  }
                />
                <p className="mx-4">{item.status}</p>
                <Dropdown overlay={menu} trigger={"click"} placement={"bottom"}>
                  <span className="pb-2" onClick={() => setDropdownOpen(true)}>
                    <i class="ri-more-fill font-extrabold ri-1x"></i>{" "}
                  </span>
                </Dropdown>
              </div>
              <div className="flex mb-8 justify-center">
                <img
                  src={imag1}
                  alt="image"
                  width="25%"
                  height="38%"
                  className="rounded-full shadow-sm "
                />
              </div>
              <div className="justify-center">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="my-2 text-blue-700 font-semibold uppercase">
                  {item.designation}
                </p>
                <div className=" flex mt-3 items-center justify-center">
                  <p className="w-32  items-center">{item.company}</p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
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
          <EditDetails onClose={onClose} />{" "}
        </SideDrawer>
      )}
      {modalOpen ?       <Modal
        footer={null}
        centered
        visible={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
      <div className="flex-col justify-center ">
        <p className="ml-52 font-bold text-lg mb-3">Delete?</p>
       <p className="ml-28 mb-3 font-medium text-gray-400">Are you sure delete Abhishek from People?</p>
       <div>
        <Button className="ml-40 mr-3 bg-gray-200 rounded border-0 text-gray-600 font-semibold"  onClick={()=>setModalOpen(false)}>Cancel</Button>
        <Button className="ml-3 bg-gray-300 rounded border-0 text-red-600 font-bold" onClick={()=>setModalOpen(false)}>Delete</Button>
       </div>
      </div>
      </Modal> : ""}
    </div>
  );
};

export default GridView;
