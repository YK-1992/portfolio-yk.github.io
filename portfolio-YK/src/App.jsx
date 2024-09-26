import './App.css'
import AboutSection from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import { useRef } from 'react';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  const aboutRef = useRef (null);
  const experienceRef = useRef (null);
  const projectsRef = useRef (null);
  const contactRef = useRef(null);
  
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth', // Плавная прокрутка
      block: 'start',     // Прокрутить к началу элемента
    });}
  

  return(
    <div>
<Header scrollToSection={scrollToSection}
refs={{aboutRef, experienceRef, projectsRef, contactRef}}/>
<AboutSection ref={aboutRef}/>
<Experience ref={experienceRef}/>
<Projects ref={projectsRef}/>
<Contact ref={contactRef}/>
<Footer/>
    </div>
  )
}

export default App;