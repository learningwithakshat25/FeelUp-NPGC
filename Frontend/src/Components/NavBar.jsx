import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router";
import Logout from '../Pages/Logout'
import { Navigate } from 'react-router';


const NavBar = () => {
  let token = localStorage.getItem('tokenData');
  let navigate = useNavigate();


  return (
    <div className="main sticky top-0 w-full bg-white">
    <div className='main-child w-full p-4 h-fit flex flex-row items-center justify-between bg-white text-black container mx-auto '>
      <Link to='/' ><h1 className='font-semibold text-red-700 text-2xl '>FeeluP</h1></Link>
      <div className="nav-right flex flex-row items-center justify-center gap-10">
        <ul className='flex flex-row items-center justify-center gap-10 font-semibold'>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
        <div className="button flex flex-row items-center justify-center gap-10 ">
        { token ?  
        <>
        <Logout/>
        </>
        :
        <>
        <Link to='/login'><button className='bg-[#B60000] px-4 py-2 rounded-lg text-white cursor-pointer'>Log in</button></Link>
        <Link to='/register'><button className='bg-[#E2E2E2] px-4 py-2 rounded-lg text-black cursor-pointer'>Signup</button></Link>
        </>
      }
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
