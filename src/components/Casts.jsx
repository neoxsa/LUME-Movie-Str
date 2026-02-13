
function Casts({
  cast = [],
  isLoading,
  isError,
  error,
}) {


  return (
    <section className="text-white space-y-6 mx-6 md:mx-10 mb-12">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-red-600 rounded-full" />
        <h3 className="text-2xl md:text-3xl font-bold">Cast & Crew</h3>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar">
        {
          isError &&
          (<p className="text-red-500/50">Something went wrong : {error?.status} - {error?.data?.status_message} </p>)
        }

        {
          !isLoading && !isError && cast.length === 0
            ? <p className="text-white/50">No cast data available</p>
            : null
        }

        {
          isLoading ?
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="min-w-35 flex flex-col gap-3"
              >
                <div className="w-32 h-40 rounded-xl bg-gray-800 animate-pulse" />
                <p className="w-32 h-4 bg-gray-800 rounded-md animate-pulse" />
              </div>
            ))

            :
            cast.map((member) => (
              <div
                key={member.id}
                className="min-w-35 flex flex-col gap-3 group cursor-pointer"
              >
                <div className="relative w-32 h-40 rounded-xl overflow-hidden bg-gray-800 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={
                      member.profile_path
                        ? `https://image.tmdb.org/t/p/w300${member.profile_path}`
                        : "https://placehold.co/300x450?text=No+Image"
                    }
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-tight text-white group-hover:text-red-400 transition-colors">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-400 leading-tight">
                    {member.character}
                  </p>
                </div>
              </div>
            ))
        }

      </div>
    </section>
  );
}

export default Casts;
