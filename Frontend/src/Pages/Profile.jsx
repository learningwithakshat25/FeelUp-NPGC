import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import axios from 'axios'

const Profile = () => {

  const [profileName, setProfileName] = useState("");

  useEffect(async () => {
    let token = JSON.parse(localStorage.getItem('tokenData'));

    const response = await axios.get('http://localhost:3000/profile', token)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className='text-center text-2xl my-5'>
      Welcome {profileName || "Akshat Mittal"}
    </div>
  )
}

export default Profile