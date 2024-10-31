import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Drafts = () => {
  const [data,changedata] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8080/draft-view").then(
      (response) => {
        changedata(response.data) 
      }
    ).catch(
      (error) => {
        console.log(error.message)
        alert("Error")
      }
    ).finally()
  }
  useEffect(() => {fetchData()},[])
  return (
    <div>
        <div className='user-div'>
        <h2 className='files-hd1'>Files</h2>
      
          {data.map((draft, index) => {
            return <div className="file-view" key={index}>
            <h2 className='viewfile-name'>File Name</h2>
            <p className='name-hd1'>{draft.draftname}</p><br />
            <h2 className='viewfile-desc'>Document</h2>
            <div>{draft.draftupload}</div><br />
        </div>
})}
    </div>
    </div>
  )
}

export default Drafts