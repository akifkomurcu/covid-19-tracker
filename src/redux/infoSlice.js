import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "items",
    initialState: {
        barData: [12, 19, 10, 5],

    },
    reducers: {
        setBarData: (state, action) => {
            state.infected = action.payload
        },

    }
})

export default infoSlice.reducer;