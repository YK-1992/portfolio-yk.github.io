
import './aboutStyle.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {

    const effRef = useRef(null);
    
    const isInView = useInView(effRef, {once: true})
return (
    <section className="about-section" id='about'>
        <div className="about-container">
            <img  className='img-stile' src="./about-title1.jpg" alt="about" />
            <motion.div className="title-text-about" ref={effRef}>
                <motion.h1 
              initial={{x: 100, opacity: 0}}
              animate={isInView ? {x: "1rem", opacity: 1} :{}}
              transition={{
                  duration:6, 
                  type: 'spring'
              }}
                
                
                > Know Something About Our Company</motion.h1>
                <p>
                Welcome to YK Services – your go-to solution for all home service needs! From professional
                cleaning and pet care to small repairs and moving support, our platform connects you with trusted 
                service providers to make your life easier. Whether you need help tidying up, caring for your pets,
                 fixing minor issues, or organizing a hassle-free move, we’ve got you covered. Book a service today 
                 and experience quality, reliability, and convenience at your doorstep.
                    </p>
                    <motion.h2 ref={effRef}
                      initial={{x: 100, opacity: 0}}
                      animate={isInView ? {x: "1rem", opacity: 1} :{}}
                      transition={{
                          duration:6, 
                          type: 'spring'
                      }}> Mission Statement</motion.h2>
                    <p>he mission of YK Services is to give our clients outstanding customer service and quality services while remaining affordable.</p>
                
                
                </motion.div>
              
        </div>
    </section>
)
}
       

export default About;
