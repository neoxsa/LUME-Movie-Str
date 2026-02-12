import React from 'react'
const HeroSectionViewPage = React.lazy(() => import('#components/HeroSectionViewPage'))
import { useParams } from 'react-router-dom'
import { useGetMovieTrailerQuery, useGetMoviesByIDQuery, useGetTVShowTrailerQuery, useGetTVShowsByIDQuery, useGetMovieCreditsQuery, useGetTVCreditsQuery } from '#api/tmdbApi'
import Casts from '#components/Casts';

function DetailView() {
  const { type, id } = useParams();

  // console.log("DetailView Params - Type:", type, "ID:", id);

  const selectedId = Number(id);

  // Movies Id:
  const { data: selectedData, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = useGetMoviesByIDQuery(selectedId)
  console.log("Selected Data:", selectedData);

  // TV Shows Id:
  const { data: selectedTVData, isLoading: isTVLoading, isError: isTVError, error: tvError } = useGetTVShowsByIDQuery(selectedId);

  // // Movie Trailer:
  const { data: trailerData, isLoading: isMovieTrailerLoading, isError: isMovieTrailerError, error: movieTrailerError } = useGetMovieTrailerQuery(selectedId);

  const trailerKey = trailerData?.results?.length ? trailerData.results.find(trailer => trailer.name)?.key : null;

  // // TV Show Trailer:
  const { data: tvTrailerData, isLoading: isTVTrailerLoading, isError: isTVTrailerError, error:
    tvTrailerError } = useGetTVShowTrailerQuery({ series_id: selectedId, season_number: 1 });

  const tvTrailerKey = tvTrailerData?.results?.length > 0 ? tvTrailerData.results.find(trailer => trailer.name)?.key : null;

  // Credits
  const { data: movieCredits, isLoading: isMovieCreditsLoading, isError: isMovieCreditsError, error: movieCreditsErr } = useGetMovieCreditsQuery(selectedId);

  const { data: tvCredits, isLoading: isTVCreditsLoading, isError: isTvCreditsError, error: tvCreditsErr } = useGetTVCreditsQuery(selectedId);

  if (type === 'movie') {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedData}
          trailerKey={trailerKey}
          isLoading={isMovieLoading}
          isError={isMovieError}
          error={movieError}
          isTrailerLoading={isMovieTrailerLoading}
          isTrailerError={isMovieTrailerError}
          trailerError={movieTrailerError}
        />
        <Casts
          cast={movieCredits?.cast}
          isLoading={isMovieCreditsLoading}
          isError={isMovieCreditsError}
          error={movieCreditsErr}
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
          isError={isTVError}
          error={tvError}
          isTrailerLoading={isTVTrailerLoading}
          isTrailerError={isTVTrailerError}
          trailerError={tvTrailerError}
        />
        <Casts
          cast={tvCredits?.cast}
          isLoading={isTVCreditsLoading}
          isError={isMovieCreditsError || isTvCreditsError}
          error={movieCreditsErr || tvCreditsErr}
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
          isError={isMovieError || isTVError}
          error={movieError || tvError}
          isTrailerLoading={isMovieTrailerLoading || isTVTrailerLoading}
          isTrailerError={isMovieTrailerError || isTVTrailerError}
          trailerError={movieTrailerError || tvTrailerError}
        />
        <Casts
          cast={tvCredits?.cast || movieCredits?.cast}
          isLoading={isMovieCreditsLoading || isTVCreditsLoading}
          isError={isMovieCreditsError || isTvCreditsError}
          error={movieCreditsErr || tvCreditsErr}
        />
      </>
    )
  }
}
export default DetailView;
