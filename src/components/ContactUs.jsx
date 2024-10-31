import React from 'react'
import photo1 from '../images/folders.png'
import video4 from '../videos/videos4.mp4'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div>
      <div className="main-body2">
        <div className="hero-video1">
          <video className='videoclip1' autoPlay muted loop>
            <source src={video4} type='video/mp4'></source>
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
            <p className='hd12 text1'>Contact Us</p>
          </div>
        </div>

        <div className="content7">
          <div className="ctr7">
            <p className='para9 paraanimate6'>We're here to help and answer any questions you may have! Reach out to us and we'll get back to you as soon as possible.</p>
            <p className='hd13 text6'>Get in Touch</p>
          </div>

          <div className='form1-container'>
            <h2 className='form-hd1'>Reach Out</h2><br />

            <hr className='line1' />

            <form className='form' action="">
              <label htmlFor="" className='form-text'>Employee ID</label><br />
              <input className="field1" type="text" name="empid" ></input><br /><br />

              <label htmlFor="" className='form-text'>Name</label><br />
              <input className="field1" type="text" name="name" ></input><br /><br />



              <label htmlFor="" className='form-text'>Email ID</label><br />
              <input className="field1" type="text" name="email" ></input><br /><br />

              <label htmlFor="" className='form-text'>Designation</label><br />
              <input className="field1" type="text" name="desig" ></input><br /><br />

              <label htmlFor="" className='form-text'>Feedback</label><br />
              <textarea className="field2" name="feedback" id="" rows="6" cols="100"></textarea>

              <button type="submit" className="btn2"><a href="#submit">Submit</a></button>

            </form>
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

export default ContactUs