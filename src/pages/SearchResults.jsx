import React from 'react'

function SearchResults({
  searchQuery = "",
  results = []
}) {


  return (
    <section className='min-h-screen px-6 py-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl md:text-3xl font-bold text-white mb-8'>
          Search Results for "{searchQuery}"
        </h1>

        {results.length === 0 ? (
          <div className='text-center text-gray-400 mt-20'>
            <p className='text-xl'>No results found</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {results.map((item) => (
              <div 
              key={item.id} 
              className='group cursor-pointer'>
                <div className='aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden'>
                  <img
                    src={item.poster_path
                      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                      : 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image'
                    }
                    alt={item.title || item.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                  />
                </div>
                <h3 className='text-white text-sm mt-2 truncate'>
                  {item.title || item.name}
                </h3>
                <p className='text-gray-400 text-xs'>
                  {item.release_date || item.first_air_date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchResults
