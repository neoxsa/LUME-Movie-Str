import { useGetPersonMovieAndTvCreditQuery, useGetPersonDetailsQuery } from '#api/tmdbApi'
import PersonProfile from '#components/PersonProfile'
import ResultCard from '#components/ResultCard'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PersonKnownFor() {
  const { id } = useParams()

  const { data: personData } = useGetPersonDetailsQuery(id);

  const navigate = useNavigate();

  const { data: movieAndTvData } = useGetPersonMovieAndTvCreditQuery(personData?.id || id)

  const movieAndTvCredits = movieAndTvData?.cast;
  console.log("Movies & Tv : ", movieAndTvCredits);


  const cardHandler = (data) => {
    navigate(`/category/${data?.media_type}/${data?.id}`)
  }

  return (
    <section className='space-y-15'>
      <PersonProfile
        imageUrl={`https://image.tmdb.org/t/p/w342/${personData?.profile_path}`}
        name={personData?.name}
        bio={personData?.biography}
      />
      <span className='block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />
      <h2 className="text-3xl w-auto text-center ml-8 md:text-left font-bold mb-4 ">Movies & Shows
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 xl:m-10'>
        {
          movieAndTvCredits?.map((data) => (
            <ResultCard
              key={data?.id}
              image={data.poster_path}
              onClick={() => cardHandler(
                data)}
              title={data?.title}
              media_type={data?.media_type}
              date={data?.release_date || data?.first_air_date}

            />
          ))
        }

      </div>


    </section>
  )
}

export default PersonKnownFor