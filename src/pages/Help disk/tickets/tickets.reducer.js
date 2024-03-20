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

const initialState = {
  getAllTickets: [],
  getCategory: [],
  getAllCompany: [],
  fileData: null,
  assign: [],
  createticket: [],
  deleteTicket: [],
  updateTicket: [],
  dateRange: null,
};
export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case GETALLTICKETS: {
      return {
        ...state,
        getAllTickets: action.payload,
      };
    }
    case GET_CATEGORY: {
      return {
        ...state,
        getCategory: action.payload,
      };
    }
    case GETALLCOMPANY: {
      return {
        ...state,
        getAllCompany: action.payload,
      };
    }
    case FILE_UPLOAD: {
      return {
        ...state,
        fileData: action.payload,
      };
    }
    case ASSIGNPEOPLE: {
      return {
        ...state,
        assign: action.payload,
      };
    }
    case CREATETICKET: {
      return {
        ...state,
        createticket: action.payload,
      };
    }
    case DELETETICKET: {
      return {
        ...state,
        deleteTicket: action.payload,
      };
    }
    case UPDATETICKET: {
      return {
        ...state,
        updateTicket: action.payload,
      };
    }
    case DATERANGE: {
      return {
        ...state,
        dateRange: action.payload,
      };
    }
    default:
      return state;
  }
}
