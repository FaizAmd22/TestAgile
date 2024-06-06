import { configureStore } from "@reduxjs/toolkit"
import allDataSlice from "./slices/allDataSlice";
import pageSlice from "./slices/pageSlice";

const store = configureStore({
    reducer: {
        allData: allDataSlice,
        page: pageSlice,
    }
})

export default store;