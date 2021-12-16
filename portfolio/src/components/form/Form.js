
import React from 'react';
import "./Form.scss";
import emailjs from 'emailjs-com';


const Form = () => {
    function sendEmail (e){
        e.preventDefault();

        emailjs.sendForm(
         'service_bloc0bh',
         'template_msi3ym9',
          e.target, 
          "user_ozcYsaawxvYCcsTDGR1AE"
          ).then(response =>{
              console.log(response);
          }).catch(err => console.log(err));
    }
    return (
        <section id="contact">
        <div className="container">
           <h1 className="formTitle">Contáctame</h1>
           <form 
           className="form" 
          
           onSubmit={sendEmail}
           >
               <label></label>
               <input type="text" name='name' placeholder="nombre" className='form__control'/>

               <label></label>
               <input type="email" name='user_email' placeholder="email" className='form__control'/>

               <label></label>
               <textarea name='message' placeholder="mensaje" className='form__control'/>

               <input 
               type="submit" 
               value='send' 
               className='formBtn'
             
               />
           </form>
        </div>
        </section>
    )
}

export default Form

