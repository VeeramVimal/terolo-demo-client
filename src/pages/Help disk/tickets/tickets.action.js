import { deleteapi, get, patch, post } from "../../../client/api";
import { Toast } from "../../../config/Toasts";
import {
  ASSIGNPEOPLE,
  CREATETICKET,
  DATERANGE,
  DELETETICKET,
  FILE_UPLOAD,
  GETALLCOMPANY,
  GETALLTICKETS,
  GET_CATEGORY,
  UPDATETICKET,
} from "./tickets.action.constant";

// get all tickets
export const getAllTickets = async (dispatch) => {
  try {
    const response = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/ticket?limit=20&page=20"}`
    );
    const result = await response.response.data.data;
    dispatch({ type: GETALLTICKETS, payload: result });
  } catch (error) {
    console.log("tickets error", error);
  }
};

// get category
export const getCategory = async (dispatch) => {
  try {
    const response = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/business/businessCatagory"}`
    );
    const result = await response.response.data;
    dispatch({ type: GET_CATEGORY, payload: result });
  } catch (error) {
    console.log("error msg category", error);
  }
};

// get company
export const getAllCompany = async (dispatch) => {
  try {
    const response = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/business"}`
    );
    const result = await response.response.data.Business;
    dispatch({ type: GETALLCOMPANY, payload: result });
  } catch (error) {
    console.log("company error", error);
  }
};

//file upload
export const fileUploadApi = (formData) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return async (dispatch) => {
    try {
      const response = await post(
        `${process.env.REACT_APP_API_URL}`,
        `${"v1/upload/profile"}`,
        formData,
        config
      );
      const result = await response.response.data;
      dispatch({ type: FILE_UPLOAD, payload: result });
    } catch (error) {
      console.log("error msg for file upload", error);
    }
  };
};

// (assign) people
export const getAllAssign = async (dispatch) => {
  try {
    const response = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${"v1/ticket/searchDesignation?searchText=&orderBy=id"}`
    );
    const result = await response.response.data.people;
    dispatch({ type: ASSIGNPEOPLE, payload: result });
  } catch (error) {
    console.log("assign error", error);
  }
};

// create ticket

export const createTicket = (data) => {
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/ticket`}`,
      data
    );
    if (response) {
      await Toast.fire({
        icon: "success",
        title: "Success",
      });
      dispatch({
        type: CREATETICKET,
        payload: response,
      });
      dispatch(getAllTickets);
    }
    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });

      console.log("error", error);
    }
    return { response, error };
  };
};

export const deleteTicket = (id) => {
  return async (dispatch) => {
    const { error, response } = await deleteapi(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/ticket/${id}`}`
    );
    if (response) {
      dispatch({
        type: DELETETICKET,
        payload: response,
      });
      dispatch(getAllTickets);
    }

    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });
    }
    return { response, error };
  };
};

//update ticket

export const updateTicket = (id, data) => {
  return async (dispatch) => {
    const { error, response } = await patch(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/ticket/${id}`}`,
      data
    );
    if (response) {
      dispatch(getAllTickets);
      await Toast.fire({
        icon: "success",
        title: "Success",
      });
      dispatch({
        type: UPDATETICKET,
        payload: response,
      });
     
      window.location.reload();
    }
    if (error) {
      await Toast.fire({
        icon: "error",
        title: "Error",
      });
      console.log("error", error);
    }
    return { response, error };
  };
};

export const getDateRange = (startDate, endDate) => {
  return async (dispatch) => {
    const { error, response } = await get(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/ticket/dateRange?startDate=${startDate}&endDate=${endDate}`}`
    );
    if (response) {
      dispatch({
        type: DATERANGE,
        payload: response.data.people,
      });
    }
    if (error) {
      console.log("error", error);
    }
    return { response, error };
  };
};
