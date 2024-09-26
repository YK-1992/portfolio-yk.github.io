import { useEffect, useRef, useState } from "react";
import "./header.css";
import {motion} from "framer-motion"
import propTypes from "prop-types";
import './navbar.css'

const Header = ({scrollToSection, refs}) => {
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
    <div className="header__section">
      <div className="header__container">
        <div className="logo__header">
          <h1 className="text-logo">Yaroslav Khambir</h1>
        </div>
     
     
     {/* NAVBAR-MENU */}
        <div className="nav__burger-menu">
          <ul className="ul-stile">
            <li>
              <a href="#about" onClick={()=> scrollToSection(refs.aboutRef)}>About</a>
            </li>
            <li>
              <a href="#experience" onClick={() => scrollToSection(refs.experienceRef)}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={()=> scrollToSection(refs.projectsRef)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={()=> scrollToSection(refs.contactRef)}>Contact</a>
            </li>
          </ul>
        </div>
      
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


      </div>
     
    </div>
  );
};

Header.propTypes ={
  scrollToSection: propTypes.func.isRequired,
  refs: propTypes.shape({
    aboutRef:propTypes.object.isRequired,
    experienceRef: propTypes.isRequired,
    projectsRef: propTypes.isRequired,
    contactRef: propTypes.isRequired
  }).isRequired,
};

export default Header;
