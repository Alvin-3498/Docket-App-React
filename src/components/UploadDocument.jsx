import axios from 'axios'
import React, { useState } from 'react'

const UploadDocument = () => {
  const [data,setdata] = useState({
    "filename":"",
    "desc":"",
  })

  const inputHANDLER = (event) =>{
      setdata({ ...data, [event.target.name]: event.target.value });
  }

  const readData = (e) =>{
    e.preventDefault();

    axios.post("http://localhost:8080/upload-doc",data).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "Success") {
          alert("Upload Successful")
          setdata({
            filename: "",
            desc: ""
          });
        } else {
          alert("Error in upload")
        }
      }
    ).catch(
      (error) => {
        alert("Error")
      }
    ).finally()
  }
  return (
    <div className='user-div'>
        <h2 className='upload-hd1'>Upload Document</h2>
        
        <hr className='uploadline1' />
        
        <div className="upload-form">
            <form action="">
                <label className='upload-label' htmlFor="">Case Name</label><br />
                <input className='upload-field' type="text" name='filename' value={data.filename} onChange={inputHANDLER}/><br /><br />
                
                <label className='upload-label' htmlFor="">Case Description</label><br />
                <textarea className='upload-desc' name="desc" rows='10' cols='100' value={data.desc} onChange={inputHANDLER}></textarea><br /><br />

                <button className='userbtn1' onClick={readData}>Submit<a href=""></a></button>
                
            </form>
        </div>

        
    </div>
  )
}

export default UploadDocument