import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ResultCard from '#components/ResultCard';


function SearchResults() {

  const searchData = useSelector(state => state.searchResult.results);
  const results = searchData ? searchData.results : [];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 xl:m-10'>
      {results?.map((item) => (
       
        <Link 
        key= {item.id}
        to = {item?.media_type !== "person" ? `/category/${item?.media_type}/${item.id}` : `/category/${item?.media_type}/${item.id}`}
        >
        <ResultCard
          image={item.poster_path || item.profile_path}
          title={item.title || item.name}
          media_type={item.media_type}
          date={item.release_date || item.first_air_date}
        />
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
