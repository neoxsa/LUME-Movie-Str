import React from 'react'
import NavBar from '#components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '#components/Footer'
import ScrollToTop from './util/ScrollToTop.jsx';

function App() {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-black to-gray-900'>
    <ScrollToTop />
    <NavBar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App