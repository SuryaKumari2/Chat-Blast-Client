import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { store } from './App'

const Navbar = () => {
  const [token,setToken]=useContext(store)
  return (
    <div className='nav'>
      {!token &&(
        <>
        <h1>Chat & blast💥</h1>
        
        <ul>
            <Link to='/register' style={{textDecoration:'none'}}>
            <li>Register</li>
            </Link>
            <Link to='/login' style={{textDecoration:'none'}}>
            <li>Login</li>
           
            </Link>

            
        </ul>
        </>
      )}
    </div>
  )
}

export default Navbar