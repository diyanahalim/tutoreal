import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo2 new.png" alt="" width={120}/>
                <span className="secondaryText">
                    Our vision is to provide the best <br />
                    online tutoring services for you.
                </span>
            </div>

            <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>
                    Universiti Teknologi MARA (UiTM) <br />
                    40450 Shah Alam, Selangor Darul Ehsan <br />
                    Malaysia</span>
            <div className="flexCenter f-menu">
                <span>Tutors</span>
                <span>Services</span>
                <span>Awards</span>
                <span>About Us</span>    
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer