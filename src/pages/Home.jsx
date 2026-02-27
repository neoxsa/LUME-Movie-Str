import React from 'react'
const HeroSection = React.lazy(() => import('#components/HeroSection'))
import CardsSlider from '#components/CardsSlider'
import { useGetAllTrendingQuery, useGetDiscoverMoviesQuery, useGetDiscoverTVShowsQuery } from "#api/tmdbApi"
import Newsletter from '#components/Newsletter';

export default function Home() {
    const { data: discoverMoviesData } = useGetDiscoverMoviesQuery(1);
    const { data: discoverTVShowsData } = useGetDiscoverTVShowsQuery(1);
    const { data: trendingData, } = useGetAllTrendingQuery();
    const discoverMovies = discoverMoviesData?.results
    const discoverTVShows = discoverTVShowsData?.results
    const trending = trendingData?.results

    return (
        <div className='flex flex-col'>
            <HeroSection />

            {/* Trending Top 20 */}
            <CardsSlider
                title={"Trending Top 20"}
                media={trending}
                mediaType={'all'}
            />

            {/* Discover Movies */}
            <CardsSlider
                title={"Discover Movies"}
                media={discoverMovies}
                mediaType={'movie'}
                btnClickAction={'/movies'}
            />
            {/* Discover TV Shows */}
            <CardsSlider
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
