import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrayContext from '../contexts/ArrayContext';
import styled from 'styled-components';
import '../styles/Viewer.css';

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
//border-radius: 10px;
-webkit-transform-origin: 50%  51%;
// -webkit-backface-visibility: hidden;

/* From https://css.glass */
background: purple;
border-radius: 16px;
//box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//backdrop-filter: blur(5px);
//-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
`

function CardViewer() {

    let navigate = useNavigate();

    const [flipToBack, setFlipToBack] = useState(false);

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext);

    const flipCard = () => {
        console.log(cardArray);
        setFlipToBack(!flipToBack);
    }

    return (
        <div className="viewer-section">
            <div className="card-container">
                {cardArray.slice(Math.max(cardArray.length - 5, 0)).map((item, index) => (
                    <Card onClick={flipCard} key={new Date().getTime()} style={{
                        transform: `rotate(${randomDeg[Math.floor(Math.random() * randomDeg.length)]}deg)`,
                    }}>
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
                <button onClick={() => { navigate("/") }}>Go Home</button>
                <button onClick={() => { navigate("/card-editor") }}>Edit cards</button>
            </div>
        </div>
    )
}

export default CardViewer;