import GridList from '#components/GridList'
import PersonProfile from '#components/PersonProfile'
import ResultCard from '#components/ResultCard'
import React from 'react'
import { useSelector } from 'react-redux'

function PersonKnownFor() {

  const personData = useSelector(state => state.searchResult.result)

  console.log(personData)

  const personKnownFor = personData?.known_for

  return (
    <section className='space-y-15'>
      <PersonProfile
        imageUrl={`https://image.tmdb.org/t/p/w342/${personData?.profile_path}`}
        name={personData?.name}
      />
      <span className='block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 xl:m-10'>

        {
          personKnownFor.map((data) => (
            <ResultCard
              key={data.id}
              image={data.poster_path}
              onClick={() => { }}
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