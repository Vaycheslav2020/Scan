import { createSlice } from "@reduxjs/toolkit";

export const accountData = createSlice({
  name: "accountData",
  initialState: {
    accountData: {},
  },
  reducers: {
    setAccountData: (state, data) => {
      state.accountData = data.payload;
    },
    deleteAccountData: (state) => {
      state.accountData = {};
    },
  },
});

export const { setAccountData, deleteAccountData } = accountData.actions;
export default accountData.reducer;
