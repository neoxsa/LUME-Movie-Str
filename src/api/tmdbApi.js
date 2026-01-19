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
            query: (page_no) => `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page_no}&sort_by=popularity.desc`
        }),

        // Discover TV Shows
        getDiscoverTVShows: builder.query({
            query: (page_no) => `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page_no}&sort_by=popularity.desc`
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

