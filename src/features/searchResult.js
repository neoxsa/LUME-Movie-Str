import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: []
}


export const searchResult = createSlice({
    name: "searchResult",
    initialState,
    reducers: {
    allResults: (state, action) => {
            state.results = action.payload;
        }
    }
});

export const { allResults } = searchResult.actions;

export default searchResult.reducer;