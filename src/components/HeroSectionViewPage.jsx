import { Play } from 'lucide-react';
import React from 'react'
import TrailerOnYT from './TrailerOnYT';

function HeroSectionViewPage({
    selectedData,
    trailerKey
}) {

    const [isTrailerOpen, setIsTrailerOpen] = React.useState(false);

    console.log(isTrailerOpen);

    return (
        <section className='relative -top-17 w-full h-[90vh] overflow-hidden'>

            {
                isTrailerOpen && (
                    <TrailerOnYT 
                    trailerKey={trailerKey} 
                    onClose={() => setIsTrailerOpen(false)} />
                )
            }

            <div 
            className='relative w-full h-full mt-4' 
            key={selectedData?.id}>
                <img
                    className='absolute inset-0 w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/w1280/${selectedData?.backdrop_path}`}
                    alt={selectedData?.name || selectedData?.title}
                />

                < div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent' />

                <div className='relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24'>
                    <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-7xl'>
                        <div className='relative group shrink-0'>
                            <img
                                className='w-48 md:w-64 lg:w-80 rounded-2xl shadow-2xl border border-white/20'
                                src={`https://image.tmdb.org/t/p/w400/${selectedData?.poster_path}`}
                                alt={selectedData?.name || selectedData?.title}
                            />
                            <button
                                onClick={() => setIsTrailerOpen(!isTrailerOpen)}
                                className='absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
                                <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg'>
                                    <Play className='w-6 h-6 text-white ml-1' />
                                </div>
                            </button>
                        </div>

                        <div className='text-white space-y-6 max-w-2xl'>
                            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                {selectedData?.name || selectedData?.original_name || selectedData?.title}
                            </h1>

                            <div className='flex items-center gap-4 text-sm md:text-base text-gray-300'>
                                <span>{selectedData?.release_date || selectedData?.first_air_date}</span>
                                <span>•</span>
                                {
                                    !selectedData || !selectedData.genres ? null :
                                        <span className='font-medium'>
                                            {selectedData.genres.map(g => g.name).join(", ")}
                                        </span>
                                }
                                <div className='flex items-center gap-2'>
                                    <span>•</span>
                                    <span>⭐</span>
                                    <span className='font-semibold text-yellow-400'>{selectedData?.vote_average?.toFixed(1)}</span>
                                    <span className='text-gray-400'>/10</span>
                                </div>
                            </div>

                            <div className='space-y-3'>
                                <h3 className='text-xl font-semibold'>Overview</h3>
                                <p className='text-gray-200 leading-relaxed'>{selectedData?.overview}</p>
                            </div>

                            <button className='bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl'>
                                Watch Now
                            </button>

                        </div>

                    </div>
                </div>
            </div >
        </section >
    )
}

export default HeroSectionViewPage
