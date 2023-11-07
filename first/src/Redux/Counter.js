import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "count",
    initialState:{
        count: 0
    },
    reducers:{
        increment: (state)=> state.count = +1
    }
})
export default userSlice.reducer
export const {increment} = userSlice.actions