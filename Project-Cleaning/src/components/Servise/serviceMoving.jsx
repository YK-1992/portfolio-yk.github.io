import { motion } from 'framer-motion';
import './serviceStyle.scss'


const MovingService = () => {
    return(
      <>

      <motion.div
                      initial={{ opacity: 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "1px 1px 13px 2px rgb(176, 68, 55)",
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      whileInView={{ opacity: 1 }}
                      className="block bl-moving"
                    >
                      <img src="/boxes.png" alt="boxes" />
                      <h3>Moving</h3>
                      <p>From €100</p>
                      <span>Your Move handled with ease!</span>
                    </motion.div>
                  
              </>
             
    )
}

export default MovingService;