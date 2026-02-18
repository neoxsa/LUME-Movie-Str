import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "#api/tmdbApi";
import searchResultReducer from "#features/searchResult";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,

        searchResult: searchResultReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;
