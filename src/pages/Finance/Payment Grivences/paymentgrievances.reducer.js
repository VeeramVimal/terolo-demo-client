import {
    FILE_UPLOAD,
    PAYMENT_GRIEVANCES_GET_ALL,PAYMENT_GRIEVANCES_GET_ONE_ON_CLICK
} from './paymentgrievances.action.constants';

const initialState={
getAllPaymentGrievances:null,
getOneValueById:null,
addPaymentGrievances:null,
fileData:null,
};



export default function reducers(state=initialState, action){
    switch(action.type){
        case PAYMENT_GRIEVANCES_GET_ALL:{
            return{
                ...state,
                getAllPaymentGrievances :action.payload
            };
        }
        case PAYMENT_GRIEVANCES_GET_ONE_ON_CLICK:{
            return{
                ...state,
                getOneValueById: action.payload
            }
        }
        case FILE_UPLOAD: {
            return {
              ...state,
              fileData: action.payload,
            };
          }
        default:
            return state;
    }
}