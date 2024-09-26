import { useState, useEffect, useRef } from "react";
import {motion} from "framer-motion";
import propTypes from "prop-types";

import "./navbar.css"


  const NavBarMenu = ({scrollToSection, refs}) => {


  const menuVariants = {
      open: {
        x: 0,
        transition: {
          stiffness: 20,
          damping: 10,
        }
      },
      closed: {
        x: '-100%',
        transition: {
          stiffness: 20,
          damping: 10,
        }
      }
    };
  const [isOpen, setIsOpen] = useState(false);
     const navRef = useRef(null); // Реф для ссылки на элемент nav
   const buttonRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Проверяем, был ли клик вне навигации и кнопки
        if (navRef.current && !navRef.current.contains(event.target) && 
            buttonRef.current && !buttonRef.current.contains(event.target)) {
          setIsOpen(false); // Закрываем меню
        }
      };
      // Добавляем слушатель события клика
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


    return (
      <div className="burger_section"> 

      
        {/* Burger button */}
        <button className="burger" onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
          <motion.div
            className="line"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            className="line"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="line"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
  
        {/* Animated menu */}
        <motion.nav
          className="menu"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          ref={navRef}>
          <div className="burger-menu">
           
          <a href="#about" onClick={()=> scrollToSection(refs.aboutRef)}>About</a>

          <a href="#experience" onClick={() => scrollToSection(refs.experienceRef)}>Experience</a>

          <a href="#projects" onClick={()=> scrollToSection(refs.projectsRef)}>Projects</a>
         
          <a href="#contact" onClick={()=> scrollToSection(refs.contactRef)}>Contact</a>


          </div>
        </motion.nav>
      </div>
    );
  };

  NavBarMenu.propTypes ={
    scrollToSection: propTypes.func.isRequired,
    refs: propTypes.shape({
      aboutRef:propTypes.object.isRequired,
      experienceRef: propTypes.isRequired,
      projectsRef: propTypes.isRequired,
      contactRef: propTypes.isRequired
    })
  };
  export default NavBarMenu;