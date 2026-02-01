import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '#app/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Movies, DetailView, TVShows, Contact, SearchResults } from '#pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route path='/movies/:page_no?' element={<Movies />} />
      <Route path='/tv-shows/:page_no?' element={<TVShows />} />
      <Route path='/category/:type/:id' element={<DetailView />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/search/:query/:page_no?' element={<SearchResults />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
