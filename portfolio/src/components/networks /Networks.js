
import React from 'react'
import './Networks.scss';

const Networks = (props) => {
    return (
         
         <section className="network">
            <div className="networks">
          <a className="networks__link" href="https://github.com/lorenamateo90"
           target="_blank" 
           rel="noreferrer"
            ><i className="fab fa-github"></i>GITHUB</a>
            </div>
            <div className="networks">
           <a className="networks__link" href="https://github.com/lorenamateo90"
           target="_blank" 
           rel="noreferrer"
        
           ><i className="fab fa-linkedin-in"></i>LINKEDIN</a>
           </div>
           <div className="networks">
           <a className="networks__link" href="http://www.linkedin.com/in/lorenamateogarcia"
           target="_blank" 
           rel="noreferrer"
           
           ><i className="fas fa-phone-alt"></i>626223754</a>
          </div>
          </section>
    
    )
}

export default Networks
