// import React from 'react'
// import './Companies.css'

// const Companies = () => {
//   return (
//     <section className="c-wrapper">
//         <div className="paddings innerWidth flexCenter c-container">
//         <img src="./prologis.png" alt="" />
//         <img src="./tower.png" alt="" />
//         <img src="./equinix.png" alt="" />
//         <img src="./realty.png" alt="" />
//         </div>
//     </section>
//   )
// }

// export default Companies

import React, { useState } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Subjects.css'
import data from '../../utils/slider2.js'
import { sliderSettings } from '../../utils/common.js';
import * as icons from 'react-icons/md';


const Subjects = () => {
//   const { [props.icon]: icon } = icons
// const [showMore, setShowMore] = useState(false);  
// const { text } = data;
  return (
    <section  id="subjects" className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart ">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText">Popular Subjects</span>
            </div>

        {/* <Swiper {...sliderSettings}> */}
            {/* <SliderButtons/> */}
            <div className="subject-main">
            {/* <div className="subjectContainer"> */}
            {
                data.map((card, i)=> (
                        <div className="flexColStart subject-card">
                            <div className="subjectsIcon">
                                <card.icon size={100}/>
                            </div>
                            
                            <span>
                            </span>

                            <span className="primaryText">{card.name}</span>
                            <span className="secondaryText">{card.detail}</span>

                            
                        </div>
                        
                    // </SwiperSlide>
                    
                ))
            }
        {/* </Swiper> */}
        </div>
        
        </div>
    </section>
  )
}

export default Subjects
const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>  
    );
};