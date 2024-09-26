import { forwardRef } from 'react';

import './about.css'
import{motion} from 'framer-motion'

const AboutSection = forwardRef ((props, ref) => {
const cvDown = () =>{
    window.open('./Yaroslav Khambir Lebenslauf.pdf')
}

    return(
        <section ref={ref}  className="about__section">
            <div className="about__container">
                <motion.div 
                initial={{x: 6, opacity: 0}}
                animate={{x: "1rem", opacity: 1}}
                transition={{
                    duration:6, 
                    type: 'spring'
                }
                }
                
                className="logo-section">
                    <img src="./profil-foto.png" alt="" />
                </motion.div>
                <div className="about-info-section">
                    <p className='text-stile'>Hi, I`m</p>
                    <h1 className='title gradient-text'>Front-end Developer</h1>
                    <p className='text-stile ps-text'>
                    My main goal is to build applications that solve user problems and deliver tangible value to businesses. I utilise the best development practices and I am constantly evolving and improving my skills.
                    </p>
                    <div className="about-load">
                    <button className='btn btn-about' onClick={cvDown}>Download CV</button>
                </div>
                </div>
               
            </div>

        </section>
    )
})

AboutSection.displayName= "AboutSection"
export default AboutSection;