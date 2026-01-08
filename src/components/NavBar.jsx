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
        <nav className='p-5 mt-12'>
            <div className='flex justify-evenly items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='w-42 h-15' />
                    {/* <h1 className='text-xl font-bold'>LUME</h1> */}
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
                    <button className='border-[#df2144] border bg-black/10 rounded-lg px-4 py-2 font-medium text-lg'>
                        Log In
                    </button>
                    <button
                        className='bg-[#df2144] px-4 py-2 font-medium text-lg rounded-lg'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar