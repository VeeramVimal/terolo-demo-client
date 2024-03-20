import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomSelect from "../../../components/InputField/customSelect"; // import CustomSelect Component from our ~components/InputField/customSelect.js file
import { useDispatch } from "react-redux";
import { createRefund, editRefund, getPaymentType, profileCancel, profileUpload, singleRefund } from "./refund.action"; // import refund.action Component from our ~refund.action.js file
import { DatePicker, Radio } from 'antd';
import moment from "moment";
import CustomDatePicker from "../../../components/InputField/customDatePicket"; // import CustomDatePicker Component from our ~components/InputField/customDatePicket.js file
import { useFormik } from "formik";
import CustomInput from "../../../components/InputField/customInput"; // import CustomInput Component from our ~components/InputField/customInput.jsx file
import CustomEditor from "../../../components/InputField/customEditor";
import { ContentState, convertFromHTML, convertToRaw, EditorState } from "draft-js";
import { FormAppendData } from "../../../utils/formAppendData";
import draftToHtml from "draftjs-to-html";
const { RangePicker } = DatePicker;
const shareholderData = [
  {
    value: 1,
    label: "Shareholder 1",
  },
  {
    value: 2,
    label: "Shareholder 2",
  },
  {
    value: 3,
    label: "Shareholder 3",
  },
];
const refundStatusData = [
  {
    value: 1,
    label: "paid",
  },
  {
    value: 2,
    label: "pending",
  },
  {
    value: 3,
    label: "cancelled",
  },
  {
    value: 4,
    label: "open",
  }
];
const currencyTypeData = [
  {
    value: 1,
    label: "INR",
  },
  {
    value: 2,
    label: "USD",
  },
  {
    value: 3,
    label: "CAD",
  },
];

