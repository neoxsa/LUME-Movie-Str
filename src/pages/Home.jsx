import HeroSection from '#components/HeroSection'
import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl text-white font-bold'>Welcome to the Home Page</h1>
            <HeroSection />
        </div>
    )
}
