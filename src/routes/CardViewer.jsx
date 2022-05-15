import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrayContext from '../contexts/ArrayContext';
import styled from 'styled-components';

const randomDeg = [-2, 4, -6, 2];

const Card = styled.div`
    position: absolute;
    top: 3em;
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
    // -webkit-backface-visibility: hidden;
    -webkit-transform-origin: 50%  51%;
`

function CardViewer() {

    let navigate = useNavigate();

    const [flipToBack, setFlipToBack] = useState(false);

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext);

    const flipCard = () => {
        setFlipToBack(!flipToBack);
    }

    return (
        <div className="viewer-section">
            <div className="card-container">
                {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                    <Card onClick={flipCard} key={new Date().getTime()} style={{
                        transform: `rotate(${randomDeg[Math.floor(Math.random() * randomDeg.length)]}deg)`,
                    }}>
                        {flipToBack ? item.back : item.front}
                        {flipToBack ? <span></span> : <span>Click to view answer!</span>}
                    </Card>
                ))}
            </div>
            <div className="nav-buttons-container-viewer">
                <button className="flip-button">Next Card!</button>
                <button className="shuffle-button">Shuffle Cards</button>
            </div>
            <div>
                <button onClick={() => { navigate("/") }}>Go Home</button>
                <button onClick={() => { navigate("/card-editor") }}>Edit cards</button>
            </div>
        </div>
    )
}

export default CardViewer;