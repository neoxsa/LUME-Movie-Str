import React from 'react'

function PersonProfile({ imageUrl, name }) {
  const hasImage = Boolean(imageUrl)

  return (
    <section className='flex flex-col items-center gap-4 mt-10 px-4'>
      <header className='text-center'>
        <h1 className='text-2xl lg:text-3xl font-bold tracking-tight'>
          {name}
        </h1>
      </header>

      <div className='flex w-full items-center justify-center gap-4'>
        <span className='hidden sm:block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='relative flex items-center justify-center rounded-full bg-gradient-to-tr from-red-500/70 via-red-400/80 to-blue-500/80 p-[3px] shadow-lg shadow-red-900/40'>
          {hasImage ? (
            <img
              className='h-40 w-40 rounded-full object-cover  ring-4 ring-black/10'
              src={imageUrl}
              alt={name}
              loading='lazy'
            />
          ) : (
            <div className='flex h-32 w-32 items-center justify-center rounded-full bg-zinc-800 text-4xl font-semibold text-zinc-300'>
              {name?.[0] ?? '?'}
            </div>
          )}
        </div>

        <span className='hidden sm:block h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />
      </div>
    </section>
  )
}

export default PersonProfile