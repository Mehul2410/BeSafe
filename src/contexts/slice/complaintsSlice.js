import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mslf: []
};

export const complaintsSlice = createSlice({
    name: "complaints",
    initialState,
    reducers: {
        userMslf: (state, action) => {
            const { myComplaints } = action.payload;
            state.mslf = myComplaints;
        }
    },
    extraReducers: {}
});

// Action creators are generated for each case reducer function
export const { userMslf } = complaintsSlice.actions;

export default complaintsSlice.reducer;
