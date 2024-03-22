import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { FaVideo } from "react-icons/fa"
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <section id="contact" className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We are always ready to help by 
                providing the best services for you. We believe
                 a good teacher could enable students to reach their potential.</span>

            <div className="flexColStart contactModes"></div>
                {/* first row */}
                <div className="flexStart row">

                    {/* first mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/> 
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>   
                    </div>

                    {/* second mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25}/> 
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>   
                    </div>
                </div>

                {/* second row */}
                <div className="flexStart row">

                    {/* third mode */}
                   <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <FaVideo size={25}/> 
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Video Call</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>   
                    </div>

                    {/* fourth mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdEmail size={25}/> 
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>tutoreal@gmail.com</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>   
                    </div>

                </div>
            </div>

                {/* right side */}
                <div className="image-container">
                    <img src="./munyayo.jpg" alt="" />
                </div>

        </div>              
    </section>
  )
}

export default Contact