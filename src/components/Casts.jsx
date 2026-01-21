import React from "react";

function Casts({ cast = [] }) {
  if (!cast.length) return null;

  return (
    <section className="text-white space-y-4 mx-10 mb-10">
      <h3 className="text-xl font-semibold tracking-wide">Cast</h3>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {cast.map((member) => (
          <div
            key={member.id}
            className="min-w-[96px] flex flex-col items-center gap-2 text-center group"
          >
            <div className="w-24 h-24 rounded-lg overflow-hidden border border-white/20">
              <img
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                    : "/placeholder-avatar.png"
                }
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p className="text-sm font-medium leading-tight line-clamp-2">
              {member.name}
            </p>

            <p className="text-xs text-gray-400 line-clamp-2">
              {member.character}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Casts;
