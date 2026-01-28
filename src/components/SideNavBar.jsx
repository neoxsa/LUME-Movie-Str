import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavBar({
  navItems,

}) {
  return (
    <section className='absolute z-80 bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900 border border-red-400 p-5 top-17 right-0 h-screen w-2/3 rounded-xl md:hidden'>
      <ul className='flex flex-col gap-5'>
        {
          navItems.map((item) => (
            <li key={item.id} className="relative group">
              <NavLink
                to={item.to}
                className={({ isActive }) => `text-xl font-medium transition-colors duration-200 group-hover:text-white ${isActive ? 'font-bold text-red-400/90' : "text-white/90"}`}
              >
                {item.label}
              </NavLink>

              <span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#df2144] transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))
        }
      </ul>
      {/* Buttons */}
                    <div className="absolute bottom-30 flex  items-center gap-3">
                        <button
                            className="inline-flex px-4 py-2  text-white/90 border border-white/20  bg-white/5 rounded-lg  hover:bg-white/10 transition text-sm font-medium"
                        >
                            Log In
                        </button>

                        <button
                            className="inline-flex px-4 py-2 bg-[#df2144]  text-black rounded-lg font-semibold text-sm  hover:bg-[#c81c3b] transition"
                        >
                            Sign Up
                        </button>
                    </div>

    </section>
  )
}

export default SideNavBar
