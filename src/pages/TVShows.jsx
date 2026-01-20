import React from 'react'
import { useGetDiscoverTVShowsQuery } from '#api/tmdbApi';
import GridList from '#components/GridList';

function TVShows() {
  return (
    <GridList
      discoverQuery={useGetDiscoverTVShowsQuery}
      navigatePath="tv-shows"
    />
  )
}

export default TVShows
