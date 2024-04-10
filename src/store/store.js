import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "../reducers/changeReducer";

const store = configureStore({
    reducer: {
        change: changeReducer
    }
});

export default store;