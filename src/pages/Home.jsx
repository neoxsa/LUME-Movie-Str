import HeroSection from '#components/HeroSection'
import MoviesSlider from '#components/MoviesSlider'
import { useGetAllTrendingQuery, useGetDiscoverMoviesQuery } from "#api/tmdbApi"
import React from 'react'

export default function Home() {
    const { data: discoverMoviesData, isLoading, isError, error } = useGetDiscoverMoviesQuery();
    const { data: trendingMoviesData,  } = useGetAllTrendingQuery();
    const discoverMovies = discoverMoviesData?.results ?? []
    const trendingMovies = trendingMoviesData?.results ?? []

    return (
        <div className='flex flex-col'>
            <HeroSection />

            {/* Trending Movies */}
            <MoviesSlider
                title={"Trending Movies"}
                movies={trendingMovies}
            />

            {/* Discover Movies */}
            <MoviesSlider
                title={"Discover Movies"}
                movies={discoverMovies}
            />

        </div>
    )
}
