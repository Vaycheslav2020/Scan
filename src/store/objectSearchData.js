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
    deleteHistograms: (state) => {
      state.histograms = [];
    },
  },
});

export const { setHistograms, deleteHistograms } = histograms.actions;
export default histograms.reducer;
