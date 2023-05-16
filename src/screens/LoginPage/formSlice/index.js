import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "inputValue",
  initialState: {
    loginValue: "",
    passwordValue: "",
    fieldValidationErrors: {
      login: false,
      pass: false,
    },
  },
  reducers: {
    handleLogin: (state, value) => {
      const val = value.payload.replace(/\s/g, "");
      if (val.length < 6) {
        state.fieldValidationErrors.login = false;
      } else {
        state.fieldValidationErrors.login = true;
      }
      state.loginValue = val;
    },
    handlePassword: (state, value) => {
      const val = value.payload.replace(/\s/g, "");
      const res = /^[A-Za-z0-9]\w{6,}$/;
      if (!res.test(String(val))) {
        state.fieldValidationErrors.pass = false;
      } else {
        state.fieldValidationErrors.pass = true;
      }
      state.passwordValue = val;
    },
  },
});

export const { handleLogin, handlePassword } = formSlice.actions;
export default formSlice.reducer;
