import React, { useState } from 'react';

function Viewreport({ setView }) {
    const [fileUpload, setFileUpload] = useState(null);
    const onClose = () => {
        setView(false)
    };

    return (
        <div className="add-business md:m-3 m-0">
            <div className=" block pb-4  md:hidden lg:hidden flex  justify-end">
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
            <div className="float-right hover:rotate-180 flex absolute z-40  bg-white w-8 h-8 text-base items-center justify-center text-gray-900 rounded-full  content-center top-[50%] left-[-42px]">
                <i onClick={onClose} className="ri-close-line ri-xl text-black" />
            </div>
            <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
                <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
                    <h1 className="font-bold text-base p-2 py-3 pl-5"> Reports</h1>
                    <div className='pl-5'>
                        <h2 className='text-base  font-bold'>Reason</h2>
                        <p className='text-[14px] py-2 text-textcolor'>Bigdata project - Milestone 4 Esclation</p>
                        <div className='pb-4'>
                            <div className="relative mb-8">
                                <label
                                    for="invoice"
                                    className="block mb-2 py-2
                            text-base font-bold text-textcolor"
                                >
                                    Invoice(Optional)
                                </label>
                                <div className="w-36 md:w-60 border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
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
                        <div className=" hidden md:block lg:block flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
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
                        <h1 className='text-base text[#22314F] font-bold'>Company</h1>
                        <p className='text-xs py-3'>TCS - IT solution provider it is  expanded many countries to provide IT  solution to many sectors.</p>
                    </div>
                    <div className='pb-5'>
                        <h1 className='text-base font-bold text-[#22314F]'>Description</h1>
                        <p className='text-xs py-3 text-[#22314F]'>Bigdata project - Milestone 4 Esclation due to failed to finish within deadline.</p>
                    </div>
                    <div className='lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 '>
                        <div className='pb-5'>
                            <h1 className='text-base font-bold text-[#22314F]'>Income</h1>
                            <p className='text-xs py-3 text-[#22314F]'>₹ 10,000,000.00</p>
                        </div>
                        <div className='pb-5'>
                            <h1 className='text-base font-bold text-[#22314F]'>Refunded amount</h1>
                            <p className='text-xs py-3 text-[#22314F]'>₹ 10,000,000.00</p>
                        </div>
                        <div className='pb-5'>
                            <h1 className='text-base font-bold text-[#22314F]'>Payment method</h1>
                            <p className='text-xs py-3 text-[#22314F]'>Card</p>
                        </div>
                    </div>
                    <div className='lg:grid lg:gap-10 lg:grid-cols-2 sm:grid sm:grid-rows-1 grid grid-cols-1 '>
                        <div className='pb-5'>
                            <h1 className='text-base font-bold text-[#22314F]'>Address</h1>
                            <p className='text-xs py-2'>TCS incorporated<br />No 1,1st Avenue,Sector 11,<br />Sillicon Valley -  500032, California -USA</p>
                        </div>
                        <div className='pb-5'>
                            <h1 className='text-base font-bold text-[#22314F]'>Communication</h1>
                            <p className='text-xs text-[#22314F] py-2'>Mobile Number: +91 9192939495<br />Email ID: example@tcs.com<br />Email ID: tcs.com</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-base font-bold text-[#22314F]'>Previous projects</h1>
                        <p className='text-xs text-[#22314F] py-2'>TCS - Official website redesign<br />TCS - Big data visualization</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewreport;