import React from 'react'

function PersonProfile({ imageUrl, name, bio }) {
  const hasImage = Boolean(imageUrl);
  const hasBio = Boolean(bio?.trim());

  return (
    <section className='flex flex-col items-center gap-8 mt-10 px-4 pb-6 max-w-5xl mx-auto'>
      <header className='text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-red-400 drop-shadow-sm'>
          {name ?? 'Unknown'}
        </h1>
      </header>

      <div className='flex flex-col lg:flex-row w-full items-center lg:items-start justify-center gap-8 lg:gap-12'>
        {/* Avatar with gradient ring */}
        <div className='shrink-0'>
          <div className='relative flex items-center justify-center rounded-full bg-linear-to-br from-red-500/80 via-red-400/90 to-amber-500/70 p-[3px] shadow-xl shadow-red-900/30 ring-2 ring-white/5'>
            {hasImage ? (
              <img
                className='h-36 w-36 sm:h-70 sm:w-50 rounded-full object-cover transition-transform duration-300 hover:scale-[1.02]'
                src={imageUrl}
                alt={name}
                loading='lazy'
                decoding='async'
              />
            ) : (
              <div className='flex h-36 w-36 sm:h-70 sm:w-50 items-center justify-center rounded-full bg-zinc-800/90 text-3xl sm:text-6xl font-semibold text-zinc-400'>
                {name?.[0] ?? '?'}
              </div>
            )}
          </div>
        </div>

        {/* Biography */}
        <div className='flex-1 w-full min-w-0 text-center lg:text-left border border-red-400 rounded-xl p-6'>
          {hasBio ? (
            <div className='max-h-48 sm:max-h-64 overflow-y-auto custom-scrollbar pr-2'>
              <p className='text-base sm:text-lg text-white/90 leading-relaxed'>
                <span className='font-bold text-lg sm:text-xl text-red-400'>Biography :</span>
                <span className='block mt-2 text-sm sm:text-base text-white/80 italic'>
                  {bio}
                </span>
              </p>
            </div>
          ) : (
            <p className='text-sm text-white/50 italic'>
              No biography available.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PersonProfile