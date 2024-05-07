import React,{useContext,useState,useEffect} from 'react'
import { store } from './App'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Landing = () => {
  const [token,setToken]=useContext(store)
  const [data,setData]=useState(null);
  const [allmsg,setAllmsg]=useState([]);
  const [newmsg,setNewmsg]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5005/myprofile',{
      headers:{
        'x-token' : token
      }
    }).then(res=>setData(res.data)).catch((e)=>console.log(e))

    axios.get('http://localhost:5005/getmsg',{
      headers:{
        'x-token' : token
      }
    }).then(res=>setAllmsg(res.data)).catch((e)=>console.log(e))
  
  },[])
  
const submitHandler =(e)=>{
  e.preventDefault();
  axios.post('http://localhost:5005/addmsg',{text:newmsg},{
    headers:{
      'x-token' : token
    }
  }).then(res=>setAllmsg(res.data)).catch((e)=>console.log(e))
}
  if(!token){
    return <Navigate to='/login'/>
  }
  return (
    <div className='whole'>{
      
      data &&(
        <div className="container">


      <center>
        
        <div className="card">
        
          <div className='card-body'>
          {
              
              
                allmsg.length>=1?
                

              
                allmsg.map(message=> 

                    <div className='msg-body'>
                      <h2 className='msg-title'>
                      🧑{message.username}
                      </h2>
                      <h4 className='msg-text'>
                      {message.text}
                         <h6>{new Date(message.date).toLocaleTimeString()}</h6>
                      </h4>

                    </div>
                  
                 
                //   <div className='card-context'>

                //         <div className='card-block'>
                //   <h2 className="card-title">🧑{message.username}   </h2>
                //   <p>{message.text}
                //   <h6>{new Date(message.date).toLocaleTimeString()}</h6>
                //   </p>
                //   </div>
                //  </div>
               )
  :
  <h1>Messages Loading....</h1>}
  

            </div>
            <form onSubmit={submitHandler}>
    <input type='text' onChange={(e)=>setNewmsg(e.target.value)} className='msgs' />
    <input type='submit' value='send message' />
  </form>
                  <button onClick={()=>setToken(null)} className='card-button'>Logout</button>
              
        </div>

      
        
      </center>
      </div>
      )}
    </div>
  )
}

export default Landing