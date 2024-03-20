import {
    GET_ALL_REFUNDS, SEARCH_ALL_REFUNDS, GET_SINGLE_REFUND,
    GET_PAYMENT_TYPE, DELETE_REFUNDS, REFUND_MODULE_DATE_RANGE, CREATE_REFUNDS, PROFILE_UPLOAD, PROFILE_UPLOAD_CANCEL
} from './refund.actionType';// import refund.actionType Component from our refund.actionType.js file

const initialState = {
    getRefunds: [],
    searchRefunds: [],
    refund: [],
    paymentDataType: [],
    refundDate: [],
    profileData: [],
    createRefund: [],
    defaultValue: {
        // orderId: "",
        refundReason: "",
        invoiceDoc: "",
        projectBudget: "",
        currencyType: "",
        refundedAmount: "",
        paymentMethodId: "",
        paymentType: "",
        dateOfPaid: new Date(),
        // customerId: "",
        // companyName: "",
        customerName: "",
        clientDescription: "",
        refundStatus: ""
    }
}
console.log("initialState=======", initialState);
const RefundReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REFUNDS:
            return {
                ...state, getRefunds: action.payload
            }
        case SEARCH_ALL_REFUNDS:
            return {
                ...state, searchRefunds: action.searchRefunds
            }
        case GET_SINGLE_REFUND:
            return {
                ...state, refund: action.getRefund
            }
        case GET_PAYMENT_TYPE:
            return {
                ...state, paymentDataType: action.paymentType
            }
        // case REFUND_MODULE_DATE_RANGE:
        //     return {
        //         ...state, refundDate: action.payload
        //     }
        case PROFILE_UPLOAD:
            return {
                ...state, profileData: action.payload
            }
        case PROFILE_UPLOAD_CANCEL:
            return { ...state }
        case CREATE_REFUNDS:
            return { ...state }
        case DELETE_REFUNDS:
            return { ...state }
        default:
            return { ...state }
    }
}
export default RefundReducer; 