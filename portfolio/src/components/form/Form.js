
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
        <section className="cont">
           <form 
           className="form" 
          
           onSubmit={sendEmail}
           >
               <label className="form__label">Nombre</label>
               <input type="text" name='name' placeholder="Nombre" className='form__text'/>

               <label className="form__label">Email</label>
               <input type="email" name='user_email' placeholder="Email" className='form__text'/>

               <label className="form__label">Mensaje</label>
               <textarea name='message' placeholder="Escribeme un mensaje" className='form__message'/>

               <input 
               type="submit" 
               value='Enviar' 
               className='formBtn'
               />    
           </form>
        </section>
    )
}

export default Form

