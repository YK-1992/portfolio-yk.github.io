import { motion } from 'framer-motion';
import './serviceStyle.scss'
const GardService = () => {
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
                        className="block bl-gard"
                      >
                        <img src="/trimming.png" alt="gard" />
                        <h3>Gardening Services</h3>
                        <p>From €16.90/ h</p>
                        <span>Gardening Services</span>
                      </motion.div>
                </>
               
       
    )
}

export default GardService;