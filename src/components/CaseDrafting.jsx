import axios from 'axios'
import React, { useState } from 'react'

const CaseDrafting = () => {
  const [data,setdata] = useState(
    {
      "draftname":"",
      "draftupload":"",
    }
  )
  
  const inputHANDLER = (event) => {
    setdata({...data,[event.target.name]:event.target.value});
  }

  const readData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/upload-drafts",data).then(
      (response) => {
        console.log(response.data)
        if(response.data.status == "Success")
        {
          alert("Upload of Draft Successfull")
          setdata({
            filename: "",
            draftupload: ""
          });
        } else {
          alert("Error while uploading")
        }
      }
    ).catch(
      (error) => {
        alert("error")
      }
    ).finally()
  }
  return (
    <div className='user-div'>
        <h2 className='upload-hd1'>Case Drafting</h2>
        
        <hr className='uploadline1' />
        
        <div className="upload-form">
            <form action="">
                <label className='upload-label' htmlFor="">Case Name</label><br />
                <input className='upload-field' type="text" name='draftname' value={data.draftname} onChange={inputHANDLER}/><br /><br />

                <label className='upload-label' htmlFor="">Draft</label><br />
                <textarea className='upload-desc' name="draftupload" rows='14' cols='100' value={data.draftupload} onChange={inputHANDLER}></textarea><br /><br />
                
                <button className='userbtn1' onClick={readData}>Submit<a href=""></a></button>
                
            </form>
        </div>
    </div>
  )
}

export default CaseDrafting