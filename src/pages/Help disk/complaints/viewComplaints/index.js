import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Addrefunds from '../EditComplaint'; // import Addrecomplaint Component from our Addrefunds.js file
import { deleteComplaint } from "../complaints.action";

function ViewRefunds({ data, setView, setShowEdit, }) {
  const dispatch = useDispatch();
  const native = useNavigate();
  const refundState = useSelector((state) => state.complaintReducer.getComplaints);
  console.log("refundState=====", refundState)
  // const [getData, setGetData] = useState([])
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  const [valId, setValId] = useState("");
  console.log("valId========", valId);
  const [fileUpload, setFileUpload] = useState(null);
  const onClose = () => {
    // setVisible(false);
    setView(false)
  };

  const showDrawer = () => {
    setVisible(true);
  };
  
  const onDelete = (id) => {
    dispatch(deleteComplaint(id))
    setView(false);
  };
  const editValueClick = (val) => {
    
    setValId(val.id)
  }
  return (
    <>
      {valId ?
        (<> <Addrefunds valId={valId} /> </>) : (
          <div className="add-business md:m-3 m-0">
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
              <i onClick={onClose} className="ri-close-line ri-xl text-black" />
            </div>
            <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
              <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen p-10">
                <h1 className="font-bold text-[16px]">  View Ticket</h1>

                <div className="mt-2 py-1">
                  <div className="text-[16px]  font-medium ">Ticket</div>
                  <h1 className="font-medium text-[14px]">  {refundState?.complaintId}</h1>
                </div>
                <div className="mt-2 py-2">
                  <div className="text-[16px]  font-medium ">Issue</div>
                  <div className="text-[14px] py-1 text-textcolor">{refundState?.complaint}</div>
                </div>
                <div className="mt-2">
                  <div className="text-[16px]  font-medium ">customerName</div>
                  <div className="text-[14px] py-1 text-textcolor">{refundState?.customerName}</div>
                </div>
                <div className="mt-2 py-2">
                  <div className="text-[16px]  font-medium ">Prority</div>
                  <div className="text-[14px] py-1 text-textcolor">{refundState?.complaintPriority}</div>
                </div>
                <div className="mt-2">
                  <div className="text-[16px]  font-medium ">orderId</div>
                  <div className="text-[14px] py-1 text-textcolor">{refundState?.orderId}</div>
                </div>
                <div className="mt-2">
                  <div className="text-[16px]  font-medium ">date</div>
                  <div className="text-[14px] py-1 text-textcolor">{refundState?.Date}</div>
                </div>
              </div>
              <div className="ml-6 lg:w-2/3 sm:w-3/5  w-full ">
                <div className='flex justify-end'>
                  <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
                    <button
                      type="button"
                      className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
                    >
                      <span onClick={onClose} className="text-[#AC0C02]">Cancel</span>
                    </button>
                    <button
                      type="submit"
                      className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
                      onClick={() => editValueClick(refundState)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="add-business md:m-3 m-0">
                  <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-[16px] items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
                    {/* <i onClick={onDelete} className="ri-close-line ri-xl text-black" /> */}
                    <i onClick={onDelete} className="ri-close-line ri-xl text-black" />

                  </div>
                  <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full ">

                    <div className="ml-6 lg:w-2/3 sm:w-3/5  w-full ">
                    
                      <div className="py-4">
                        <h1 className="text-[16px] text[#22314F] font-bold">Description</h1>
                        <p className="text-[14px] py-2 text-textcolor ">
                          {refundState?.complaintDescription}
                        </p>
                      </div>
                      <div className="py-1">
                        <h1 className="text-base  font-bold">Files</h1>
                        <div className="flex justify-between">
                          <div className="relative mb-8 ">
                            <label
                              for="invoice"
                              className="block mb-2 py-2
                            text-sm  font-bold text-textcolor"
                            >
                              complaintIssueDoc
                            </label>
                            <div className=" border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-[4px] px-[2px] text-blue-600">
                              <div className="text-primary text-[12px] mr-2">Great </div>
                              <div>
                                <label>
                                  <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-[2px] px-[2px] rounded-sm text-[12px]">
                                    {refundState?.complaintIssueDoc}
                                  </div>
                                  <input
                                    name="complaintIssueDoc"
                                    type="file"
                                    className="hidden"
                                    onChange={""}
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
            </div>

            {/* Form -2  */}

          </div>
        )}
    </>
  )
}

export default ViewRefunds;