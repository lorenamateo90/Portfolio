import React from 'react';
import "./Skills.scss";



const Skills = () => {
    return (
        // <section id="skills">
        //     <div className="skills__container">
        //         <p className="skills__Container--paragraph">let programación &#61; &#123; <br/>
        //         lenguajeMarcado: HTML5, <br />
        //         maquetacion: CSS3, <br />
        //         preprocesador: SASS, <br />
        //         metodología: BEM, <br />
        //         lenguaje: JavascriptES6, <br />
        //         framework: ReactJS, <br />
        //         editor: VisualEstudio, <br />
        //         herramienta: GIT, <br />
        //         marcoTrabajo: AGILE <br />
        //         &#125; &#59;
        //         </p>
        //     </div>
        // </section>
        <section id="skills">
            <div className="skillsContainer">
             <div className="layout">
                 <h1 className="title">Maquetación</h1>
                 <ul className="layout__list">
                     <li>HTML5</li>
                     <li>CSS3/SASS</li>
                     <li>Bootstrap/Reactstrap</li>
                 </ul>
             </div>
             <div className="development">
                 <h1 className="title">Desarrollo</h1>
                 <ul className="development__list">
                     <li>Javascript</li>
                     <li>React</li>
                     <li>Git</li>
                     
                 </ul>
             </div>
             <div className="learning">
                 <h1 className="title">Aprendiendo</h1>
                 <ul className="learning__list">
                     <li>NodeJs</li>
                     <li>Angular</li>
                     <li>Material UI</li>
                 </ul>
             </div>
            </div> 
        </section>
    )
}

export default Skills;
