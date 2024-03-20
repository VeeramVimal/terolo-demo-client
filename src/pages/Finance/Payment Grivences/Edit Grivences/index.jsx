import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import PDF from "../../../../assets/Images/pdf.png";
import PHOTO from "../../../../assets/Images/photo.png";
import download from "../../../../assets/Images/download.png";
// import TextEditor from "../../../../components/TextEditor/TextEditor";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateRecord, fileUploadApi } from "../paymentgrievances.action";
import { editGrievanceSchema } from "../../../../schemas";

const { Option } = Select;



const EditGrivences = ({ setEdit }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    if (state.paymentGrievancesReducer?.fileData) {
      return state.paymentGrievancesReducer.fileData[0];
    }
    return null;
  });
  // const [formData, setFormData] = useState(initialValues);

  const singleValueEdit = useSelector((state) => {
    if (state.paymentGrievancesReducer.getOneValueById) {
      return state.paymentGrievancesReducer.getOneValueById.data
        .paymentgrievance;
    }
    return null;
  });

  const [editData, setEditData] = useState({
    reason: singleValueEdit.reason,
    invoiceId: singleValueEdit.invoiceId,
    fileName: singleValueEdit.fileName,
    invoiceFilePath: singleValueEdit.invoiceFilePath,
    refundedAmount: singleValueEdit.refundedAmount,
    currencyType: singleValueEdit.currencyType,
    issue: singleValueEdit.issue,
    customerName: singleValueEdit.customerName,
    clientDescription: singleValueEdit.clientDescription,
    paymentGrievanceStatus: singleValueEdit.paymentGrievanceStatus,
  });


  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: editData,
    validationSchema: editGrievanceSchema,
    onSubmit: (values) => {
      dispatch(updateRecord(singleValueEdit.id, values));
    },
  });
 
  const Status = [
    {
      label: "select",
    },
    {
      id: 1,
      label: "Paid",
    },
    {
      id: 2,
      label: "Pending",
    },
    {
      id: 3,
      label: "Cancelled",
    },
  ];

  const [invoiceImage, setinvoiceImage] = useState(null);
  // const [fileUpload, setFileUpload] = useState(null);
  const [fileTypeImg, setFileTypeImg] = useState(null);
  const [fileUploadImg, setFileUploadImg] = useState(null);
  const [fileImgPath, setFileImgPath] = useState(null);

  const typeData = [
    {
      label: "select",
    },
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

  useEffect(() => {
    if (invoiceImage) {
      const formData = new FormData();
      formData.append("file", invoiceImage);
      dispatch(fileUploadApi(formData));
    }
  }, [invoiceImage, dispatch]);
  return (
    <div className=" md:m-3 m-0">
      <form onSubmit={handleSubmit}>
        {/* lg:flex lg:w-full lg:flex-row md:flex */}
        <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
          {/* Form -1 */}

          <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
            <h1 className="font-bold text-[18px] p-2 py-3 pl-5">
              Edit Payment Grievances
            </h1>
            <div className="lg:px-5 sm:p-3 p-2">
              <div className="relative z-0 ">
                <label
                  for="name"
                  className="block  text-base font-medium text-textcolor"
                >
                  Reason
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="reason"
                  name="reason"
                  value={values?.reason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.reason && touched.reason ? (
                  <p className="form-error text-red-600">{errors.reason}</p>
                ) : null}
              </div>
              <div className="relative mb-8 py-3">
                <label
                  for="invoice"
                  className="block mb-2 py-2
                text-base font-medium text-textcolor"
                >
                  Invoice(Optional)
                </label>
                {/* <div className="text-primary text-[12px]">
                  {
                    fileUpload ? `${fileUpload} ` : "No file chosen"
                  }
                </div> */}
                <div>
                  <label for={"file-dropzone"}>
                    {/* <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                      Browse Files
                    </div> */}
                    <div className="flex items-center">
                      <div className="flex justify-center items-center py-1.5 px-1.5 text-blue-600 border border-dashed border-blue-600">
                        <div className="">
                          <img
                            src={
                              `${values?.fileName}`.includes(".pdf")
                                ? `${PDF}`
                                : `${PHOTO}`
                            }
                            alt=""
                          />
                        </div>
                        <div className="mx-1 text-[14px]">
                          {fileUploadImg
                            ? `${fileUploadImg} `
                            : `${singleValueEdit?.fileName}`}
                        </div>
                        <div>
                          {" "}
                          <label for={"file-dropzone1"}>
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
                          </label>
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
                  </label>
                </div>
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
                <span
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Cancel
                </span>
              </button>
              <button
                type="submit"
                className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
                onClick={() => {
                  dispatch(updateRecord(singleValueEdit.id, values));
                  setEdit(false);
                }}
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
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Amount"
                  name="refundedAmount"
                  value={values?.refundedAmount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.refundedAmount && touched.refundedAmount ? (
                  <p className="form-error text-red-600">
                    {errors.refundedAmount}
                  </p>
                ) : null}
              </div>
              <div className="relative z-0 py-5 lg:py-0 md:py-0">
                <label
                  for="type"
                  className="block text-base font-medium text-textcolor"
                >
                  Currency
                </label>
                <select
                  name="currencyType"
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  value={values?.currencyType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {typeData.map((val) => (
                    <option value={val.label}>{val.label}</option>
                  ))}
                </select>
                {errors.currencyType && touched.currencyType ? (
                  <p className="form-error text-red-600">
                    {errors.currencyType}
                  </p>
                ) : null}
              </div>
              <div className="relative z-0 ">
                <label
                  for="name"
                  className="block  text-base font-medium text-textcolor"
                >
                  Issue
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Issue"
                  name="issue"
                  value={values?.issue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.issue && touched.issue ? (
                  <p className="form-error text-red-600">{errors.issue}</p>
                ) : null}
              </div>
            </div>

            <h1 className="font-bold text-[18px]  pl-6 pb-3 mt-3">Client</h1>
            <div className="ml-6   ">
              <div className="relative z-0">
                <label
                  for="name"
                  className="block  text-base font-medium text-textcolor"
                >
                  Customer
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Select from customer"
                  name="customerName"
                  value={values?.customerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.customerName && touched.customerName ? (
                  <p className="form-error text-red-600">
                    {errors.customerName}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="ml-6   ">
              <div className="relative z-0 py-5">
                <label
                  for="name"
                  className="block  text-base font-medium text-textcolor"
                >
                  Description
                </label>
                {/* <TextEditor
                  setFieldValue={setFieldValue}
                  val={values?.clientDescription}
                /> */}
                {/* <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Summary"
                name="clientDescription"
                value={values.clientDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              /> */}
                {errors.clientDescription && touched.clientDescription ? (
                  <p className="form-error text-red-600">
                    {errors.clientDescription}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
              <div className="relative z-0 py-6">
                <label
                  for="type"
                  className="block text-base font-medium text-textcolor"
                >
                  Status
                </label>
                <select
                  name="paymentGrievanceStatus"
                  id="underline_Select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer "
                  // value={singleValueEdit?.data.paymentgrievance.paymentGrievanceStatus}
                  // onChange={(e) =>
                  //   setEditData({ ...editData, paymentGrievanceStatus: e.target.value })
                  // }
                  value={values?.paymentGrievanceStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {Status.map((val) => (
                    <option value={val.label}>{val.label}</option>
                  ))}
                </select>
                {errors.paymentGrievanceStatus &&
                touched.paymentGrievanceStatus ? (
                  <p className="form-error text-red-600">
                    {errors.paymentGrievanceStatus}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditGrivences;
