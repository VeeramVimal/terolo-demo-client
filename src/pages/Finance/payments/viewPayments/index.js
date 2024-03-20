import React, { useState, useEffect } from 'react';
import { Select } from 'antd';


function ViewPayments({ data, setView }) {
    const [visible, setVisible] = useState(false);
    const { Option } = Select;
    const [fileUpload, setFileUpload] = useState(null);

    const onClose = () => {
        // setVisible(false);
        setView(false)
    };

    const showDrawer = () => {
        setVisible(true);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    //let data=JSON.parse(localStorage.getItem("Investment data"));
    //localStorage.removeItem("Investment data");
    //console.log(data.company);
    //console.log(data.date);

    //console.log("hey"+investment.company);
    //console.log("Amount"+investment.amount);
    //console.log("Currency"+investment.currency);
    //console.log("from d"+d.company);
    const shareholderData = [
        {
            id: 1,
            label: "Select category",
        },
        {
            id: 2,
            label: "Product based",
        },
        {
            id: 3,
            label: "Service based",
        },
    ];
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

    const save = () => {
        //alert("save");


    }
    return (
        <div className="add-business md:m-3 m-0">
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
                <i onClick={onClose} className="ri-close-line ri-xl text-black" />
            </div>
            <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
                <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
                    <h1 className="font-bold text-[18px] p-2 py-3 pl-5">View payments</h1>
                    <div className='pl-5'>
                        <h2 className='text-base  font-medium'>Reason</h2>
                        <p className='text-[14px] py-2 text-textcolor'>Bigdata project - Milestone 4 Esclation</p>
                        <div className='pb-4'>
                            <div className="relative mb-8">
                                <label
                                    for="invoice"
                                    className="block mb-2 py-2
                            text-base font-medium text-textcolor"
                                >
                                    Invoice(Optional)
                                </label>
                                <div className="w-60 border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                                    <div className="text-primary text-[12px]">
                                        {
                                            fileUpload ? `${fileUpload} ` : "Great!"
                                        }
                                    </div>
                                    <div>
                                        <label for={"file-dropzone"}>
                                            <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                                                invoice.pdf
                                            </div>
                                            <input id="file-dropzone" type="file" className="hidden" onChange={(e) => {
                                                setFileUpload(e.target.files[0].name);
                                            }} />
                                        </label>

                                    </div>

                                </div>

                            </div>
                        </div>
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
            >
              Edit
            </button>
          </div>
              </div>
              <div className='py-5'>
              <h1 className='text-base text[#22314F] font-medium'>About</h1>
              <p className='text-[14px] text-textcolor py-3'>TCS - IT solution provider it is  expanded many countries to provide IT  solution to many sectors.</p>
              </div>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Description</h1>
              <p className=' py-3 text-[14px] text-textcolor'>Bigdata project - Milestone 4 Esclation due to failed to finish within deadline.</p>
              </div>
              <div className='lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 '>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Project budget</h1>
              <p className=' py-3 text-[14px] text-textcolor'>₹ 10,000,000.00</p>
              </div>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Refunded amount</h1>
              <p className='text-[14px] py-3 text-textcolor'>₹ 10,000,000.00</p>
              </div>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Payment method</h1>
              <p className='text-[14px] py-3 text-textcolor'>Card</p>
              </div>
              </div>
              <div className='lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1 '>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Address</h1>
              <p className='text-[14px] py-2 text-textcolor'>TCS incorporated<br/>No 1,1st Avenue,Sector 11,<br/>Sillicon Valley -  500032, California -USA</p>
              </div>
              <div className='pb-5'>
              <h1 className='text-base font-medium text-[#22314F]'>Communication</h1>
              <p className='text-[14px] py-3 text-textcolor'>Mobile Number: +91 9192939495<br/>Email ID: example@tcs.com<br/>Email ID: tcs.com</p>
              </div>
              </div>
              <div>
              <h1 className='text-base font-medium text-[#22314F]'>Previous projects</h1>
              <p className='text-[14px] py-3 text-textcolor'>TCS - Official website redesign<br/>TCS - Big data visualization</p>
              </div>
              </div>
            </div>

            {/* Form -2  */}

        </div>
    )
}

export default ViewPayments;