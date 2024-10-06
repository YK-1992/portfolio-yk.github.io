import './style-header.scss';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Импорт ScrollLink для прокрутки

// Настройки анимации для всего меню
const animateMotion = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1, // Анимация с задержкой между элементами
    },
  },
};

// Настройки анимации для каждого элемента меню
const menuItemAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HeaderBlock = () => {
  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Service', to: 'service' },
    { name: 'About', to: 'about' },
    { name: 'Price', to: 'price' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className='header-section'>
      <motion.div
        className="header-container"
        variants={animateMotion}
        initial="initial"
        animate="animate"
      >
        <div className="header-navBar">
          <motion.ul className="nav-menu">
            {/* Рендерим список элементов меню с анимацией и прокруткой */}
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={menuItemAnimation}
                whileHover={{ scale: 1.1 }} // Анимация при наведении
                whileTap={{ scale: 0.9 }} // Анимация при клике
              >
                {/* Прокрутка к секции с использованием ScrollLink */}
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-50} // Если нужно компенсировать высоту фиксированного меню
                >
                  {item.name}
                </ScrollLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </header>
  );
};

export default HeaderBlock; 