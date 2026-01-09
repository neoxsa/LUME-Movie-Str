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

        // All Trending
        getAllTrending: builder.query({
            query: () => `trending/all/week`
        })
    })
})

export const { useGetAllTrendingQuery} = apiSlice

