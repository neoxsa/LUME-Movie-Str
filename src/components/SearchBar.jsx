import React from "react";
import { Search, X } from "lucide-react";
import { useGetSearchResultsQuery } from "#api/tmdbApi";

function SearchBar() {
  const [searchType, setSearchType] = React.useState("");
  const [searchKey, setSearchKey] = React.useState("");

  const { data } = useGetSearchResultsQuery(
    {
      search_type: searchType,
      search_key: searchKey,
    },
    {
      skip: !searchType || !searchKey,
    }
  );

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchType("multi");
  };

  const results = data?.results;

  return (
    <section>
      <div>
       <form
  onSubmit={searchHandler}
  className="flex items-center gap-2 border rounded-xl px-3 py-2
             w-full bg-black
             focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400"
>
  <input
    type="text"
    placeholder="Search movies, shows, people..."
    value={searchKey}
    onChange={(e) => setSearchKey(e.target.value)}
    className="flex-1 outline-none bg-transparent text-white
               text-sm md:text-base"
  />

  {searchKey && (
    <button
      type="button"
      className="opacity-70 hover:opacity-100"
      aria-label="Clear search"
    >
      <X className="w-5 h-5" />
    </button>
  )}

  <button
    type="submit"
    className="opacity-80 hover:opacity-100"
    aria-label="Search"
  >
    <Search className="w-5 h-5 md:w-6 md:h-6" />
  </button>
</form>

      </div>

      {/* Result List */}
      {results?.length > 0 && (
        <div
             className="
      fixed md:absolute
      inset-x-0 md:left-0
      top-18 md:top-full
      bg-black/95 border border-white/10
      rounded-t-xl md:rounded-xl
      p-3 md:p-5
      max-h-[60vh] md:max-h-96
      overflow-y-auto
      z-50 custom-scrollbar
    "
          aria-label="Search result"
        >
          <ul className="flex flex-col gap-5" aria-label="All Results">
            {results.map((item) =>
          (  <li
  key={item.id}
  className="flex gap-3 p-2 rounded-lg
             hover:bg-white/5 transition
             border-l-4 border-red-500 cursor-pointer"
>
  <img
    src={
      item.profile_path || item.poster_path
        ? `https://image.tmdb.org/t/p/w185/${item.profile_path || item.poster_path}`
        : "https://placehold.co/150x225?text=No+Image"
    }
    alt={item.title || item.name}
    className="w-14 md:w-20 rounded-md object-cover shrink-0"
  />

  <div className="flex flex-col justify-center">
    <h2 className="text-sm md:text-lg leading-tight line-clamp-2">
      {item.title || item.name}
    </h2>

    <p className="text-xs md:text-sm font-medium text-red-400">
      {item.media_type === "person"
        ? item.known_for_department
        : item.release_date}
    </p>
  </div>
</li>

              )
            )}
          </ul>

          <button
            onClick={() => {}}
             className="mt-4 w-full py-2 rounded-xl
             bg-white text-black font-medium
             active:scale-95 transition cursor-pointer"
            aria-label="Show all results button"
          >
            Show all results
          </button>
        </div>
      )}
    </section>
  );
}

export default SearchBar;
