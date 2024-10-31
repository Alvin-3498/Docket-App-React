import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CaseFiles = () => {
  const [data, changedata] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8080/doc-view").then(
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
  useEffect(() => { fetchData() }, [])
  return (
    <div className='user-div'>
      <h2 className='files-hd1'>Files</h2>

      <div className="scroll">

        {data.map((file, index) => {
          return <div className="file-view">
            <h2 className='viewfile-name'>File Name</h2>
            <p className='name-hd1'>{file.filename}</p><br />

            <h3 className='viewfile-desc'>Description</h3>
            <p className='desc-para'>{file.desc}</p>
          </div>
        
})}
</div>
    </div>
  )
}

export default CaseFiles