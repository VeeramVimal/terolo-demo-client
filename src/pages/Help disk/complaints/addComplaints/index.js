import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { createComplaints, fileUploadApi } from "../complaints.action"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditorState, ContentState, convertFromHTML, convertToRaw } from "draft-js"
import CustomEditor from "../../../../components/customEditor";
import draftToHtml from 'draftjs-to-html';
import DOWNLOAD from '../../../../assets/Images/download.png';
import PHOTO from '../../../../assets/Images/photo.png';
import PDF from '../../../../assets/Images/pdf.png'
const { Option } = Select;

const AddComplaints = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [projectSummaryValue, setProjectSummaryValue] = useState(EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML('')
    )
  ))
  const handleProjectSummaryChange = orderData => {
    setProjectSummaryValue(orderData)

  }
  useEffect(() => {
    setOrderData({ ...orderData, complaintDescription: draftToHtml(convertToRaw(projectSummaryValue.getCurrentContent())) })
  }, [projectSummaryValue])
  const [fileUploadDoc, setFileUploadDoc] = useState(null);
  const [fileTypeDoc, setFileTypeDoc] = useState(null);
  const [fileDocPath, setFileDocPath] = useState(null);
  const [saveErr, setSaveErr] = useState(false);
  const [complaintIssueDoc, setComplaintIssueDoc] = useState(null);
  const [setField, setFieldValue] = useState();
  const data = useSelector((state) => {
    if (state.complaintReducer.fileData) {
      return state.complaintReducer.fileData[0];
    }
    return null;
  });
  console.log("data-----",data);
 
  const complaintPriority = [
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
  const [errMsg, setErrMsg] = useState({

    complaint: false,
    customerName: false,
    complaintPriority: false,
    complaintDescription: false,
    complaintIssueImage: false,
    complaintIssueDoc: false,
    orderId: false,
    Date: false,
    complaintStatus: false,

  })
  const [orderData, setOrderData] = useState({

    complaint: "",
    customerName: "",
    complaintPriority: "",
    complaintDescription: "",
    complaintIssueImage: "ticketIssueImage-5eb5ef15-22de-4ead-b4db-7ee526304823.png",
    complaintIssueDoc: "",
    orderId: "",
    Date: "",
    complaintStatus: "Available",

  })

  const handleInput = (e) => {
    let item = e.target.value;
    setOrderData((preprops) => ({
      ...preprops,
      [e.target.name]: e.target.value,
    }));
    if (!(item.length > 0)) {
      setErrMsg((pre) => {
        return { ...pre, [e.target.name]: true };
      });
      setSaveErr(true);
    } else {
      setErrMsg((pre) => {
        return { ...pre, [e.target.name]: false };
      });
      setSaveErr(false);
    }
  };

  useEffect(() => {
    if (complaintIssueDoc) {
      const formData = new FormData();
      formData.append("file", complaintIssueDoc);
      dispatch(fileUploadApi(formData));
    }
  }, [complaintIssueDoc, dispatch]);

  const onClose = () => {
    setOpen(false)
  };
  const changeButtonState = () => {
    let isValueExist = true

    if (orderData.complaint === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, complaint: "complaint is required" }))
    }
    if (orderData.customerName === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, customerName: "customer Name is required" }))
    }
    if (orderData.complaintPriority === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, complaintPriority: "complaintPriority is required" }))
    }
    if (orderData.complaintDescription === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, complaintDescription: "complaintDescription is required" }))
    }
    // if (orderData.complaintIssueImage === "") {
    //   isValueExist = false
    //   setErrMsg((prev) => ({ ...prev, complaintIssueImage: "complaintIssueImage is required" }))
    // }
    // if (orderData.complaintIssueDoc === "") {
    //   isValueExist = false
    //   setErrMsg((prev) => ({ ...prev, complaintIssueDoc: "complaintIssueDoc is required" }))
    // }
    if (orderData.orderId === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, orderId: "orderId number is required" }))
    }
    if (orderData.Date === "") {
      isValueExist = false
      setErrMsg((prev) => ({ ...prev, Date: "Date  is required" }))
    }
    if (isValueExist) {
      dispatch(createComplaints(orderData))
      setOpen(false)
    }


    if (orderData.complaintDescription || orderData.complaintDescription) {
      setProjectSummaryValue(EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(orderData?.complaintDescription)
        )
      ))
    } else {
      setProjectSummaryValue(EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(" ")
        )
      ))
    }


  }
  return (
    <div className="add-business md:m-3 m-0">

      {/* lg:flex lg:w-full lg:flex-row md:flex */}
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        {/* Form -1 */}
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-auto">
          <h1 className="font-bold text-[20px]  pt-4 pl-5">Create complaint</h1>
          <div className="lg:p-5  p-2">
            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Complaint
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Enter Complaint"
                name="complaint"
                onChange={handleInput}
              />
              {errMsg.complaint && orderData.complaint === "" && (
                <span className="text-red-500 font-medium text-sm">
                  company is required{" "}
                </span>
              )}
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Customer Name
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="sahil"
                name="customerName"
                onChange={handleInput}

              />
              {errMsg.customerName && orderData.customerName === "" && (
                <span className="text-red-500 font-medium text-sm">
                  company name is required{" "}
                </span>
              )}
            </div>
            <div className="relative z-0  mb-8">
              <label
                for="type"
                className="block text-base font-medium text-textcolor"
              >
                Priority
              </label>
              <select
                name="complaintPriority"
                id="underline_select"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={handleInput}
              >
                {complaintPriority.map((val) => (
                  <option value={val.label}>{val.label}</option>
                ))}
              </select>
              {errMsg.complaintPriority && orderData.complaintPriority === "" && (
                <span className="text-red-500 font-medium text-sm">
                  priority is required{" "}
                </span>
              )}
            </div>

            <div className="relative z-0 mb-8">
              <label
                for="name"
                className="block text-base font-medium text-textcolor"
              >
                Order ID
              </label>
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="OID013D"
                name="orderId"
                onChange={handleInput}

              />
              {errMsg.orderId && orderData.orderId === "" && (
                <span className="text-red-500 font-medium text-sm">
                  orderId is required{" "}
                </span>
              )}
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
            <button
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
              type="submit"
              // onSubmit={handleClick}
              onClick={() => changeButtonState()}

            >

              Save{" "}
            </button>
          </div>
          <div className=" md:p-8 p-2">

            <div className="border-b border-solid border-bordercolor">
              <CustomEditor editorState={projectSummaryValue} onEditorStateChange={handleProjectSummaryChange} />
              {errMsg.complaintDescription && orderData.complaintDescription === "" && (
                <span className="text-red-500 font-medium text-sm">
                  Description is required{" "}
                </span>
              )}
            </div>

            {/* </div> */}
            <div className="w-full py-5 mb-3">
              <label
                for="type"
                className="block text-base font-medium text-textcolor"
              >
                Date
              </label>
              <input
                type="Date"
                id=""
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-primary peer"
                name="Date"
                // <DatePicker bordered={false} />
                onChange={handleInput}


              />


              {errMsg.Date && orderData.Date === "" && (
                <span className="text-red-500 font-medium text-sm">
                  Date is required{" "}
                </span>
              )}
            </div>
            <div className="font-semibold text-[14px] text-textcolor pb-3">
              <h1 className="font-bold text-[16px] text-textcolor">Files</h1>
            complaintIssueDoc
            </div>
            <div className="flex items-center">
                    <div className="flex justify-center items-center py-2 px-2 text-blue-600 border border-dashed border-blue-600">
                      
                      <div className="">
                        {fileTypeDoc ? (
                          <img
                            src={
                              fileTypeDoc === "application/pdf"
                                ? `${PDF}`
                                : `${PHOTO}`
                            }
                            alt=""
                          />
                        ) : (
                          ""
                        )}
                      </div>
            <div className="mx-2 text-[14px]">
                        {fileUploadDoc ? `${fileUploadDoc} ` : "No file chosen"}
                      </div>
                      <div>
                        {" "}
                        <label>
                          <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1.5 px-[6px] rounded-sm text-[12px]">
                            Browse File
                          </div>
                          <input
                            name="complaintIssueDoc"
                            type="file"
                            className="hidden"
                            // onChange={handleInput}
                            accept=".pdf,image/png,image/jpeg"
                            onChange= { (e)  =>  {
                              setFileTypeDoc(e.target.files[0].type);
                              setFileUploadDoc(e.target.files[0].name);
                              setComplaintIssueDoc(e.target.files[0]);
                              setOrderData((preprops) => ({
                                ...preprops,
                                [e.target.name]: e.target.value,
                              }));
                              if (data) {
                                setFieldValue("complaintIssueDoc", setField.path);
                                setFileDocPath(data);
                              
                              }
                            }}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="mx-2">
                      <a
                        href={`${fileDocPath?.destination}`}
                        download={`${fileDocPath?.originalname}`}
                      >
                        {" "}
                        <img src={`${DOWNLOAD}`} alt="" />{" "}
                      </a>
                    </div>
                  </div>
                  {errMsg.complaintIssueDoc && orderData.complaintIssueDoc && (
                    <span className="text-red-500 font-medium text-sm">
                      {errMsg.complaintIssueDoc}
                    </span>
                  )}
                </div>
              </div>
          </div>
          </div>
  );
};

export default AddComplaints;
