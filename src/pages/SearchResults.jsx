import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ResultCard from '#components/ResultCard';
import { useGetSearchResultsQuery } from '#api/tmdbApi';

function SearchResults() {
  const { query, page_no } = useParams()
  const navigate = useNavigate();

  const pageNo = Number(page_no) || 1

  const { data } = useGetSearchResultsQuery(
    {
      search_type: "multi",
      search_key: query,
      page_no: pageNo
    },
    {
      skip: !query,
    }
  );

  // prev btn handler
  const handlerPrev = () => {
    if (pageNo <= 1) return;
    const prevPage = pageNo - 1
    navigate(`/search/${query}/${prevPage}`)
  }

  // next btn handler
  const handlerNext = () => {
    const totalPages = data?.total_pages || 1
    if (pageNo >= totalPages) return;
    const nextPage = pageNo + 1
    navigate(`/search/${query}/${nextPage}`)
  }

  // person data handler
  const personDataHandler = (item) => {

    const name = item?.name || item.original_name

    if(!name) return;

    navigate(`/search/${encodeURIComponent(name?.toLowerCase())}/${item?.id}/movies&shows`);
  }

  return (
    <section>
      <div className='h-1 w-full bg-red-500 mt-10'></div>
      <h1 className='text-2xl font-bold m-4 xl:m-10'>Search Results For : <span className='text-red-400'>{query}</span>, results found <span className='text-red-400'>{data?.total_results || 0}</span></h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 m-4 xl:m-10'>

        {
          data?.results.map((item) => {

            if (!item.poster_path && !item.profile_path) return null;
            if (item.media_type === "company") return null;

            if (item.media_type === "person") {
              return <ResultCard
                key={item?.id}
                onClick={() => personDataHandler(item)}
                image={item.profile_path}
                title={item.original_name || item.name}
                media_type={item.media_type}
              />

            }

            return (
              <Link
                key={item?.id}
                to={`/category/${item?.media_type}/${item.id}`}
              >
                <ResultCard
                  image={item.poster_path}
                  title={item.title || item.name}
                  media_type={item.media_type}
                  date={item.release_date || item.first_air_date}
                />
              </Link>
            )
          })
        }


      </div>
      <div className='w-full flex justify-center items-center gap-5'>
        <button
          onClick={handlerPrev}
          disabled={pageNo <= 1}
          className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
          Page {data?.page || 1} of {data?.total_pages || 1}
        </span>
        <button
          onClick={handlerNext}
          disabled={pageNo >= (data?.total_pages || 1)}
          className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default SearchResults
