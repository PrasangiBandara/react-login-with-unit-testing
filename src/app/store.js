import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
