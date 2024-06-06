import { configureStore } from "@reduxjs/toolkit"
import allDataSlice from "./slices/allDataSlice";
import pageSlice from "./slices/pageSlice";
import detailSlice from "./slices/detailSlice";

const store = configureStore({
    reducer: {
        allData: allDataSlice,
        detail: detailSlice,
        page: pageSlice,
    }
})

export default store;