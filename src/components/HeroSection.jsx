import React from 'react'
import { useGetAllTrendingQuery } from '#api/tmdbApi.js'

function HeroSection() {

    const { data } = useGetAllTrendingQuery();
    const trendingMovies = data?.results || [];
    console.log(trendingMovies);

    return (
        <>
            <div className='flex w-full'>
                <img
                    key={trendingMovies[0]?.id}
                    src={`https://image.tmdb.org/t/p/w500/${trendingMovies[0]?.backdrop_path}`}
                    alt={trendingMovies[0]?.title}
                    className='object-cover w-full '
                />

                {/* {
                trendingMovies.map((movie) => (
                    <img
                        key={movie?.id}
                        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                        alt={movie?.title}
                        className='object-cover '
                    />
                ))
            } */}
            </div>
        </>
    )
}

export default HeroSection