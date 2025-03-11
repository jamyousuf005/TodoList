import React from 'react'

import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './Components/Navbar'
import About from './Components/About'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <>
      <Navbar/>
      <Home/>
      </>
    },
    {
      path:'/About',
      element: <>
      <Navbar/>
      <About/>
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    
    
    </>
  )
}

export default App
