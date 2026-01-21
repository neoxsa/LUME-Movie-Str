import HeroSection from '#components/HeroSection'
import MoviesSlider from '#components/MoviesSlider'
import { useGetAllTrendingQuery, useGetDiscoverMoviesQuery, useGetDiscoverTVShowsQuery } from "#api/tmdbApi"
import React from 'react'

export default function Home() {
    const { data: discoverMoviesData } = useGetDiscoverMoviesQuery(1);
    const { data: discoverTVShowsData } = useGetDiscoverTVShowsQuery(1);
    const { data: trendingData, } = useGetAllTrendingQuery();
    const discoverMovies = discoverMoviesData?.results ?? []
    const discoverTVShows = discoverTVShowsData?.results ?? []
    const trending = trendingData?.results ?? []

    console.log("Trending Movies & TV Shows:", trending);

    return (
        <div className='flex flex-col'>
            <HeroSection />

            {/* Trending Top 20 */}
            <MoviesSlider
                title={"Trending Top 20"}
                movies={trending}
            />

            {/* Discover Movies */}
            <MoviesSlider
                title={"Discover Movies"}
                movies={discoverMovies}
                btnClickAction={'/movies'}
            />
            {/* Discover TV Shows */}
            <MoviesSlider
                title={"Discover TV Shows"}
                movies={discoverTVShows}
                btnClickAction={'/tv-shows'}
            />

        </div>
    )
}
