import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import hero from "./hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
{/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity:1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >
                        Discover <br/>
                        Most Suitable <br/> Tutor
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className="secondaryText">We help you find the best tutor for 1-on-1 lessons</span>
                    <span className="secondaryText">Forget all difficulties in finding a tutor for you</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="#ffd1d1" size={25}/>
                    <input type="text"/>
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span><CountUp start={670} end={870} duration={4}/>
                        <span> +</span>
                        </span>
                        <span className="secondaryText">Expert Tutors</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span><CountUp start={1800} end={2000} duration={4}/>
                        <span> +</span>
                        </span>
                        <span className="secondaryText">Hours Tutored</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span><CountUp end={298}/>
                        <span> +</span>
                        </span>
                        <span className="secondaryText">Subjects and Courses</span>
                    </div>

                </div>
            </div>
{/* right side */}
            <div className='flexCenter'>
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                className="lottie">
                    <Lottie animationData={hero}/>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero