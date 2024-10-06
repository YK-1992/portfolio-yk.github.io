import { useRef } from 'react';
import './serviceStyle.scss'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items =[
{
    id:1,
    title: "Clean",
    img: "./clean.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit nesciunt iusto illum?"
},
{
    id:2,
    title: "Fix",
    img: "./paint.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit nesciunt iusto illum?"
},
{
    id:3,
    title: "Moving",
    img: "./moving.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit nesciunt iusto illum?"
},
{
    id:4,
    title: "Flexible Dog Care - Sitting & Walking",
    img: "./walk.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit nesciunt iusto illum?"
},
{
    id:5,
    title: "Garden",
    img: "./garten.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit nesciunt iusto illum?"
}

];

const Single = ({item}) =>{

    const ref= useRef()
    const {scrollYProgress} = useScroll( {target: 
        ref, 
        // offset:["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0,2], [-100, 100])

    return (
        <section className='section-service' id='service'>  
        <div className="container">
            <div className="wrapper">
      <div className="imgContainer" ref={ref} >
            <img src={item.img} alt="" /> 
                </div>   
            <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>More</button>
    
            </motion.div>
    
            </div>
          
            
        </div>
    
        
        </section>
    )
  
}



const Service = () => {
   

const ref = useRef()
    const {scrollYProgress} = useScroll( {target: 
        ref, 
        offset:["end end", "start start"],
    });
const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping:30,
})
    return(
        <div className="service-section" ref={ref}>
            <div className="service-more">
                <h1>Discover our Services</h1>
                <motion.div style={{scaleX}} className="serviceBar"></motion.div>
            </div>
           {items.map(item =>
             <Single item={item} key ={item.id}/> 
           )}
            
        </div>
    )
}


export default Service;