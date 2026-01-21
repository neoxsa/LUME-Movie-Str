import React from 'react'
import HeroSkeleton from './Skeleton/HeroSkeleton';
import { useGetAllTrendingQuery } from '#api/tmdbApi.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function HeroSection() {

    const { data, isLoading, isError, error } = useGetAllTrendingQuery();
    const trendingMovies = data?.results || [];
    console.log(trendingMovies);

    return (
        <section className="relative -top-17 min-h-[70vh] w-full overflow-hidden">
            <div className="w-full h-full">
                {
                    isLoading ? (
                        <HeroSkeleton />
                    ) :
                        isError ? <div className='text-red-500'>Error: {error.message}</div> :
                            (<Swiper
                                modules={[Pagination, Autoplay, EffectFade, Navigation]}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                navigation={{
                                    clickable: true,

                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                            >
                                {trendingMovies.map((movie) => (
                                    <SwiperSlide key={movie.id} className="relative">
                                        
                                        {/* Background image */}
                                        <img
                                            src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                                            alt={movie?.name || movie?.title}
                                            className="w-full h-[70vh] xl:h-[90vh] object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex items-center mt-20 md:mt-0">
                                            <div className="px-6 md:px-16 max-w-2xl text-white space-y-4 ">
                                                <h1 className="text-3xl md:text-5xl font-extrabold text-red-400 leading-tight">
                                                    {movie?.name || movie?.original_name || movie?.title}
                                                </h1>

                                                <div className="flex items-center gap-4 text-sm md:text-base text-gray-300">
                                                    <span className="font-semibold">
                                                        ⭐ {movie?.vote_average?.toFixed(1)}
                                                    </span>
                                                    <span className="uppercase tracking-wide">
                                                        {movie?.media_type}
                                                    </span>
                                                </div>

                                                <p className="text-sm md:text-lg text-gray-200 line-clamp-4">
                                                    {movie?.overview}
                                                </p>

                                                <button className="mt-4 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg text-black font-bold cursor-pointer">
                                                    Watch Now
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            )}
            </div>
        </section>

    )
}

export default HeroSection;