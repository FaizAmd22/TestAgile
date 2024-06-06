import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    addAllData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addAllData } = allDataSlice.actions;

export const selectAllData = (state) => state.allData.data;

export default allDataSlice.reducer;
