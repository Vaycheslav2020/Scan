import { createSlice } from "@reduxjs/toolkit";

export const errorAuth = createSlice({
  name: "errorAuth",
  initialState: {
    errorAuth: "",
  },
  reducers: {
    setErrorAuth: (state, message) => {
      state.errorAuth = message.payload
    },
    deleteErrorAuth: (state) => {
      state.errorAuth = ""
    }
  },
});

export const { setErrorAuth, deleteErrorAuth } = errorAuth.actions;
export default errorAuth.reducer;
