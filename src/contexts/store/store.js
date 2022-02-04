import authReducer from "@contexts/slice/authSlice";
import complaintsReducer from "@contexts/slice/complaintsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        complaints: complaintsReducer
    }
});
