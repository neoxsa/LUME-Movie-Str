import React from 'react'
import logo from '#assets/logo.webp'
import { NavLink, Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Send } from 'lucide-react'

function Footer() {
    return (
        <footer className='flex flex-col items-center justify-between px-6 py-4 bg-gray-900 text-white w-full p-6 mt-12 space-y-6'>
            {/* All Contents */}
            <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between items-center gap-6 md:gap-0 mt-6 mb-4'>

                {/* Footer content */}
                <div className='flex flex-col'>
                    <img className='w-40 h-auto' src={logo} alt="LUME Logo" />

                    <p className='text-white/90 mt-2'>Your ultimate destination for movies and TV shows</p>
                </div>

                {/* Navigation links */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                    {/* Navigation links */}
                    <ul className='text-xl flex flex-col gap-3'>
                        <h2 className='text-white/90 font-semibold underline mb-2'>Links</h2>
                        <li>
                            <NavLink to='/' className='text-white/90 hover:text-white transition-colors duration-200 block'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/movies' className='text-white/90 hover:text-white transition-colors duration-200 block'>
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/tv-shows' className='text-white/90 hover:text-white transition-colors duration-200 block'>
                                TV Shows
                            </NavLink>
                        </li>
                    </ul>

                    {/* Term & Conditions links */}
                    <ul className='text-xl flex flex-col gap-3'>
                        <h2 className='text-white/90 font-semibold underline mb-2'>Terms & Conditions</h2>
                        <li>
                            <NavLink to='/terms' className='text-white/90 hover:text-white transition-colors duration-200 block'>
                                Terms of Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/privacy' className='text-white/90 hover:text-white transition-colors duration-200 block'>
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>

                    {/* Social media icons */}
                    <div className='text-center'>
                        <h2 className='text-white/90 font-semibold underline mb-2 text-xl'>Social Media</h2>
                        <ul className='flex gap-4 justify-center items-center'>
                            <li>
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-white/90 hover:bg-red-500 transition-colors duration-200 p-2 rounded' aria-label="Facebook">
                                    <Facebook className='w-6 h-6' />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-white/90 hover:bg-red-500 transition-colors duration-200 p-2 rounded' aria-label="Instagram">
                                    <Instagram className='w-6 h-6' />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-white/90 hover:bg-red-500 transition-colors duration-200 p-2 rounded' aria-label="Twitter">
                                    <Twitter className='w-6 h-6' />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.telegram.org" target="_blank" rel="noopener noreferrer" className='text-white/90 hover:bg-red-500 transition-colors duration-200 p-2 rounded' aria-label="Telegram">
                                    <Send className='w-6 h-6' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className='text-center w-full px-6 border-t border-white/10 pt-4'>
                <p>© 2026 LUME- Discover & Watch. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer