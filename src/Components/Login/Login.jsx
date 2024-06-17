import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.js';


export default function Login() {
  let { SaveUserData } = useContext(AuthContext)

  let [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    username: "",
    password: "",
  })
  function addUser(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)

  }
  const notify = (msg, type) => {
    toast[type](msg)
  };

  let navigate = useNavigate()
  async function userLogin(e) {
    e.preventDefault()
    setLoading(true)
    axios.post(`https://fakestoreapi.com/auth/login`, user).then((data) => {
    
      localStorage.setItem("token", data.data.token)
      navigate("/")
      SaveUserData()
      
      setLoading(false)
      notify("success", 'success')
    }).catch((err) => {
    

      setLoading(false)
      notify(err.response.data, "error")

    })
  }




  return (

    <>

      <div className=' d-flex justify-content-center align-items-center flex-column vh-100 my-5'>
        userName: mor_2314 <br />
        password: 83r5^_
        <h1 className='my-3'>Login Page</h1>
        <form onSubmit={userLogin} className='p-5 w-50 border border-1 rounded bg-color'>

          <label htmlFor="username" className='text-ok'>User Name</label>
          <input type="username" onChange={addUser} className=' form-control my-2' name='username' id='username' />


          <label htmlFor="password" className='text-ok'>Password</label>
          <input type="password" onChange={addUser} className=' form-control my-2 mb-3' name='password' id='password' />


          { loading?
          <i class="fa-solid fa-spinner fa-spin text-white fa-2xl "></i>
          :    <button className='btn btn-outline-light'>
          Login
        </button>
        }

      

        </form>
      </div>

    </>
  )
}
