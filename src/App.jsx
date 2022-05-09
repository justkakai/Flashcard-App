/* 
Flashcard App
Create a flashcard app that consists of two parts: a card editor, where you create and delete cards, and a card viewer, where you can view the front and the back of the cards. In addition, each part has a button that lets you switch to the other part. Clicking on a card in the card viewer flips the card. The card editor should have a header, a table with a row for each card, and 3 columns: one for the front of the cards, one for the back of the cards, and one for a button to delete the card. It should also have 2 input fields (one for entering text for the front of the card and one for entering text for the back of the card) and an "Add Card" button that adds the card to the list of cards.

Bonus
For each card, add a button to edit the card.
*/

import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pick your poison</h1>
      <CardEditor />
      <CardViewer />
    </div>
  );
}

export default App;
