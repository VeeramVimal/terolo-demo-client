import { GET_ALL_REFUNDS, SEARCH_ALL_REFUNDS, GET_SINGLE_REFUND, GET_PAYMENT_TYPE, DELETE_REFUNDS, REFUND_MODULE_DATE_RANGE, UPDATE_REFUNDS, CREATE_REFUNDS, PROFILE_UPLOAD, PROFILE_UPLOAD_CANCEL } from "./refund.actionType";
import axios from 'axios';
import { post, get } from "../../../client/api";
import Swal from "sweetalert2";
import { ErrorTostify, SuccessToastify } from "./toastify";
const token = sessionStorage.getItem('accessToken');

/**
 * @description get all refunds data
 * @returns {Promise<Refunds>} array
 */
 export const getAllRefunds = () => {
    return async (dispatch) => {
        await axios.get(
            `${process.env.REACT_APP_API_URL}v1/refund?page=0&limit=20`,
            // `${process.env.REACT_APP_API_URL}v1/refund`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            if (response) {
                dispatch({
                    type: GET_ALL_REFUNDS,
                    payload: response.data.data
                })
            }
        }).catch((err) => console.log(err))
    }
}
/**
 * @description profile upload api integrate
 * @param {Object} file
 * @return {Promise<file>}
 */
export const profileUpload = (file) => {
    return async (dispatch) => {
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}v1/upload/profile`,
            data: file,
            headers: { Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            dispatch({
                type: PROFILE_UPLOAD,
                payload: response.data[0]
            })
        })
        .catch((err) => console.log(err))
    }
}
export const profileCancel = (fileNameQuery) => {
    return async (dispatch) => {
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}v1/upload/profileCancel?profile=${fileNameQuery}`,
            headers: { Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            dispatch({
                type: PROFILE_UPLOAD_CANCEL,
                payload: response
            })
        })
        .catch(err => console.log(err))
    }
}
/**
 * @description Create a new Ticket
 * @param {Object} userBody
 * @returns {Promise<User>} Object
 */
export const createRefund = (createData, redirect, StateUpdate) => {
    return async (dispatch) => {
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}v1/refund`,
            data: createData,
            headers: { Authorization: `Bearer ${token}`}
        })
        .then((response) => {
            if(response.status === 200 || response.statusText === "created"){
                SuccessToastify();
            }
            redirect();
            StateUpdate();
            dispatch({
                type: CREATE_REFUNDS,
                payload : response.data
            })
        })
        .then(() => { return dispatch(getAllRefunds())})
        .catch((err) => console.log(err))
    }
}


export const searchRefunds = (searchText, startDate, endDate) => {
    // console.log(`searchText:  ${searchText}, ===startDate:  , ${startDate}, ===endDate: ${endDate}`);
    return async (dispatch) => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}v1/refund/searchRefund?searchText=${searchText}&startDate=${startDate}&endDate=${endDate}&orderBy=id DESC`,
        }).then((response) => {

            if (response) {
                //  Toast.fire({
                //     icon: 'success',
                //     title: 'Success'
                //   })
                dispatch({
                    type: SEARCH_ALL_REFUNDS,
                    searchRefunds: response.data.refunds
                })
            }
        })
    }
}

/**
 * @description Refund get by id
 * @param {ObjectId} refundId
 * @returns  Object
 */

export const singleRefund = (Id) => {
    return async (dispatch) => {
        // await axios({
        //     method: 'get',
        //     url: `${process.env.REACT_APP_API_URL}v1/refund/${Id}`,
        //     headers: { Authorization: `Bearer ${token}` }
        // })
        await axios.get(`${process.env.REACT_APP_API_URL}v1/refund/${Id}`,
            { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                if (res) {
                    dispatch({
                        type: GET_SINGLE_REFUND,
                        getRefund: res.data.refund
                    })
                }
            })
            .catch((err) => console.log(err))
    }
}

/**
 * @description fetch the paymentType 
 */
export const getPaymentType = () => {
    return async (dispatch) => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}v1/payment_via/getPaymentType`,
            headers: { Authorization: `Bearer ${token}` }
        }).then((response) => {
                dispatch({
                    type: GET_PAYMENT_TYPE,
                    paymentType: response.data.paymentType
                })
        }).catch((error) =>  console.log(error))
    }
}

/**
 * @description Update refund by id
 * @param {ObjectId} refundId
 * @param {Object} updateBody
 * @returns {Promise<Refunds>}
 */
export const editRefund = (Id, editData, redirect, StateUpdate) => {
    return async (dispatch) => {
        axios({
            method: "patch",
            url:`${process.env.REACT_APP_API_URL}v1/refund/${Id}`,
            data: editData
        })
        .then((response) => {
            if(response.status === 200 || response.statusText === ""){
                SuccessToastify()
            } else ErrorTostify()
            redirect();
            StateUpdate();
            dispatch({
                type: UPDATE_REFUNDS,
                payload: response.data
            })
        })
        .then(() => { return dispatch(getAllRefunds())})
        .catch((err) => console.log(err))
    }
}

/**
* @description delete refunds action
*/

export const deleteRefunds = (ID) => {
    return async(dispatch) => {
        // await axios({
        //     method: "patch",
        //     headers: { Authorization: `Bearer ${token}`},
        //     url: `http://localhost:8082/v1/business/delete/${ID}`
        // })
        await axios.patch(`${process.env.REACT_APP_API_URL}v1/refund/delete/${ID}`, 
        {headers: { Authorization: `Bearer ${token}`}})
        .then((response) => {
            // console.log("response========", response);
            if(response.status === 200 || response.data === "Deleted Success") {
                SuccessToastify()
            } else {
                ErrorTostify()
            }
            dispatch({
                type: DELETE_REFUNDS,
                payload: response.data
            })
        })
        .then(() => { return dispatch(getAllRefunds()) })
        .catch((err) => console.log(err))
    }
}

// /**
//  * @description refund date range storing the state 
//  */
//  export const refundDate = (dateRange) => {
//     console.log(typeof dateRange, "========dateRange======", dateRange);
//     return async (dispatch) => {
//         if(dateRange){
//             await dispatch({
//                  type: REFUND_MODULE_DATE_RANGE,
//                  payload: dateRange
//              })
//         }
//     }
// }