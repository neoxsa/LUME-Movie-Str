import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        selectedMovie: (state, action) => {
            state = action.payload
        }
    }
})

export const { selectedMovie } = movieSlice.actions;

export default movieSlice.reducer