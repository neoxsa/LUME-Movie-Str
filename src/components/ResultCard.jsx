import React from 'react'

function ResultCard({
    image,
    title,
    media_type,
    date
}) {
    return (
        <div
            className='group cursor-pointer'>
            <div className='aspect-2/3 bg-gray-800 rounded-lg overflow-hidden'>
                <img
                    src={image
                        ? `https://image.tmdb.org/t/p/w300${image}`
                        : "https://placehold.co/150x225?text=No+Image"
                    }
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform'
                />
            </div>
            <h3 className='text-white font-bold text-sm mt-2 truncate text-wrap'>
                {title}
            </h3>
            <span className='text-red-400 text-xs font-medium uppercase tracking-wide'>
                    {media_type === "movie" ? "Movie" :media_type === "tv" ? "TV" : "Actor"}
                </span>
            <p className='text-gray-400 text-xs'>
                {date ? new Date(date).getFullYear() : "N/A"}
            </p>
        </div>)
}

export default ResultCard
