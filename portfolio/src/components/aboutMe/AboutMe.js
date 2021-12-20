
import React from 'react';
import "./AboutMe.scss";
import photo from "../../images/photo.jpg";
import cv from "../../images/cv.pdf";
import Text from '../text/Text';

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="description">
            <h1 className="description__title">¡Hola! Soy Lorena 
            <Text/>
            </h1>
            <p>Soy politóloga de formación y desarrolladora por convicción. Llegué al sector tecnológico en busca de nuevos retos con los que poder comprometerme, aportar lo mejor de mí y poder crecer profesionalmente. Gracias a mi bagaje laboral tan dispar he desarrollado muchas competencias que pueden encajar perfectamente en este mundo, como la gestión de equipos, la impartición de formación o la resolución de problemas, entre otras tantas. Actualmente estoy en búsqueda de mi primer trabajo como desarrolladora frontend en Madrid o en remoto.</p>
            <div className="button">
            <a href={cv}  className="button__cv" target="_blank" rel="noopener noreferrer" download>Descargar CV</a>
            </div>
            </div>
            <div className="left">
                <img className="photo" src={photo} alt="foto desarrolladora" />
            </div>
          
        </section>
    )
}

export default AboutMe
