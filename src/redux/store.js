import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./state.slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
