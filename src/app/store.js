import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "#api/tmdbApi"
;
import searchResult from "#features/searchResult";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        
        searchResult: searchResult
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;
