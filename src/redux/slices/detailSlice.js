import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        addDetail: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { addDetail } = detailSlice.actions;

export const selectDetail = (state) => state.detail.data;

export default detailSlice.reducer;