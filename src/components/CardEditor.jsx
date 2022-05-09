import React, { useContext } from 'react';
import ArrayContext from '../contexts/ArrayContext';

function CardEditor() {

    const [cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, handleSubmit] = useContext(ArrayContext)

    return (
        <div className="editor-section">
            <ul>
                {cardArray.map((item, index) => (
                    <li key={item.id} className="card-display">
                        <span>{item.front}</span>
                        <span>{item.back}</span>
                        <button>Delete card</button>
                    </li>
                ))}
            </ul>
            <div className="add-card-section">
                <input value={cardFront} onChange={(e) => setFrontOfCard(e.target.value)} type="text" placeholder="Front of card" />
                <input value={cardBack} onChange={(e) => setBackOfCard(e.target.value)} type="text" placeholder="Back of card" />
                <button onClick={handleSubmit}>Add Card</button>
            </div>
        </div>
    )
}

export default CardEditor;