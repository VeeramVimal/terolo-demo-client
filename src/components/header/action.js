const { REFUND_MODULE_DATE_RANGE } = require("./actionType");

/**
 * @description refund date range storing the state 
 */
export const refundDate = (dateRange) => {
    return async (dispatch) => {
       await Promise.resolve(dateRange)
        .then((date) => {
                dispatch({
                    type: REFUND_MODULE_DATE_RANGE,
                    payload: date
                })
        })
        .catch((err) => console.log(err))

    }
}