
import React from "react";
import { projects } from "../../data";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects">
    <div className="projects__container">
    {projects.map((project) => (
   
        <div className="cards">
               <a className="cards__links" href={project.link}  target="_blank" rel="noreferrer">
        <img className="cards__images" src={project.image} alt="imagenes de los proyectos" />
        <h3 className="cards__title">{project.title}</h3>
        <p className="cards__description">{project.description}</p>
        </a>
        </div>
       
    ))}

    </div>
  
    <div className="github">
    <a className="github__button" href="https://github.com/lorenamateo90"
     target="_blank" 
     rel="noreferrer"
     ><i className="fab fa-github"></i>Ver más proyectos</a>
    </div>  
    
</section>
  );
}

export default Projects;