// import React, { useContext } from 'react'
// import {UserContext} from '../Context/userContext'
// import { useNavigate } from 'react-router-dom'

// const UserProtected = ({
//     children
// }) => {
//     const {user} = useContext(UserContext);
//     const navigate = useNavigate();
//     if(!user.email){
//         navigate('/login');
//     }
//   return (
//     <>
//     {children}
//     </>
//   )
// }

// export default UserProtected