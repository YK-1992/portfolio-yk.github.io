import './style-header.scss'
import { motion } from 'framer-motion';


const  animateMotion = {
    initial: {
        y: -500,
        opacity:0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const HeaderBlock = () => {

    return(
        <header className='header-section'>
            <motion.div  className="header-container" variants={animateMotion} 
            initial="initial"
            animate ="animate">
               
                <div className="header-navBar">
      <ul className="nav-menu">
    
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Service</a>
        </li>
        <li>
            <a href="#">Price</a>
        </li>
        <li>
        <a href="#">About</a>
        </li>
        <li>
        <a href="#">Contact</a>
           
        </li>
      </ul>
      
    </div>
               
            </motion.div>
        </header>
    )
}

export default HeaderBlock;