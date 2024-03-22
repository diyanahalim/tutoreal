import React, {useState}  from 'react';
import 
{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import { MdArrowDropDown } from "react-icons/md";
import './Value.css';
import data from '../../utils/accordion';
import value from "./value.json";
import Lottie from "lottie-react";
const Value = () => {
  return (
    <section id="value" className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
                <div className="image-container">
                <img src="/hahahehe.jpg" alt="home"/>
                </div>
            

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>We are always ready to help by providing the best education for you.
                <br/>
                We believe good education depends on the efforts of teachers to create an environment that can help students learn.
                </span>

            <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {
                    data.map((item,i) =>{
                        const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">

                                    <AccordionItemState>
                                        {({expanded})=> expanded 
                                        ? setClassName("expanded") 
                                        : setClassName("collapsed") 
                                        }
                                    </AccordionItemState>

                                    {/* <AccordionItemState>
                                        {({expanded})=> {expanded 
                                        ? setClassName("expanded") 
                                        : setClassName("collapsed");

                                        return (
                                            <button onClick={() => console.log(`hello`)}>
                                                This item is: {state}
                                            </button>);
                                        
                                        }}
                                        
                                    </AccordionItemState> */}

                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon-tut">
                                            <MdArrowDropDown size={30}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })
            }
           </Accordion>
        </div>
    </div>
</section>
  );
};

export default Value