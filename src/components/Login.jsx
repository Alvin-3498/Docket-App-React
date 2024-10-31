import React, { useState } from 'react'
import loginimage from '../images/loginpic.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   const [data,setdata] = useState(
    [
      {
        "email":"",
        "pass":"",
      }
    ]
   )
   
   const navigate = useNavigate();
   const inputHANDLER = (event) => {
    setdata({...data,[event.target.name]:event.target.value})
   }
   
   const readData = (e) => {
    e.preventDefault();

     // Check if the email is the admin email
     if (data.email === "admin8@gmail.com") {
      // Navigate to the admin dashboard
      navigate('/admin-dashboard');
      alert("Login successful as Admin");
      return;
    }
    
    axios.post("http://localhost:8080/login",data).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "Success") {
          navigate('/user-dashboard')
          localStorage.setItem("token",response.data.token)
          alert("Login successful as User")
        } else {
          alert("Invalid email or password")
        }
      }
    ).catch(
      (error) => {
        alert("Error while Login")
      }
    )
  }
  return (
    <div>
        <div className="login-container">

           <img className='loginpic' src={loginimage} alt="LoginPicture"></img>
            
            <div className="login-form1 animate1">
              <h2 className='loginhd1'>Login</h2>

              <hr className='line2' />

              <form className='login' action="">
                <label className='labels' htmlFor="email">Email</label><br /> 
                <input className='fields' type="text" name="email" value={data.email} onChange={inputHANDLER}></input><br /><br />
                
                <label className='labels' htmlFor="password">Password</label><br />
                <input className='fields' type="password" name="pass" value={data.pass} onChange={inputHANDLER}/>

                <button className='loginbtn' onClick={readData}><a href="#submit">Submit</a></button>
              </form>
              
            <div className="register-div">
            <p className='accounttext'>Don't have an account?</p><Link className='regtext' to="/register">Register</Link>
            </div>
              
              
              
            </div>
            
        </div>
    </div>
  )
}

export default Login