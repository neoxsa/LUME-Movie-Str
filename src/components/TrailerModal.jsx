import { X } from 'lucide-react';
import React from 'react'

function TrailerModal({
    trailerKey,
    className = "",
    onClose
}) {
    if (!trailerKey) return null;

    return (
        <section className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 ${className}`}>
            <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                    <X className='w-6 h-6' />
                </button>

                <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Official Trailer"
                />
            </div>
        </section>
    )
}

export default TrailerModal
