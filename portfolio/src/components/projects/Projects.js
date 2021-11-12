import React from "react";
import { projects } from "../../data";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects">

      
        
        {/* <div className="project__container">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="">
              <div className="image">
                <img
                  alt="gallery"
                  className="image"
                  src={project.image}
                />
                <div className="description" >
                  <p className="">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
       */}
          <div className="projects__container">
          {projects.map((project) => (
          
            <a className="cards"
               href={project.link} 
               target="_blank" 
               rel="noreferrer"
               >
                  <img
                  alt="imagenes de los proyectos"
                  className="cards__images"
                  src={project.image}
                />
            </a>  
        
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