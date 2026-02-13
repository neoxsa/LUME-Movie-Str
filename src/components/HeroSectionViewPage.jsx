import React from 'react'
import { Play } from 'lucide-react';
import TrailerModal from './TrailerModal';
import HeroSkeletonDetailView from './Skeleton/HeroSkeletonDetailView';

function HeroSectionViewPage({
    selectedData,
    trailerKey,
    isLoading,
    isError,
    error,
    isTrailerError,
    trailerError
}) {

    const [isTrailerOpen, setIsTrailerOpen] = React.useState(false);
    console.log(selectedData)

    const date = new Date(selectedData?.release_date || selectedData?.first_air_date);


    return (
        <section className='relative -top-17 w-full h-full lg:h-[90vh] overflow-hidden'>

            {/* Trailer Modal */}
            {
                isTrailerOpen && (
                    <TrailerModal
                        trailerKey={trailerKey}
                        onClose={() => setIsTrailerOpen(false)}
                    />
                )
            }

            {
                (isError || isTrailerError) && !selectedData && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center">
                        <div className="text-center p-6 bg-black/95 rounded-xl">
                            <p className="text-red-500/50 text-xl">Error Loading Data</p>
                            <p className="text-red-500/50 mt-2">{trailerError?.status}  {trailerError?.data?.status_message}</p>
                            <p className="text-red-500/50 mt-2">{error?.status}  {error?.data?.status_message}</p>
                        </div>
                    </div>
                )
            }

            {
                !isLoading ? (
                    <div
                        className='relative w-full h-full lg:pt-10 xl:pt-20'
                        key={selectedData?.id}>
                        <img
                            className='absolute inset-0 w-full h-full object-cover brightness-50'
                            src={selectedData?.backdrop_path ? `https://image.tmdb.org/t/p/w780/${selectedData?.backdrop_path}` : "https://placehold.co/300x450?text=No+Image"}
                            alt={selectedData?.name || selectedData?.title}
                            loading="eager"
                            decoding="async"
                            fetchPriority='high'
                        />

                        < div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent' />

                        <div className='relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24'>
                            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-12 max-w-7xl justify-center w-full'>
                                <div className='relative group shrink-0 mt-25 lg:mt-0'>
                                    <img
                                        className='w-48 md:w-64 lg:w-80 rounded-2xl shadow-2xl border border-white/20'
                                        src={selectedData?.poster_path ? `https://image.tmdb.org/t/p/w400/${selectedData?.poster_path}` : "https://placehold.co/300x450?text=No+Image"}
                                        alt={selectedData?.name || selectedData?.title}
                                        loading="eager"
                                        decoding='async'
                                        fetchPriority='high'
                                    />
                                    <button
                                        onClick={() => setIsTrailerOpen(!isTrailerOpen)}
                                        aria-label="Play Button"
                                        className='absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity cursor-pointer'>
                                        <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 active:bg-red-700 transition-colors shadow-lg'>
                                            <Play className='w-6 h-6 text-white ml-1' />
                                        </div>
                                    </button>
                                </div>

                                <div className='text-white space-y-3 lg:space-y-6 max-w-2xl'>
                                    <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                        {selectedData?.name || selectedData?.original_name || selectedData?.title}
                                    </h1>

                                    <div className='flex items-center gap-2 md:gap-4 text-sm md:text-base text-gray-300'>
                                        <span>{date.toLocaleDateString()}</span>
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
                                        <h3 className='text-md lg:text-2xl font-semibold'>Overview</h3>
                                        <p className='text-gray-200 leading-relaxed text-sm lg:text-lg'>{selectedData?.overview}</p>
                                    </div>

                                    <button className='bg-red-600 hover:bg-red-700 active:bg-red-700 text-lg:text-base text-white font-semibold px-5 py-2.5 lg:px-8 lg:py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl mb-8 lg:mb-2 cursor-pointer'>
                                        Watch Now
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div >
                )
                    :
                    <HeroSkeletonDetailView />

            }

        </section >
    )
}

export default HeroSectionViewPage
