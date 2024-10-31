import React from 'react'
import video2 from '../videos/videos2.mp4'
import photo1 from '../images/folders.png'
import photo2 from '../images/fileimage1.jpg'
import photo3 from '../images/fileimage2.jpg'
import photo4 from '../images/fileimage3.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="main-body">
        <div className="hero-video1">
          <video className='videoclip1' autoPlay muted loop>
            <source src={video2} type='video/mp4'></source>
          </video>
          <div className="header">

            <div className="left-header">
              <img className='pic1' src={photo1} alt='Picture1'></img>
              <p className='hd1'>DMS</p>
            </div>

            <div className="middle-header">
              <div className="linksgrp">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/contactus">ContactUs</Link>
                <Link className='link' to="/more">Explore</Link>
              </div>
            </div>

            <div className='right-header'>
              <Link className='btn1' to="/login">SignUp/LogIn</Link>
            </div>

          </div>

          <div className="para1">
            <p className='hd2 text1'>Welcome to</p>
            <p className='hd3 text2'>Docket Management System</p>
          </div>
        </div>

        <div className="content1">
          <div className="ctr1">
            <div className="ctr1-left">
              <h2 className='hd4 paraanimate1'>Docket</h2><br /><br />
              <p className='para2 paraanimate1'>a docket refers to a formal record or summary of legal proceedings, tasks, or events related to a specific case or matter. The docket contains all relevant information, including court dates, filings, documents, and actions taken throughout the lifecycle of a case. It serves as a comprehensive case log that helps legal professionals keep track of critical deadlines, tasks, and other details necessary for managing cases efficiently.</p>
            </div>
            <div className="ctr1-right">
              <img className='pic2 card1' src={photo2} alt="Picture2" />
            </div>
          </div>
        </div>

        <div className="content2">
          <div className="ctr2">
            <div className="ctr2-left">
              <img className='pic3 card2' src={photo3} alt="Picture3" />
            </div>
            <div className="ctr2-right">
              <h2 className='hd5 paraanimate2'>Function of a Docket</h2>
              <p className='para3 paraanimate2'>
                The docket serves as the central point of reference in a docket management system, offering an organized, up-to-date record of the entire legal process for a specific case. It allows legal professionals (lawyers, paralegals, and clerks) to:
                <ul className='points'>
                  <li>Track deadlines and prevent missed filings or hearings.</li><br />
                  <li>Maintain a historical record of all actions and documents related to a case.</li><br />
                  <li>Facilitate collaboration between multiple team members working on the same case.</li><br />
                  <li>Provide transparency and updates to clients on the progress of their case.</li><br />
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="content3">
          <div className="ctr3">
            <div className="ctr3-left">
              <h2 className='hd6 paraanimate3'>Key Elements of a Docket</h2>
              <h4 className='points paraanimate3'>Case Tracking</h4>
              <h4 className='points paraanimate3'>Document Management</h4>
              <h4 className='points paraanimate3'>Calender and Scheduling</h4>
              <h4 className='points paraanimate3'>Client Communication</h4>
            </div>
            <div className="ctr3-right">
              <img className='pic4 card3' src={photo4} alt="Picture4" />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="left-footer">
            <div className="para5">
              All Rights Reserved.@Copyright 2024
            </div>
          </div>
          <div className="right-footer">
            <div className="hd7">
              Quick Links
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Home