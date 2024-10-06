import { forwardRef, useRef } from 'react'
import './contact.scss'

const Contact = forwardRef ((props, ref)=> {

    const formRef = useRef(null);
    
    const onSubmit = async (event) => {
       

        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bcd2dbda-8871-4105-935b-0d78a1499ca9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

    
      
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity(); 
            return;
          };
        
         
          if (res.success) {
            console.log('Submit form') 
            formRef.current.reset();
            }
    
         
      };


    return(
        <section ref={ref} className="contact-section" id='contact'>
            <div className="contact-container">
    
              <div className="contact-section-form">

    <div className="contact__talk-section">
                    <h1 className='text-fonts'>Let`s work <br />together</h1> 
                    <div className="contact-message-section">
                       <span>Mail</span>
                       <span>the.khambir@gmail.com</span>
                    </div>
                    <div className="contact-message-section">
                  
                       <span>Phone</span>
                       <span>+49177-973-65-54</span>
                    </div>
                    <div className="contact-message-section">
                       <span>Address</span>
                       <span>13599 Stockelstr. 17, Berlin </span>
                    </div>
                    
                </div>

                {/* Web3forms contact form email */}


                <form ref={formRef} onSubmit={onSubmit}  className="contact-form">
                <h1 className='text-fonts'>Write me</h1>
                    
                    <input type="text"  placeholder='Enter you name' name='name' required/>
          
                    <input type="email"  placeholder='Enter your email' name='email' required/>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn-contact-submit' >Submit now
                    </button>
                </form>


              </div>

            

            </div>
        </section>
    )
})


Contact.displayName ="Contact"
export default Contact