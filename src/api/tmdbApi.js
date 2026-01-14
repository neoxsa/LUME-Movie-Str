import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3/`,

        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${String(import.meta.env.VITE_TMBD_API_TOKEN)}`)
            headers.set('Accept', 'application/json')

            return headers;
        }

    }),
    endpoints: (builder) => ({

        // All Trending Movies
        getAllTrending: builder.query({
            query: () => `trending/all/week`
        }),

        // Discover Movies
        getDiscoverMovies: builder.query({
            query: () => `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
        }),

    })
})

export const { useGetAllTrendingQuery, useGetDiscoverMoviesQuery } = apiSlice

