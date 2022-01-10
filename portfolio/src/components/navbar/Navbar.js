
import React from 'react';
import "./Navbar.scss";
import { useState, useEffect } from 'react';

const Navbar = ({isScrolling}) => {
  
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    };

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
    
      }, [])

    return (
        <nav className={`navbar ${isScrolling >20 ? "scrolling" : null}`}>
             
            <div>
            {(toggleMenu || screenWidth > 1200) && (
                <ul className="navbar__list">
                    <li className="navbar__list--item" onClick={toggleNav}><a className="links" href="#aboutMe">Sobre mi</a></li>
                    <li className="navbar__list--item" onClick={toggleNav}><a className="links" href="#skills">Habilidades</a></li>
                    <li className="navbar__list--item" onClick={toggleNav}><a className="links" href="#projects">Proyectos</a></li>
                    <li className="navbar__list--item" onClick={toggleNav}><a className="links" href="#contact">Contacto</a></li>
                </ul>
          
             )}
               </div>
                <button onClick={toggleNav} className="btn">
                <i class="fas fa-bars"></i></button> 
        </nav>
    )
}

export default Navbar
