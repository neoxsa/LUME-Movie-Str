import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.themoviedb.org/3/`,

        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${String(import.meta.env.VITE_TMDB_API_TOKEN)}`);
            headers.set('Accept', 'application/json');

            return headers;
        }
    }),
    endpoints: (builder) => ({

        // All Trending Movies
        getAllTrending: builder.query({
            query: () => `trending/all/week`
        }),

        // Search Movies/TV Shows
        getSearchResults: builder.query({
            query: ({ search_type, search_key }) => `/search/${search_type}?query=${search_key}&include_adult=false`
        }),

        // Discover Movies Pagination
        getDiscoverMovies: builder.query({
            query: (page_no) => `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page_no}&sort_by=popularity.desc`
        }),

        // Discover TV Shows Pagination
        getDiscoverTVShows: builder.query({
            query: (page_no) => `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page_no}&sort_by=popularity.desc`
        }),

        // Movies Details By ID
        getMoviesByID: builder.query({
            query: (movie_id) => `movie/${movie_id}`
        }),

        // TV Shows Details By ID
        getTVShowsByID: builder.query({
            query: (series_id) => `tv/${series_id}`
        }),

        // Movie Trailer Video
        getMovieTrailer: builder.query({
            query: (series_id) => `movie/${series_id}/videos`
        }),

        // TV Shows Trailer Video
        getTVShowTrailer: builder.query({
            query: ({ series_id, season_number }) => `tv/${series_id}/season/${season_number}/videos`
        }),

        // Credits Movies
        getMovieCredits: builder.query({
            query: (movie_id) => `movie/${movie_id}/credits`
        }),

        // Credit TV Shows
        getTVCredits: builder.query({
            query: (tv_id) => `tv/${tv_id}/credits`
        }),

        // TV EPISODE GROUPS
        getTVEpGroup: builder.query({
            query: (tv_episode_group_id) => `tv/episode_group/${tv_episode_group_id}`
        })
    })
})

export const { useGetAllTrendingQuery, useGetDiscoverMoviesQuery, useGetMoviesByIDQuery, useGetTVShowsByIDQuery, useGetMovieTrailerQuery, useGetDiscoverTVShowsQuery, useGetTVShowTrailerQuery, useGetMovieCreditsQuery, useGetTVCreditsQuery, useGetTVEpGroupQuery, useGetSearchResultsQuery } = apiSlice

