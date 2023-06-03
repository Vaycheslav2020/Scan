import { createSlice } from "@reduxjs/toolkit";

export const histograms = createSlice({
  name: "histograms",
  initialState: {
    histograms: [],
  },
  reducers: {
    setHistograms: (state, data) => {
      state.histograms = data.payload;
    },
  },
});

export const { setHistograms } = histograms.actions;
export default histograms.reducer;
