import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { MdMode } from "react-icons/md";
import '../styles/Home.css';

export default function Home() {

    let navigate = useNavigate();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.5 }
        },
        // exit: {
        //     y: "-100%",
        //     transition: { ease: "easeInOut"}
        // }
    }

    return (
        <motion.div className='home-section'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>Where to?</h1>
            <div className="button-container">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => { navigate("/card-editor") }}>Card Editor <MdMode /></motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => { navigate("/card-viewer") }}>Card Viewer <AiFillEye /></motion.button>
            </div>
        </motion.div>
    )
}