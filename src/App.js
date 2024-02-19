import React, { useState } from 'react';
import "./App.css";
const data = require('./data.json');

const Flashcard = ({ word, meaning }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  return (
    <div
    className={`container card ${isFlipped ? 'flip' : ''}`}
    
    onClick={() => setIsFlipped(!isFlipped)}
  >
      <div className="front">
        <h3>{word}</h3>
      </div>
      <div className="back">
        <h3>{meaning}</h3>
      </div>
    </div>
  );
};


const App = () => {
  const myWord=data[Math.floor(Math.random() * data.length)];
  console.log(myWord)
  return (
    <div className="container">
      <div className='topic'>
      <h1>Flashcards</h1>
      </div>
        <Flashcard word={myWord.Word} meaning={myWord.Meaning} />
    </div>
  );
};

export default App;