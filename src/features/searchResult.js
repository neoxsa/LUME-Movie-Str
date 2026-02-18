import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "",
  result: {}
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchKey = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    }
  }
});

export const { setSearchQuery, setResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
