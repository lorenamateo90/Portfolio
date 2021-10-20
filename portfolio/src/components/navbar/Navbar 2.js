import React from 'react';
import "./Navbar.scss";

const Navbar = ({isScrolling}) => {
    return (
        <nav className={`navbar ${isScrolling >20 ? "scrolling" : null}`}>
            <div>
                <ul className="navbar__list">
                    <li className="navbar__list--item">Sobre mi</li>
                    <li className="navbar__list--item">Habilidades</li>
                    <li className="navbar__list--item">Proyectos</li>
                    <li className="navbar__list--item">Contactos</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
