import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: ""
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchKey = action.payload;
    }
  }
});

export const { setSearchQuery } = searchResultSlice.actions;

export default searchResultSlice.reducer;
