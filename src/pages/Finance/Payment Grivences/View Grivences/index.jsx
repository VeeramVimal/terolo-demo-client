import React, { useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import PDF from "../../../../assets/Images/pdf.png";
import PHOTO from "../../../../assets/Images/photo.png";
import download from "../../../../assets/Images/download.png";

const { Option } = Select;



const ViewGrivences = ({ setView }) => {
  
  const [fileUpload, setFileUpload] = useState(null);

  const typeData = [
    {
      id: 1,
      label: "INR",
    },
    {
      id: 2,
      label: "USD",
    },
    {
      id: 3,
      label: "CAD",
    },
  ];

  const [invoiceImage, setinvoiceImage] = useState(null);
  // const [fileUpload, setFileUpload] = useState(null);
  const [fileTypeImg, setFileTypeImg] = useState(null);
  const [fileUploadImg, setFileUploadImg] = useState(null);
  const [fileImgPath, setFileImgPath] = useState(null);

  const singleValue = useSelector(
    (state) => state.paymentGrievancesReducer.getOneValueById
  );

  const desc = function decodeHTMLEntities(text) {
    let textArea = document.createElement("textarea");
    let tex = text.slice(6,-7);
     textArea.innerHTML = tex;
    return textArea.value;
  }
  return (
    <div className=" md:m-3 m-0">
      {/* lg:flex lg:w-full lg:flex-row md:flex */}
      <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
        {/* Form -1 */}
        <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
          <h1 className="font-bold text-[18px] p-2 py-3 pl-5">
            View Payment Grievances
          </h1>
          <div className="lg:px-5 sm:p-3 p-2">
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Reason
              </label>
              <div>{singleValue?.data.paymentgrievance.reason}</div>
            </div>
            <div className="relative z-0 ">
              <label
                for="invoice"
                className="block py-2
                text-base font-medium text-textcolor"
              >
                Invoice ID
              </label>
              <div>{singleValue?.data.paymentgrievance.invoiceId}</div>
            </div>
            <div className="relative mb-8 py-3">
              <label
                for="invoice"
                className="block mb-2 py-2
                text-base font-medium text-textcolor"
              >
                Invoice(Optional)
              </label>
              {/* <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                <div className="">
                  <img
                    src={
                      `${singleValue?.data.paymentgrievance.fileName}`.includes(
                        ".pdf"
                      )
                        ? `${PDF}`
                        : `${PHOTO}`
                    }
                    alt=""
                  />
                </div>
                <div className="text-primary text-[12px]">
                  {fileUpload
                    ? `${fileUpload}`
                    : `${singleValue?.data.paymentgrievance.fileName}`}
                </div>
              </div> */}
              <div className="flex items-center">
                      <div className="flex justify-center items-center py-1.5 px-1.5 text-blue-600 border border-dashed border-blue-600">
                        <div className="">
                          <img
                            src={
                              `${singleValue?.data.paymentgrievance.fileName}`.includes(".pdf")
                                ? `${PDF}`
                                : `${PHOTO}`
                            }
                            alt=""
                          />
                        </div>
                        <div className="mx-1 text-[14px]">
                          {fileUploadImg
                            ? `${fileUpload}`
                            : `${singleValue?.data.paymentgrievance.fileName}`}
                        </div>
                        <div>
                          {" "}
                          {/* <label for={"file-dropzone1"}>
                            <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1.5 px-[4px] rounded-sm text-[12px]">
                              Browse File
                            </div>
                            <input
                              name="invoiceFilePath"
                              id="file-dropzone1"
                              type="file"
                              accept=".pdf,image/png,image/jpeg"
                              className="hidden"
                              onChange={(e) => {
                                setFileTypeImg(e.target.files[0].type);
                                setFileUploadImg(e.target.files[0].name);
                                setFieldValue(
                                  "fileName",
                                  e.target.files[0].name
                                );

                                setinvoiceImage(e.target.files[0]);
                                if (data) {
                                  setFieldValue(
                                    "invoiceFilePath",
                                    data.destination
                                  );
                                  setFileImgPath(data);
                                }
                              }}
                            />
                            {}
                          </label> */}
                        </div>
                      </div>
                      <div className="mx-2">
                        <a
                          href={`${fileImgPath?.destination}`}
                          download={`${fileImgPath?.originalname}`}
                        >
                          {" "}
                          <img src={`${download}`} alt="" />{" "}
                        </a>
                      </div>
                    </div>
            </div>
          </div>
        </div>

        {/* Form -2  */}
        <div className="lg:w-2/3 sm:w-3/5  w-full">
          <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
            <button
              type="button"
              className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
            >
              <span
                onClick={() => {
                  setView(false);
                }}
              >
                Cancel
              </span>
            </button>
            <button
              type="submit"
              className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
            >
              Save
            </button>
          </div>

          <div className="ml-6  mt-4 lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
            <div className="relative z-0">
              <label
                for="name"
                className="block text-base font-medium text-textcolor"
              >
                Refunded Amount
              </label>
              <div className="mt-3">
                {singleValue?.data.paymentgrievance.refundedAmount}
              </div>
            </div>
            <div className="relative z-0 py-5 lg:py-0 md:py-0">
              <label
                for="type"
                className="block text-base font-medium text-textcolor"
              >
                Currency
              </label>
              {/* <select
                                name="type"
                                id="underline_select"
                                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            >
                                {typeData.map((val) => (
                                    <option value={val.label}>{val.label}</option>
                                ))}
                            </select> */}
              <div className="mt-3">
                {singleValue?.data.paymentgrievance.currencyType}
              </div>
            </div>
            <div className="relative z-0 ">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Issue
              </label>
              <div className="mt-3">
                {singleValue?.data.paymentgrievance.issue}
              </div>
            </div>
          </div>
          <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
            {/* <div className="relative z-0 py-6">
                            <label
                                for="type"
                                className="block text-base font-medium text-textcolor"
                            >
                                Refunded Amount
                            </label>
                            <select
                                name="type"
                                id="underline_select"
                                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            >
                                {shareholderData.map((val) => (
                                    <option value={val.label}>{val.label}</option>
                                ))}
                            </select>
                        </div> */}
          </div>
          <h1 className="font-bold text-[18px] mt-10 pl-6 pb-3 ">Client</h1>
          < div className="ml-6   ">
            <div className="relative z-0">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Customer
              </label>
              <div className="mt-3">
                {singleValue?.data.paymentgrievance.customerName}
              </div>
            </div>
          
          
            <div className="relative z-0 py-5">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Description
              </label>
              <div className="mt-3">
                
                {desc(singleValue?.data.paymentgrievance.clientDescription)}
              </div>
            </div>
          
            <div className="relative z-0 py-5">
              <label
                for="name"
                className="block  text-base font-medium text-textcolor"
              >
                Status
              </label>
              <div className="mt-3">
                {singleValue?.data.paymentgrievance.paymentGrievanceStatus}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default ViewGrivences;
