import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2"

// import SideDrawer from "../../components/drawer";
import { Select } from "antd";
import {
  // getAllAssign,
  // getAllCompany,
  editComplaints,
  createComplaints,
  getAllComplaints
  
} from "../complaints.action";
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-left',
  iconColor: 'white',
  background: 'green',
  color: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true
})
function EditComplaints({  setView,setEdit }) {
  
  const [fileUpload, setFileUpload] = useState(null);
  const [saveErr, setSaveErr] = useState(false);
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState(false);
  const editData = useSelector((state) => state.complaintReducer.editComplaints);
  const onClose = () => {
    setView(false);
  };
  
//  console.log(complaintData, "complaintDataddfgdh===")
  const [complaintData, setBusinessData] = useState({
    complaint : "",
    customerName : "",
    complaintPriority : "",
    complaintDescription : "",
    complaintIssueDoc : "",
    orderId : "",
    Date : "",
    complaintStatus : "",
  });
  console.log("complaintData-=-=-=--=", complaintData)
  // const handleClick = () => {
  //   if(!errMsg){
  //     dispatch(editComplaints(complaintData));
  //     console.log("save===============", complaintData);
  //   }
  // }
  useEffect(() => {
    if(editData && editData.length !== 0){
  console.log("editdata=======", editData)
      const data = {
        complaint : editData?.complaint,
        customerName : editData?.customerName,
        complaintPriority : editData?.complaintPriority,
        complaintDescription : editData?.complaintDescription,
        complaintIssueDoc : editData?.complaintIssueDoc,
        orderId : editData?.orderId,
        Date : editData?.Date,
        complaintStatus : editData?.complaintStatus,
      }
      setBusinessData(data);
    }
  }, [editData])
  const typeData = [
    {
      id: 1,
      label: "type",
    },
    {
      id: 2,
      label: "Digital Agency",
    },
    {
      id: 3,
      label: "IT",
    },
  ];

  return (
    <div className="add-business md:m-3 m-0">
      <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
        <i onClick={onClose} className="ri-close-line ri-xl text-black" />
      </div>
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        {/* Form -1 */}
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-auto">
          <h1 className="font-bold text-[16px] pt-5  pl-5">Edit Complaint</h1>
          <div className="lg:p-5 sm:p-3 p-2">
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
                Complaint
              </label>
              <input
                value={complaintData.complaint}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Enter Complaint"
                name="complaint"
                onChange={(e) => {
                  let item = e.target.value;
                  setBusinessData((pre) => {
                    return { ...pre, complaint: e.target.value };
                  });
                  if (!(item.length > 0)) {
                    setErrMsg(true)
                  }
                  else {
                    setErrMsg(false);
                  }
                 
                }}              />
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block  text-sm font-medium text-textcolor"
              >
                Customer Name
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="sahil"
                name="CustomerName"
               value= {complaintData.customerName}
               onChange={(e) => {
                let item = e.target.value;
                setBusinessData((pre) => {
                  return { ...pre, customerName: e.target.value };
                });
                if (!(item.length > 0)) {
                  setErrMsg(true)
                }
                else {
                  setErrMsg(false);
                }
               
              }}          
              />
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="type"
                className="block text-sm font-medium text-textcolor"
              >
                Priority
              </label>
              <select
                name="type"
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                value= {complaintData.complaintPriority}
                onChange={(e) => {
                  let item = e.target.value;
                  setBusinessData((pre) => {
                    console.log("setBusinessData==", setBusinessData)
                    return { ...pre, complaintPriority: e.target.value };
                    
                  });
                  if (!(item.length > 0)) {
                    setErrMsg(true)
                  }
                  else {
                    setErrMsg(false);
                  }
                 
                }}          
              >
                {typeData.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
            </div>
          
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block text-sm font-medium text-textcolor"
              >
                Order ID
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="OID013D"
                name="CompanyName"
                value= {complaintData.orderId}
                onChange={(e) => {
                  let item = e.target.value;
                  setBusinessData((pre) => {
                    return { ...pre, orderId: e.target.value };
                  });
                  if (!(item.length > 0)) {
                    setErrMsg(true)
                  }
                  else {
                    setErrMsg(false);
                  }
                 
                }}          
              />
            </div>
          </div>
        </div>

        {/* Form -2  */}
        <div className="  lg:w-2/3 sm:w-3/5  w-full ">
          <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span onClick={onClose}>Cancel</span>
            </button>
            {/* <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
              onClick={handleClick}

            >
              Save
            </button> */}
             <button
              onMouseEnter={() => {
                if (complaintData.length <= 0) {
                  setSaveErr(true);
                } else {
                  setSaveErr(false);
                }
              }}
              onClick={() => {
                if (complaintData.length <= 0) {
                  setSaveErr(true);
                } else {
                  // setSaveErr(false);
                  dispatch(editComplaints(editData.id, complaintData));
                     Toast.fire({
                       icon: 'success',
                       title: '',
                       text: 'complaints updated sucessfully',
                      })
                  console.log("editcomplaints======", editData.id)
                  dispatch(getAllComplaints);
                  setView(false);
                  setEdit(false);
                }
              }}
              type="submit"
              className={`ant-btn ant-btn-default bg-primary text-white ${
                saveErr && "cursor-not-allowed"
              } `}
            >
              Update
            </button>
          </div>
          <div className=" md:p-8 p-2">
            {/* Financial Details */}
            <div className="relative z-0 lg:mb-4 sm:mb-4 mb-4">
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-textcolor"
              >
                Description
              </label>
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
                value= {complaintData.complaintDescription}                

                onChange={(e) => {
                  let item = e.target.value;
                  setBusinessData((pre) => {
                    return { ...pre, complaintDescription: e.target.value };
                  });
                  if (!(item.length > 0)) {
                    setErrMsg(true)
                  }
                  else {
                    setErrMsg(false);
                  }
                 
                }}          
              />
            </div>
            <div className="relative z-0 py-5">
              <label
                for="name"
                className="block text-sm font-medium text-textcolor"
              >
                Date
              </label>

               <input
                type="date"
                id="Date"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                name="date"
                value= {complaintData?.Date}                  

                onChange={(e) => {
                  let item = e.target.value;

                  setBusinessData((pre) => {
                    return { ...pre, Date: e.target.value };
                  });

                  if (!(item.length > 0)) {
                    setErrMsg(true)
                  }
                  else {
                    setErrMsg(false);
                  }
                 
                }}          
              />
              
            </div>
            <div className="py-4">
              <h1 className="font-bold text-base">Files</h1>
              <div className="lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1">
                <div className="relative mb-8">
                  <label
                    for="invoice"
                    className="block mb-2 py-2 text-sm font-medium text-textcolor pb-3">
                    complaintIssueDoc
                  </label>
                  <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                    
                    <div>
                      <label for={"file-dropzone"}>
                        <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                          Browse Files
                     {complaintData.complaintIssueDoc}

                        </div>
                        <input
                          id="file-dropzone"
                          type="file"
                          className="hidden"
                          // value= {complaintData.complaintIssueDoc}

                          // value= {complaintData.complaintIssueImage}
                          onChange={(e) => {
                            let item = e.target.value;
                            setBusinessData((pre) => {
                              return { ...pre, complaintIssueDoc: e.target.value };
                            });
          
                            if (!(item.length > 0)) {
                              setErrMsg(true)
                            }
                            else {
                              setErrMsg(false);
                            }
                           
                          }}          
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditComplaints;
