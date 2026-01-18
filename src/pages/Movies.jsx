import React from 'react'
import { useGetDiscoverMoviesQuery } from '#api/tmdbApi';
import MovieCard from '#components/MovieCard';


function Movies() {

  const { data: allMoviesData, isLoading, isError, error } = useGetDiscoverMoviesQuery();
  const allMovies = allMoviesData?.results ?? [];

  console.log("All Movies:", allMovies);


  return (
    <>
      {/* Grid of Movies */}

      <section className="m-4 xl:m-10">
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-4 gap-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div className='text-red-500'>Error: {error.message}</div>
          ) : (
            allMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.name || movie?.original_name || movie?.title}
                date={
                  movie.first_air_date ?
                    new Date(movie?.first_air_date).toLocaleDateString("en-us", {
                      year: "numeric",
                    }) : new Date(movie?.release_date).toLocaleDateString("en-us", {
                      year: "numeric",
                    })}
                rating={movie.vote_average?.toFixed(1)}
                poster={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              />
            ))
          )}
        </div>
      </section>
    </>
  )
}

export default Movies
