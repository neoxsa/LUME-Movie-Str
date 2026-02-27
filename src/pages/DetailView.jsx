import React from 'react'
import HeroSectionViewPage from '#components/HeroSectionViewPage'
import { useParams } from 'react-router-dom'
import { useGetMovieTrailerQuery, useGetMoviesByIDQuery, useGetTVShowTrailerQuery, useGetTVShowsByIDQuery, useGetMovieCreditsQuery, useGetTVCreditsQuery, useGetSimilarMoviesQuery } from '#api/tmdbApi'
import Casts from '#components/Casts';
import CardsSlider from '#components/CardsSlider';

function DetailView() {
  const { type, id } = useParams();
  const isMovie = type === 'movie';
  const isTV = type === 'tv';
  
  const selectedId = Number(id);

  // Movies Id:
  const { data: selectedData, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = useGetMoviesByIDQuery(selectedId)

  // TV Shows Id:
  const { data: selectedTVData, isLoading: isTVLoading, isError: isTVError, error: tvError } = useGetTVShowsByIDQuery(selectedId);

  // Similar Movies or Shows\
  const { data: similarMedia } = useGetSimilarMoviesQuery({ media_type: type, media_id: selectedId })
console.log("Similar:", similarMedia)

  // // Movie Trailer:
  const { data: trailerData, isError: isMovieTrailerError, error: movieTrailerError } = useGetMovieTrailerQuery(selectedId);

  // // TV Show Trailer:
  const { data: tvTrailerData, isError: isTVTrailerError, error:
    tvTrailerError } = useGetTVShowTrailerQuery({ series_id: selectedId });


  const getTrailerKey = (videos) => {
    if (!videos) return null;

    return (
      videos.find(v => v.type === "Trailer")?.key ||
      videos.find(v => v.name.toLowerCase().includes("trailer"))?.key ||
      null
    );
  };

  const movieTrailerKey = getTrailerKey(trailerData?.results);
  const tvTrailerKey = getTrailerKey(tvTrailerData?.results);

  // Credits
  const { data: movieCredits, isLoading: isMovieCreditsLoading, isError: isMovieCreditsError, error: movieCreditsErr } = useGetMovieCreditsQuery(selectedId);

  const { data: tvCredits, isLoading: isTVCreditsLoading, isError: isTvCreditsError, error: tvCreditsErr } = useGetTVCreditsQuery(selectedId);

  if (isMovie) {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedData}
          trailerKey={movieTrailerKey}
          isLoading={isMovieLoading}
          isError={isMovieError}
          error={movieError}
          isTrailerError={isMovieTrailerError}
          trailerError={movieTrailerError}
        />
        <Casts
          cast={movieCredits?.cast}
          isLoading={isMovieCreditsLoading}
          isError={isMovieCreditsError}
          error={movieCreditsErr}
        />

        <CardsSlider
        title="Similar Movies"
        media={similarMedia?.results}
        mediaType= {type}
        // btnClickAction={`/${type}`}
        />
      </>
    )
  } else if (isTV) {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedTVData}
          trailerKey={tvTrailerKey}
          isLoading={isTVLoading}
          isError={isTVError}
          error={tvError}
          isTrailerError={isTVTrailerError}
          trailerError={tvTrailerError}
        />
        <Casts
          cast={tvCredits?.cast}
          isLoading={isTVCreditsLoading}
          isError={isTvCreditsError}
          error={tvCreditsErr}
        />
      </>
    )
  } else {
    return (
      <>
        <HeroSectionViewPage
          selectedData={selectedTVData || selectedData}
          trailerKey={tvTrailerKey || movieTrailerKey}
          isLoading={isMovieLoading || isTVLoading}
          isError={isMovieError || isTVError}
          error={movieError || tvError}
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
