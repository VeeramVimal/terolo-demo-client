import React, { useEffect, useState } from "react";
import DOWNLOAD from "../../../assets/Images/download.png";
import PDF from "../../../assets/Images/pdf.png";
import PHOTO from "../../../assets/Images/photo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createTicket, fileUploadApi } from "./tickets.action";
import { useFormik } from "formik";
import { TicketSchema } from "./validationSchema";
import TextEditor from "../../../components/TextEditor/TextEditor";
import MultiSelect from "./MultiSelect";
import { Select } from "antd";
const { Option } = Select;
export const FileName = "";
const initialValues = {
  issueTitle: "",
  ticketCategory: "",
  ticketPriority: "",
  companyDetail: "",
  ticketDescription: "",
  ticketIssueImage: "",
  ticketIssueDoc: "",
  ticketIssueImageName: "",
  ticketIssueDocName: "",
  ticketStatus: "",
  peopleId: "",
  dateOfCreate: "",
};
const AddTickets = ({
  setOpen,
  allTicketsData,
  setData,
  fileUploadDoc,
  setFileUploadDoc,
  assignData,
  getDate,
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValues);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: formData,
    validationSchema: TicketSchema,
    onSubmit: (val) => {
      dispatch(createTicket(val));
      setOpen(false);
    },
  });
  console.log("values",values);
  const categoryData = useSelector((state) => state.ticketsReducer.getCategory);
  const companyData = useSelector(
    (state) => state.ticketsReducer.getAllCompany
  );

  const [fileUploadImg, setFileUploadImg] = useState(null);
  const [ticketIssueImage, setTicketIssueImage] = useState(null);
  const [ticketIssueDoc, setTicketIssueDoc] = useState(null);
  const [fileTypeImg, setFileTypeImg] = useState(null);
  const [fileTypeDoc, setFileTypeDoc] = useState(null);
  const [fileImgPath, setFileImgPath] = useState(null);
  const [fileDocPath, setFileDocPath] = useState(null);
  const data = useSelector((state) => {
    if (state.ticketsReducer.fileData) {
      return state.ticketsReducer.fileData[0];
    }
    return null;
  });
  const Prioarity = [
    {
      id: 1,
      label: "Urgent",
    },
    {
      id: 2,
      label: "Important",
    },
    {
      id: 3,
      label: "Nice to be done",
    },
  ];
  const Status = [
    {
      id: 1,
      label: "In Progress",
    },
    {
      id: 2,
      label: "Yet to assign",
    },
    {
      id: 3,
      label: "Closed",
    },
  ];

  useEffect(() => {
    if (ticketIssueImage) {
      const formData = new FormData();
      formData.append("file", ticketIssueImage);
      dispatch(fileUploadApi(formData));
    }
  }, [ticketIssueImage, dispatch]);

  useEffect(() => {
    if (ticketIssueDoc) {
      const formData = new FormData();
      formData.append("file", ticketIssueDoc);
      dispatch(fileUploadApi(formData));
    }
  }, [ticketIssueDoc, dispatch]);

  useEffect(() => {
    if (allTicketsData) {
      setData(allTicketsData);
    }
  }, [allTicketsData?.length]);
  return (
    <div className="add-business md:m-1 m-0">
      <form onSubmit={handleSubmit}>
        <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
          {/* Form -1 */}
          <div className=" lg:w-[35%] sm:w-2/5 w-full border border-bordercolor h-auto">
            <h1 className="font-bold text-base pt-5 pl-4">Create Tickets</h1>
            <div className="lg:p-4 sm:p-3 p-2">
              <div className="relative z-0 mb-8">
                <label
                  for="name"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  Issue
                </label>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="tittle"
                  name="issueTitle"
                  value={values.issueTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.issueTitle && touched.issueTitle && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.issueTitle}
                  </span>
                )}
              </div>

              <div className="relative z-0 mb-8">
                <label
                  for="category"
                  className="block text-sm  font-bold text-textcolor"
                >
                  Category
                </label>
                <select
                  name="ticketCategory"
                  value={values.ticketCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="Category"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value={""}> select category</option>
                  {categoryData?.businesscategory?.map((val) => (
                    <option value={val.business_category_name}>
                      {val.business_category_name}
                    </option>
                  ))}
                </select>
                {errors.ticketCategory && touched.ticketCategory && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.ticketCategory}
                  </span>
                )}
              </div>

              <div className="relative z-0 mb-8">
                <label
                  for="type"
                  className="block text-sm  font-bold text-textcolor"
                >
                  Priority
                </label>
                <select
                  name="ticketPriority"
                  value={values.ticketPriority}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value={""}> Select Prority</option>
                  {Prioarity.map((val) => (
                    <option value={val.label}>{val.label}</option>
                  ))}
                </select>
                {errors.ticketPriority && touched.ticketPriority && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.ticketPriority}
                  </span>
                )}
              </div>
              <div className="relative z-0 mb-8">
                <label
                  for="type"
                  className="block text-sm font-medium text-textcolor"
                >
                  Company
                </label>
                <select
                  name="companyDetail"
                  value={values.companyDetail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value={""}> Select Company </option>
                  {companyData.map((val) => (
                    <option value={val.company_name}>{val.company_name}</option>
                  ))}
                </select>
                {errors.companyDetail && touched.companyDetail && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.companyDetail}
                  </span>
                )}
              </div>
              <div className="relative z-0 mb-8">
                <label
                  for="name"
                  className="block text-sm  font-bold text-textcolor"
                >
                  ticketStatus
                </label>
                <select
                  name="ticketStatus"
                  value={values.ticketStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value={""}> Select status </option>
                  {Status.map((val) => (
                    <option value={val.label}>{val.label}</option>
                  ))}
                </select>
                {errors.ticketStatus && touched.ticketStatus && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.ticketStatus}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Form -2  */}
          <div className="  lg:w-[85%] sm:w-3/5  w-full pl-3">
            <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
              <button
                type="button"
                className="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"
              >
                <span
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </span>
              </button>
              <button
                type="submit"
                className="ant-btn ant-btn-default bg-primary hover:bg-white  hover:text-primary  rounded border-0 text-white font-semibold mx-3"
              >
                Save
              </button>
            </div>
            <div className=" md:pt-6 md:pl-6 p-2">
              {/* Financial Details */}
              <div className="relative z-0 lg:mb-4 sm:mb-4 mb-4">
                <label
                  for="address"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  Description
                </label>
                <div className="w-[85%]">
                  <TextEditor setFieldValue={setFieldValue} />
                </div>
                {errors.ticketDescription && touched.ticketDescription && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.ticketDescription}
                  </span>
                )}
              </div>
              {/* file Upload  start here*/}
              <div className="my-4">
                <div className="block text-sm  font-bold text-textcolor mb-2">
                  {" "}
                  Assign people{" "}
                </div>
                <MultiSelect
                  data={assignData}
                  width={"85%"}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div className="my-2">
                <div className="text-base  font-bold">Files</div>
                <div className="flex">
                  {/* first file  */}
                  <div className="w-[50%]">
                    <div className="block mb-1.5 py-2 text-sm  font-bold text-textcolor">
                      Issue(Image)
                    </div>
                    <div className="flex items-center">
                      <div className="flex justify-center items-center py-1.5 px-1.5 text-blue-600 border border-dashed border-blue-600">
                        <div className="">
                          {fileTypeImg ? (
                            <img
                              src={
                                fileTypeImg === "application/pdf" ? `${PDF}` : `${PHOTO}`
                              }
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mx-1 text-[14px]">
                          {fileUploadImg
                            ? `${fileUploadImg} `
                            : "No file chosen"}
                        </div>
                        <div>
                          {" "}
                          <label for={"file-dropzone1"}>
                            <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1.5 px-[4px] rounded-sm text-[12px]">
                              Browse File
                            </div>
                            <input
                              name="ticketIssueImage"
                              id="file-dropzone1"
                              type="file"
                              accept=".pdf,image/png,image/jpeg"
                              className="hidden"
                              onChange={(e) => {
                                setFileTypeImg(e.target.files[0].type);
                                setFieldValue(
                                  "ticketIssueImageName",
                                  e.target.files[0].name
                                );
                                setFileUploadImg(e.target.files[0].name);
                                setTicketIssueImage(e.target.files[0]);
                                if (data) {
                                  setFieldValue(
                                    "ticketIssueImage",
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
                          <img src={`${DOWNLOAD}`} alt="" />{" "}
                        </a>
                      </div>
                    </div>

                    {errors.ticketIssueDoc && touched.ticketIssueDoc && (
                      <span className="text-red-500 font-medium text-sm">
                        {errors.ticketIssueDoc}
                      </span>
                    )}
                  </div>

                  {/* second file */}
                  <div className="w-[50%]">
                    <div className="block mb-1.5 py-2 text-sm  font-bold text-textcolor">
                      Issue(Document)
                    </div>
                    <div className="flex items-center">
                      <div className="flex justify-center items-center py-1.5 px-1.5 text-blue-600 border border-dashed border-blue-600">
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
                        <div className="mx-1 text-[14px]">
                          {fileUploadDoc
                            ? `${fileUploadDoc} `
                            : "No file chosen"}
                        </div>
                        <div>
                          {" "}
                          <label for={"file-dropzone2"}>
                            <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1.5 px-[4px] rounded-sm text-[12px]">
                              Browse File
                            </div>
                            <input
                              id="file-dropzone2"
                              name="ticketIssueDoc"
                              type="file"
                              className="hidden"
                              accept=".pdf,image/png,image/jpeg"
                              onChange={(e) => {
                                setFileTypeDoc(e.target.files[0].type);
                                setFieldValue(
                                  "ticketIssueDocName",
                                  e.target.files[0].name
                                );
                                setFileUploadDoc(e.target.files[0].name);
                                setTicketIssueDoc(e.target.files[0]);
                                if (data) {
                                  setFieldValue(
                                    "ticketIssueDoc",
                                    data.destination
                                  );
                                  setFileDocPath(data);
                                }
                              }}
                            />
                            {}
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
                    {errors.ticketIssueDoc && touched.ticketIssueDoc && (
                      <span className="text-red-500 font-medium text-sm">
                        {errors.ticketIssueDoc}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* file Upload  ends here*/}

              <div className="relative z-0 mb-4 mt-6 w-[85%]">
                <label
                  for="name"
                  className="block  text-sm  font-bold text-textcolor"
                >
                  TicketIssue Date
                </label>
                <input
                  type="date"
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="TicketIssue Date"
                  name="dateOfCreate"
                  value={values.dateOfCreate ? values.dateOfCreate : getDate()}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.dateOfCreate && touched.dateOfCreate && (
                  <span className="text-red-500 font-medium text-sm">
                    {errors.dateOfCreate}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTickets;
