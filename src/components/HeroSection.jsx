import React from 'react'
import { useGetAllTrendingQuery } from '#api/tmdbApi.js'

function HeroSection() {

    const { data } = useGetAllTrendingQuery();

    const trendingMovies = data?.results.slice(0, 5) || [];
    console.log(trendingMovies);

    return (
        <section className='relative flex gap-4'>
            <div className='w-full h-auto'>
                <img
                    key={trendingMovies[0]?.id}
                    src={`https://image.tmdb.org/t/p/w1280/${trendingMovies[0]?.backdrop_path}`}
                    alt={trendingMovies[0]?.title}
                    className='object-cover w-full brightness-65'
                />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-left flex gap-5 flex-col'>
                <div>
                    <h1 className='text-5xl font-bold mb-4 text-red-400'>{trendingMovies[0]?.original_name}</h1>
                    <p className='text-gray-400 font-bold text-2xl'>{trendingMovies[0]?.media_type}</p>
                    <p className='text-xl'>{trendingMovies[0]?.overview}</p>

                </div>
                <div className='flex gap-5'>
                    <span className='text-xl'>{trendingMovies[0]?.vote_average}</span>
                    <span>{trendingMovies[0]?.first_air_date}</span>
                </div>
                <div>
                    <button className='bg-red-400 px-5 py-2 rounded text-xl font-bold text-black'>
                        <span>Watch Now</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;