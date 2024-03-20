// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appReducer from "../reducer";

const store = configureStore({
  reducer: appReducer,
  ...appReducer,
  middleware: [thunk],
});

export default store;
