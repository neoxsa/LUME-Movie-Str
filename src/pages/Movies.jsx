import React from 'react'


function Movies() {

  const {data: allMoviesData, isLoading, isError, error } = useGetDiscoverMoviesQuery();
  const allMovies = allMoviesData?.results ?? []

  return (
    <>
    
    </>
  )
}

export default Movies
