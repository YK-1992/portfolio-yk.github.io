
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
                <p>There is no greater feeling than coming back to work to an empty 
                    trash can after stuffing your receptacle with the previous day is food, 
                    paper, and other refuse. Tasks like trash removal and other janitorial 
                    services add up and leave your business in a radiant condition.
                     With more than 4 years of experience, we have ensured customer satisfaction by taking to heart every customers feedback. 
                     We strive to improve the way cleaning is done in Berlin. 
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
