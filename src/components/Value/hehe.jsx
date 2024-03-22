<Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                    data.map((item,i) =>{
                        const [ClassName, setClassName] = useState(null)
                        return(
                            <AccordionItem className={'accordionItem ${ClassName}'} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">

                                    <AccordionItemState>
                                        {({expanded})=> expanded 
                                        ? setClassName("expanded") 
                                        : setClassName("collapsed") 
                                        }
                                    </AccordionItemState>

                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                        })}
           </Accordion>