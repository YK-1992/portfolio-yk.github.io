import './serviceStyle.scss'
import { motion } from 'framer-motion';
const FixService = () => {
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
                        className="block bl-paint"
                      >
                        <img src="/paint-roller.png" alt="paint" />
                        <h3>Painting Services</h3>
                        <p>From €70.00</p>
                        <span>Professional painting of your walls</span>
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
                        className="block bl-furniture"
                      >
                        <img src="/drill.png" alt="furniture" />
                        <h3>Furniture Assembly</h3>
                        <p>From €11.00/h</p>
                        <span>Professional assembly of your furniture</span>
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
                        className="block bl-plumbing"
                      >
                        <img src="/plumbing.png" alt="plumbing" />
                        <h3>Plumbing Services</h3>
                        <p>From €90.00</p>
                        <span>Professional plumbing services for your House  </span>
                      </motion.div>
                </>
               
    )
}

export default FixService;