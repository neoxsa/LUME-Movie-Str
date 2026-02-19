import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: {}
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    }
  }
});

export const {setResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
