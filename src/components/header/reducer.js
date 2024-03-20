const { REFUND_MODULE_DATE_RANGE } = require("./actionType");

const initialState = {
    refundDate: []
}
// console.log("initialState date ==========", initialState);
const DateRangeReducer = async (state = initialState, action) => {
    switch (action.type) {
        case REFUND_MODULE_DATE_RANGE:
            return {
                ...state, refundDate: action.payload
            }
        default:
            return { ...state }
    }
}


export default DateRangeReducer;
