import { createSlice } from "@reduxjs/toolkit";

export const isAuth = createSlice({
  name: "isAuth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuth: (state) => {
      const { accessToken, expire } = localStorage;
      if (accessToken && expire) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
  },
});

export const { setAuth } = isAuth.actions;
export default isAuth.reducer;
