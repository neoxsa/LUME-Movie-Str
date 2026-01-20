import React, { memo } from "react"

const MovieCardSkeleton = memo(function MovieCardSkeleton({ className = "" }) {
  return (
    <article className={`w-full max-w-55 md:max-w-65 ${className}`}>
      {/* Poster Skeleton */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-2/3 w-full bg-gray-700 animate-pulse" />

        {/* Content Skeleton */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-black/70 px-4 py-2 text-sm backdrop-blur">
          <div className="flex items-center gap-1">
            <div className="w-12 h-4 bg-gray-600 rounded animate-pulse" />
          </div>

          <div className="flex items-center gap-1">
            <div className="w-12 h-4 bg-gray-600 rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Title Skeleton */}
      <div className="mt-2 space-y-2">
        <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4 mx-auto" />
      </div>
    </article>
  )
})

export default MovieCardSkeleton
