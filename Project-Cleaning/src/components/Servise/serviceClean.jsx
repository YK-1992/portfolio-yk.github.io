import './serviceStyle.scss'
import { motion } from 'framer-motion';
const CleanService = () => {
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
                className="block bl-home"
              >
                <img src="/icon-clean/cleaning home.png" alt="home cleaning" />
                <h3>Home Cleaning</h3>
                <p>From €16.90/h</p>
                <span>Find the ideal cleaner for your home</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "1px 1px 13px 2px rgb(176, 68, 55)",
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="block bl-deep"
              >
                <img src="/icon-clean/clean-city.png" alt="deep cleaning" />
                <h3>Deep Cleaning</h3>
                <p>From €200.00</p>
                <span>Professional deep cleaning for your home</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "1px 1px 13px 2px rgb(176, 68, 55)",
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                className="block bl-window"
              >
                <img src="/icon-clean/window.png" alt="window cleaning" />
                <h3>Window Cleaning</h3>
                <p>From €75.00</p>
                <span>Professional Window Cleaning inside and outside</span>
              </motion.div>
        </>
       
    )
}

export default CleanService;