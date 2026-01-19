import React from 'react'
import NavBar from '#components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '#components/Footer'
import ScrollToTop from './util/ScrollToTop.jsx';

function App() {
  return (
    <>
    <ScrollToTop />
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App