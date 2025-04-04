import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Dummy from '../Pages/Dummy'

const AppLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet className="w-screen bg-black"/> 
    {/* <Dummy/> */}
    <Footer/>
    </>
  )
}

export default AppLayout