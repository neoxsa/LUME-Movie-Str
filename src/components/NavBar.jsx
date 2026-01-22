import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
            to: `/movies`,
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
        <nav
            className=" sticky z-50 top-4  mx-auto w-[95%] max-w-7xl px-6 py-3  bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40 rounded-2xl transition-all duration-300"
        >
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="h-10 w-auto" />
                </Link>

                {/* Nav links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.id} className="relative group">
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => `text-base font-medium transition-colors duration-200 group-hover:text-white ${isActive ? 'font-bold text-red-400/90' : "text-white/90"}`}
                            >
                                {item.label}
                            </NavLink>

                            <span
                                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#df2144] transition-all duration-300 group-hover:w-full"
                            />
                        </li>
                    ))}
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        className=" hidden sm:inline-flex px-4 py-2  text-white/90 border border-white/20  bg-white/5 rounded-lg  hover:bg-white/10 transition text-sm font-medium"
                    >
                        Log In
                    </button>

                    <button
                        className=" px-4 py-2 bg-[#df2144]  text-black rounded-lg font-semibold text-sm  hover:bg-[#c81c3b] transition"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default NavBar