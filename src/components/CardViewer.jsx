import React, { useState, useContext } from 'react';
import ArrayContext from '../contexts/ArrayContext';
import styled from 'styled-components';

const randomDeg = [-2, 4, -6, 2];

const Card = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 25rem;
    width: 20rem;
    outline: 1px solid transparent;
    border: 5px solid black;
    border-radius: 10px;
    background-color: purple;
    -webkit-backface-visibility: hidden;
    -webkit-transform-origin: 50%  51%;
`

function CardViewer() {

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext)

    return (
        <div className="viewer-section">
            {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                <Card key={new Date().getTime()} style={{
                    transform: `rotate(${randomDeg[Math.floor(Math.random() * randomDeg.length)]}deg)`,
                }}>
                    {item.front}
                    <span>Click to view answer!</span>
                </Card>
            ))}
            <div className="buttons-container">
                <button className="flip-button">Next Card!</button>
                <button className="shuffle-button">Shuffle Cards</button>
            </div>

        </div>
    )
}

export default CardViewer;