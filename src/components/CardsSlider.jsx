import React, { useRef, useEffect } from "react"
const MovieCard = React.lazy(() => import("./MovieCard"))
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "../index.css"
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import MovieCardSkeleton from "#components/Skeleton/MovieCardSkeleton"
import { useNavigate } from "react-router-dom"

function CardsSlider({
  title,
  media,
  mediaType,
  btnClickAction
}) {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const navigate = useNavigate();

  const date = (dateString) => new Date(dateString);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.swiper.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="text-white space-y-6 mx-6 md:mx-10 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-red-600 rounded-full" />
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        loop={media?.length > 6}
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
      >
        {/* Skeleton / Empty / Data states */}
        {!media ? (
          <>
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <MovieCardSkeleton />
              </SwiperSlide>
            ))}
          </>
        ) : media.length === 0 ? (
          <SwiperSlide>
            <div className="text-white text-center py-10">
              No Data Found
            </div>
          </SwiperSlide>
        ) : (
          media.map((episode) => (
            <SwiperSlide key={episode?.id}>
              <MovieCard
                selectedId={episode?.id}
                mediaType={mediaType}
                title={episode?.name || episode?.original_name || episode?.title}
                date={
                  episode?.first_air_date ?
                    date(episode?.first_air_date).toLocaleDateString("en-us", {
                      year: "numeric",
                    }) : date(episode?.release_date).toLocaleDateString("en-us", {
                      year: "numeric",
                    })}
                rating={episode.vote_average?.toFixed(1)}
                poster={`https://image.tmdb.org/t/p/w342/${episode.poster_path}`}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <button
        aria-label='Previous button'
        ref={prevButtonRef}
        className="custom-prev">
        <ArrowBigLeftDash className="text-red-400" />
      </button>
      <button
        aria-label='Previous button'
        ref={nextButtonRef}
        className="custom-next">
        <ArrowBigRightDash className="text-red-400" />
      </button>

      {
        btnClickAction && (
          <div className="flex w-full justify-center items-center">
            <button
              aria-label="Show all"
              className="mt-4 px-6 py-2 cursor-pointer bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => navigate(btnClickAction)}
            >
              Show All
            </button>
          </div>
        )
      }

    </section>
  )
}

export default CardsSlider

