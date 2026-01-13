import HeroSection from '#components/HeroSection'
import MoviesSlider from '#components/MoviesSlider'
import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HeroSection />

            <MoviesSlider />
        </div>
    )
}
