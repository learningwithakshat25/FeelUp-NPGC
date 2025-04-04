import React, { children } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import HomeBundler from './Pages/HomeBundler';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Profile from './Pages/Profile';
import Logout from './Pages/Logout'
import Protect from './Pages/Protect';
// import UserProtected from './Context/UserProtected';
// // import Protect from './Pages/Protect';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
        <Route element={<Protect/>}>
            <Route path='/profile' element={<Profile />}/>
          </Route>
          <Route path='/' element={<HomeBundler />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
