import { createSlice } from "@reduxjs/toolkit";

const initialState = []


export const searchResult = createSlice({
    name: "searchResult",
    initialState,
    reducers: {
        searchResultReducer: (action) => {
            return action.payload
        }
    }
});

export const { searchResultReducer } = searchResult.actions;

export default searchResult.reducer;