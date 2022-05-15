import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrayContext from '../contexts/ArrayContext';

function CardEditor() {

    let navigate = useNavigate();

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit] = useContext(ArrayContext)

    return (
        <div className="editor-section">
            <ul>
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
            <div>
            <button onClick={() => {navigate("/")}}>Go Home</button>
            <button onClick={() => {navigate("/card-viewer")}}>View cards</button>
            </div>
        </div>
    )
}

export default CardEditor;