import { createSlice } from "@reduxjs/toolkit";

export const checkedTariff = createSlice({
  name: "activeTariff",
  initialState: {
    value: "Beginner",
  },
});
export default checkedTariff.reducer;
