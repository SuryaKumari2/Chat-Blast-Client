import React,{useState} from 'react'
import axios from 'axios'
const Register = () => {
const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
})
const changeHandler = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler =(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5005/register',data).then(res=> alert(res.data))
}

  return (
    <div className='box'>
        <center>
            <form onSubmit={submitHandler} autoComplete='off'>
                <h3>Register</h3>
                <input type='text' onChange={changeHandler} name='username' placeholder='enter username'  />
                <input type='email' onChange={changeHandler} name='email' placeholder='enter email' autoComplete='off' />
                <input type='password' onChange={changeHandler} name='password' placeholder='enter password'  />
                <input type='password' onChange={changeHandler} name='confirmPassword' placeholder='confirm password'  />
                
                <input type='submit' value='Register' />
                
            </form>
        </center>
    </div>
  )
}

export default Register