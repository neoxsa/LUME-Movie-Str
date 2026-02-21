import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SearchItems({
    close,
    query,
    data = {}
}) {

    const navigate = useNavigate();
    const { results = [], page: page_no } = data


    const handlerShowAllResults = () => {
        navigate(`/search/${query}/${page_no}`);
        close();
    }

    console.log("Results :", results);

    return (
        <section
            className="w-full h-screen absolute left-0"
            onClick={close}
        >

            {results?.length > 0 && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="fixed md:absolute inset-x-0 md:left-0 top-18 md:top-5 bg-black/95 border border-white/10 rounded-t-xl md:rounded-xl p-3 md:p-5 max-h-[60vh] md:max-h-96 z-50 custom-scrollbar overflow-y-auto"
                    aria-label="Search result"
                >
                    <ul
                        className="flex flex-col gap-5"
                        aria-label="All Results">
                        {results.map((item) => {
                            if (!item.poster_path && !item.profile_path) return null;
                            if (item.media_type === "company") return null;

                            if (item.media_type === "person") {
                                return <Link
                                    key={item.id}
                                    to={`/search/${encodeURIComponent(item?.name.toLowerCase())}/${item?.id}/movies&shows`}
                                    onClick={close}
                                >
                                    <li
                                        className="flex gap-3 p-2 rounded-lg hover:bg-white/5 transition border-l-4 border-red-500 cursor-pointer"
                                    >
                                        <img
                                            src={
                                                item.profile_path
                                                    ? `https://image.tmdb.org/t/p/w185/${item.profile_path}`
                                                    : "https://placehold.co/150x225?text=No+Image"
                                            }
                                            alt={item.name}
                                            className="w-14 md:w-20 rounded-md object-cover shrink-0"
                                        />

                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-sm md:text-lg leading-tight line-clamp-2">
                                                {item.name}
                                            </h2>

                                            <p className="text-xs md:text-sm font-medium text-red-400">
                                                {item.known_for_department} 
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            }
                            return <Link
                            key={item.id}
                            to={`category/${item.media_type}/${item.id}`}
                            onClick={close}
                        >
                            <li
                                className="flex gap-3 p-2 rounded-lg hover:bg-white/5 transition border-l-4 border-red-500 cursor-pointer"
                            >
                                <img
                                    src={
                                        item.poster_path
                                            ? `https://image.tmdb.org/t/p/w185/${item.poster_path}`
                                            : "https://placehold.co/150x225?text=No+Image"
                                    }
                                    alt={item.title}
                                    className="w-14 md:w-20 rounded-md object-cover shrink-0"
                                />

                                <div className="flex flex-col justify-center">
                                    <h2 className="text-sm md:text-lg leading-tight line-clamp-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-xs md:text-sm font-medium text-red-400">
                                                {item.release_date}
                                            </p>
                                </div>
                            </li>
                        </Link>
                        }
                        )}
                    </ul>

                    <button
                        onClick={handlerShowAllResults}
                        className="mt-4 w-full py-2 rounded-xl bg-white text-black font-medium active:scale-95 transition cursor-pointer"
                        aria-label="Show all results button"
                    >
                        Show all results
                    </button>
                </div>
            )}

        </section>
    )
}

export default SearchItems
