import React, { useState } from 'react'
import regpic from '../images/regimage2.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [data, setdata] = useState(
  
      {
        "empid": "",
        "empname": "",
        "email": "",
        "mobileno": "",
        "gender": "",
        "pass": "",
        "cpass":"",
      }
  )
  
  const navigate = useNavigate();
  const [error,seterror] = useState("");

  const inputHANDLER = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  const readData = (e) => {
    e.preventDefault();
    
    if(data.pass !== data.cpass){
      alert("Passwords do not match")
    } else {
      alert("Passwords match")
    }
    axios.post("http://localhost:8080/register", data).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "Success") {
          alert("Registration Successfull")
          navigate("/login")
          
        } else {
          alert("Error in Registration")
        }
      }
    ).catch(
      (error) => {
        alert("Error while Registering")
      }
    ).finally()
  }
return (
  <div>
    <div className="reg-container">
      <img className='regimage' src={regpic} alt="Registration-Image" />
      <div className="regform animate1">

        <h2 className='reghd1'>Registration</h2>

        <hr className='line3' />

        <form className='formcontrol' action="">
          <div className=''>
            <label className='reglabel' htmlFor="">Employee ID</label><br />
            <input className='regfield' type="text" name='empid' value={data.empid} onChange={inputHANDLER}></input><br />
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Employee Name</label><br />
            <input className='regfield' type="text" name='empname' value={data.empname} onChange={inputHANDLER}></input><br />
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Email</label><br />
            <input className='regfield' type="text" name='email' value={data.email} onChange={inputHANDLER}></input><br />
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Mobile No</label><br />
            <input className='regfield' type="text" name='mobileno' value={data.mobileno} onChange={inputHANDLER}></input><br />
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Gender</label><br />
            <div className="gender-div">
              <div className='genderradio'>
                <input className='round' type="radio" name='gender' value='male' checked={data.gender === 'male'} onChange={inputHANDLER}></input><br />
                <label className='gendername' htmlFor="">Male</label>
              </div>
              <div className='genderradio'>
                <input className='round' type="radio" name='gender' value='female' checked={data.gender === 'female'} onChange={inputHANDLER}></input><br />
                <label className='gendername' htmlFor="">Female</label>
              </div>
            </div>
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Password</label><br />
            <input className='regfield' type="password" name='pass' value={data.pass} onChange={inputHANDLER}></input><br />
          </div>

          <div className='LAFC'>
            <label className='reglabel' htmlFor="">Confirm Password</label><br />
            <input className='regfield' type="password" name='cpass' value={data.cpass} onChange={inputHANDLER}></input><br />
          </div>

          {error && <p style={{color:'red'}}>{error}</p>}

          <button className='regbtn' onClick={readData}><a>SignUp</a></button>

        </form>
      </div>

    </div>
  </div>
)
}

export default Registration