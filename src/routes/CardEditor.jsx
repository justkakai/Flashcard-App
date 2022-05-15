import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import ArrayContext from '../contexts/ArrayContext';
import '../styles/Editor.css';

function CardEditor() {

    let navigate = useNavigate();

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.5 }
        },
    }

    const [viewList, setViewList] = useState(false);

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext);

    return (
        <motion.div className="editor-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="toggle-list" onClick={() => setViewList(!viewList)}>Toggle questions list</motion.button>

            <ul style={viewList ? { height: "30rem" } : { height: "0", padding: "0" }}>
                {cardArray.map((item, index) => (
                    <li key={item.id} className="card-display">
                        <span>{index + 1}.</span>
                        <span><strong>Front:</strong> {item.front}</span>
                        <span><strong>Back:</strong> {item.back}</span>
                        <button>Delete card</button>
                    </li>
                ))}
            </ul>
            <div className="add-card-section">
                <input value={cardFront} onChange={(e) => setFrontOfCard(e.target.value)} type="text" placeholder="Front of card" />
                <input value={cardBack} onChange={(e) => setBackOfCard(e.target.value)} type="text" placeholder="Back of card" />
                <button onClick={handleSubmit}>Add Card</button>
            </div>
            <div className='nav-buttons'>
                <button onClick={() => { navigate("/") }}><VscArrowLeft /> Go Home</button>
                <button onClick={() => { navigate("/card-viewer") }}>View cards <VscArrowRight /></button>
            </div>
        </motion.div>
    )
}

export default CardEditor;