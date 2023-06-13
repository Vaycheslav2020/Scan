import { createSlice } from "@reduxjs/toolkit";

export const documentsID = createSlice({
  name: "documentsID",
  initialState: {
    documentsID: [],
  },
  reducers: {
    setDocumentsID: (state, data) => {
      data.payload.map((item) => {
        state.documentsID = [...state.documentsID, item.encodedId];
      });
    },
    deleteDocumentsID: (state) => {
      state.documentsID = [];
    },
  },
});

export const { setDocumentsID, deleteDocumentsID } = documentsID.actions;
export default documentsID.reducer;
