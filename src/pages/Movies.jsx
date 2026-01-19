import React from 'react'
import { useGetDiscoverMoviesQuery } from '#api/tmdbApi';
import MovieCard from '#components/MovieCard';

function Movies() {
  const [page, setPage] = React.useState(1);

  const { data: allMoviesData, isLoading, isError, error } = useGetDiscoverMoviesQuery(page);

  const allMovies = allMoviesData?.results ?? [];

  console.log("All Movies:", allMovies);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

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

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-4 my-4">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded disabled:opacity-50"
            disabled={page === 1}>
            Previous
          </button>

          <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Page {page}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded">
            Next
          </button>
        </div>
      </section>
    </>
  )
}

export default Movies
