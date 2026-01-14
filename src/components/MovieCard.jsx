import { Clock, Star } from "lucide-react"
import React, { memo } from "react"

const MovieCard = memo(function MovieCard({
  className = "",
  poster,
  title,
  rating,
  date,
}) {
  return (
    <article
      className={`w-full max-w-55 md:max-w-65 ${className}`}
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className="aspect-2/3 w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-black/70 px-4 py-2 text-sm backdrop-blur">
          <span className="flex items-center gap-1 text-amber-300 font-bold">
            <Star size={14} />
            {rating}
          </span>

          <span className="flex items-center gap-1 text-white/80 font-bold">
            <Clock size={14} />
            {date}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-2 line-clamp-2 text-center text-sm md:text-base font-medium text-white">
        {title}
      </h3>
    </article>
  )
})

export default MovieCard
