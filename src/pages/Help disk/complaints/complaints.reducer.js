import { GETALLCOMPLAINTS, CREATE_COMPLAINTS, DELETECOMPLAINT,DATERANGE, FILE_UPLOAD, EDIT_COMPLAINTS, GET_COMPLAINTS } from "./complaints.action.constant"

const initialState = {
  getAllComplaints : [] ,
  createComplaints : [],
  fileData : [],
  editComplaints : [],
  getComplaints : [],
  deleteComplaint : [],
  dateRange : []
}
console.log("initialstate========", initialState)
export default function complaintReducer (state = initialState , action){
  switch(action.type){
    case GETALLCOMPLAINTS : {
      return {
      ...state ,
      getAllComplaints : action.payload
      
    };
    // return (console.log("getallcomplaints", getAllComplaints))
  }
  
  case CREATE_COMPLAINTS: {
    return {
      ...state,
      createComplaints: action.payload,
      
    };
  }
  case GET_COMPLAINTS: {
    return {
      ...state,
      getComplaints: action.getComplaints,
    };
  }
  case FILE_UPLOAD: {
    return {
      ...state,
      fileData: action.payload,
      
    };
  }
  case DATERANGE: {
    return {
      ...state,
      dateRange: action.payload,
    };
  }
  default:
    return  state;

  
  case EDIT_COMPLAINTS: {
    return {
      ...state,
      editComplaints: action.payload,
    };
  }
  case DELETECOMPLAINT: {
    return {
      ...state,
      deleteComplaint: action.payload,
    };
  }
 
    
  }
}

