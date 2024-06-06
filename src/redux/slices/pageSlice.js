import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    addPage: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addPage } = pageSlice.actions;

export const selectPage = (state) => state.page.data;

export default pageSlice.reducer;
