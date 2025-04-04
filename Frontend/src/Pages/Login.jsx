import React, { useState } from 'react'
import Hero4 from '../assets/Hero-Asset/Signup-bgr.png';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  

   const isLogged = async ()=>{
    const userData = {
      email: email,
      password: password
    };
    const response =  await axios.post('http://localhost:3000/login', userData)
    .then((result)=>{
      console.log(result);
      navigate('/profile')  ;
    })
    console.log(response);
  }
  const submitHandler =async (e)=>{
      e.preventDefault();
      setemail('');
      setpassword('');
      console.log(email, password);
      isLogged();
    }
  return (
    <div className='main w-full overflow-hidden h-[500px] bg-[#EBC399] flex flex-row items-center justify-center'>
        <div className="left w-1/2  ">
            <img className='h-[600px]' src={Hero4} alt="hero-4_img" />
        </div>
        <div className="right w-1/2  flex flex-col gap-10 items-center justify-center bg-[#EBC399]">
        <h1 className='text-4xl font-semibold text-black'>Login to FeeluP</h1>
        <form
        onSubmit={(e)=>{
          submitHandler(e);
        }}
         className='flex flex-col gap-5 items-center justify-center w-96'>
            <input
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="email" name="email" placeholder='Email' />
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            className='p-3 w-full rounded-lg bg-white text-black' type="password" name="password" placeholder='Password' />
            <input className='p-3 w-full text-white font-semibold text-md rounded-md bg-[#B60000]' type="submit" value="Submit" />
        </form>
        </div>
    </div>
  )
}

export default Login