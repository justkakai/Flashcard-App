import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { VscArrowLeft, VscReply } from "react-icons/vsc";
import ArrayContext from '../contexts/ArrayContext';
import { Card } from '../components/Card.styled';
import '../styles/Viewer.css';

const randomDeg = [-2, 4, -6, 2];

function CardViewer() {

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

    const [flipToBack, setFlipToBack] = useState(false);

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext);

    const flipCard = () => {
        console.log(cardArray);
        setFlipToBack(!flipToBack);
    }

    return (
        <motion.div className="viewer-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="card-container">
                {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                    <Card onClick={flipCard} key={new Date().getTime()} style={{
                        transform: `rotate(${randomDeg[Math.floor(Math.random() * randomDeg.length)]}deg)`,
                    }}>
                        <span className="flashcard-title">Flashcard!</span>
                        {flipToBack ? <span className='card-text'>{item.back}</span> : <span className='card-text'>{item.front}</span>}
                        {flipToBack ? <span></span> : <span className='view-answer-text'>Click to view answer!</span>}
                    </Card>
                ))}
            </div>
            <div className="nav-buttons-container-viewer">
                <button className="flip-button">Next Card!</button>
                <button className="shuffle-button">Shuffle Cards</button>
            </div>
            <div className='nav-buttons'>
                <button onClick={() => { navigate("/") }}><VscReply /> Go Home</button>
                <button onClick={() => { navigate("/card-editor") }}><VscArrowLeft /> Edit cards</button>
            </div>
        </motion.div>
    )
}

export default CardViewer;