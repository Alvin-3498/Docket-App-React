import React from 'react'
import photo1 from '../images/folders.png'
import video5 from '../videos/videos5.mp4'
import demofile1 from '../images/demofiles1.jpg'
import demofile2 from '../images/demofiles2.jpg'
import demofile3 from '../images/demofiles3.jpg'
import demofile4 from '../images/demofiles4.jpg'
import demofile5 from '../images/demofiles5.jpg'
import demofile6 from '../images/demofiles6.jpg'
import { Link } from 'react-router-dom'

const More = () => {
    return (
        <div>
            <div className="main-body2">
                <div className="hero-video1">
                    <video className='videoclip1' autoPlay muted loop>
                        <source src={video5} type='video/mp4'></source>
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
                        <p className='hd14 text1'>Explore</p>
                    </div>
                </div>

                <div className="content8">

                    <div className="demo-set1">
                        <div className="demoimages demofile1">
                            <img className='demopic' src={demofile1} alt="demoimage1" />
                        </div>
                        <div className="demoimages demofile2">
                            <img className='demopic' src={demofile2} alt="demoimage2" />
                        </div>
                        <div className="demoimages demofile3">
                            <img className='demopic' src={demofile3} alt="demoimage3" />
                        </div>
                    </div>

                    <div className="demo-set2">
                        <div className="demoimages demofile4">
                            <img className='demopic' src={demofile4} alt="demoimage4" />
                        </div>
                        <div className="demoimages demofile5">
                            <img className='demopic' src={demofile5} alt="demoimage5" />
                        </div>
                        <div className="demoimages demofile6">
                            <img className='demopic' src={demofile6} alt="demoimage6" />
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

export default More