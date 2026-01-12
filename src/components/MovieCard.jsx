import { Clock, Star } from 'lucide-react'
import React from 'react'


function MovieCard({
    className = "",
    poster,
    title,
    rating,
    date,
    overview,

}) {

    return (
        <section className={`w-fit  ${className}`}>
            <div>
                <img src={poster} alt={title} className='object-cover rounded-t-2xl' />
                <p className='inline-flex justify-between items-center bg-gray-700 w-full px-5 py-2 rounded-b-2xl'>
                    <span className='inline-flex gap-2'>
                        <Star className='text-amber-300' />{rating}</span>
                    <span className='inline-flex gap-2 text-white/90 justify-self-end'>
                        <Clock className='text-red-300' />
                        {date}
                    </span>
                </p>
            </div>
            <h1 className='text-center text-lg font-medium m-1'>{title}</h1>
        </section>
    )
}

export default MovieCard
