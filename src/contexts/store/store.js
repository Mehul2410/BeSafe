import authReducer from "@contexts/slice/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});
