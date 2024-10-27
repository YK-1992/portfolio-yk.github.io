import {  useState } from "react";
import "./serviceStyle.scss";
import { motion} from "framer-motion";
import MovingService from "./serviceMoving";
import CleanService from "./serviceClean";
import FixService from "./serviceFix";
import FlexDogService from "./serviceFlexDog";
import GardService from "./serviceGard";
const Service = () => {
  const [menuVisible, setMenuVisible] = useState(Array(5).fill(false));
  
  // Функция для переключения видимости меню
  const toggleMenu = (index) => {
    const updatedMenuVisible = [...menuVisible];
    updatedMenuVisible[index] = !updatedMenuVisible[index];
    setMenuVisible(updatedMenuVisible);
  };
  return (
    <section className="service-section" id="service">
      <div className="service-more">
        <h1>Discover our Services</h1>
        <div className="serviceBar"></div>
      </div>

      <div className="container">
        <div className="wrapper">
          <section className="service-block block-clean">
            <div className="imgContainer">
              <img src="/clean.jpg" alt="clean" />
            </div>
            <div className="textContainer">
              <h2>Clean</h2>
              <p>
                It is a commonly held belief that anyone can clean. While this
                is technically true, in practice, things are often not so
                straightforward. A clean workplace in the morning and a clean
                home in the evening are both important steps in maintaining a
                healthy work-life balance.
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-service"
                onClick={() => toggleMenu(0)}
              >
                More
              </motion.button>
            </div>

            <div className={`menu-icon ${menuVisible[0] ? "visible" : ""}`}>
            <CleanService/>
            </div>
          </section>

          <section className="service-block block-fix">
            <div className="imgContainer">
              <img src="/paint.jpg" alt="fix" />
            </div>
            <motion.div className="textContainer">
              <h2>Fix</h2>
              <p>
                Your Professional Painter in Berlin! Book a top-rated painting
                service, local and close to your location
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-service"
                onClick={() => toggleMenu(1)}
              >
                More
              </motion.button>
            </motion.div>
            <div className={`menu-icon ${menuVisible[1] ? "visible" : ""}`}>
              <FixService/>
            </div>
          </section>

          <section className="service-block block-moving">
            <div className="imgContainer">
              <img src="/moving.jpg" alt="moving" />
            </div>
            <div className="textContainer">
              <h2>Moving</h2>
              <p>
                We would like to offer you our All-In-One Package for a
                Stress-Free Move in Berlin. Our complete service is designed to
                be as stress-free as possible and can be tailored to your needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-service"
                onClick={() => toggleMenu(2)}
              >
                More
              </motion.button>
            </div>
            <div className={`menu-icon ${menuVisible[2] ? "visible" : ""}`}        >

            <MovingService />
            </div>
              
            
          </section>

          <section className="service-block block-flexDog">
            <div className="imgContainer">
              <img src="/walk.jpg" alt="flexible dog care" />
            </div>
            <div className="textContainer">
              <h2>Flexible Dog Care - <br />
              Sitting & Walking</h2>
              <p>
                Tailored Dog Care Services by YK: Your Dog’s Needs, Our Focus
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-service"
                onClick={() => toggleMenu(3)}
              >
                More
              </motion.button>
            </div>
            <div className={`menu-icon ${menuVisible[3] ? "visible" : ""}`}>
             <FlexDogService/>
            </div>
          </section>

          <section className="service-block block-garden">
            <div className="imgContainer">
              <img src="/garten.jpg" alt="garden" />
            </div>
            <div className="textContainer">
              <h2>Garden</h2>
              <p>
                We make sure that your garden is in top condition. We take care
                of everything from removing weeds to pruning trees and shrubs
                and, of course, mowing the lawn.
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn-service"
                onClick={() => toggleMenu(4)}
              >
                More
              </motion.button> 
            </div>
            <div className={`menu-icon ${menuVisible[4] ? "visible" : ""}`}>
             <GardService/>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Service;
