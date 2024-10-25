import './serviceStyle.scss'
import { motion } from 'framer-motion';
const FlexDogService = () => {
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
                        className="block bl-sitting"
                      >
                        <img src="/dog.png" alt="home cleaning" />
                        <h3>Dog Sitting </h3>
                        <p>From €14.00/day</p>
                        <span>Reliable and attentive care for your dog while you`re away</span>
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
                        className="block bl-walking"
                      >
                        <img src="/walking.png" alt="walking" />
                        <h3>Dog Walking</h3>
                        <p>From €12.00/walk</p>
                        <span>Daily walks for your dog`s health</span>
                      </motion.div>
                      
                </>
               
       
    )
}

export default FlexDogService;