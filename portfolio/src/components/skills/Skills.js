import React from 'react';
import "./Skills.scss";


const Skills = () => {
    return (
        <section id="skills">
            <div className="skillsContainer">
             <div className="layout">
                 <h1 className="title">Maquetación</h1>
                 <ul className="layout__list">
                     <li>HTML5</li>
                     <li>CSS3/SASS</li>
                     <li>Bootstrap/Reactstrap</li>
                     <li>Material UI</li>
                 </ul>
             </div>
             <div className="development">
                 <h1 className="title">Desarrollo</h1>
                 <ul className="development__list">
                     <li>Javascript</li>
                     <li>React</li>
                     <li>Git</li>
                     <li>Node</li>
                 </ul>
             </div>
            </div> 
        </section>
    )
}

export default Skills;
