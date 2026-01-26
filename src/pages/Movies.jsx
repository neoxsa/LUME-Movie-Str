import React from 'react'
import { useGetDiscoverMoviesQuery } from '#api/tmdbApi';
import GridList from '#components/GridList';

function Movies() {

  return (
    <GridList
      discoverQuery={useGetDiscoverMoviesQuery}
      navigatePath="movies"
      mediaType={"movie"}
    />
  )
}

export default Movies
