import React from 'react'
import HeroSectionViewPage from '#components/HeroSectionViewPage'
import { useParams } from 'react-router-dom'
import { useGetMovieTrailerQuery, useGetMoviesByIDQuery, useGetTVShowTrailerQuery, useGetTVShowsByIDQuery , useGetMovieCreditsQuery, useGetTVCreditsQuery} from '#api/tmdbApi'
import Casts from '#components/Casts';

function DetailView() {
  const { id } = useParams();

  const selectedId = Number(id);
  console.log("Selected ID:", selectedId);

  // Movies Id
  const { data: selectedData } = useGetMoviesByIDQuery(selectedId)
  console.log("Selected Data:", selectedData);
  // TV Shows Id
  // const { data: selectedTVData, isLoading: isTVLoading, isError: isTVError } = useGetTVShowsByIDQuery(selectedId)
  // // Movie Trailer
  // const { data: trailerData, isLoading: isTrailerLoading, isError: isTrailerError } = useGetMovieTrailerQuery(selectedId)
  // // TV Show Trailer
  // const { data: tvTrailerData, isLoading: isTVTrailerLoading, isError: isTVTrailerError } = useGetTVShowTrailerQuery({ series_id: selectedId, season_number: 1 })
  const { data: movieCredits } = useGetMovieCreditsQuery(selectedId);

  console.log("Movie Credits:", movieCredits?.cast);

  // const { data: tvCredits } = useGetTVCreditsQuery(selectedId);

  // console.log("TV Credits:", tvCredits);

  return (
    <>
      <HeroSectionViewPage
        selectedData={selectedData}
      />
      <Casts
      cast={movieCredits?.cast} 
      />
    </>
  )
}

export default DetailView
