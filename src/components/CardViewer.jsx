import React, { useState, useContext } from 'react';
import ArrayContext from '../contexts/ArrayContext';
import styled from 'styled-components';

const randomDeg = [-2, 4, -6, 2];

const Card = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25rem;
    width: 20rem;
    border: 5px solid black;
    background-color: red;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
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
                </Card>
            ))}

        </div>
    )
}

export default CardViewer;