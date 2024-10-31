import React from 'react'
import photo1 from '../images/folders.png'
import video1 from '../videos/videos1.mp4'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="main-body">
                <div className="hero-video1">
                    <video className='videoclip1' autoPlay muted loop>
                        <source src={video1} type='video/mp4'></source>
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
                        <p className='hd8 text1'>About</p>
                    </div>
                </div>

                <div className="content6">
                    <div className="ctr6">
                        <p className='hd11 text5'>Mission</p>
                        <p className='para8 paraanimate5'>
                            To automate the handling the case files digitally therefore the data regarding any case can be retrieved within short time.This project is mainly focusing on advocate offices in India .
                            This will streamline the workflow betweem the senior advocates and their juniors or trainees under them.We can easily handle and sort the case files in each case category.
                        </p>
                        <p className='para8 paraanimate5'>
                            This application
                            provides the facility for detailed study of different case files which is organised in a well and efficient manner.This application has an inbuilt file tracking system that helps the admin to clearly
                            understand the status of each case.Therefore,when the status of each case file is updated,a notification is sent to the client immediately in the form of an email.
                        </p>
                    </div>
                </div>

                <div className="content4">
                    <div className="ctr4">
                        <p className='hd9 text4'>Traditional Filing System</p>
                        <p className='subhd text4'>Manuel Record Keeping</p>
                        <p className='para6 paraanimate4'>
                            Many established lawyers still rely on physical files and handwritten notes to track case progress. Trainees often assist in maintaining these records, organizing documents, and updating case files.
                        </p>
                        <p className='subhd text4'>Oral Instructions</p>
                        <p className='para6 paraanimate4'>
                            Instructions are often given verbally, with trainees responsible for remembering and executing tasks. This system relies heavily on the trainee’s ability to manage their own tasks and time.

                        </p>
                        <p className='subhd text4'>Use of Basic Software</p>
                        <p className='para6 paraanimate4'>
                            Some lawyers use basic tools like Microsoft Word, Excel, and Outlook for drafting documents, managing schedules, and communicating with clients. Trainees often assist in drafting, editing, and sending out these documents.
                        </p>
                    </div>
                </div>

                <div className="content5">
                    <div className="ctr5">
                        <p className='hd10 text5'>Hybrid Systems</p>
                        <p className='subhd1 text5'>Mix of Traditional and Digital</p>
                        <p className='para7 paraanimate5'>
                            Many law practices in India use a combination of traditional methods and digital tools. For example, while docket management might be done using a digital platform, document drafting and client communications might still occur through email and printed letters.
                        </p>
                        <p className='subhd1 text5'>Trainees’ Role</p>
                        <p className='para7 paraanimate5'>
                            Trainees often bridge the gap between these systems, helping to digitize records, maintain both physical and digital case files, and ensure that all relevant information is up-to-date in both formats.

                        </p>
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

export default About