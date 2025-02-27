import { forwardRef } from "react";

import "./about.css";
import { motion } from "framer-motion";

const AboutSection = forwardRef((props, ref) => {
  const cvDown = () => {
    window.open("./CV Yaroslav Khambir.pdf");
  };

  return (
    <section ref={ref} className="about__section">
      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="logo-section"
        >
          <img src="./profil-foto.png" alt="" />
        </motion.div>
        <div className="about-info-section">
          <p className="text-stile">Hi, I`m</p>
          <h1 className="title gradient-text">Front-end Developer</h1>
          <p className="text-stile ps-text">
            Aspiring Frontend Developer with a strong foundation in React.js,
            JavaScript, and modern frontend technologies. Passionate about
            creating responsive, user-friendly web applications and continuously
            improving my skills. Experienced in Redux Toolkit, Material-UI, and
            API integration. Currently building real-world projects and
            enhancing my expertise in state management and performance
            optimization. Open to new opportunities in a dynamic team where I
            can contribute, learn, and grow as a professional frontend
            developer.
          </p>
          <div className="about-load">
            <button className="btn btn-about" onClick={cvDown}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
