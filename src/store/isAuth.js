import { createSlice } from "@reduxjs/toolkit";

export const isAuth = createSlice({
  name: "isAuth",
  initialState: {
    isAuth:
      localStorage.getItem("accessToken") &&
      localStorage.getItem("expire") &&
      Date.parse(new Date()) < Date.parse(localStorage.getItem("expire"))
        ? true
        : false,
  },
  reducers: {
    setAuth: (state) => {
      const date = new Date();
      const { accessToken, expire } = localStorage;
      if (accessToken && expire) {
        if (Date.parse(date) < Date.parse(expire)) {
          console.log("log is auth");
          state.isAuth = true;
        } else {
          console.log("is auth error expire");
          state.isAuth = false;
        }
      } else {
        state.isAuth = false;
      }
    },
  },
});

export const { setAuth } = isAuth.actions;
export default isAuth.reducer;
