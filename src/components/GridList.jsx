import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MovieCard from '#components/MovieCard';
import MovieCardSkeleton from '#components/Skeleton/MovieCardSkeleton';

function GridList({
    discoverQuery,
    navigatePath
}) {

    const { page_no } = useParams();
    const navigate = useNavigate();

    const [page, setPage] = React.useState(() => {
        const pageNum = Number(page_no);
        return isNaN(pageNum)
            || pageNum < 1 ? 1 : pageNum;
    });

    const { data, isLoading, isError, error } = discoverQuery(page);

    const allData = data?.results ?? [];

    console.log("All Data:", allData);

    const handleNextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        navigate(`/${navigatePath}/${nextPage}`);
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            const prevPage = page - 1;
            setPage(prevPage);
            navigate(`/${navigatePath}/${prevPage}`);
        }
    }

    return (
        <>
            {/* Grid of Movies */}

            <section className="m-4 xl:m-10">
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-4 gap-4">
                    {isLoading ? (
                        Array.from({ length: 20 }).map((_, index) =>
                            <MovieCardSkeleton key={index} />
                        ))
                        : isError ? (
                            <div className='text-red-500'>Error: {error.message}</div>
                        ) : (
                            allData.map((data) => (
                                <MovieCard
                                    key={data.id}
                                    selectedId={data?.id}
                                    title={data?.name || data?.original_name || data?.title}
                                    date={
                                        data.first_air_date ?
                                            new Date(data?.first_air_date).toLocaleDateString("en-us", {
                                                year: "numeric",
                                            }) : new Date(data?.release_date).toLocaleDateString("en-us", {
                                                year: "numeric",
                                            })}
                                    rating={data.vote_average?.toFixed(1)}
                                    poster={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                                />
                            ))
                        )}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center space-x-4 my-4">
                    <button
                        onClick={handlePreviousPage}
                        className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded disabled:opacity-50"
                        disabled={page === 1}>
                        Previous
                    </button>

                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
                        Page {page}
                    </span>
                    <button
                        onClick={handleNextPage}
                        className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded">
                        Next
                    </button>
                </div>
            </section>
        </>
    )
}

export default GridList
