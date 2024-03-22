import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Tutors.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common.js';
import { GiGraduateCap } from "react-icons/gi";

const Tutors = () => {    
  return (
    <section  id="tutors" className="t-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart ">
                <span className="orangeText">Popular Choices</span>
                <span className="primaryText">Our Tutors</span>
            </div>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
                data.map((card, i)=> (
                    <SwiperSlide key={i}>
                        <div className="e-card e-card-horizontal flexColStart r-card">
                            <div className="card-image-container">
                            <img src={card.image} alt="home" />
                            </div>
                            <span className="secondaryText">
                                <span>{card.type}</span>{' '}<span style={{color: "rgb(140 139 139)"}}>|</span>{' '}<span>{card.location}</span>
                            </span>

                            <span className="primaryText">{card.name}</span>
                            <div className="info-container">
                            <span className="graduate-cap-icon"><GiGraduateCap/></span><span>{card.education}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
    </section>
  )
}

export default Tutors
const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};