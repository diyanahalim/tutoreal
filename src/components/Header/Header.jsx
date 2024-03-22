import React, {useState, useEffect} from 'react';
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";



const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)

  //change colour for header from transparent to white
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".h-wrapper");
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper"  >
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo2 new.png" alt="logo" width={100} />

            <OutsideClickHandler 
            onOutsideClick={()=>{
            setMenuOpened(false)
            }}
            >
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >
                <a href={'#tutors'}>Tutors</a>
                <a href={'#value'}>Our Value</a>
                <a href={'#contact'}>Contact Us</a>
                <a href={'#getStarted'}>Get Started</a>
                <button className='button'>
                  <a href="">Contact</a>
                </button>
            </div>
            </OutsideClickHandler>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>  
        </div>
    </section>
  );

};  

export default Header
