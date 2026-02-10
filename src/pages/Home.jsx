import React from 'react'
const HeroSection = React.lazy(() => import('#components/HeroSection'))
import MoviesSlider from '#components/MoviesSlider'
import { useGetAllTrendingQuery, useGetDiscoverMoviesQuery, useGetDiscoverTVShowsQuery } from "#api/tmdbApi"
import Newsletter from '#components/Newsletter';

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
                media={trending}
                mediaType={'all'}
            />

            {/* Discover Movies */}
            <MoviesSlider
                title={"Discover Movies"}
                media={discoverMovies}
                mediaType={'movie'}
                btnClickAction={'/movies'}
            />
            {/* Discover TV Shows */}
            <MoviesSlider
                title={"Discover TV Shows"}
                mediaType={'tv'}
                media={discoverTVShows}
                btnClickAction={'/tv-shows'}
            />

            {/* Newsletter */}
            <Newsletter
            />
        </div>
    )
}
