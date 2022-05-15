import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrayContext from '../contexts/ArrayContext';
import '../styles/Editor.css';

function CardEditor() {

    let navigate = useNavigate();

    const [viewList, setViewList] = useState(false);

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext)

    return (
        <div className="editor-section">
            <button className="toggle-list" onClick={() => setViewList(!viewList)}>Toggle questions list</button>
            
            <ul style={ viewList ? {height: "30rem"} : {height: "0", padding: "0"}}>
                {cardArray.map((item) => (
                    <li key={item.id} className="card-display">
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
                <button onClick={() => { navigate("/") }}>Go Home</button>
                <button onClick={() => { navigate("/card-viewer") }}>View cards</button>
            </div>
        </div>
    )
}

export default CardEditor;