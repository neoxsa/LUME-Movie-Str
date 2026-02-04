import React, { useEffect } from "react";
import { Search, X } from "lucide-react";
import { useGetSearchResultsQuery } from "#api/tmdbApi";
import SearchItems from "#components/SearchItems";

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchKey, setSearchKey] = React.useState("");
  const [isDebounce, setIsDebounce] = React.useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsDebounce(searchKey)
    }, 500)

    return () => clearTimeout(handler)
  }, [searchKey])


  const searchType = searchKey.length > 2 ? "multi" : "";

  const { data } = useGetSearchResultsQuery(
    {
      search_type: searchType,
      search_key: isDebounce,
    },
    {
      skip: !searchType || !isDebounce,
    }
  );

  const searchHandler = (e) => {
    e.preventDefault();
  };

  const openSearch = () => setIsSearchOpen(true);

  const searchCleanUp = () => {
    setIsSearchOpen(false);
    setSearchKey("");
  }

  return (
    <section>
      <div>
        <form
          onSubmit={searchHandler}
          onClick={openSearch}
          className="transition-all duration-500 ease-in-out inline-flex items-center gap-2 border rounded-full  px-1 py-1 w-full bg-black/10 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400 cursor-pointer"
        >
          <Search className="w-5 h-5 md:w-6 md:h-6" />

          {
            isSearchOpen && (
              <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search for movies or tv shows..."
                className="flex-1 outline-none bg-transparent text-white text-sm md:text-base"
                autoFocus
                aria-label="Search input"
              />
            )
          }

          {searchKey && (
            <button
              onClick={searchCleanUp}
              type="button"
              className="opacity-70 hover:opacity-100"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </form>
      </div>

      {/* Result List */}

      {
        isSearchOpen && searchKey
          ? (
            <div className="relative">
              <SearchItems
                close={searchCleanUp}
                query={searchKey.toLowerCase()}
                data={data}
              />
            </div>)
          : null
      }

    </section>
  );
}

export default SearchBar;
