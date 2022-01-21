
import React from 'react'
import './Networks.scss';

const Networks = (props) => {
    return (
         
         <section className="network">
            <a className="networks__link" href="https://github.com/lorenamateo90"
             target="_blank" 
             rel="noreferrer"
            >
            <div className="networks">
            <i className="fab fa-github"></i>GITHUB
            </div>
            </a>
            <a className="networks__link" href="http://www.linkedin.com/in/lorenamateogarcia"
             target="_blank" 
             rel="noreferrer"
        
             >
            <div className="networks">
          <i className="fab fa-linkedin-in"></i>LINKEDIN
             </div>
             </a>
             <a className="networks__link" href="https://wa.me/34626223754"
            target="_blank" 
            rel="noreferrer"
           
            >
            <div className="networks">
           
            <i className="fab fa-whatsapp"></i>+34 626223754
           </div>
           </a>
          </section>
    )
}

export default Networks
