import React, { useState } from 'react';
import "./App.css";
const data = require('./data.json');

function lmao(){
  return data[Math.floor(Math.random() * data.length)];
}

const Flashcard = ({ word, meaning }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [height, setHeight] = useState('initial')


  return (
    <div
    className={`container card ${isFlipped ? 'flip' : ''}`}
    style={{ height: height }}
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
  return (
    <div className="container">
      <div className='topic'>
      <h1>Flashcards</h1>
      </div>
        <Flashcard key={lmao()} word={lmao().Word} meaning={lmao().Meaning} />
    </div>
  );
};

export default App;