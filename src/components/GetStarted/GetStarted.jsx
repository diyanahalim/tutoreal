import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section id="getStarted" className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container get-started-container">
                <span className='primaryText' style={{paddingRight: "10px"}}>Get Started with&nbsp;<img src="./logo new.png" alt="logo" width={150} /></span>
                <span className='secondaryText'>
                Subscribe and find super affordable prices for your education.
                <br />
                Find your perfect tutor soon.
                </span>
                <button className="button">
                    <a href="mailto:zainkeepscode@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted