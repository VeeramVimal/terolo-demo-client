
import {
  FILE_UPLOAD,
    PAYMENT_GRIEVANCES_GET_ALL
} from './paymentgrievances.action.constants';
import {
  PAYMENT_GRIEVANCES_GET_ONE_ON_CLICK
} from './paymentgrievances.action.constants';

import { get } from '../../../client/api';
import { patch } from '../../../client/api';
import { post } from '../../../client/api';
import { deleteapi } from '../../../client/api';
import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})



export const addRecord = (data)=> {
  console.log("adddata",data);
  return async (dispatch) => {
    const { error, response } = await post(
      `${process.env.REACT_APP_API_URL}`,
      `${`v1/paymentGrievances`}`,data
    );
    console.log("responseee",response);
    if (response) {
      
      await Toast.fire({
        icon: 'success',
        title: 'Success',
        iconColor:'green'
      })
      dispatch({
        type: PAYMENT_GRIEVANCES_GET_ALL,
        payload: response,
      });
    }
    if (error) {
    }
    return { response, error };
  };
};


export const getAllPaymentGrievances = ()=> {
    return async (dispatch) => {
      const { error, response } = await get(
        `${process.env.REACT_APP_API_URL}`,
        `${`v1/paymentGrievances?page=10&limit=10000`}`
        
      );
      
      if (response) {
        dispatch({
          type: PAYMENT_GRIEVANCES_GET_ALL,
          payload: response,
        });
      }
      if (error) {
      }
      return { response, error };
    };
  };

  export const getSingleClickedData = (id)=> {
    return async (dispatch) => {
      const { error, response } = await get(
        `${process.env.REACT_APP_API_URL}`,
        `${`v1/paymentGrievances/${id}`}`
      );
      console.log("responsesingle",response);
      if (response) {
        dispatch({
          type:PAYMENT_GRIEVANCES_GET_ONE_ON_CLICK,
          payload: response,
        });
      }
      if (error) {
      }
      return { response, error };
    };
  };

  export const updateRecord = (id, data)=> {
    console.log("update-id,data",)
    return async (dispatch) => {
      const { error, response } = await patch(
        `${process.env.REACT_APP_API_URL}`,
        `${`v1/paymentGrievances/${id}`}`,data
      );
      console.log("response",response);
      if (response) {
        await Toast.fire({
          icon: 'success',
          title: 'Success',
          iconColor:'green'
        })
        dispatch({
          type: PAYMENT_GRIEVANCES_GET_ALL,
          payload: response,
        });
      }
      if (error) {
      }
      return { response, error };
    };
  };

  export const deleteRecord = (id)=> {
    console.log("delete",id)
    return async (dispatch) => {
      const { error, response } = await deleteapi(
        `${process.env.REACT_APP_API_URL}`,
        `${`v1/paymentGrievances/${id}`}`
      );
      console.log("response",response);
      if (response) {
        dispatch({
          type: PAYMENT_GRIEVANCES_GET_ALL,
          payload: response,
        });
      }
      if (error) {
      }
      return { response, error };
    };
  };

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
        console.error("error msg for file upload", error);
      }
    };
  };


  