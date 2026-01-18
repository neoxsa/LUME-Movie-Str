import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3/`,

        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${String(import.meta.env.VITE_TMBD_API_TOKEN)}`);
            headers.set('Accept', 'application/json');

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
            query: () => `discover/movie`
        }),

        // Discover TV Shows
        getDiscoverTVShows: builder.query({
            query: () => `discover/tv`
        }),

        // Movies Details By ID
        getMoviesByID: builder.query({
            query: (movie_id) => `movie/${movie_id}`
        }),

        // TV Shows Details By D
        getTVShowsByID: builder.query({
            query: (series_id) => `tv/${series_id}`
        }),

        // Movie Trailer Video
        getMovieTrailer: builder.query({
            query: (series_id) => `tv/${series_id}/videos`
        }),

        // TV Shows Trailer Video
        getTVShowTrailer: builder.query({
            query: (series_id,season_number)=> `https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}/videos`
        })

    })
})

export const { useGetAllTrendingQuery, useGetDiscoverMoviesQuery, useGetMoviesByIDQuery, useGetTVShowsByIDQuery, useGetMovieTrailerQuery } = apiSlice

