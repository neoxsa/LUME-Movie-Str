import React from "react"
import { useGetAllTrendingQuery } from "#api/tmdbApi"
import MovieCard from "./MovieCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"


function MoviesSlider() {
  const { data } = useGetAllTrendingQuery()
  const movies = data?.results ?? []

  return (
    <section className="w-full px-4 md:px-10 py-6">
      <Swiper
        modules={[Navigation]}
        loop={movies.length > 5}
        navigation={{
          enabled: true,
        }}
        touchRatio={1.2}
        resistanceRatio={0.85}
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title || movie.original_name || movie.name}
              date={movie.first_air_date || movie.release_date}
              rating={movie.vote_average?.toFixed(1)}
              poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MoviesSlider
