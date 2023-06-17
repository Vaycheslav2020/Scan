import { createSlice } from "@reduxjs/toolkit";

export const checkedTariff = createSlice({
  name: "activeTariff",
  initialState: {
    value: "Beginner",
  },
  reducers: {
    setCheckedTariff: (state, value) => {
      state.checkedTariff = value.payload;
    },
    deleteCheckedTariff: (state) => {
      state.checkedTariff = "";
    },
  },
});
export const { setCheckedTariff, deleteCheckedTariff } = checkedTariff.actions;
export default checkedTariff.reducer;
