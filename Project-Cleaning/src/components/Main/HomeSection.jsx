import HeaderBlock from '../Header/header-block'
import './homeStyle.scss'
import { motion } from 'framer-motion'

const HomeSec =() => {



    return(



        <section className="home-section" id='home'>
           
                      <HeaderBlock/>
         <div className="home-container">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 3,
                    stiffness: 100,
                    restDelta: 0.002
                  }
                }}
            
            className="icon-block">
                <img src="./my-logo.png" alt="" />
            </motion.div>
            <div className="text-section">
                <h1>Professional care for your space</h1>
                <span></span>
            </div>
            
                    </div>
       
        </section>
    )
}

export default HomeSec;