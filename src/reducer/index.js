import { combineReducers } from "redux";
//**all components reducers imports */
import loginAndRegisterReducer from "../pages/loginAndRegister/loginAndRegister.reducer";
import ticketsReducer from "../pages/Help disk/tickets/tickets.reducer";
import complaintReducer from "../pages/Help disk/complaints/complaints.reducer"

import RefundReducer from "../pages/Finance/refunds/refund.reducer";
import DateRangeReducer from "../components/header/reducer";

const appReducer = combineReducers({ loginAndRegisterReducer , ticketsReducer, complaintReducer,RefundReducer,DateRangeReducer });


export default appReducer;
