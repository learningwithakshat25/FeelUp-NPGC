import React, { useEffect } from 'react'
import Logout from './Logout'
import axios from 'axios'

const Profile = () => {

  const handleClick =async ()=> {

    let userData = {
      email: '',
      password: '',
      username: '',
      name: name
    }
    const response = await axios.get('http://localhost:3000/profile', userData)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
}
  

  return (
    <div>
      <button onClick={handleClick} className='bg-green-400'>Get Data</button>
    </div>
  )
}

export default Profile