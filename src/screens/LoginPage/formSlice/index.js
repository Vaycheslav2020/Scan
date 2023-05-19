import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "inputValue",
  initialState: {
    loginValue: "",
    passwordValue: "",
    fieldValidationErrors: {
      login: false,
      password: false,
      error: "",
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
      state.fieldValidationErrors.error = null;
    },
    handlePassword: (state, value) => {
      const val = value.payload.replace(/\s/g, "");
      const res = /^[A-Za-z0-9]\w{6,}$/;
      if (!res.test(String(val))) {
        state.fieldValidationErrors.password = false;
      } else {
        state.fieldValidationErrors.password = true;
      }
      state.passwordValue = val;
      state.fieldValidationErrors.error = null;
    },
    handleFormErrors: (state) => {
      state.fieldValidationErrors.error = (
        <p style={{ color: "red" }}>Неправильный логин или пароль</p>
      );
    },
  },
});

export const { handleLogin, handlePassword, handleFormErrors } =
  formSlice.actions;
export default formSlice.reducer;
