
import { useEffect, useRef, useState } from 'react';
import './aboutStyle.scss'
import { motion } from 'framer-motion';
const  animateText = {
    initial: {
        x: 500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const About = () => {
    const [isInView, setIsInView] = useState(false);
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        // Настройка Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsInView(true); // Запускаем анимацию, когда секция в зоне видимости
                    observer.disconnect(); // Отключаем наблюдатель после срабатывания
                }
            },
            {
                threshold: 0.1, // Срабатывание, когда 10% элемента видны
            }
        );

        if (aboutSectionRef.current) {
            observer.observe(aboutSectionRef.current); // Наблюдаем за секцией "About"
        }

        return () => {
            if (aboutSectionRef.current) {
                observer.unobserve(aboutSectionRef.current);
            }
        };
    }, []);
    return(
       
        <section className="about-section" ref={aboutSectionRef} id='about'>
            <div className="about-container">
                <div className="pages-section">
                    <img src="about-title1.jpg" alt="title-pages"  className="logo-style"/>
                </div>
                <div className="about-inform-section"
              >
                    <motion.h1 variants={animateText}    animate={isInView ? "animate" : "initial"}
                initial= "initial" className="text-title">
                    Know Something About Our Company
                    </motion.h1>
                    <p>
                    There is no greater feeling than coming back to work to an empty trash can after stuffing your receptacle with the previous day is food, paper, and other refuse. Tasks like trash removal and other janitorial services add up and leave your business in a radiant condition. With more than 30 years of experience, we have ensured customer satisfaction by taking to heart every customers feedback. We strive to improve the way cleaning is done in Birmingham, Alabama. 
                    </p>


                    <motion.h2 variants={animateText} animate={isInView ? "animate" : "initial"} initial="initial"> Mission Statement</motion.h2>
                    <p>he mission of Classic Commercial Cleaning is to give our clients outstanding customer service and quality services while remaining affordable.</p>
                </div>

            </div>
        </section>
    )
}

export default About;