import { isTokenExpired, setCredentials } from "@contexts/store/credentials";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: "en",
    role: null,
    token: "",
    name: "",
    email: "",
    user: "",
    _id: "",
    avatar: "",
    authorized: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            const { success, access_token, refresh_token } = action.payload;
            if (!isTokenExpired(access_token)) {
                const keys = {
                    access_token,
                    refresh_token
                };
                setCredentials(keys);
                state.token = access_token;
            }
        },
        getTokens: (state, action) => {
            const { access_token } = action.payload;
            state.token = access_token;
        },
        userData: (state, action) => {
            const { _id, email, name, role, avatar } = action.payload;
            state._id = _id;
            state.email = email;
            state.name = name;
            state.role = role;
            state.avatar = avatar;
        }
    },
    extraReducers: {}
});

// Action creators are generated for each case reducer function
export const { signUp, getTokens, userData } = authSlice.actions;

export default authSlice.reducer;
