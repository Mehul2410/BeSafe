import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lang: "en",
    role: "citizen",
    token: "sdvb",
    name: "",
    email: "",
    user: "",
    authorized: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            console.log(action.payload);
            const { user } = action.payload;
            state.name = user.name;
            state.email = user.email;
            state.user = user._id;
            state.role = user.role;
        },
        signIn: (state, action) => {
            console.log(action.payload);
            const { token, user } = action.payload;
            state.token = token;
            state.name = user.name;
            state.email = user.email;
            state.user = user._id;
            state.authorized = user.authorized;
        }
    },
    extraReducers: {}
});

// Action creators are generated for each case reducer function
export const { signUp, signIn } = authSlice.actions;

export default authSlice.reducer;
