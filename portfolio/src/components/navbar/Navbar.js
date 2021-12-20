
import React from 'react';
import "./Navbar.scss";

const Navbar = ({isScrolling}) => {
    return (
        <nav className={`navbar ${isScrolling >20 ? "scrolling" : null}`}>
            <div>
                <ul className="navbar__list">
                    <li className="navbar__list--item"><a className="links" href="#aboutMe">Sobre mi</a></li>
                    <li className="navbar__list--item"><a className="links" href="#skills">Habilidades</a></li>
                    <li className="navbar__list--item"><a className="links" href="#projects">Proyectos</a></li>
                    <li className="navbar__list--item"><a className="links" href="#contact">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
