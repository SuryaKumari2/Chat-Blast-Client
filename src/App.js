import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import Landing from './Landing'
import './App.css'

export const store=createContext();
const App = () => {

  const [token,setToken]=useState(null);
  return (
    <div >
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/register' Component={Register} />
        <Route  path='/login' Component={Login} />
        <Route  path='/myprofile' Component={Landing} />
      </Routes>
      </BrowserRouter>
      </store.Provider>
      
    </div>
  )
}

export default App