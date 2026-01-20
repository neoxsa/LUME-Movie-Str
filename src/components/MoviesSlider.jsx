import React, { useRef, useEffect } from "react"
import MovieCard from "./MovieCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "../index.css"
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import MovieCardSkeleton from "#components/Skeleton/MovieCardSkeleton"
import { useNavigate } from "react-router-dom"

function MoviesSlider({
  title,
  movies,
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
    <section className="w-full px-4 md:px-25 py-6 relative">
      <h2 className="text-3xl w-full text-center md:text-left font-bold mb-4 ">{title}
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        loop={movies.length > 6}
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
        {/* Skeleton loading */}
        {movies.length === 0 && (
          <>
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <MovieCardSkeleton />
              </SwiperSlide>
            ))}
          </>
        )}

        {/* Movies */}
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.name || movie?.original_name || movie?.title}
              date={
                movie.first_air_date ?
                  date(movie?.first_air_date).toLocaleDateString("en-us", {
                    year: "numeric",
                  }) : date(movie?.release_date).toLocaleDateString("en-us", {
                    year: "numeric",
                  })}
              rating={movie.vote_average?.toFixed(1)}
              poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevButtonRef} className="custom-prev"><ArrowBigLeftDash className="text-red-400" /></button>
      <button ref={nextButtonRef} className="custom-next"><ArrowBigRightDash className="text-red-400" /></button>

      <div className="flex w-full justify-center items-center">
        <button className="mt-4 px-6 py-2 cursor-pointer bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          onClick={() => navigate(btnClickAction)}
        >
          Show All
        </button>
      </div>

    </section>
  )
}

export default MoviesSlider
