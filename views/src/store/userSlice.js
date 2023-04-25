import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    error: null,
}


export const userSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        users : (state,action)=>{
            state.user = action.payload;
            state.error = null;
        },
        errors: (state,action)=>{
            state.error = action.payload;
        },
       
    },
});

export const {users,errors} = userSlice.actions;

export default userSlice.reducer;