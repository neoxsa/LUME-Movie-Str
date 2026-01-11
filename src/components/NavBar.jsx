import React from 'react'
import { Link } from 'react-router-dom'
import logo from '#assets/logo.webp'

function NavBar() {
    const navItems = [
        {
            id: 1,
            label: 'Home',
            to: '/',
        },
        {
            id: 2,
            label: 'Movies',
            to: '/movies',
        },
        {
            id: 3,
            label: 'TV Shows',
            to: '/tv-shows',
        },
        {
            id: 4,
            label: 'Contact',
            to: '/contact',
        },
    ]

    return (
        <nav className='absolute z-50 top-4 left-1/2 -translate-x-1/2 w-[95%] p-2
         bg-black/30 backdrop-blur-xl
         border border-white/15
         shadow-lg shadow-black/40
         rounded-2xl transition-all duration-300'>
            <div className='flex justify-evenly items-center'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src={logo} alt="logo" className='w-42 h-15' />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <ul className='flex items-center gap-5'>
                        {
                            navItems.map((item) => (
                                <li className='font-medium text-lg hover:border-b-3 border-[#df2144]' key={item.id}>
                                    <Link to={item.to} className='text-white hover:text-gray-300'>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='border-[#df2144] border bg-black/10 rounded-lg px-4 py-2 font-medium text-lg cursor-pointer'>
                        Log In
                    </button>
                    <button
                        className='bg-[#df2144] px-4 py-2 font-medium text-lg rounded-lg cursor-pointer'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar