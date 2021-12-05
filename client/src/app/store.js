import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "features/food/foodSlice";

const rootReducer = {
    foods: foodReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;