import { useRef } from 'react'
import HeroSkeleton from './Skeleton/HeroSkeleton';
import { useNavigate } from 'react-router-dom';
import { useGetAllTrendingQuery } from '#api/tmdbApi.js'
import { Autoplay, EffectFade, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


function HeroSection() {
    const { data, isLoading, isError, error } = useGetAllTrendingQuery();
    const navigate = useNavigate();
    const trendingMoviesOrShows = data?.results || [];

    // Swiper 
    const swiperRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    return (
        <section className="relative -top-17 min-h-[70vh] w-full overflow-hidden">
            <div className="w-full h-full">
                {
                    isLoading ? (
                        <HeroSkeleton />
                    ) :
                        isError ? <div className='text-red-500 font-medium text-lg w-full justify-center items-center flex h-[50vh]'>{error?.status}</div> :
                            (
                                <>
                                    <Swiper
                                        ref={swiperRef}
                                        modules={[Pagination, Autoplay, EffectFade, Navigation, Mousewheel, Keyboard]}
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
                                        onBeforeInit={(swiper) => {
                                            swiper.params.navigation.prevEl = prevButtonRef.current;
                                            swiper.params.navigation.nextEl = nextButtonRef.current;
                                        }}
                                        keyboard={{
                                            enabled: true,
                                            onlyInViewport: true,
                                        }}
                                        mousewheel={{
                                            forceToAxis: true,
                                            sensitivity: 1,
                                            releaseOnEdges: true,
                                        }}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop={true}
                                    >
                                        {trendingMoviesOrShows.map((media) => (
                                            <SwiperSlide key={media.id} className="relative">

                                                {/* Background image */}
                                                <img
                                                    src={`https://image.tmdb.org/t/p/w780/${media?.backdrop_path}`}
                                                    alt={media?.name || media?.title}
                                                    className="w-full h-[70vh] xl:h-[90vh] object-cover"
                                                    loading="eager"
                                                    decoding="async"
                                                    fetchPriority='high'
                                                />

                                                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

                                                {/* Content */}
                                                <div className="absolute inset-0 flex items-center md:mx-10 mt-20 md:mt-0">
                                                    <div className="px-6 md:px-16 max-w-2xl text-white space-y-4 ">
                                                        <h1 className="text-3xl md:text-5xl font-extrabold text-red-400 leading-tight">
                                                            {media?.name || media?.original_name || media?.title}
                                                        </h1>

                                                        <div className="flex items-center gap-4 text-sm md:text-base text-gray-300">
                                                            <span className="font-semibold">
                                                                ⭐ {media?.vote_average?.toFixed(1)}
                                                            </span>
                                                            <span className="uppercase tracking-wide">
                                                                {media?.media_type}
                                                            </span>
                                                        </div>

                                                        <p className="text-sm md:text-lg text-gray-200 line-clamp-4">
                                                            {media?.overview}
                                                        </p>

                                                        <button
                                                            onClick={() => navigate(`/category/${media?.media_type}/${media?.id}`)}
                                                            aria-label="Watch now"
                                                            className="mt-4 inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg text-black font-bold cursor-pointer">
                                                            Watch Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <button
                                        aria-label='Previous button'
                                        ref={prevButtonRef}
                                        className="custom-prev">
                                        <ArrowBigLeftDash className="text-red-400" />
                                    </button>
                                    <button
                                        aria-label='Next button'
                                        ref={nextButtonRef}
                                        className="custom-next">
                                        <ArrowBigRightDash className="text-red-400" />
                                    </button>
                                </>
                            )}

            </div>
        </section>

    )
}

export default HeroSection;