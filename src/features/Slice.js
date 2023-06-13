import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    home: (state) => {
      state.user = null;
    },
  },
});

export const { login } = Slice.actions;

export const selectUser = (state) => state.user.user;

export default Slice.reducer;
