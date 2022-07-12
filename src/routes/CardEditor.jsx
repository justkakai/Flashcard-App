import { useState, useContext } from 'react';
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
    const [todoEditing, setTodoEditing] = useState(null);
    const [itemToEditFront, setEditFront] = useState("");
    const [itemToEditBack, setEditBack] = useState("");

    const {cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, handleSubmit} = useContext(ArrayContext);

    const removeItem = function (index) {
        const newArray = [...cardArray];
        newArray.splice(index, 1);
        setCardToAdd(newArray);
    }

    const editItem = function (id) {
        const updatedArray = [...cardArray].map(item => {
            if (item.id === id) {
                item.front = itemToEditFront;
                item.back = itemToEditBack;
            }
            return item;
        })
        setCardToAdd(updatedArray);
        setTodoEditing(null);
        setEditFront("");
        setEditBack("");
    }

    return (
        <motion.div className="editor-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="toggle-list" onClick={() => setViewList(!viewList)}>{viewList ? "Collapse list" : "Display list of questions"}</motion.button>

            <ul style={viewList ? { height: "30rem" } : { height: "0", padding: "0" }}>
                {cardArray.map((item, index) => (
                    <li key={item.id} className="card-display">
                        <span>{index + 1}.</span>
                        {todoEditing === item.id ?
                            <input type="text" onChange={(e) => setEditFront(e.target.value)} value={itemToEditFront} placeholder={item.front}></input>
                            :
                            <span><strong>Question:</strong> {item.front}</span>
                        }
                        {todoEditing === item.id ?
                            <input type="text" onChange={(e) => setEditBack(e.target.value)} value={itemToEditBack} placeholder={item.back}></input>
                            :
                            <span><strong>Answer:</strong> {item.back}</span>
                        }
                        <div className="list-buttons-container">
                            {todoEditing === item.id ?
                                <button className='done-editing-button' onClick={() => editItem(item.id)}>Done editing!</button>
                                :
                                <button onClick={() => setTodoEditing(item.id)}>Edit card</button>
                            }
                            <button onClick={() => removeItem(index)}>Delete card</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="add-card-section">
                <input value={cardFront} onChange={(e) => setFrontOfCard(e.target.value)} type="text" placeholder="Front of card (question)" />
                <input value={cardBack} onChange={(e) => setBackOfCard(e.target.value)} type="text" placeholder="Back of card (answer)" />
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







