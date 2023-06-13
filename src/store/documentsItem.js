import { createSlice } from "@reduxjs/toolkit";

export const documentsItem = createSlice({
  name: "documentsItem",
  initialState: {
    documentsItem: [],
  },
  reducers: {
    setDocumentsItem: (state, data) => {
      state.documentsItem = state.documentsItem.concat(data.payload)
    },
    deleteDocumentsItem: (state) => {
      state.documentsItem = [];
    },
  },
});

export const { setDocumentsItem, deleteDocumentsItem } = documentsItem.actions;
export default documentsItem.reducer;
