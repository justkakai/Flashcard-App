import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './routes/Home';
import CardEditor from './routes/CardEditor';
import CardViewer from './routes/CardViewer';
import ArrayContext from './contexts/ArrayContext';
import './App.css';

function App() {

  const location = useLocation();

  const initialArray = JSON.parse(localStorage.getItem('cardArray')) || [];

  const [cardArray, setCardToAdd] = useState([...initialArray]);
  const [cardFront, setFrontOfCard] = useState('');
  const [cardBack, setBackOfCard] = useState('');
  const [zIndex, setZIndex] = useState(-2);

  useEffect(() => {
    localStorage.setItem('cardArray', JSON.stringify(cardArray));
  }, [cardArray])

  const handleSubmit = () => {
    setCardToAdd([...cardArray].concat(
      {
        id: new Date().getTime(), 
        zIndex: zIndex, 
        front: cardFront, 
        back: cardBack
      }
    ));
    setFrontOfCard('');
    setBackOfCard('');
  }

  const providerValues = { cardArray, setCardToAdd, cardFront, setFrontOfCard, cardBack, setBackOfCard, zIndex, setZIndex, handleSubmit };

  return (
    <ArrayContext.Provider value={providerValues}>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="card-editor" element={<CardEditor />} />
            <Route path="card-viewer" element={<CardViewer />} />
            <Route path="Flashcard-App" element={<Navigate to="/" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AnimatePresence>
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
