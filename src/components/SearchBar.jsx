import { Search } from 'lucide-react'
import React from 'react'
import { useGetSearchResultsQuery } from '#api/tmdbApi'

function SearchBar() {

  const [searchType, setSearchType] = React.useState('')
  const [searchKey, setSearchKey] = React.useState('')

  const { data } = useGetSearchResultsQuery(
    {
      search_type: searchType,
      search_key: searchKey
    },
    {
      skip: !searchType || !searchKey,
    }
  )


  const searchHandler = (e) => {
    e.preventDefault()

    setSearchType("multi")
  }

  console.log(data?.results)

  const results = data?.results

  return (
    <section>
      <div>
        <div className="flex items-center gap-2 border rounded-xl px-3 py-2 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400">

          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchKey(e.target.value)}
            className="flex-1 outline-none bg-transparent text-white"
            aria-label="Search"
          />

          <button
            type="button"
            onClick={searchHandler}
            className="text-white opacity-80 hover:opacity-100 transition"
            aria-label="Search button"
          >
            <Search />
          </button>

        </div>
      </div>

      {/* Result List */}
      {
        results?.length > 0 && (
          <div
            className="bg-black/90 border border-white/10 shadow-xl shadow-black/40  absolute rounded-xl p-5 mt-4 max-h-96 overflow-y-auto custom-scrollbar "
          >
            <ul className="flex flex-col gap-5">
              {results?.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-20 h-auto rounded-md object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-lg">
                      {item.title || item.name}
                    </h2>
                    <p className="text-md font-medium text-red-400">
                      {item.release_date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

    </section>

  )
}

export default SearchBar
