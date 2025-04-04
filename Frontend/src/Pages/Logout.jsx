import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  let navigate = useNavigate();
   const handleserver = ()=>{
    let dataLogout = localStorage.removeItem('tokenData');
    console.log(dataLogout);
    alert('User Logout');
    navigate('/');
    
   }

  return (
    <div>
      <button className='bg-red-700 text-white font-semibold p-2 rounded-md' onClick={handleserver}>Logout</button>
    </div>
  )
}

export default Logout