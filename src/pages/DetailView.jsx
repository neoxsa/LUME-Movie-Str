import React from 'react'
import HeroSectionViewPage from '#components/HeroSectionViewPage'
import { useParams } from 'react-router-dom'
import { useGetMovieTrailerQuery, useGetMoviesByIDQuery, useGetTVShowTrailerQuery, useGetTVShowsByIDQuery, useGetMovieCreditsQuery, useGetTVCreditsQuery } from '#api/tmdbApi'
import Casts from '#components/Casts';

function DetailView() {
  const { type, id } = useParams();

  console.log("DetailView Params - Type:", type, "ID:", id);

  const selectedId = Number(id);
  console.log("Selected ID:", selectedId);

  // Movies Id:
  const { data: selectedData, isLoading: isMovieLoading, isError: isMovieError } = useGetMoviesByIDQuery(selectedId)
  console.log("Selected Data:", selectedData);

  // TV Shows Id:
  const { data: selectedTVData, isLoading: isTVLoading, isError: isTVError } = useGetTVShowsByIDQuery(selectedId);

  // // Movie Trailer:
  const { data: trailerData } = useGetMovieTrailerQuery(selectedId);

  // // TV Show Trailer:
  const { data: tvTrailerData, isLoading: isTVTrailerLoading, isError: isTVTrailerError } = useGetTVShowTrailerQuery({ series_id: selectedId, season_number: 1 });

  const { data: movieCredits, isLoading: isMovieCreditsLoading, isError: isMovieCreditsError, error: movieCreditsError } = useGetMovieCreditsQuery(selectedId);

  const trailerKey = trailerData?.results?.length ? trailerData.results.find(trailer => trailer.name)?.key : null;

  const tvTrailerKey = tvTrailerData?.results?.length > 0 ? tvTrailerData.results.find(trailer => trailer.name)?.key : null;

  console.log("Movie Trailer key:", trailerKey);
  console.log("TV Trailer Key:", tvTrailerKey);

  const { data: tvCredits } = useGetTVCreditsQuery(selectedId);

  // console.log("TV Credits:", tvCredits);


  if (type === 'movie') {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedData}
          trailerKey={trailerKey}
          isLoading={isMovieLoading}
        />
        <Casts
          cast={movieCredits?.cast}
        />
      </>
    )
  } else if (type === 'tv') {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedTVData}
          trailerKey={tvTrailerKey}
          isLoading={isTVLoading}
        />
        <Casts
          cast={tvCredits?.cast}
        />
      </>
    )
  } else {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedTVData || selectedData}
          trailerKey={tvTrailerKey || trailerKey}
          isLoading={isMovieLoading || isTVLoading}
        />
        <Casts
          cast={tvCredits?.cast || movieCredits?.cast}
        />
      </>
    )
  }


}
export default DetailView;