const Addrefunds = ({
  setEdit,
  setOpen,
  valId
}) => {
  const today = moment(new Date(), "YYYY-MM-DD");
  const dispatch = useDispatch();
  const StateRefund = useSelector((state) => state.RefundReducer);
  const defaultValue = StateRefund.defaultValue;
  // const paymentTypeState = useSelector((state) => state.RefundReducer.paymentDataType)
  const singleRefund = useSelector((state) => state.RefundReducer.refund);

  /**
   * @description state declared
   */
  const [addRefund, setAddRefund] = useState({
    // orderId: "",
    refundReason: "",
    invoiceDoc: "",
    projectBudget: "",
    currencyType: "",
    refundedAmount: "",
    // paymentMethodId: "",
    paymentType: "",
    dateOfPaid: "",
    // customerId: "",
    // companyName: "",
    customerName: "",
    clientDescription: "",
    refundStatus: ""
  });

  const [initialVal, setInitialVal] = useState({
    // orderId: false,
    refundReason: false,
    invoiceDoc: false,
    projectBudget: false,
    currencyType: false,
    refundedAmount: false,
    // paymentMethodId: false,
    paymentType: false,
    dateOfPaid: false,
    // customerId: false,
    // companyName: false,
    customerName: false,
    clientDescription: false,
    refundStatus: false
  });
  const [paymentTypeArr, setPaymentTypeArr] = useState([]);
  const [editValue, setEditValue] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);

  useEffect(() => {
    if (valId && StateRefund.refund) {
      setEditValue(StateRefund.refund)
    }
  }, [valId, StateRefund.refund]);
  /**
   * @description handle editor text draftHTML functionalities
   */
  const [clientDescriptionValue, setClientDescriptionValue] = useState(EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(''))
  ));
  const handleClientDescription = (data) => {
    setClientDescriptionValue(data);
  }
  useEffect(() => {
    setAddRefund({
      ...addRefund,
      ...{ clientDescription: draftToHtml(convertToRaw(clientDescriptionValue.getCurrentContent())) }
    })
  }, [clientDescriptionValue]);
  /**
   * @description fetch the paymentType 
   */
  // useEffect(() => {
  // }, [dispatch])
  useEffect(() => {
    dispatch(getPaymentType());
    if (StateRefund.paymentDataType?.length > 0) {
      const paymentData = StateRefund.paymentDataType.map((ele) => {
        return {
          label: ele.paymentType,
          value: ele.id
        }
      })
      setPaymentTypeArr(paymentData)
    }
  }, [StateRefund.paymentDataType?.length])
  /**
   * @description edit page functionalities
   */
  useEffect(() => {
    if (editValue && editValue.length !== 0) {
      const editCurrencyType = currencyTypeData.filter((currency) => currency.label === editValue?.currencyType);
      const editPaymentType = paymentTypeArr.filter((payType) => payType.value === editValue?.paymentMethodId);
      const refundStatusType = refundStatusData.filter((status) => status.label === editValue?.refundStatus);
      const data = {
        refundReason: editValue?.refundReason,
        invoiceDoc: editValue?.invoiceDoc,
        projectBudget: editValue?.projectBudget,
        currencyType: editCurrencyType[0],
        refundedAmount: editValue?.refundedAmount,
        paymentType: editPaymentType[0],
        customerName: editValue?.customerName,
        clientDescription: editValue?.clientDescription,
        refundStatus: refundStatusType[0],
        dateOfPaid: moment(editValue?.dateOfPaid).utc().local().format("YYYY-MM-DD")
        // dateOfPaid: editValue.dateOfPaid

      }
      setAddRefund(data);
      if (addRefund.clientDescription || editValue?.clientDescription) {
        setClientDescriptionValue(EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(editValue?.clientDescription)
          )))
      } else {
        setClientDescriptionValue(EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(" ")
          )))
      }
    }
  }, [editValue]);

  /**
   * @description file handle functionalities
   */
  const handleFileChange = (e) => {
    const profileData = new FormData();
    if (e.target.files.length) {
      profileData.append("invoiceDoc", e.target.files[0])
      dispatch(profileUpload(profileData))
    }
    if (StateRefund.profileData?.length) {
      // setAddRefund({ ...addRefund})
    }
    setAddRefund({ ...addRefund, invoiceDoc: e.target.files[0].name })
    // setAddRefund((preProps) => ({ ...preProps, invoiceDoc: e.target.files[0].name }));
  }
  const [profilePath, setProfilePath] = useState("");
  useEffect(() => {
    if (StateRefund.profileData) {
      setProfilePath(StateRefund.profileData.path)
    }
  }, [StateRefund.profileData?.length])
  /**
   * @description handle validation functionalities
   */
  const validationCheck = (value) => {
    let isValid = true;
    if (addRefund.refundReason == "" || addRefund.refundReason === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, refundReason: "reason is required" }))
    }
    if (addRefund.invoiceDoc === "" || addRefund.invoiceDoc === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, invoiceDoc: "approval is required" }))
    } else {
      setInitialVal((preProps) => ({ ...preProps, invoiceDoc: "" }))
    }
    if (addRefund.projectBudget == "" || addRefund.projectBudget === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, projectBudget: "project_budget is required" }))
    }
    if (addRefund.currencyType == "" || addRefund.currencyType === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, currencyType: "currency is required" }))
    }
    if (addRefund.refundedAmount == "" || addRefund.refundedAmount === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, refundedAmount: "refund_amount is required" }))
    }
    if (addRefund.paymentType == "" || addRefund.paymentType === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, paymentType: "this field is required" }))
    }
    if (addRefund.refundStatus == "" || addRefund.refundStatus === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, refundStatus: "status is required" }))
    }
    if (addRefund.dateOfPaid === "" || addRefund.dateOfPaid === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, dateOfPaid: "date is required" }))
    } else {
      setInitialVal((preProps) => ({ ...preProps, dateOfPaid: " " }))
    }
    if (addRefund.customerName == "" || addRefund.customerName === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, customerName: "customer is required" }))
    }
    if (addRefund.clientDescription == "" || addRefund.clientDescription === undefined) {
      isValid = false
      setInitialVal((preProps) => ({ ...preProps, clientDescription: "description is required" }))
    }
    return isValid;
  }

  const StateUpdate = () => {
    if (valId === null) {
      setAddRefund({
        // orderId: "",
        refundReason: "",
        invoiceDoc: "",
        projectBudget: "",
        currencyType: "",
        refundedAmount: "",
        // paymentMethodId: "",
        paymentType: "",
        dateOfPaid: "",
        // customerId: "",
        // companyName: "",
        customerName: "",
        clientDescription: "",
        refundStatus: ""
      })
    }
    setInitialVal({
      // orderId: false,
      refundReason: false,
      invoiceDoc: false,
      projectBudget: false,
      currencyType: false,
      refundedAmount: false,
      // paymentMethodId: false,
      paymentType: false,
      dateOfPaid: false,
      // customerId: false,
      // companyName: false,
      customerName: false,
      clientDescription: false,
      refundStatus: false
    })
  }
  const redirect = () => {
    // return setOpen(false) && setEdit(false);
    return valId ? setEdit(false) : setOpen(false)
  }

  /**
   * @description formik validation and form data handle submit functionalities
   */
  const { refundReason, invoiceDoc, projectBudget, currencyType, refundedAmount,
    paymentType, dateOfPaid, customerId, companyName, customerName, clientDescriptionVal, refundStatus } = addRefund;
  const statusData = refundStatusData.filter((ele) => ele.value === Number(refundStatus));
  const currencyData = currencyTypeData.filter((ele) => ele.value === Number(currencyType));

  const submitData = {
    orderId: null,
    refundReason: refundReason,
    invoiceDoc: profilePath,
    projectBudget: projectBudget,
    currencyType: currencyData[0]?.label,
    refundedAmount: refundedAmount,
    paymentMethodId: paymentType?.value,
    paymentType: paymentType?.label,
    dateOfPaid: moment(dateOfPaid).format("YYYY-MM-DD hh:mm:ss"),
    customerId: null,
    companyName: "",
    customerName: customerName,
    clientDescription: addRefund.clientDescription,
    refundStatus: statusData[0]?.label
  }


  // const editData = FormAppendData(submitData)
  const handleSubmit = (event) => {
    event.preventDefault();
    var validation = validationCheck();
    if (!valId && validation) {
      dispatch(createRefund(submitData, redirect, StateUpdate));
      setOpen(false)
    } else if (valId && validation) {
      dispatch(editRefund(valId, submitData, redirect, StateUpdate));
      setEdit(false);
    }

  }
  const handleCancelClick = (event) => {
    setEdit(false);
    setOpen(false);
    dispatch(profileCancel(StateRefund.profileData.filename));
  }
  return (

    <div className=" md:m-3 m-0">
      <form onSubmit={handleSubmit}>
        {/* lg:flex lg:w-full lg:flex-row md:flex */}
        <div className="  lg:w-full lg:flex-row sm:w-full sm:flex-row flex flex-col w-full">
          {/* Form -1 */}
          <div className=" lg:w-1/3 sm:w-2/5 w-full border border-bordercolor h-screen">
            <h1 className="font-bold p-2 py-3 pl-5">{valId ? "Edit Refunds" : "Add Refunds"}</h1>
            <div className="lg:px-8 sm:p-3 p-2">
              <div className="relative z-0 ">
                <CustomInput
                  isInputStringOnly
                  isMandatory
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Enter the summary "
                  type={"text"}
                  name={"refundReason"}
                  label={"Reason"}
                  inputType={2}
                  value={!addRefund.refundReason ? defaultValue?.refundReason : addRefund?.refundReason}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>

              <div className="relative mb-8 py-3">
                <label
                  for="Approval"
                  className="block mb-2 py-2
                            text-sm font-medium text-textcolor"
                >
                  Approval <span className="text-red-500 font-medium text-sm">*</span>
                </label>
                <div className="w-[100%] border border-dashed border-blue-600 flex md:flex-row sm:flex-col justify-between items-center py-1 px-1 text-blue-600">
                  <div className="text-primary text-[12px]">
                    {
                      // addRefund.invoiceDoc ? addRefund.invoiceDoc?.path ? `${addRefund.invoiceDoc.path}` : `${addRefund.invoiceDoc}` : "No file choosen"
                      addRefund.invoiceDoc ? addRefund.invoiceDoc.replace(/^.*[\\\/]/, '') : "No file choosen"
                    }
                  </div>
                  <div>
                    <label for={"file-dropzone"}>
                      <div className="bg-primary text-white flex-nowrap text-xs md:text-justify py-1 px-[6px] rounded-sm text-[12px]">
                        Browse Files
                      </div>
                      <input
                        id="file-dropzone"
                        type="file"
                        className="hidden"
                        name="invoiceDoc"
                        defaultValue={addRefund.invoiceDoc}
                        onChange={(e) => handleFileChange(e)}
                      />
                    </label>
                  </div>
                </div>
                {/* {!addRefund?.invoiceDoc && (
                <div className="pl-1">
                    <text className="text-red-500 font-medium text-sm">Invoice is required</text>
                </div>
            ) } */}
              </div>
              {/* duplicate file */}

            </div>
          </div>

          {/* Form -2  */}
          <div className="  lg:w-2/3 sm:w-3/5  w-full ">
            <div className="flex lg:justify-end lg:m-0 sm:justify-end sm:m-0 mt-2">
              <button
                type="click"
                className="bg-gray-200 text-red-600 text-center py-1 px-4 mr-[12px] rounded-[4px]"
                onClick={() => handleCancelClick()}> Cancel{" "} </button>
              <button
                type="submit"
                // className="ant-btn ant-btn-default bg-primary text-white inline-block font-medium text-xs leading-tight rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg duration-100 ease-in-out"
                className="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"
              > Save </button>
            </div>
            <h1 className="font-bold p-2  pl-5 py-3 ">Refund</h1>
            <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
              <div className="relative z-0">
                <CustomInput
                  isInputNumberOnly
                  isMandatory
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  type={"text"}
                  name={"projectBudget"}
                  placeholder={"Enter the project amount"}
                  label={"Amount"}
                  inputType={2}
                  value={!addRefund.projectBudget ? defaultValue?.projectBudget : addRefund?.projectBudget}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
              <div className="relative z-0 py-5 lg:py-0 md:py-0">
                <CustomSelect
                  isMandatory
                  label={"Currency"}
                  initalStyle={"block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"}
                  data={currencyTypeData}
                  name={"currencyType"}
                  value={addRefund.currencyType}
                  inputType={3}
                  setValue={setAddRefund}
                  placeholder="Select option..."
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
              <div className="relative z-0 ">
                <CustomInput
                  isInputNumberOnly
                  isMandatory
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  type={"text"}
                  inputType={2}
                  label={"Refunded Amount"}
                  name={"refundedAmount"}
                  placeholder={"Enter the refund amount"}
                  value={!addRefund.refundedAmount ? defaultValue.refundedAmount : addRefund.refundedAmount}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
            </div>
            <div className="ml-6  lg:grid lg:gap-10 lg:grid-cols-3 sm:grid sm:grid-rows-1 grid grid-cols-1 ">
              <div className="relative z-0 py-6">
                <CustomSelect
                  isMandatory
                  label={"Refunded with"}
                  initalStyle={"block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"}
                  placeholder="Select option..."
                  data={paymentTypeArr}
                  name={"paymentType"}
                  value={addRefund.paymentType}
                  inputType={2}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
              <div className="relative z-0 py-6 ">
                <CustomSelect
                  isMandatory
                  label={"Status"}
                  initalStyle={"block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"}
                  data={refundStatusData}
                  name={"refundStatus"}
                  value={addRefund.refundStatus}
                  inputType={3}
                  setValue={setAddRefund}
                  placeholder="Select option..."
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
              <div className="relative z-0 py-6">
                <CustomDatePicker
                  isMandatory
                  label={"Date-Refunds"}
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  format={"YYYY-MM-DD"}
                  placement="bottomLeft"
                  name={"dateOfPaid"}
                  // value={!addRefund.dateOfPaid ? defaultValue.dateOfPaid : addRefund.dateOfPaid}
                  value={addRefund.dateOfPaid}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
            </div>

            <h1 className="font-bold pl-6 pb-3 ">Client</h1>
            <div className="ml-6   ">
              <div className="relative z-0">
                <CustomInput
                  isInputStringOnly
                  isMandatory
                  type={"text"}
                  inputType={2}
                  label={"Customer"}
                  name={"customerName"}
                  className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder={"select from customer"}
                  value={!addRefund.customerName ? defaultValue.customerName : addRefund.customerName}
                  setValue={setAddRefund}
                  initialVal={initialVal}
                  setInitialVal={setInitialVal}
                />
              </div>
            </div>
            <div className="ml-6   ">
              <div className="relative z-0 py-5">
                <label
                  for="Description"
                  className="block  text-sm font-medium text-textcolor"
                >
                  Description
                </label>
                <CustomEditor
                  editorState={clientDescriptionValue}
                  onEditorStateChange={handleClientDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addrefunds;