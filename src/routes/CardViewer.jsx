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

    const { cardArray, setCardToAdd } = useContext(ArrayContext);

    const flipCard = () => {
        console.log(cardArray);
        setFlipToBack(!flipToBack);
    }

    const nextCard = () => {
        const newArray = [...cardArray];
        let spliced = newArray.splice(newArray.length - 1, 1);
        // splice returns an array, which is why we have to retrieve the item from the array using its index (0)
        newArray.unshift(spliced[0]);
        setCardToAdd(newArray);
        setFlipToBack(false);
    }

    const previousCard = () => {
        const newArray = [...cardArray];
        let shifted = newArray.shift();
        newArray.push(shifted);
        setCardToAdd(newArray);
        setFlipToBack(false);
    }

    return (
        <motion.div className="viewer-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="cards-and-navigation">
                {
                    window.innerWidth > 1350 ?
                        <>
                            <button className="previous-button" onClick={previousCard}>Previous Card!</button>
                            <div className="card-container">
                                {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                                    <Card onClick={flipCard} key={new Date().getTime()} style={{
                                        transform: `rotate(${randomDeg[index]}deg)`,
                                    }}>
                                        <span className="flashcard-title">Flashcard!</span>
                                        {flipToBack ? <span className='card-text'>{item.back}</span> : <span className='card-text'>{item.front}</span>}
                                        {flipToBack ? <span></span> : <span className='view-answer-text'>Click to view answer!</span>}
                                    </Card>
                                ))}
                            </div>
                            <button className="next-button" onClick={nextCard}>Next Card!</button>
                        </>
                        :
                        <>
                            <div className="card-container">
                                {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                                    <Card onClick={flipCard} key={new Date().getTime()} style={{
                                        transform: `rotate(${randomDeg[index]}deg)`,
                                    }}>
                                        <span className="flashcard-title">Flashcard!</span>
                                        {flipToBack ? <span className='card-text'>{item.back}</span> : <span className='card-text'>{item.front}</span>}
                                        {flipToBack ? <span></span> : <span className='view-answer-text'>Click to view answer!</span>}
                                    </Card>
                                ))}
                            </div>
                            <div className="buttons-container">
                                <button className="previous-button" onClick={previousCard}>Previous Card!</button>
                                <button className="next-button" onClick={nextCard}>Next Card!</button>
                            </div>
                        </>
                }

            </div>
            <div className='nav-buttons'>
                <button onClick={() => { navigate("/") }}><VscReply /> Go Home</button>
                <button onClick={() => { navigate("/card-editor") }}><VscArrowLeft /> Edit cards</button>
            </div>
        </motion.div>
    )
}

export default CardViewer;