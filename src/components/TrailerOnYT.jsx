import React from 'react'

function TrailerOnYT({
    trailerKey,
    className = "",
    onClose
}) {
    if (!trailerKey) return null; 


    return (
        <section className={`absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-4 ${className}`}>
            <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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

export default TrailerOnYT
